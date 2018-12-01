<template>
	<div class="order">
		<div class="header">
			<img src="../../../static/goodscart/back.png" @click="handleAck()"/>
			<h1>确认订单</h1>
		</div>
		<div class="wrapper" ref="wrapper">
		<div class="conent">
		<div class="address">
			<ul>
				<li><p>收货人：黄女士</p><p>12312312312</p></li>
				<li><p>收货地址：北京 北京市 朝阳区 朝阳大街</p></li>
				<li><p>（收货不便时，可选择免费代收货服务）</p></li>
			</ul>
		</div>
		<div class="list">
			<div class="listheader">
				<p>商品清单</p>
				<p>共&nbsp;<span>{{goodsCount.goodsNumCount}}</span>&nbsp;件</p>
			</div>
			<div class="shoplist">
				<ul>
					<li>
						<div class="shoplistImg">
							<img src="../../../static/goodscart/醋.png"/>
						</div>
						<div class="shangpin">
							<ul>
								<li>
									<p>一果泡醋草莓醋</p>
									<p>¥11.52</p>
								</li>
								<li>
									<p class="guige">410g/瓶</p>
									<p class="shuliang">x1</p>
								</li>
							</ul>
						</div>
						<div class="zhekou">
							<p>打折</p>
							<p>好食狂欢节-全场九折</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="youhuijuan">
			<ul>
				<li><span>优惠券</span><span>可输入优惠码添加新的券</span><span>无可用</span><div><img src="../../../static/goodscart/back.png" class="jiantou"/></div></li>
				<li><span>积分</span><span>有200积分，可抵2.00元</span>
				<div>
				<el-switch
                    v-model="value1"
                    active-color="green"

                    inactive-color="gray">
                </el-switch>

				</div>
				</li>
			</ul>
		</div>
		<div class="fapiao">
			<p>发票</p>
			<p>不开发票<img src="../../../static/goodscart/back.png"/></p>
		</div>
		<div class="xiaoji">
			<input type="text" value="订单备注"/>
			<ul>
				<li><span>商品合计</span><span class="red">¥{{goodsCount.goodsNumPrice}}</span></li>
				<li><span>促销优惠</span><span class="green">-¥0.00</span></li>
				<li><span>好食狂欢节-全场九折</span></li>
				<li><span>优惠券</span><span class="green">-¥0.00</span></li>
				<li><span>积分抵扣</span><span class="green">-¥0.00</span></li>
				<li><span>运费</span><span class="red">¥0.00</span></li>
				<li><span>应付金额</span><span class="red">¥{{goodsCount.goodsNumPrice}}</span></li>
			</ul>
		</div>
		</div>
		</div>
		<div class="footer">
			<div class="footermain">
				<div class="left">
					<p>应付<span>¥{{goodsCount.goodsNumPrice}}</span></p>
					<p>共{{goodsCount.goodsNumCount}}件商品</p>
				</div>
				<div class="right" @click="handleGo()">提交订单</div>
			</div>
		</div>
		<transition name="lala">
		<mark-com v-show="show"></mark-com>
		</transition>
		<transition name="silde">
		<prompt-com v-show="show"></prompt-com>
		</transition>
	</div>
</template>

<script>
	import mark from "./mark.vue";
	import prompt from "./prompt.vue";
	import BScroll from "better-scroll";
	import Vuex from "vuex";
	export default{
		components:{
			"mark-com":mark,
			"prompt-com":prompt
		},
		data(){
			return{
					show:false,
					title:["公司","家"],
					changeIndex : 0,
					value1: true,
					value2: true
			}
		},
		created(){
			this.observer.$on("change3",(val)=>{
				this.show = val;
			})
		},
		methods:{
			handleGo(){
				this.show = true;
				this.observer.$emit("change5",true)
			},
			handleAck(){
				this.$router.go(-1);
			},
			changeBg(index){
            this.changeIndex = index;
            }
		},
		mounted(){
			this.scroll = new BScroll(this.$refs.wrapper,{
			click:true,
			pullUpload:true	
			});
		},
		computed:{
			...Vuex.mapGetters({
				goodsCount:"goodscart/goodsCount",
			}),
			...Vuex.mapState({
				goodsList:state=>state.goodscart.goodsList
			})
		}
		/*
		
			actions 
			handleChangeNewInfo({commit}){
				commit('handleChangeNewInfo');
			}
			mutations
			handleChangeNewInfo(state){
				var goodlist = state.goodlist;
				var goodsNewArray = [];
				for(var index in goodlist){
					if(goodlist[index].flag){
						goodsNewArray.push(goodlist[index]);
					}
				}
				state.goodsNewArray = goodsNewArray;
			}
			
			
		*/
	}
</script>

<style scoped>
.order{
	padding-top: .4rem;
	width: 100%;
	position: absolute;
	top: 0;
	z-index: 2;
	background: white;
	height: 100%;
	overflow: auto;
	padding-bottom: 1.2rem;
}
.order .header{
	width: 100%;
	height: .88rem;
	border-bottom: .16rem solid #BA8750;
}
.order .header img{
	float: left;
	margin-left: .36rem;
}
.order .header h1{
	margin-left: 3.12rem;
	font-family: .PingFangSC-Regular;
	font-size: 18px;
	color: #222222;
	letter-spacing: 0;
}
.wrapper{
		overflow: hidden;
		position: absolute;
		top: 1.2rem;
		bottom:1.3rem;
		width: 100%;
	}
.content{
	width: 100%;
	height: 100;
}
.address{
	height: .9rem;
	padding: .32rem;
	border-bottom: .16rem solid #F4F4F4;
	box-sizing:content-box
}
.address li{
}
.address li:nth-of-type(1){
	overflow: hidden;
}
.address li:nth-of-type(1) p:nth-of-type(2){
	float: right;
	font-family: .PingFangSC-Regular;
	font-size: 12px;
	color: #888888;
	letter-spacing: 0;
}
.address li:nth-of-type(1) p:nth-of-type(1){
	font-family: .PingFangSC-Regular;
	font-size: 16px;
	color: #393939;
	letter-spacing: 0;
	float: left;
}
.address li:nth-of-type(2){
	font-family: .PingFangSC-Regular;
	font-size: 14px;
	color: #393939;
	letter-spacing: 0;
}
.address li:nth-of-type(3){
	font-family: .PingFangSC-Regular;
	font-size: 12px;
	color: #BA8750;
	letter-spacing: 0;
}
.listheader{
	padding:.16rem .32rem;
	border-bottom:  1px solid #E1E1E1;
	overflow: hidden;
}
.list .listheader p:nth-of-type(1){
	float: left;
	font-family: .PingFangSC-Regular;
	font-size: 16px;
	color: #393939;
	letter-spacing: 0;
}
.list .listheader p:nth-of-type(2){
	float: right;
	font-family: .PingFangSC-Regular;
	font-size: 12px;
	color: #BA8750;
	letter-spacing: 0;
}
.shoplistImg{
	float: left;
}
.shoplist{
	padding: .22rem .44rem;
	width: 100%;
	border-bottom: .16rem solid #F4F4F4;
}
.shoplist .shangpin{
	float: left;
}
.shoplist .zhekou{
	clear: both;
}
.shangpin{
	width: 81%;
	height: 1.2rem;
	margin-bottom: .16rem;
}
.shangpin ul li{
	overflow: hidden;
}
.shangpin ul li p:nth-of-type(1){
	float: left;
	font-family: .PingFangSC-Regular;
	font-size: 14px;
	color: #000000;
	letter-spacing: 0;
}
.shangpin ul li p:nth-of-type(2){
	float: right;
	font-family: .PingFangSC-Regular;
	font-size: 14px;
	color: #BE141C;
	letter-spacing: 0;
}
.shoplist .shangpin ul li .guige{
	font-family: .PingFangSC-Regular;
	font-size: 12px;
	color: #888888;
	letter-spacing: 0;
}
.shoplist .shangpin ul li .shuliang{
	font-family: .PingFangSC-Regular;
	font-size: 12px;
	color: #888888;
	letter-spacing: 0;
}
.shoplist .shangpin ul li:nth-of-type(2){
	margin-top: .44rem;
}
.shoplist .shangpin ul{
	padding-left:.2rem ;
}
.zhekou{
	background: #FEE5C7;
	border: 1px solid #FAFCDC;
	height: 0.6rem;
	width: 6.14rem;
	margin-left: .6rem;
}
.zhekou p:nth-of-type(1){
	font-family: .PingFangSC-Regular;
	font-size: 12px;
	color: #FFFFFF;
	letter-spacing: 0;
	display: inline-block;
	background: #BA8750;
	border-radius: 2px;
	height: 16px;
	width: 28px;
	text-align: center;
	line-height: 16px;
	margin: .13rem .2rem ;
}
.zhekou p:nth-of-type(2){
	font-family: .PingFangSC-Regular;
	font-size: 12px;
	color: #000000;
	letter-spacing: 0;
	display: inline-block;
}
.youhuijuan li{
	height: .8rem;
	border-bottom: 1px solid #E1E1E1;
	font-size: 16px;
	line-height: .8rem;
}
.youhuijuan li span:nth-of-type(1){
	color: #222222;
	letter-spacing: 0;
	display: inline-block;
	width: 2rem;
	padding-left: .5rem;
}
.youhuijuan li span:nth-of-type(2){
	color: #888888;
	letter-spacing: 0;
	font-size: 14px;
	display: inline-block;
	width: 55%;
}
.youhuijuan li span:nth-of-type(3){
	font-family: .PingFangSC-Regular;
	font-size: 12px;
	color: #BA8750;
	letter-spacing: 0;
}
.youhuijuan li div{
	display: inline-block;
	height: .32rem;
}
.youhuijuan li .jiantou{
	transform: rotate(180deg);
	height: 18px;
}
.youhuijuan ul{
	border-bottom: .16rem solid #F4F4F4;
}
.fapiao{
	width: 100%;
	height: .8rem;
	padding: .15rem .3rem;
	border-bottom: 2px solid #E1E1E1;
}
.fapiao p:nth-of-type(1){
	font-family: .PingFangSC-Regular;
	font-size: 16px;
	color: #222222;
	letter-spacing: 0;
	float: left;
}
.fapiao p:nth-of-type(2){
	font-family: .PingFangSC-Regular;
	font-size: 12px;
	color: #BA8750;
	letter-spacing: 0;
	float: right;
}
.fapiao p:nth-of-type(2) img{
	display: inline-block;
	float: right;
	transform: rotate(180deg);
	height: 18px;
}
.xiaoji input{
	background: #F6F6F6;
	border: 1px solid #FFFFFF;
	height: .8rem;
	width: 6.86rem;
	font-family: .PingFangSC-Regular;
	font-size: 12px;
	color: #888888;
	letter-spacing: 0;
	margin:.24rem .32rem;
	padding-left: .2rem;
}
.xiaoji ul li{
	overflow: hidden;
	height: .6rem;
	line-height: .6rem;
	margin-left: .3rem;
	margin-right: .3rem;
}
.xiaoji ul li span:nth-of-type(1){
	float: left;
	font-family: .PingFangSC-Regular;
	font-size: 16px;
	color: #222222;
	letter-spacing: 0;
}
.xiaoji ul li span:nth-of-type(2){
	float: right;
}
.red{
	font-family: .PingFangSC-Regular;
	font-size: 14px;
	color: #BA8750;
	letter-spacing: 0;
}
.green{
	font-family: .PingFangSC-Regular;
	font-size: 14px;
	color: #84B77B;
	letter-spacing: 0;
}
.xiaoji ul li:nth-of-type(3) span{
	font-family: .PingFangSC-Regular;
	font-size: 14px;
	color: #888888;
	letter-spacing: 0;
	margin-left: .18rem;
}
.footer{
	width: 100%;
	height: 1.2rem;
	border-top: 2px solid #E1E1E1;
	position: fixed;
	bottom: 0;
	background: white;
}
.footer .footermain{
	float: right;
}
.left{
	float: left;
	padding-right: .2rem;
}
.right{
	background: #3E2020;
	font-family: .PingFangSC-Regular;
	font-size: 18px;
	color: #FFFFFF;
	letter-spacing: 0;
	height: 1.2rem;
	line-height: 1.2rem;
	width: 3.06rem;
	float: right;
	text-align: center;
}
.left p:nth-of-type(1){
	font-family: .PingFangSC-Regular;
	font-size: 14px;
	color: #BA8750;
	letter-spacing: 0;
	padding-top: .3rem;
	text-align: right;
}
.left p:nth-of-type(2){
	font-family: .PingFangSC-Regular;
	font-size: 12px;
	color: #888888;
	letter-spacing: 0;
	text-align: right;
}
</style>