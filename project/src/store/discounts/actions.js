import axios from "axios";
export default {
	handleGetImg({commit},params) {
		
			axios({
				method: "get",
				url: "http://localhost:3000/imgs?_page=" + params + "&_limit=4",
			}).then((data) => {
				commit("handleGetImg", data.data)
                // console.log(data.data)
			})
		

	}
}
