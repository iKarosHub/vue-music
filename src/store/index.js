import Vue from 'vue'
import Vuex from 'vuex'
import config from './config/index'
import song from './song/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { config, song }
})
