import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication'
import CartData from './modules/Cart'
Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    error: null,
    loading: false,
    information: null
  },
  getters: {
    getError(state) {
      return state.error;
    },
    getInformation(state) {
      return state.information;
    },
    getLoading(state) {
      return state.loading;
    },
  },
  mutations: {
    setInformation(state, payload) {
      state.information = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    }
  },
  actions: {},
  modules: {
    authentication,
    CartData
  }
})

