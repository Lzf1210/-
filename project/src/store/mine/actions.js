import axios from "axios";
export default {

	handleGetMsg({commit}){
		axios({
			methods:"get",
			url:"/mp/user/loginuser",
		}).then((data)=>{
			console.log(data.data)
			commit("handleGetMsg",data.data)
		});
    }
}
