import axios from "axios";
export default {
	handleGetImg({commit}) {
		
			axios({
				method: "get",
				url:"/mp/discounts/getalldiscounts",
			}).then((data) => {
				commit("handleGetImg", data.data)
				console.log(data.data)
			})
		
        //http://jianglianglong.qfjava.cn:8080/mp
	},
    // handleAddGoodsCart({commit},params){
    //     console.log(params);
    //     axios({
	// 			method: "post",
	// 			url:"/mp/discounts/buydiscounts?id="+params,
	// 		}).then((data) => {
	// 			console.log(data.data)
	// 		})
	// },
}
