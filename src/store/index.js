import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/Front-end-home'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
      home  
    },
    strict: true,
    plugins: [createLogger()]
})