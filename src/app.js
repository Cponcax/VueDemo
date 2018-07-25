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
import { TOGGLE_SIDEBAR } from 'vuex-store/mutation-types'

Vue.router = router
Vue.use(VueAxios, axios)

// Enable devtools
Vue.config.devtools = true

sync(store, router)

Vue.use(NProgress)
const nprogress = new NProgress({parent: '.nprogress-container'})
const mgr = new Mgr()

const { state } = store

router.beforeEach((to, from, next) => {
  if (state.app.device.isMobile && state.app.sidebar.opened) {
    store.commit(TOGGLE_SIDEBAR, false)
  }
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
