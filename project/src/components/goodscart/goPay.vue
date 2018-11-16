<template>
	<div>
	<div class="kong"></div>
	<div class="goPay">
		<p>
			<label>&nbsp;订单号&nbsp;&nbsp;:</label>
			<input type="text">
		</p>
		<p>
			<label>支付金额:</label>
			<input type="text">
		</p>
		<p>
			<label>商品介绍:</label>
			<input type="text">
		</p>
		<button>确认支付</button>
			<img src="../../../static/img/back.png" @click="handleBack()">
	</div>
	
	</div>
</template>

<script>
	export default{
		methods:{
		handleBack(){
			this.$router.back();
		}
		}
	}
</script>

<style>
.top{
	height: 100%;
	width: 100%;
}
	

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
	background: url(../../../static/goodscart/33.png) center center;
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
}
.goPay>img{
	position: fixed;
	left: 1rem;
	top: 0.5rem;
}
</style>