import axios from "axios";
export default {
	handleGetDetail({commit},params) {
		
			axios({
				method: "get",
				url: "",
			}).then((data) => {
				commit("handleGetImg", data)

			})
		

	}
}