<template>
	<div class="wrapper" ref="salesWrapper">
		<div class="content">
			<div class="sales">

				<div class="sales-top">
					<p class="p1">美烹</p>
					<p class="p2">促销专区 爆款直降</p>
					<p class="p3"></p>
				</div>
				<span>热门单品价格直降，购买超划算</span>
				<div class="salesGoods">
					<div class="goods" v-for="(item,index) in imgList">
						<img src="../../../static/discounts/images/details_02.png" class="imgs">
						<h3>{{item.goodsName}}</h3>
						<h4>{{item.goodsPrice}}</h4>
						<h5 @click="handleAddGoodsCart(item.id)">立即购买</h5>
						<h6>特惠</h6>
						<p>￥{{item.goodsDiscountsPrice}}</p>
						<div class="shu"></div>
					</div>

				</div>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	import BScroll from "better-scroll";
	export default {
		data() {
			return {

			};
		},
		created() {
			this.handleGetImg() //页面加载前从数据库获取详情信息    
		},
		computed: {
			...Vuex.mapState({
				imgList: state => state.discounts.imgList,

			})
		},
		methods: {
			...Vuex.mapActions({
				handleGetImg: "discounts/handleGetImg",
                handleAddGoodsCart:"discounts/handleAddGoodsCart",
			}),

		},
		mounted() {
			this.scroll = new BScroll(this.$refs.salesWrapper, {
				click: true,
				// tap: true,
				pullUpLoad: true
			});


		},
		updated() {
			//重新计算高度
			this.scroll.refresh();
			//当数据加载完毕以后通知better-scroll
			this.scroll.finishPullUp();
		}
	}
</script>

<style scoped>
	* {
		text-decoration: none;
	}

	.wrapper {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		overflow: hidden;
	}

	.sales {
		padding: 2.27rem .32rem .98rem;
		height: 100%;
		overflow: auto;
	}

	.sales-top {
		border: .02rem solid #260A0A;
		width: 1.86rem;
		height: 2.48rem;
		margin: 0 auto;
		text-align: center;
		position: relative;
	}

	.p1 {
		color: #3E1717;
		font-size: .48rem;
		font-family: PingFangSC-Regular, sans-serif;
		margin-top: .26rem;
	}

	.p2 {
		color: #3F2020;
		font-size: .32rem;
		letter-spacing: .02rem;
		font-family: PingFangSC-Medium, sans-serif;
		width: 3rem;
		position: absolute;
		left: -0.6rem;
		top: .96rem;
		background: #fff;
		padding: .1rem 0;
	}

	.p3 {
		background: #EFB31F;
		width: .88rem;
		height: .06rem;
		position: absolute;
		left: .5rem;
		bottom: .48rem;
	}

	span {
		margin: .32rem 1.7rem .62rem;
		color: #3F2020;
		font-size: .24rem;
		line-height: .28rem;
		text-align: center;
		font-family: PingFangSC-Medium, sans-serif;
		display: block;
	}

	.salesGoods {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.goods {
		width: 3.28rem;
		height: 5.92rem;
		margin-bottom: .34rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		background: #FCEEE5;
	}

	.goods .imgs {
		height: 3.4rem;
		width: 3rem;
		margin-top: .14rem;
	}

	.goods h3 {
		width: 2.04rem;
		color: #F6A958;
		font-size: .28rem;
		line-height: .34rem;
		font-family: PingFangSC-Regular, sans-serif;
		margin-top: .14rem;
	}

	.goods h4 {
		margin: .52rem 0 .26rem;
		width: 2.04rem;
		color: #F6A958;
		font-size: .28rem;
		line-height: .34rem;
		font-family: PingFangSC-Semibold, sans-serif;
	}

	.goods h5 {
		text-align: center;
		width: 2.16rem;
		color: #fff;
		font-size: .28rem;
		line-height: .34rem;
		font-family: PingFangSC-Semibold, sans-serif;
		background-image: linear-gradient(-194deg, #D5842A 0%, #F3C58C 43%, #D5842A 100%);
	}

	.goods h6 {
		position: absolute;
		color: #3E1717;
		font-size: .2rem;
		line-height: .24rem;
		font-family: PingFangSC-Semibold, sans-serif;
		left: 1.96rem;
		top: 4.24rem;

	}

	.goods p {
		position: absolute;
		color: #3E1717;
		font-size: .36rem;
		line-height: .34rem;
		font-family: PingFangSC-Semibold, sans-serif;
		left: 1.75rem;
		top: 4.49rem;
	}

	.goods .shu {
		position: absolute;
		left: 1.66rem;
		top: 4.32rem;
		width: .02rem;
		height: .42rem;
		background: #F6A958;
	}
</style>
