import axios from "axios";
export default {
	handleAllGoodsg({commit}){
		axios({
			methods:"get",
			url:"/mp/order/searchorder",
		}).then((data)=>{
			console.log(data.data)
				// commit("handleAllGoodsg",data.data)
			
			
		});
	},
	handleGetMsg({commit}){
		axios({
			methods:"get",
			url:"/mp/user/loginuser",
		}).then((data)=>{
			
				commit("handleGetMsg",data.data)
			
			
		});
	},
	handlePaymentGoods({commit}){
		axios({
			methods:"get",
			url:"/mp/order/myorder?status=1",
		}).then((data)=>{
			console.log(data.data[0])
				commit("handlePaymentGoods",data.data[0])
			
			
		});
	},
	handleReceivingGoods({commit}){
		axios({
			methods:"get",
			url:"/mp/order/myorder?status=2",
		}).then((data)=>{
			
			
				commit("handleReceivingGoods",data.data[0])
			
			
		});
	},
	handleShipmentsGoods({commit}){
		axios({
			methods:"get",
			url:"/mp/order/myorder?status=3",
		}).then((data)=>{
			
			
				commit("handleShipmentsGoods",data.data[0])
			
			
		});
	},
	handleEvaluateGoods({commit}){
		axios({
			methods:"get",
			url:"/mp/order/myorder?status=2",
		}).then((data)=>{
			
				commit("handleEvaluateGoods",data.data[0])
			
			
		});
	}
}
