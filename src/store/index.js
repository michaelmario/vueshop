import Vue from 'vue'
import Vuex from 'vuex'
import dataUser from './modules/data'
Vue.use(Vuex)



export default new Vuex.Store({
  
    modules: {
      dataUser
  }
})
