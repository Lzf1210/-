<template>
	<div class="login">
		<div class="login_con">
			<div class="log_top">
				<h2>手机验证码登录</h2>
			</div>
			<form class="input_con">
				<div>
					<label>
						<input type="text" class="mobile" placeholder="请输入手机号" name="mobile" v-model="objPhone.mobile">
					</label>
					<button type="button" class="input_btn1"  @click="sendcode()">{{btntxt}}</button>
					<!-- <input type="button" value="获取验证码" class="input_btn1" @click="sendcode()"> -->
				</div>
				<div>
					<label>
						<input type="password" class="password" placeholder="请输入密码" v-model="objPhone.password" name="password">
					</label>
				</div>
				<div>
					<label>
						<input type="text" class="code" placeholder="输入验证码" v-model="objPhone.codee" name="code">
					</label>
				</div>
				<p>首次手机号登录将为您注册</p>
				<p class="p_show" v-show="showTishi">{{tishi}}</p>
				<button type="button" class="input_btn2" @click="handleLogin()">登录</button>
			</form>
		</div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	import axios from "axios";
	import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				showTishi: false,
				tishi: '',
				disabled: false,
				time: 0,
				btntxt: "获取验证码",
				objPhone: {
					mobile: '',
					password: '',
					codee:'',
				},
			}

		},
		methods: {
			//验证手机号码部分
			sendcode() {
				console.log(this.objPhone.mobile);
				var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
				if (this.objPhone.mobile == '') {
					this.objPhone.mobile = "手机号不能为空";
				} else if (!reg.test(this.objPhone.mobile)) {
					this.objPhone.mobile = "请输入正确的手机号";
				} else if (reg.test(this.objPhone.mobile)) {
					this.time = 60;
					this.disabled = true;
					this.timer();
					axios({
						method: "get",
						url: "/mp/user/sendcode?mobile="+this.objPhone.mobile,
					}).then((data) => {
						console.log(data)
					})
				}
			},
			timer() {
				if (this.time > 0) {
					this.time--;
					this.btntxt = this.time + "s后重新获取";
					setTimeout(this.timer, 1000);
				} else {
					this.time = 0;
					this.btntxt = "获取验证码";
					this.disabled = false;
				}
			},
			handleLogin() {
				
				
				var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
				if (this.objPhone.mobile == '') {
					this.objPhone.mobile = "手机号不能为空";
					// this.objPhone.password = "密码不能为空";
				}else if(!reg.test(this.objPhone.mobile)){
					this.objPhone.mobile = "请输入正确的手机号";
				}else{
					var objPhone = this.objPhone;
					/*接口请求*/
					axios({
						method: "get",

						// http://jianglianglong.qfjava.cn:8080/mp/user/reg
						url: "/mp/user/reg?mobile="+this.objPhone.mobile+"&password="+this.objPhone.password+"&code="+this.objPhone.codee
					}).then((data) => {
						// this.showTishi = true;
						// this.tishi = data.data.data;
						console.log(data.data.data)
						Toast({
							message: '登陆成功',
							iconClass: 'icon icon-success'
						});
						setTimeout(()=>{
							this.$router.push('/home/jingx')
						},2000)
								
	
							
					
						

						// if (data.data.data =='注册成功' ) {
						// 	this.tishi = "手机号第一次登录将为您自动注册";
						// 	this.showTishi = true;
						// 	setTimeout(()=>{
						// 		this.$router.push('/home/jingx')	
						// 		console.log(111)	
						// 	},4000)
						// 	this.$router.push('/home')
						// }
						// else if (data.data[0].password != this.objPhone.password) {
						// 	this.objPhone.password = "密码输入错误";
						// } else if (data.data[0].mobile == this.objPhone.mobile && 
						// data.data[0].password == this.objPhone.password && 
						// data.data[0].code == this.objPhone.code) {
						// 	// this.$router.push('/home')
						// }

					 })
				 }
			},
		},
	}
</script>

<style scoped>
	
	.login {
		width: 100%;
		height: 100%;
		background: url(http://qianfeng1.qfjava.cn:8502/mp/static/img/login_3.png) no-repeat;
		position: fixed;
		left:0;
		z-index:3;

	}
	.log_top {
		width: 100%;
		height: 1.28rem;
		display: flex;
		background: rgba(250, 250, 250, 0.9);
		padding-top: .4rem;
		align-items: center;
		justify-content: center
	}
	.log_top>h2 {
		font-size: .36rem;
		color: #222222;
		font-weight: bolder;
		font-family:PingFangSC-Regular;

	}
	.input_con {
		margin: 1.22rem 0 0 .86rem;
	}
	.input_con>div {
		width: 5.8rem;
		height: .8rem;
		margin-bottom: .58rem;
		background: #E8E8E8;
	}
	.mobile {
		width: 3.38rem;
		height: .8rem;
		border: 0;
		outline: none;
		background: #E8E8E8;
		font-size: .28rem;
		margin-left: .38rem;
		
	}

	.password,
	.code {
		width: 5.42rem;
		height: 100%;
		background: #E8E8E8;
		border: 0;
		outline: none;
		font-size: .28rem;
		margin-left: .38rem;
	}

	.input_con>div:nth-child(1)>.input_btn1 {
		width: 1.6rem;
		height: .7rem;
		background: #E8E8E8;
		border: 0;
		font-size: .24rem;
		color: #777777;
		outline: none;
	}

	.input_con>p {
		width: 5.8rem;
		height: .28rem;
		font-size: .24rem;
		color: #777777;
		line-height: .28rem;
		margin-bottom: .66rem;
		
	}
	.input_con>.p_show{text-align: right;color:#3d1e20;font-size:14px}

	.input_con>.input_btn2 {
		width: 5.8rem;
		height: 1rem;
		background: #3d1e20;
		font-size: .28rem;
		color: #fff;
		border: 0;
		outline: none;
	}
	.mint-indicator{}
</style>
