<template>
	<div>
	<div class="carbottom" v-show="show">
		<input type="checkbox" :checked="allSelect" @click="handleAllToggleSelected()"/>
		<span>全选</span>
		<span>{{goodsCount.goodsNumPrice | sum}}</span>
		<span @click="handleGoPay()">去结算{{'('+goodsCount.goodsNumCount+')'}}</span>
	</div>
	<div class="cartbottom" v-show="show == false">
		<input type="checkbox" :checked="allSelect" @click="handleAllToggleSelected()"/>
		<span>全选</span>
		<span @click="handleGoodsDel()">删除所选</span>
		<span>加入喜欢</span>
		
	</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	import axios from "axios"
	export default{
		data(){
			return{
				show:"true",
				
			}
		},
		computed:{
			...Vuex.mapState({
				allSelect:state=>state.goodscart.allSelect,
				goodsList:state=>state.goodscart.goodsList,
				list:state=>state.goodscart.list,
				goodsId:state=>state.goodscart.goodsId
			}),
			...Vuex.mapGetters({
				goodsCount:"goodscart/goodsCount"
			})
		},
		
		methods:{
			...Vuex.mapActions({
				handleGoodsDel:"goodscart/handleGoodsDel"
			}),
			...Vuex.mapMutations({
			handleAllToggleSelected:"goodscart/handleAllToggleSelected"		
			}),
			handleGoPay(){
				for(var i=0;i< this.goodsList.length;i++){
					
					if(this.goodsList[i].flag == true){
					 
					  this.goodsId.push(this.goodsList[i].id);
					}
				}
				console.log(this.goodsId)
				// this.$router.push({name:"order",query:{id:this.goodsId}});
				
				axios({
					method:"get",
					url:"/mp/order/addorder?goodsId="+this.goodsId,
					}).then((data)=>{
						console.log(data.data)
						// commit("getOrderId",data.data)
						this.$router.push("/order")
						
				})
			}
		},
		created(){
			this.observer.$on("change",(val)=>{
				this.show = val;
			}),
			this.observer.$on("change1",(val)=>{
				this.show = val;
			})
		},
		filters:{
			sum:function(val){
				var result = "￥" + val;
				return result;
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
		width: 2.7rem;
		height: 1.14rem;
		font-size: 0.32rem;
		color: #BA8750;
		padding-top: 0.38rem;
		margin-left: 0.3rem;
		font-weight: .PingFangSC-Regular;
		display: flex;
		justify-content: flex-end;
	}
	.carbottom>span:nth-of-type(3){
		float: right;
		width: 2.8rem;
		height: 1.14rem;
		background:#3F2021;
		font-size: 0.32rem;
		color: #FFFFFF;
		text-align: center;
		line-height: 1.14rem;
	}
	.cartbottom{
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
	.cartbottom>span{
		display: block;
	}
	.cartbottom>input{
		width: 0.48rem;
		height: 0.48rem;
		background: #FFFFFF;
		border: 0.02rem solid #979797;
		margin-left:4.3%;
		margin-top: 4.8%;
		float: left;
		border-radius:0.24rem;
	}
	.cartbottom>span:nth-of-type(1){
		float: left;
		font-size: 0.32rem;
		color: #222222;
		padding-left: 0.16rem;
		padding-top: 0.38rem;
		font-weight: .PingFangSC-Regular;
	}
	.cartbottom>span:nth-of-type(3){
		float: right;
		width: 2.8rem;
		height: 1.14rem;
		background:#91ACBD;
		font-size: 0.32rem;
		color: #FFFFFF;
		text-align: center;
		line-height: 1.14rem;
	}
	.cartbottom>span:nth-of-type(2){
		float: right;
		width: 2.8rem;
		height: 1.14rem;
		background:#3F2021;
		font-size: 0.32rem;
		color: #FFFFFF;
		text-align: center;
		line-height: 1.14rem;
	}
	.bom-enter,.bom-leave-to{transform: translateY(200%);}
	.bom-enter-active,.bom-leave-active{transition:all 1s}
	
</style>