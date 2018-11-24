import state from "./state"
export default {
	handleGetDetail(state,params) {
        state.goodsDetailList = [...state.goodsDetailList,...params];
	},
    
}