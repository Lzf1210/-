import Vue from "Vue"
import Vuex from "Vuex"
import home from "./home"
import classify from "./classify"
import discounts from "./discounts"
import goodscart from "./goodscart"
import mine from "./mine"
Vue.use(Vuex)

const state = {

}
const mutations = {

}
const actions = {

}
const getters = {

}

const Store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        home,
        classify,
        discounts,
        goodscart,
        mine
    }
})
export default Store;