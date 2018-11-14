export default {
	handleGetImg(state,params) {
		// state.imgList = params;
        state.imgList =[...state.imgList,...params]
	}
}
