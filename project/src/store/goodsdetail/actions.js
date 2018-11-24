import axios from "axios";
export default {
	handleGetDetail({commit},params) {
			axios({
				method:"post",
				url:"http://localhost:3000/details?id="+params,
				}).then((data)=>{
					commit("handleGetDetail",data.data)
                    console.log(data.data)
				})
		

	},
}