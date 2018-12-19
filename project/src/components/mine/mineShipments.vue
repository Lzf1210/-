<template>
    <div class="shipments">
        <div class="wrapper" ref="wrapper">
        <div class="cartgoodsdetails content">
		<div class="cartgoodsdetail" v-for="(item,index) in shipmentsGoodsList">
			<!-- <input type="checkbox" :checked="item.flag"/> -->
			<div class="cart_center">
				<div class="cart_left">
					<img :src="'http://ceshi.qfjava.cn/'+item.imageList"/>
				</div>
				<div class="goodsinfo">
					<span>{{item.goodsName}}</span>
					<span>{{item.goodsSize}}</span>
				    <span>{{item.goodsPrice | sum}}</span>
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
        this.handleShipmentsGoods();
    },
    methods : {
        back(){
            this.$router.back("/mine")
        },
			...Vuex.mapActions({
				handleShipmentsGoods:"mine/handleShipmentsGoods"
				
			})
    },
    computed:{
			...Vuex.mapState({
				shipmentsGoodsList:state=>state.mine.shipmentsGoodsList
			})
	},
	filters:{
			sum:function(val){
				var result = "￥" + val;
				return result;
			}
		},
    mounted(){
			 new BScroll(this.$refs.wrapper)
		}
}
</script>

<style scoped>

.shipments>.content{height:100%;background: red}
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
		/* background: #fff */
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
		/* background: #FCFCFC; */
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
		/* background: #FCFCFC */
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
		/* height: 0.50rem;
		width:1.56rem;
		background: #FFFFFF;
		margin-top: 1.08rem;
		border: 1px solid #C0C0C0;
		display: flex; */
	}
	/* .cartgoodsdetails>.cartgoodsdetail>.cart_bottom{
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
	} */
	

</style>
