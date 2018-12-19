<template>
	
		<div class="pay" v-show="show">
			<div class="payhead">
				<a>
				<img src="http://qianfeng1.qfjava.cn:8502/mp/static/img/fanhui.png" @click="handleout()"/>
				</a>
				<span>确认付款</span>
			</div>
			<div class="paycenter">
				&yen;{{goodsPrice.price}}
			</div>
			<router-link to="/goPay">去支付</router-link>
		</div>
   
</template>

<script>
	import Vuex from "vuex";
	import axios from "axios"
	export default{
		data(){
			return{
				show:true
			}
		},
		created(){
			this.handlePrice();
		},
		methods:{
			handleout(){
				this.show = false;
				this.observer.$emit("change3",false)
			},
			...Vuex.mapActions({
				handlePrice:"goodscart/handlePrice",
				
			}),
			},
		computed:{
			...Vuex.mapGetters({
				goodsCount:"goodscart/goodsCount"
			}),
			...Vuex.mapState({
				goodsPrice:state=>state.goodscart.goodsPrice,
			})
		},
		
}
</script>

<style scoped>
.pay{
	width: 100%;
	height: 6.28rem;
	background:white;
	z-index: 5;
	position: fixed;
	bottom: 0;
	left: 0;
	
}
.pay>.payhead{
	width: 100%;
	height: 0.88rem;
	border-bottom: 1px solid #E1E1E1;
}
.pay>.payhead>a>img{
	margin-left:0.32rem;
	padding-top: 0.20rem;
	display: inline-block;
}
.pay>.payhead>span{
	margin-left: 2.33rem;
	font-size: 16px;
	color: #222222;
}
.pay>.paycenter{
	width:100%;
	height:3.0rem;
	text-align: center;
	line-height: 3.0rem;
	font-size: 24px;
	color: #BA8750;
}
.pay>a{
	display: block;
	width: 6.86rem;
	height: 0.88rem;
	background: #3E2020;
	margin-top:0.8rem;
	margin-left: 0.3rem;
	font-size: 16px;
	color: #FFFFFF;
	text-align: center;
	line-height:0.88rem;
	text-decoration: none;
}
.silde-enter,.silde-leave-to{transform: translateY(200%);}
.silde-enter-active,.silde-leave-active{transition:all 1s}

</style>