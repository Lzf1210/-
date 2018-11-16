import axios from "axios";
export default {
	handleGetDetail({commit},params) {
			axios({
				method: "get",
				url: "http://localhost:3000/details?id="+params,
			}).then((data) => {
                console.log(data.data)
				commit("handleGetDetail", data.data)

			})
		

	},
}