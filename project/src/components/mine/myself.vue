
<template>

	<div class="myself">
		<div class="myself_com">
			<div class="myself_top">
				<div class="touxiang" @click="back()">
					<img src="http://qianfeng1.qfjava.cn:8502/mp/static/img/back.png">
				</div>
				<h2>编辑个人信息</h2>
			</div>
			
			<form class="myself_n" enctype="multipart/form-data">
				<div class="myself_my">
					<div id="preview">
						<img src="" id="imgs">
						<input type="file" id="image1" name="image1">
					</div>
					<p>更换个人头像</p>
				</div>
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
					<input type="text" name="mobile" id="mobile" value="">
				</p>				
				<p>
					<label for="email">E-mail</label>
					<input type="text" name="email" id="email" placeholder="填写邮箱号">
				</p>
			
				<p>
					<button type="button" class="my_btn" @click="preserve()">
						保存
					</button>
				</p>			
			</form>
			
		</div>
	</div>
</template>

<script>
import Vuex from "vuex";
import axios from "axios";
import { Toast } from 'mint-ui';
import jq from "../../jquery-1.11.3.js"

export default {
	 data(){
        return {
            title:["男士","女士"],
            changeIndex : -1,
			imageUrl:""
			// username:"",
			// sex:"",
			// mobile:"",
			// file:"",
		
        }
    },
    methods : {
		
		preserve(){
			this.changeIndex = this.changeIndex+1;
			let image1 = $("#image1");
			let username = $("#username").val();
			let mobile = $("#mobile").val();
			let sex = $("sex");
			let sexIndex = this.changeIndex;
			var formdata = new FormData();
			formdata.append("image1",image1[0].files[0])
			formdata.append("username",username)
			formdata.append("sex",sexIndex)
			formdata.append("mobile",mobile)
			this.changeIndex = -1;
			let _this = this;
			$.ajax({
				type:"post",
				url:"/mp/user/update",
				data:formdata,
				dataType:"json",
				cache:false,
				processData: false,
				contentType: false,
				success:function(data){
					
					console.log(data.data)
				
						Toast({
							message: '保存成功',
							iconClass: 'icon icon-success'
						});
						setTimeout(()=>{
							_this.$router.push("/mine")
						},2000)
						
					
					
				}
			})
		},
        changeBg(index){
			this.changeIndex = index;
        },
        back(){
            this.$router.back("/mine")
		},
		handleAvatarSuccess(res, file) {
		this.imageUrl = URL.createObjectURL(file.raw);
		console.log(file)
      },
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
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.el-upload>img{
		width:1.6rem;
		height:1.6rem;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: .8rem;
		height: .8rem;
		text-align: center;
	}
	.myself_top>h2 {
		width: 2.6rem;
		height: .88rem;
		margin-left: 1.88rem;
		font-size: .36rem;
		color: #222222;
		line-height: .88rem;
		font-weight: bolder;
	}

	.myself_my {
		width: 100%;
		height: 2.44rem;
		margin:.8rem 0 .2rem;
	}
	#image1{
		width: 20px;height:20px;
		opacity: 0
	}
	.myself_my>#preview {
		width: 1.6rem;
		height: 1.6rem;
		margin:0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../../static/img/me.png) no-repeat
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
	.myself_n>p:nth-child(3)>button{width:1.04rem;height:.52rem;border:1px solid #B98652;margin-left:10%;background: #fff;color:#B98652;font-size:10px;outline: none}
	.myself_n>p:nth-child(3)>.changeActive{background: #B98652;color:#fff}



	.myself_n>p>label{width:1rem;font-size:.28rem;font-family: PingFangSC-Regular;color:#222}
	.myself_n>p>input{width:4rem;margin-left:10%;height:.9rem;border:0;outline: none;font-size:.24rem;color:#C3C3C3}
	.myself_n>p:last-child{width: 6.52rem;margin-top:1.6rem;}
	.my_btn{width:6.52rem;height:1rem;border:0;background: #3d1e20;color:#fff}

</style>
