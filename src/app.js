import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import NProgress from 'vue-nprogress'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'
import '@/styles/index.scss'
import Mgr from '@/services/SecurityService'

Vue.router = router
Vue.use(VueAxios, axios)

// Enable devtools
Vue.config.devtools = true

sync(store, router)

Vue.use(NProgress)
const nprogress = new NProgress({parent: '.nprogress-container'})
const mgr = new Mgr()

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    mgr.getRole().then(
      sucess => {
        if (to.meta.role === sucess) {
          next()
        } else {
          next('/accessdenied')
        }
      },
      err => {
        console.log(err)
      }
    )
  } else {
    next()
  }
})

function findMenuParent (tag) {
  let tagCurrent = []
  tagCurrent.push(tag)
  return tagCurrent
}

router.afterEach((to, from) => {
  setTimeout(() => {
    const tag = store.getters.tag
    store.commit('SET_TAG_CURRENT', findMenuParent(tag))
  }, 0)
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  router,
  store,
  nprogress,
  ...App
})

export { app, router, store }
