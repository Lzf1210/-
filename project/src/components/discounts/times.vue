<template>
	<div class="wrapper" ref="salesWrapper">
		<div class="content">
			<div class="times">

				<div class="time-top">
					<p class="p1">美烹</p>
					<p class="p2">开启健康好时光</p>
					<p class="p3"></p>
				</div>
				<div class="caseOne">
					<img src="http://qianfeng1.qfjava.cn:8502/mp/static/discounts/images/page-1-健康生活_03.png" alt="">
					<p>美烹起源</p>
					<p>近年，美烹在北京进行了一次入户调研，调研结果发现，大部分年轻妈妈会用各种途径去寻
						找性价比高的产品，价格和安全是所有妈妈们关注的重点。而在烟台，并没有一家能够放心
						的本地商城能做到平价和安全，同时还能极速送货上门，所以美烹应运而生。
					</p>
				</div>
				<div class="caseTwo">
					<p>美烹起源</p>
					<p>从源头把控生鲜食品安全</p>
					<div>
						<img src="http://qianfeng1.qfjava.cn:8502/mp/static/discounts/images/page-1-_03.jpg">
						<section>
							<h3>美烹自营品牌</h3>
							<h4>以美烹的选食标准去<br>选择更多的亲民好食</h4>
						</section>

					</div>
					<div>
						<section>
							<h3>自有物流配送</h3>
							<h4>烟台五区自有物流配送<br>新鲜极速送达</h4>
						</section>
						<img src="http://qianfeng1.qfjava.cn:8502/mp/static/discounts/images/page-1-健康生活_06.jpg">
					</div>
					<div>
						<img src="http://qianfeng1.qfjava.cn:8502/mp/static/discounts/images/page-1-健康生活_09.jpg">
						<section>
							<h3>美烹自营品牌</h3>
							<h4>以美烹的选食标准去<br>选择更多的亲民好食</h4>
						</section>
					</div>
				</div>
				<div class="caseThree">
					<p>美烹优势</p>
					<p>从源头把控生鲜食品安全</p>
					<img src="http://qianfeng1.qfjava.cn:8502/mp/static/discounts/images/page-1-健康生活_12.png" alt="" class="caseThree-img">
					<section class="sce-con">
						<h5>生鲜食材<br>农作物、肉禽蛋奶、生鲜果蔬、海产品等</h5>
						<h6><span>59</span>项农药残留不检出</h6>
						<h6><span>8</span>项兽药残留不检出</h6>
						<h6><span>5</span>项中重金属含量不超标</h6>
						<h5>预包装类食品</h5>
						<h6>不含有漂白剂、膨松剂、着色剂、防腐剂等23个类别，2000多种食品添加剂(配料表添加剂成分检查)</h6>
					</section>
					<img src="http://qianfeng1.qfjava.cn:8502/mp/static/discounts/images/page-1-健康生活_01_03.png" alt="" class="caseThree-img">
					<section class="sce-con">
						<h5>生鲜食材<br>农作物、肉禽蛋奶、生鲜果蔬、海产品等</h5>
						<h6><span>252</span>项农药残留不检出</h6>
						<h6><span>31</span>项兽药残留不检出</h6>
						<h6><span>5</span>项中重金属含量不超标</h6>
						<h5>预包装类食品</h5>
						<h6>不含有15种合成色素和12种防腐剂(仪器设备检测)</h6>
					</section>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
    import BScroll from "better-scroll";
	export default {
		data() {
			return {

			};
		},
        mounted() {
            this.scroll = new BScroll(this.$refs.salesWrapper, {
                click: true,
                // tap: true,
                pullUpLoad: true
            })
        }
	}
</script>

<style scoped>
	* {
		font-weight: normal
	}
    .wrapper {
            position: absolute;
            top: 0.4rem;
            bottom: 0;
            width: 100%;
            overflow: hidden;
	}
	.times {

		padding: 1.87rem 0 .98rem 0;
		height: 100%;
		overflow: auto;
	}

	.time-top {
		border: .02rem solid #260A0A;
		width: 1.86rem;
		height: 2.48rem;
		margin: 0 auto;
		text-align: center;
		position: relative;
		margin-bottom: .7rem;
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
		width: 2.4rem;
		position: absolute;
		left: -0.24rem;
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

	.caseOne {
		background: #F1F1F1;
		width: 6.86rem;
		height: 8.4rem;
		padding: .16rem;
		margin: 0 auto;
		text-align: center;
		margin-bottom: .64rem;
	}

	.caseOne>img {

		width: 6.54rem;
		height: 4.4rem;

	}

	.caseOne p:nth-of-type(1) {
		margin-top: .42rem;
		color: #3F2020;
		font-size: .32rem;
		font-family: PingFangSC-Medium, sans-serif;
		height: .38rem;

		line-height: .38rem;
		background: url(http://qianfeng1.qfjava.cn:8502/mp/static/discounts/images/page-1-_03.png) no-repeat center;
		background-size: 100% .24rem;
	}

	.caseOne p:nth-of-type(2) {
		text-align: left;
		font-size: .28rem;
		line-height: .46rem;
		color: #3F2020;
		font-family: PingFangSC-Regular, sans-serif;
		margin: .2rem .41rem 0;
	}

	.caseTwo {
		background: #F1F1F1;
		width: 6.86rem;
		height: 9.96rem;
		margin: 0 auto;
		padding: .64rem .54rem 0 .56rem;
	}

	.caseTwo p:nth-of-type(1) {
		color: #3F2020;
		font-size: .32rem;
		font-family: PingFangSC-Medium, sans-serif;
		height: .38rem;
		line-height: .38rem;
		background: url(http://qianfeng1.qfjava.cn:8502/mp/static/discounts/images/page-1-_03.png) no-repeat center;
		background-size: 100% .24rem;
		text-align: center;
	}

	.caseTwo p:nth-of-type(2) {
		color: #3F2020;
		font-size: .32rem;
		font-family: PingFangSC-Regular, sans-serif;
		height: .38rem;
		line-height: .38rem;
		margin: .4rem 1.08rem.32rem;
	}

	.caseTwo div {
		width: 5.76rem;
		height: 2.2rem;
		margin-bottom: .32rem;
		display: flex;
	}

	.caseTwo img {
		height: 2.2rem;
		margin-right: .24rem;
	}

	.caseTwo h3 {
		color: #BA874F;
		font-size: .32rem;
		line-height: .38rem;
		font-family: PingFangSC-Regular, sans-serif;
		margin: .44rem 0 .28rem;
	}

	.caseTwo h4 {
		color: #3F2020;
		font-size: .28rem;
		line-height: .34rem;
		font-family: PingFangSC-Regular, sans-serif;
	}

	.caseTwo div:nth-of-type(2) img {
		margin-right: 0;

	}

	.caseTwo div:nth-of-type(2) section {
		width: 2.88rem;
	}

	.caseThree {
		background: #F1F1F1;
		width: 6.86rem;
		height: 20.06rem;
		margin: .64rem auto .34rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.caseThree p:nth-of-type(1) {
		width: 100%;
		color: #3F2020;
		font-size: .32rem;
		font-family: PingFangSC-Medium, sans-serif;
		height: .38rem;
		line-height: .38rem;
		background: url(http://qianfeng1.qfjava.cn:8502/mp/static/discounts/images/page-1-_03.png) no-repeat center;
		background-size: 100% .24rem;
		text-align: center;
		margin: .64rem 0 .332rem;
	}

	.caseThree p:nth-of-type(2) {
		color: #3F2020;
		font-size: .32rem;
		font-family: PingFangSC-Regular, sans-serif;
		height: .38rem;
		line-height: .38rem;
	}

	.caseThree-img {
		height: 4.4rem;
		margin: .32rem .16rem .24rem;
	}

	.sce-con {
		width: 5.94rem;
	}

	.sce-con h5 {
		color: #3F2020;
		font-size: .28rem;
		line-height: .34rem;
		font-family: PingFangSC-Medium, sans-serif;
	}

	.sce-con h6 {
		color: #3F2020;
		font-size: .24rem;
		line-height: .56rem;
		font-family: PingFangSC-Regular, sans-serif;
	}

	.sce-con span {
		color: #BA874F;
		padding-left: .38rem;
		background: url(http://qianfeng1.qfjava.cn:8502/mp/static/discounts/images/gou_03.png) no-repeat;
		background-size: 0.38rem 0.21rem;
	}

	.sce-con h5:nth-of-type(1) {
		margin-bottom: .14rem;
	}

	.sce-con h5:nth-of-type(2) {
		margin: .16rem 0;
	}
</style>
