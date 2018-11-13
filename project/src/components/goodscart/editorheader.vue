<template>
    <div class="goodscart">
	    <div class="cart-head"></div>
		<div class="cart-header">
            <span>购物车</span>
			<span>取消</span>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.goodscart{
	position: fixed;
	left: 0;
	top:0;
	width: 100%;
	/* z-index: 2; */
	
}
.goodscart>.cart-head{
	width: 100%;
	height: 0.4rem;
}
.goodscart>.cart-header{
	width: 100%;
	height: .9rem;
	background: #FFFFFF ;
	border-bottom: 1px solid #C7D3DB;
}
.goodscart>.cart-header span:nth-of-type(1){
	font-size: 18px;
	line-height:.87rem ;
	color: ##000000;
	font-family: PingFangSC-Regular;
	padding-left: 3.2rem;
}
.goodscart>.cart-header span:nth-of-type(2){
	font-size: 18px;
	line-height:.87rem ;
	color: ##000000;
	font-family: .PingFangSC-Regular;
	padding-left:2.12rem;
}

</style>
