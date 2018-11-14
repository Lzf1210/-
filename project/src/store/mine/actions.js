import axios from "axios";
export default {

    handleGetGoods({commit}){
		axios({
			methods:"get",
			url:"http://localhost:3000/goods"
		}).then((data)=>{
			data.data.filter((item)=>{
				item.flag=false;
			})
			commit("handleGetGoods",data.data)
		});
    }
}