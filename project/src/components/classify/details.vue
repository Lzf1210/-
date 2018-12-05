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
			<li v-for="(item,index) in lists">
				<!-- <router-link :to="{name:item.imgsrc}"> -->
					<img  :src ="item.imgsrc"/>
					<p>{{item.name}}</p>
				<!-- </router-link> -->
			</li>
		</ul>
		
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default{
		data(){
			return {
				lists : [
					{
						imgsrc:"../../../static/classifyImg/details_01.png",
						name : "全部",
						id:1
							
					},
					{
						imgsrc:"../../../static/classifyImg/details_02.png",
						name:"果干蜜饯",
						id:2
					},
					{
						imgsrc:"../../../static/classifyImg/details_03.png",
						name:"调味作料",
						id:3
					},
					{
						imgsrc:"../../../static/classifyImg/details_04.png",
						name:"调味酱料",
						id:4
					},
					{
						imgsrc:"../../../static/classifyImg/details_05.png",
						name:"调味组合",
						id:5
					},
					{
						imgsrc:"../../../static/classifyImg/details_06.png",
						name:"发酵食醋",
						id:6
					}
				]
			}
		},
		computed:{
			...Vuex.mapState({
				list:state=>state.classify.list
			})
		}
	}
	
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