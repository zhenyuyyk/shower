import Vue from 'vue'
import Vuex from 'vuex'

import persistedState from 'vuex-persistedstate'  //vuex状态持久化

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: ""
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo
    }
  },
  mutations: {
    setUserInfo(state, text) {
      state.userInfo = text;
    }
  },
  actions: {
    setUserInfoFun(context, text) {
      context.commit('setUserInfo', text);
    }
  },
  modules: {},
  plugins: [persistedState({storage: window.sessionStorage})]
})
