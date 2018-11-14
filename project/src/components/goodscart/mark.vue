<template>
	<div class="mark" v-show="show">
		<div class="pay">
			<div class="payhead">
				<a>
				<img src="../../../static/img/fanhui.png" @click="handleout()"/>
				</a>
				<span>确认付款</span>
			</div>
			<div class="paycenter">
				￥20.0
			</div>
			<p>确认支付</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show:false
			}
		},
		methods:{
			handleout(){
				this.show = false;
			}
		},
		created(){
			this.observer.$on("change2",(val)=>{
				this.show = val;
			})
		}
	}
</script>

<style scoped>
.mark{
	margin-top: 0.5rem;
	position: fixed;
	width: 100%;
	height: 100%;
	background: gray;
	opacity: 1;
	z-index: 3;
}
.mark > .pay{
	width: 100%;
	height: 6.28rem;
	background:white;
	margin-top: 88%;
	z-index: 4;
}
.mark>.pay>.payhead{
	width: 100%;
	height: 0.88rem;
	border-bottom: 1px solid #E1E1E1;
}
.mark>.pay>.payhead>a>img{
	margin-left:0.32rem;
	padding-top: 0.20rem;
	display: inline-block;
}
.mark>.pay>.payhead>span{
	margin-left: 2.33rem;
	font-size: 16px;
	color: #222222;
}
.mark>.pay>.paycenter{
	width:100%;
	height:3.0rem;
	text-align: center;
	line-height: 3.0rem;
	font-size: 24px;
	color: #BA8750;
}
.mark>.pay>p{
	width: 6.86rem;
	height: 0.88rem;
	background: #3E2020;
	margin-top:0.8rem;
	margin-left: 0.3rem;
	font-size: 16px;
	color: #FFFFFF;
	text-align: center;
	line-height:0.88rem;
}
</style>