<template>
	<div class="pay">
		<div class="immg">
			<img src="../../../static/goodscart/l.png"/>
		</div>
		<div class="paypicture">
			<img src="../../../static/goodscart/lalala.png" />
		</div>
		<p>扫码下单</p>
		<div class="back">
			<img src="../../../static/img/back.png"  @click="handleBack()"/>
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

<style scoped>
	.pay{
		position:fixed;
		top:0rem;
		left: 0;
		width: 100%;
		height: 100%;
		padding-top: 0.4rem;
		background: url(../../../static/goodscart/666.jpg);
		z-index:2;
	}
	.pay>.immg{
		width: 100%;
		height: 4rem;
		padding-top: 1rem;
		padding-left: 2.8rem;
	}
	.pay>.immg>img{
		width: 1.8rem;
		height: 1.8rem;
	}
	.pay>.paypicture{
		width: 3.9rem;
		height: 3.95rem;
		margin-left: 1.7rem;
	}
	.pay>.paypicture>img{
		width: 3.9rem;
		height: 3.95rem;
	}
	.pay > p{
		font-size: 25px;
		font-weight: 900;
		color: #3D1E1F;
		font-family: "calisto mt";
		padding-left:2.6rem;
		padding-top: 1.4rem;
	}
	.pay>.back{
		width: 0.7rem;
		height: 0.7rem;
		border-radius: 50%;
		background: white;
		padding-top: 0.1rem;
		padding-left: 0.2rem;
		position: absolute;
		top: 0.6rem;
		left: 0.5rem;
	}
	
</style>