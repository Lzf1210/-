<template>
	<div class="details3">
		<div class="banner">
			<img src="http://qianfeng1.qfjava.cn:8502/mp/static/classifyImg/banner_04.png" alt="">
		</div>
		<div class="leader">
			<div class="borderl"></div>
			<p>安心蔬菜</p>
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
						imgsrc:"http://qianfeng1.qfjava.cn:8502/mp/static/classifyImg/details3_01.png",
						name : "全部",
						id:1
							
					},
					{
						imgsrc:"http://qianfeng1.qfjava.cn:8502/mp/static/classifyImg/details3_02.png",
						name:"新鲜水果",
						id:2
						
					},
					{
						imgsrc:"http://qianfeng1.qfjava.cn:8502/mp/static/classifyImg/details3_03.png",
						name:"叶菜类",
						id:3
					},
					{
						imgsrc:"http://qianfeng1.qfjava.cn:8502/mp/static/classifyImg/details3_04.png",
						name:"豆制品类",
						id:4
					},
					{
						imgsrc:"http://qianfeng1.qfjava.cn:8502/mp/static/classifyImg/details3_05.png",
						name:"茄果瓜花",
						id:5
					},
					
				]
			}
		}
	}
	
</script>

<style>
	.details3{
		width:5.5rem;
		height: 11.1rem;
		float: right;
	}
	.details3>.banner{
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
	.details3>ul>li{
		width: 1.2rem;
		height: 1.76rem;
		float: left;
		margin:.48rem .31rem 0;
		text-align:center;
	}
	.details3>ul>li>img{
		width: 1.2rem;
		height: 1.2rem;
	}
	.details3>ul>li>p{
		padding-top: .16rem;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #222222;
	}
</style>