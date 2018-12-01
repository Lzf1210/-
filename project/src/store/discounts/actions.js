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
	}
}
