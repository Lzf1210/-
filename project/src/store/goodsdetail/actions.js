import axios from "axios";
export default {
	handleGetDetail({commit},params) {
		console.log(params)
			axios({
				method:"get",
				url:"/mp/goods/searchgoodsbyid?goodsId="+params,
				}).then((data)=>{
					commit("handleGetDetail",data.data)
					
				})
	},
}