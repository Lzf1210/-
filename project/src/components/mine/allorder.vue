<template>
    <div class="allorder">
        <div class="wrapper" ref="wrapper">
        	<div class="cartgoodsdetails content">
				<div class="cartgoodsdetail" v-for="(item,index) in goodsList">
					<!-- <input type="checkbox" :checked="item.flag"/> -->
					<div class="cart_center">
						<div class="cart_left">
							<img :src="item.img"/>
						</div>
						<div class="goodsinfo">
							<span>{{item.goodsName}}</span>
							<span>{{item.goodsSize}}</span>
							<span>￥{{item.goodsPrice | sum}}</span>
						</div>
					</div>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
import BScroll from "better-scroll"
export default {
    created() {
       this.handleAllGoods();
    },
    methods : {
			...Vuex.mapActions({
				handleAllGoods:"mine/handleAllGoods"
				
			})
    },
    computed:{
			...Vuex.mapState({
				goodsList:state=>state.mine.goodsList
			})
	},
    mounted(){
			 new BScroll(this.$refs.wrapper)
		}
}
</script>

<style scoped>
.allorder>.content{height:100%;}
.wrapper{
		overflow: hidden;
		position: absolute;
		top: 2.2rem;
		bottom:0rem;
		width: 100%;
	}
	.cartgoodsdetails{
		position: absolute;
		/* top: 1.3rem; */
		left: 0;
		width: 100%;
		z-index: 1;
		overflow: auto;
		background: #FCFCFC
	}
	.cartgoodsdetails>.cartgoodsdetail{
		width: 100%;
		height: 2.28rem;
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
		background: #FCFCFC;
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
		background: #FCFCFC
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
	

</style>
