import Vue from 'vue'
import Vuex from 'vuex'
import appModule from './appModule'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        a: appModule
    }
})

export default store