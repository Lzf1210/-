<template>
	<div class="details1">
		<div class="banner">
			<img src="http://qianfeng1.qfjava.cn:8502/mp/static/classifyImg/banner_02.png" alt="">
		</div>
		<div class="leader">
			<div class="borderl"></div>
			<p>粮油副食</p>
			<div class="borderr"></div>
		</div>
		<ul>
			<li v-for="(item,index) in lists">
				<img :src="item.imgsrc"/>
				<p>{{item.name}}</p>
			</li>
		</ul>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				lists : [
					{
						imgsrc:"http://qianfeng1.qfjava.cn:8502/mp/static/classifyImg/details1_01.png",
						name : "全部",
						id:1
							
					},
					{
						imgsrc:"http://qianfeng1.qfjava.cn:8502/mp/static/classifyImg/details1_02.png",
						name:"安心米面",
						id:2
						
					},
					{
						imgsrc:"http://qianfeng1.qfjava.cn:8502/mp/static/classifyImg/details1_03.png",
						name:"南北干货",
						id:3
					},
					{
						imgsrc:"http://qianfeng1.qfjava.cn:8502/mp/static/classifyImg/details1_04.png",
						name:"火锅底料",
						id:4
					},
					{
						imgsrc:"http://qianfeng1.qfjava.cn:8502/mp/static/classifyImg/details1_05.png",
						name:"面点小食",
						id:5
					},
					{
						imgsrc:"http://qianfeng1.qfjava.cn:8502/mp/static/classifyImg/details1_06.png",
						name:"健康食油",
						id:6
					}
				]
			}
		}
	}
	
</script>

<style>
	.details1{
		width:5.5rem;
		height: 11.1rem;
		float: right;
	}
	.details1>.banner{
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
	.details1>ul>li{
		width: 1.2rem;
		height: 1.76rem;
		float: left;
		margin:.48rem .31rem 0;
		text-align:center;
	}
	.details1>ul>li>img{
		width: 1.2rem;
		height: 1.2rem;
	}
	.details1>ul>li>p{
		padding-top: .16rem;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #222222;
	}
</style>