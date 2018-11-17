import axios from "axios";
export default {
	handleGetDetail({commit},params) {
		
			axios({
				method:"get",
				url:"http://localhost:3000/details?id="+params,
				}).then((data)=>{
					commit("handleGetDetail",data.data)
				})
		

	}
}