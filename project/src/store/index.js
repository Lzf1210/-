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
const key = 'user'
const isLogin = 'isLogin'
const state = {
	user: null,
	isLogin: '0'
}
const mutations = {
	$_setLogin (state, value) {
		state.isLogin = value
		localStorage.setItem(isLogin, value)
	  },
	  $_setStorage (state, value) {
		state.user = value
		localStorage.setItem(key, JSON.stringify(value))
	  },
	  $_removeStorage (state) {
		state.user = null
		localStorage.removeItem(key)
	  }
}
const actions = {
	
}
const getters = {
	getStorage: function (state) {
		if (!state.user) {
		  state.user = JSON.parse(localStorage.getItem(key))
		  state.isLogin = localStorage.getItem(isLogin)
		}
		return state.user
	  }
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
		mine,
		goodsdetail,
	}
})
export default store;
