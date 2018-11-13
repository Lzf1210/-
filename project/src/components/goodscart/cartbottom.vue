<template>
	<div class="carbottom" v-show="show">
		<input type="checkbox" />
		<span>全选</span>
		<span>￥0.00</span>
		<span>去结算</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show:true
			}
		}
	}
</script>

<style>
	.carbottom{
		height: 1.16rem;
		width: 100%;
		position: fixed;
		left: 0;
		bottom: .98rem;
		overflow: hidden;
		border-top:1px solid #C7D3DB;
		float: left;
		z-index: 2;
		background: #FFFFFF;
	}
	.carbottom>span{
		display: block;
	}
	.carbottom>input{
		width: 0.48rem;
		height: 0.48rem;
		background: #FFFFFF;
        border: 0.02rem solid #979797;
		margin-left:4.3%;
		margin-top: 4.8%;
		float: left;
		border-radius:0.24rem;
	}
	.carbottom>span:nth-of-type(1){
		float: left;
		font-size: 0.32rem;
		color: #222222;
		padding-left: 0.16rem;
		padding-top: 0.38rem;
		font-weight: .PingFangSC-Regular;
	}
	.carbottom>span:nth-of-type(2){
		float: left;
		font-size: 0.32rem;
		color: #BA8750;
		padding-left: 1.86rem;
		padding-top: 0.38rem;
		font-weight: .PingFangSC-Regular;
	}
	.carbottom>span:nth-of-type(3){
		float: right;
		width: 2.8rem;
		height: 1.14rem;
		background:#C0C0C0;
		font-size: 0.32rem;
		color: #FFFFFF;
		text-align: center;
		line-height: 1.14rem;
	}
	
	
</style>