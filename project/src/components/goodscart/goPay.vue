<template>
	<div>
	<div class="kong"></div>
	<form action="http://ceshi.chenjunbo.xin/payment/weixinpay" method="get" class="goPay">
		<p>
			<label>&nbsp;订单号&nbsp;&nbsp;:</label>
			<input type="text" v-model="goodsGetOrderId">
		</p>
		<p>
			<label>支付金额:</label>
			<input type="text" value="￥1.00">
		</p>
		<p>
			<label>商品介绍:</label>
			<input type="text" value="美烹">
		</p>
		
		<div class="buut">
			<img src="http://qianfeng1.qfjava.cn:8502/mp/static/img/back.png" @click="handleBack()">
		</div>
		<button>确认支付</button>
	</form>
	
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		
		created() {
			this.getOrderId()
		},
		computed:{
			...Vuex.mapGetters({
				goodsCount:"goodscart/goodsCount"
			}),
			...Vuex.mapState({
				goodsGetOrderId:state=>state.goodscart.goodsGetOrderId
			})
		},
		methods:{
			handleBack(){
				this.$router.back();
			},
			...Vuex.mapActions({
					getOrderId:"goodscart/getOrderId"
				
			}),
		
		},
		filters:{
			"price":(val)=>{
				return "￥" + val
			}
		}
	}
</script>

<style>


.kong{
	width:100%;
	height: 0.4rem;
	background: white;
}
.goPay{
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0.4rem;
	padding-left: 1.8rem;
	padding-right: 1.4rem;
	overflow: hidden;
	z-index: 5;
	background: url(http://qianfeng1.qfjava.cn:8502/mp/static/goodscart/33.png) center center;
}	
.goPay>p{
	width: 100%;
	height: 1.1rem;
	font-size: 14px;
}
.goPay>p:nth-of-type(1){
	margin-top: 3rem;
}
.goPay>button{
	width: 3.4rem;
	height: 0.88rem;
	background: #3E2020;
	font-size: 16px;
	color: #FFFFFF;
	text-align: center;
	line-height:0.88rem;
	margin-top: 0.5rem;
	border: none;
}
.buut{
	width: 0.5rem;
	height: 0.5rem;
	background: white;
	position: fixed;
	left: 0.7rem;
	top: 0.5rem;
	border-radius: 50%;
	padding-top: 0.05rem;
	padding-left: 0.1rem;
}
.goPay>img{
	
}
</style>