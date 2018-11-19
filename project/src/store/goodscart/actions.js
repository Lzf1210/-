import axios from "axios";
import state from './state'
export default {
    handleGetGoods({commit}){
		axios({
			methods:"get",
			url:"http://localhost:3000/details"
		}).then((data)=>{
// 			data.data.filter((item)=>{
// 				item.flag=false;
// 			})
			// console.log(data.data)
			commit("handleGetGoods",data.data)
		});
	},
	handleGoodsDel({commit}){
		for(var i=0;i< state.goodsList.length;i++){
			if(state.goodsList[i].flag){
				state.list.push(state.goodsList[i].id);
				console.log(state.list)
			}
		}
		for(var a = 0;a < state.list.length;a++){
			axios({
				method:"delete",
				url:"http://localhost:3000/details/"+state.list[a],
				
			}).then((data)=>{
				
				axios({
					methods:"get",
					url:"http://localhost:3000/details"
				}).then((data)=>{
					data.data.filter((item)=>{
						item.flag=false;
					})
					commit("handleGetGoods",data.data)
				});
				
				
			});
 		}

	}
	
}