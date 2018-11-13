<template>
	<div class="carbottom">
		<input type="checkbox" />
		<span>全选</span>
		<span>删除所选</span>
	</div>
</template>

<script>
	
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
	.carbottom>span:nth-of-type(3){
		float: right;
		width: 2.8rem;
		height: 1.14rem;
		background:#91ACBD;
		font-size: 0.32rem;
		color: #FFFFFF;
		text-align: center;
		line-height: 1.14rem;
	}
	
	
</style>