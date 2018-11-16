<template>
	<div class="myself">
		<div class="myself_com">
			<div class="myself_top">
				<div class="touxiang" @click="back()">
					<img src="../../../static/img/back.png">
				</div>
				<h2>编辑个人信息</h2>
			</div>
			<div class="myself_my">
				<div>
					<img src="../../../static/img/me.png" alt="">
				</div>
				<p>更换个人头像</p>
			</div>
			<form class="myself_n">
					<p>
						<label for="username">用户名</label>
						<input type="text" name="username" id="username" value="" placeholder="用户名6-20个字符,  储存后无法修改">
					</p>	
					<p>
						<label for="sex">性别</label>
						<button type="button" v-for="(item,index) in title"  
						@click="changeBg(index)"
						:class="changeIndex == index?'changeActive':''">{{item}}</button>
					</p>
					<p>
						<label for="mobile">手机号</label>
						<input type="text" name="mobile" id="mobile">
					</p>				
					<p>
						<label for="email">E-mail</label>
						<input type="text" name="email" id="email" placeholder="填写邮箱号">
					</p>
				
					<p>
						<button type="button" class="my_btn">
							<router-like to>保存</router-like>
						</button>
					</p>
						
					
			</form>
			
		</div>
	</div>
</template>

<script>
export default {
	 data(){
        return {
            title:["男士","女士"],
            changeIndex : -1,
            value1: true,
            value2: true
        }
    },
    methods : {
        changeBg(index){
            this.changeIndex = index;
        },
        back(){
            this.$router.back("/mine")
        }
    }
}
</script>

<style scoped>
	.myself {
		width: 100%;
		height: 100%;
		position: fixed;
		left:0;
		z-index: 3;
		background: #fff
	}
	.myself_top {
		width: 100%;
		height: 1.28rem;
		display: flex;
		background: #FAFAFA;
		padding-top: .4rem;
	}

	.myself_top>div:nth-child(1) {
		width: .8rem;
		height: .88rem;
		display: flex;
		align-items: center;
		justify-content: center
	}



	.myself_top>h2 {
		width: 2.6rem;
		height: .88rem;
		margin-left: 1.85rem;
		font-size: .36rem;
		color: #222222;
		line-height: .88rem;
		font-weight: bolder;
	}

	.myself_my {
		width: 100%;
		height: 2.44rem;
		margin-top:.8rem;
	}

	.myself_my>div {
		width: 1.56rem;
		height: 1.56rem;
		margin: .32rem auto 0
	}
	.myself_my>p {
		width: 1.44rem;
		height: .34rem;
		font-size: .24rem;
		color: #222222;
		line-height: .34rem;
		margin: .22rem auto;
	}

	.myself_n {
		margin-top:.4rem;
	}
	.myself_n>p{
		width:5.6rem;
		height:1rem;border-bottom:1px solid #EFEFEF;
		display: flex;align-items: center;
		margin:0 auto
	}
	.myself_n>p:nth-child(2)>button{width:1.04rem;height:.52rem;border:1px solid #B98652;margin-left:10%;background: #fff;color:#B98652;font-size:10px;outline: none}
	.myself_n>p:nth-child(2)>.changeActive{background: #B98652;color:#fff}



	.myself_n>p>label{width:1rem;font-size:.28rem;font-family: PingFangSC-Regular;color:#222}
	.myself_n>p>input{width:4rem;margin-left:10%;height:.9rem;border:0;outline: none;font-size:.24rem;color:#C3C3C3}
	.myself_n>p:last-child{width: 6.52rem;margin-top:1.6rem;}
	.my_btn{width:6.52rem;height:1rem;border:0;background: #3d1e20;color:#fff}

</style>
