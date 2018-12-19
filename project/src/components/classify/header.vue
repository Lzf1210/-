<template>
	<div class="header">
		<div class="header_input">
			<img src="http://qianfeng1.qfjava.cn:8502/mp/dist/static/classifyImg/search_01.png" alt="">
			<input type="text" placeholder="想吃点什么吗？">
		</div>
		
	</div>
</template>

<script>
	
	
</script>

<style scoped>
	.header{
		width: 100%;
		height: .9rem;
		margin-top: .4rem;
		border-bottom:2px solid #B1B1B1;
		display: flex;
		align-items: center;
		justify-content: center
	}
	
	.header_input{
		width: 5.12rem;
		height: .6rem;
		background:#EFEFEF;
		border-radius: .3rem;
		font-size: 16px;
		color: #949494;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.header_input>img{
		display: inline-block;
		width: .35rem;
		height: .35rem;
	}
	.header_input>input{
		width: 2.24rem;
		height: .44rem;
		margin-left: .2rem;
		background:#EFEFEF;
		border: none;
		outline: none;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #949494;
	}
	
</style>