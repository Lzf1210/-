<template>
	<div class="wrapper" ref="wrapper">
	<div class="cartgoodsdetails content">
		<div class="cartgoodsdetail" v-for="(item,index) in goodsList">
			<input type="checkbox" :checked="item.flag" @change="handleToggle(index)"/>
			<div class="cart_center">
				<div class="cart_left">
					<img :src="item.imageList[0]" @click="handleId(item.id,goodsList.length,item.num)"/>
				</div>
				<div class="goodsinfo">
					<span>{{item.goodsName}}</span>
					<span>{{item.goodsDetail}}</span>
				    <span>{{item.goodsPrice | sum}}</span>
				</div>
				<div class="cart_right">
					<span @click="handleReduce(index)">-</span>
					<span>{{item.num}}</span>
					<span @click="handleAdd(index)">+</span>
				</div>
			</div>
			<div class="cart_bottom">
				好食狂欢节-
			</div>
		</div>
	</div>
	</div>
		
	
</template>

<script>
	import Vuex from "vuex";
	import axios from "axios";
	import BScroll from "better-scroll"
	export default{
		created(){
			this.handleGetGoods();
// 			axios({
// 				method:"post",
// 				url:"http://localhost:3000/goods",
// 				data:{
// 					"imageList": ["https://api.shinshop.com/v1/img/2d5d3d0a50d85e9509a406284267dcb0.jpg","https://api.shinshop.com/v1/img/a6e68e5d3b6b0be6e54ed28717e26e64.jpg","https://api.shinshop.com/v1/img/5f24fc45356e4300dedd09b7ff498512.jpg"],
// 					"goodsName": "欣.和家顺礼盒",
// 					"goodsDetail": "12件/个",
// 					"goodsPrice": "￥158.00",
// 					"saveStyle": "阴凉通风处",
// 					"saveTime":"240天",
// 					"manuFacturer":"烟台欣和味达美食品有限公司",
// 					"goodsNo":"SC10337063600220",
// 					"goodsStandNo":"GB/T 18186"
// 				}
// 			}).then((data)=>{
// 				console.log(data);
// 			});
		},
		computed:{
			...Vuex.mapState({
				goodsList:state=>state.goodscart.goodsList
			})
		},
		methods:{
			...Vuex.mapActions({
				handleGetGoods:"goodscart/handleGetGoods"
				
			}),
			...Vuex.mapMutations({
				handleToggle:"goodscart/handleToggle",
				handleReduce:"goodscart/handleReduce",
				handleAdd:"goodscart/handleAdd"
			}),
			handleId(val1,val2,val3){
				this.$router.push({name:"goods",query:{id:val1,Num:val2,num:val3}})
			}
		},
		filters:{
			sum:function(val){
				var result = "￥" + val;
				return result;
			}
		},
		mounted(){
			this.scroll = new BScroll(this.$refs.wrapper,{
				click:true,
				pullUpload:true
			});
		}
		
	}
</script>

<style scoped>
	.wrapper{
		overflow: hidden;
		position: absolute;
		top: 1.2rem;
		bottom:2.1rem;
		width: 100%;
	}
	.cartgoodsdetails{
		position: absolute;
		top: 1.3rem;
		left: 0;
		width: 100%;
		z-index: 1;
		overflow: auto;
		
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