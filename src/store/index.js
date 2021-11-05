import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
axios.defaults.baseURL = 'https://fakestoreapi.com/products';
const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}
Vue.prototype.$axios = axios;

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
