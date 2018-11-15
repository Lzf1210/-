export default {
	handleGetDetail(state,params) {
        state.goodsDetailList = [...state.goodsDetailList,...params];
	},
    
}