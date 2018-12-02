import axios from "axios";
export default {
	handleGetImg({commit}) {
		
			axios({
				method: "get",
				url:"/mp/discounts/getalldiscounts",
			}).then((data) => {
				commit("handleGetImg", data.data)
				console.log(data)
			})
		
        //http://jianglianglong.qfjava.cn:8080/mp
	},
    handleAddGoodsCart({commit},params){
        console.log(params);
        axios({
				method: "post",
				url:"/mp/cart/addgoods",
                data:{
                    goodsId:params,
                    num:1
                }
			}).then((data) => {
				console.log(data)
			})
    }
}
