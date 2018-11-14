<template>
	<div class="details">
		<div class="banner">
			<img src="../../../static/classifyImg/banner_01.png" alt="">
		</div>
		<div class="leader">
			<div class="borderl"></div>
			<p>厨房调味</p>
			<div class="borderr"></div>
		</div>
		<ul>
			<li>
				<img src="../../../static/classifyImg/details_01.png" alt="">
				<P>全部</P>
			</li>
			<li>
				<img src="../../../static/classifyImg/details_02.png" alt="">
				<p>果干蜜饯</p>
			</li>
			<li>
				<img src="../../../static/classifyImg/details_03.png" alt="">
				<p>调味作料</p>
			</li>
			<li>
				<img src="../../../static/classifyImg/details_04.png" alt="">
				<p>调味酱料</p>
			</li>
			<li>
				<img src="../../../static/classifyImg/details_05.png" alt="">
				<p>调味组合</p>
			</li>
			<li>
				<img src="../../../static/classifyImg/details_06.png" alt="">
				<p>发酵食醋</p>
			</li>
		</ul>
		
	</div>
</template>

<script>
	
	
</script>

<style>
	.details{
		width:5.5rem;
		height: 11.1rem;
		float: right;
	}
	.details>.banner{
		width: 4.82rem;
		height: 1.6rem;
		margin:.34rem .34rem .48rem;
	}
	.banner>img{
		width: 4.82rem;
		height: 1.6rem;
	}
	.leader{
		width: 2.64rem;
		height: .44rem;
 		margin-left: 1.44rem;
		position: relative;
		font-family: PingFangSC-Medium;
		text-align: center;
		font-size: 16px;
		color: #222222;
	}
	
	.borderl{
		float: left;
		width: .46rem;
		height: 2px;
		background: #000;
		border: 1px solid #999999;
		position: absolute;
		top: .2rem;
	}
	.borderr{
		float: right;
		width: .46rem;
		height: 2px;
		background: #000;
		border: 1px solid #999999;
		position: absolute;
		top:.2rem 	;
		right: 0;
	}
	.details>ul>li{
		width: 1.2rem;
		height: 1.76rem;
		float: left;
		margin:.48rem .31rem 0;
		text-align:center;
	}
	.details>ul>li>img{
		width: 1.2rem;
		height: 1.2rem;
	}
	.details>ul>li>p{
		padding-top: .16rem;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #222222;
	}
</style>