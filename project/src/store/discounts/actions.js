import axios from "axios";
export default {
<<<<<<< HEAD
	handleGetImg({commit},params) {
		
			axios({
				method: "get",
				url: "http://localhost:3000/imgs?_page=" + params + "&_limit=4",
			}).then((data) => {
				commit("handleGetImg", data.data)
                console.log(data.data)
			})
		

	}
}
=======
    handleGetImg({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/imgs"
        }).then((data)=>{
            console.log(data);
            commit("handleGetImg",data.data)
        })
    },
}
>>>>>>> hjq
