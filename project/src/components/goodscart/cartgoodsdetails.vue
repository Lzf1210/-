<template>
	<div class="cartgoodsdetails">
		<div class="cartgoodsdetail">
			<input type="checkbox"/>
			<div class="cart_center">
				<div class="cart_left">
					<img src="../../../static/img/草莓醋.png"/>
				</div>
				<div class="goodsinfo">
					<span>一果泡醋草莓醋</span>
					<span>410g/瓶</span>
				    <span>¥28.80</span>
				</div>
				<div class="cart_right">
					<span>-</span>
					<span>1</span>
					<span>+</span>
				</div>
			</div>
			<div class="cart_bottom">
				好食狂欢节-
			</div>
		</div>
		<div class="cartgoodsdetail">
			<input type="checkbox"/>
			<div class="cart_center">
				<div class="cart_left">
					<img src="../../../static/img/脆冬枣.png"/>
				</div>
				<div class="goodsinfo">
					<span>脆冬枣</span>
					<span>100g/袋</span>
					<span>¥11.52</span>
				</div>
				<div class="cart_right">
					<span>-</span>
					<span>1</span>
					<span>+</span>
				</div>
			</div>
			<div class="cart_bottom">
				好食狂欢节-
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.cartgoodsdetails{
		position: absolute;
		top: 1.3rem;
		left: 0;
		width: 100%;
		z-index: 1;
		
	}
	.cartgoodsdetails>.cartgoodsdetail{
		width: 100%;
		height: 3.28rem;
		overflow: hidden;
		border-bottom: 1px solid #C7D3DB;
		display: flex;
		justify-content: space-between;
		position: relative;
	}
	.cartgoodsdetails>.cartgoodsdetail>input{
		width: 19.8px;
		height: 19.8px;
		margin-left: 0.524rem;
		margin-top:1.064rem;
	}
	.cartgoodsdetails>.cartgoodsdetail>.cart_center{
		width:6.38rem;
		height: 1.6rem;
		background: #FFFFFF;
		margin-left: 0.32rem;
		margin-top: 0.32rem;
		display: flex;
	}
	.cartgoodsdetail>.cart_center>.cart_left{
		width: 1.6rem;
		height: 1.6rem;
		margin-right: 0.32rem;
	}
	.cartgoodsdetail>.cart_center>.cart_left>img{
		width: 1.6rem;
		height: 1.6rem;
	}
	.cartgoodsdetail>.cart_center>.goodsinfo{
		width:2.4rem;
		height: 1.6rem;
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
	}
	.cartgoodsdetail>.cart_center>.goodsinfo>span:nth-of-type(1){
		font-size: 16px;
		color: #222222;
	}
	.cartgoodsdetail>.cart_center>.goodsinfo>span:nth-of-type(2){
		font-size: 12px;
		color: #888888;
	}
	.cartgoodsdetail>.cart_center>.goodsinfo>span:nth-of-type(3){
		padding-top: 0.2rem;
		font-size: 16px;
		color: #BE141C;
	}
	.cartgoodsdetails>.cartgoodsdetail>.cart_center>.cart_right{
		height: 0.50rem;
		width:1.56rem;
		background: #FFFFFF;
		margin-top: 1.08rem;
		border: 1px solid #C0C0C0;
		display: flex;
	}
	.cartgoodsdetails>.cartgoodsdetail>.cart_center>.cart_right>span{
		line-height: 0.50rem;
		color: #888888;
		text-align: center;
	}
	.cartgoodsdetails>.cartgoodsdetail>.cart_center>.cart_right>span:nth-of-type(1){
		display: block;
		height: 0.50rem;
		width: 0.50rem;
		border-right: 1px solid #C0C0C0;
		font-size: 13px;
	}
	.cartgoodsdetails>.cartgoodsdetail>.cart_center>.cart_right>span:nth-of-type(3){
		display: block;
		height: 0.50rem;
		width: 0.50rem;
		border-left: 1px solid #C0C0C0;
		font-size: 13px;
	}
	.cartgoodsdetails>.cartgoodsdetail>.cart_center>.cart_right>span:nth-of-type(2){
		display: block;
		height: 0.50rem;
		width: 0.56rem;
		font-size: 13px;
	}
	.cartgoodsdetails>.cartgoodsdetail>.cart_bottom{
		width: 6.06rem;
		height: 0.72rem;
		background: #FFE5C7;
		position: absolute;
		top: 2.24rem;
		left:1.12rem;
		line-height: 0.72rem;
		padding-left: 0.96rem;
		font-size: 14px;
		color: #222222;
		font-family: .PingFangSC-Medium;
	}
	
</style>