import axios from "axios";
export default {
	handleGetImg({commit},params) {
		if(params<4){
			axios({
				method: "get",
				url: "http://localhost:3000/imgs?_page=" + params + "&_limit=4",
			}).then((data) => {
				commit("handleGetImg", data.data)
                console.log(data.data)
			})
		
        }    
	}
}
