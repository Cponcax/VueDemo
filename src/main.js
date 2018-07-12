// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NProgress from 'vue-nprogress'

Vue.config.productionTip = false

Vue.use(NProgress)
/* eslint-disable no-new */

const nprogress = new NProgress({parent: '.nprogress-container'})

new Vue({
  el: '#app',
  router,
  components: {App, nprogress},
  template: '<App/>'
})
