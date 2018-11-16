export default {
	handleGetDetail(state,params) {
        state.goodsDetailList = [...state.goodsDetailList,...params];
        console.log(params)
	},
    
}