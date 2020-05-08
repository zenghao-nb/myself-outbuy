import Vue from 'vue'
import Vuex from 'vuex'
import zh from './zh/zhStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      isLogin:false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    zh
  }
})
