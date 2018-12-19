<template>
	<div class="safety">
		<div class="safety_con">
			<div class="safety_top">
				<div @click="back()">
					<img src="http://qianfeng1.qfjava.cn:8502/mp/static/img/back.png">
				</div>
				<h2>安全中心</h2>
			</div>
			<div class="safety_form">
				<div>
					<img src="http://qianfeng1.qfjava.cn:8502/mp/static/img/right.png">
					<p>登录密码</p>
					<span>修改</span>
				</div>
				<div>
					<img src="http://qianfeng1.qfjava.cn:8502/mp/static/img/right.png">
					<p>手机验证</p>
				</div>
				<div>
					<img src="http://qianfeng1.qfjava.cn:8502/mp/static/img/no.png">
					<p>邮箱验证</p>
					<span>暂不支持此功能</span>
				</div>
				<div>
					<img src="http://qianfeng1.qfjava.cn:8502/mp/static/img/no.png">
					<p>支付密码</p>
					<span>设置</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    methods : {
		back(){
			this.$router.back("/mine")
		}
	}
}
</script>

<style scoped>

.safety{
		width:100%;
		height: 100%;
		position: fixed;
		left:0;
		background: #fff;
		z-index:3;
     }

.safety_top{
	width: 100%;
	height: 1.28rem;
	display: flex;
	background: rgba(250,250,250,0.9);
	padding-top: .4rem;
}
.safety_top>div:nth-child(1){
	height:.88rem;
	width:.88rem;
	display: flex;
	justify-content: center;
	align-items: center
	
}

.safety_top>h2{
	width: 2.6rem;
	height: .88rem;
	margin-left:2.18rem;
	font-size: .36rem;
	color: #222222 ;
	line-height: .88rem;
	font-weight:bolder;
}	
.safety_form{
	width: 5.6rem;
	height: 4.4rem;
	margin: .82rem;
	margin-top: .24rem ;
}
.safety_form>div{
	width: 100%;
	height: 1.04rem;	
	border-bottom: 2px solid #EFEFEF;	
	display: flex;	
	align-items: center
}

.safety_form>div>p{
	font-size: .28rem;
	color:rgba(34,34,34,1) ;
	width:1.5rem;
	margin-left:9.6%
}
.safety_form>div>span{
	display: block;
	height:1.04rem;
	width:2.9rem;
	text-align: right;
	color:rgba(185,134,82,1);
	line-height: 1.04rem;
	font-size:10px;
}
.safety_form>div:nth-child(3)>span{color:#777777}
</style>