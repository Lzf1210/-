<template>
	<div class="goodsfooter">
		<div>
			<img src="static/goodsimg/Group 2.png"/>
			<p>购物车</p>
		</div>
		<div>
			<img src="static/goodsimg/Page1.png"/>
			<p>喜欢</p>
		</div>
		<div>
			<span>-</span>
			<input type="text"/>
			<span>+</span>
		</div>
		<div>
			<p>加入购物车</p>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
.goodsfooter{
	position: fixed;
	bottom: 0;
	left:0;
	width: 100%;
	background: #FFFFFF;
	border: 2px solid #D6D6D6;
	height: .98rem;
	z-index: 3;
	  
}
.goodsfooter div{
	float: left;
}
.goodsfooter div:nth-of-type(1){
	width: 1.18rem;
	text-align: center;
}
.goodsfooter div:nth-of-type(1) img{
	margin-left: .42rem;
}
.goodsfooter div:nth-of-type(2){
	padding-top: 3px;
	width: 1.16rem;
	text-align: center;
}
.goodsfooter div:nth-of-type(2) img{
	margin-left: .36rem;
}
.goodsfooter div:nth-of-type(3){
	padding-top: .12rem;
}
.goodsfooter div:nth-of-type(3) span{
	display: inline-block;
	width: .74rem;
	height: .6rem;
	text-align: center;
	font-size: 18px;
	border: 1px solid #B8CAD2;
	float: left;
}
.goodsfooter div:nth-of-type(3) input{
	border: 0;
	width: .74rem;
	height: .6rem;
	float: left;
	border: 1px solid #B8CAD2;
	padding-left: .28rem;
}
.goodsfooter div:nth-of-type(4){
	float: right;
	background: #3F2021;
	width: 2.5rem;
	height: .92rem;
	font-family: .PingFang-SC-Medium;
	font-size: 16px;
	color: #FFFFFF;
	letter-spacing: 0;
	line-height: .92rem;
	text-align: center;
}
</style>