import Vue from 'vue'
import Vuex from 'vuex'
import dataUser from './modules/data'
import CartData from './modules/Cart'
Vue.use(Vuex)



export default new Vuex.Store({
  
    modules: {
      dataUser,
      CartData
  }
})
