import Vue from "vue"
import Vuex from "vuex"
import home from "./home"
import classify from "./classify"
import discounts from "./discounts"
import goodscart from "./goodscart"
import mine from "./mine"
<<<<<<< HEAD
import axios from "axios";
=======
import axios from "axios"
>>>>>>> hjq
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
		mine
	}
})
export default store;
