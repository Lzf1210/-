<template>
	<div class="times">
		<div class="time-top">
			<p class="p1">美烹</p>
			<p class="p2">开启健康好时光</p>
			<p class="p3"></p>
		</div>
		<div class="caseOne">
			<img src="./images/page-1-健康生活_03.png" alt="">
			<p>美烹起源</p>
			<p>近年，美烹在北京进行了一次入户调研，调研结果发现，大部分年轻妈妈会用各种途径去寻
				找性价比高的产品，价格和安全是所有妈妈们关注的重点。而在烟台，并没有一家能够放心
				的本地商城能做到平价和安全，同时还能极速送货上门，所以美烹应运而生。
            </p>
		</div>
		<div class="caseTwo">

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.times {
		padding-top: .59rem;
		height: 100%;
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
	}

	.caseOne>img {

		width: 6.54rem;
		height: 4.4rem;

	}
    .caseOne p:nth-child(1){
        margin-top: .42rem;
    }
</style>
