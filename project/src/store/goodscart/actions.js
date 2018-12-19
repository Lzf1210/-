import axios from "axios";
import state from './state'
export default {
    handleGetGoods({commit}){
		axios({
			method:"get",
			url:"/mp/cart/findallgoods"
		}).then((data)=>{
			console.log(data.data)
			data.data.filter((item)=>{
				item.flag=false;
			})
						
			commit("handleGetGoods",data.data)
		});
	},
	handleGoodsDel({commit}){
		for(var i=0;i< state.goodsList.length;i++){
			if(state.goodsList[i].flag){
				state.list.push(state.goodsList[i].id);
				
			}
		}
		for(var a = 0;a < state.list.length;a++){
			axios({
				method:"delete",
				url:"/mp/cart/findallgoods"+state.list[a],
				
			}).then((data)=>{
				
				axios({
					methods:"get",
					url:"/mp/cart/findallgoods"
				}).then((data)=>{
					data.data.filter((item)=>{
						item.flag=false;
					})
					commit("handleGetGoods",data.data)
				});
				
				
			});
 		}

	},
	handleOrder({commit}) {
		axios({
			method:"get",
			url:"/mp/address/searchdefaultaddress",
			}).then((data)=>{
				console.log(data.data)
				commit("handleOrder",data.data)
				
			})

	},
	handleDiscount({commit}){
		axios({
			method:"get",
			url:"/mp/order/searchorder",
			}).then((data)=>{
				console.log(data.data)
				commit("handleDiscount",data.data)
				
			})
	},
	handlePrice({commit}){
		axios({
			method:"get",
			url:"/mp/order/submitorder",
			}).then((data)=>{
				console.log(data.data)
				commit("handlePrice",data.data)
				
			})
	},
	getOrderId({commit}){
		axios({
			method:"get",
			url:"/mp/order/getorderid",
			}).then((data)=>{
				console.log(data.data)
				commit("getOrderId",data.data)
				
			})
	}
	
}