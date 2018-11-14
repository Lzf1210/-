<template>
	<div class="details4">
		<div class="banner">
			<img src="../../../static/classifyImg/banner_05.png" alt="">
		</div>
		<div class="leader">
			<div class="borderl"></div>
			<p>水产海鲜</p>
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
						imgsrc:"../../../static/classifyImg/details4_01.png",
						name : "全部",
						id:1
							
					},
					{
						imgsrc:"../../../static/classifyImg/details4_02.png",
						name:"鱼虾冻品",
						
					},
					{
						imgsrc:"../../../static/classifyImg/details4_03.png",
						// name:"干果蜜饯",
					}
					
				]
			}
		}
	}
	
</script>

<style>
	.details4{
		width:5.5rem;
		height: 11.1rem;
		float: right;
	}
	.details4>.banner{
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
	.details4>ul>li{
		width: 1.2rem;
		height: 1.76rem;
		float: left;
		margin:.48rem .31rem 0;
		text-align:center;
	}
	.details4>ul>li>img{
		width: 1.2rem;
		/* height: 1.2rem; */
	}
	.details4>ul>li>p{
		padding-top: .16rem;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #222222;
		// font-weight: 600;
	}
</style>