import Vue from "vue"
import Vuex from "vuex"
import home from "./home"
import classify from "./classify"
import discounts from "./discounts"
import goodscart from "./goodscart"
import mine from "./mine"
import goodsdetail from './goodsdetail'

import axios from "axios"


Vue.use(Vuex)

const state = {
	
}
const mutations = {
	
}
const actions = {
	
}
const getters = {

}

const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules: {
		home,
		classify,
		discounts,
		goodscart,
        goodsdetail,
		mine
	}
})
export default store;
