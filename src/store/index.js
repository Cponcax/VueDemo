import Vue from 'vue'
import Vuex from 'vuex'
import pkg from 'package'
import * as actions from './actions'
import * as getters from './getters'

import app from './modules/app'
import menus from './modules/menus'
import tags from './modules/tags'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  actions,
  getters,
  modules: {
    app,
    tags,
    menus
  },
  state: {
    pkg
  },
  mutations: {
  }
})

export default store
