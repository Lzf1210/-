<template>
	<div class="goodsfooter">
		<div @click="handleGogo()">
			<i class="iconfont icon-daohanggouwuche"></i>
			<p>购物车</p>
		</div>
		<div>
			<img src="static/goodsimg/Page1.png" />
			<p>喜欢</p>
		</div>
		<div class="bottom">
			<span @click="handleReduce()">-</span>
			<span >{{sum}}</span>
			<span @click="handleAdd()">+</span>
		</div>
		<div>
			<p @click="handleGo()">加入购物车</p>
		</div>
		<div class="shop">
			{{Num}}
		</div>
		<div class="mark" v-show="show" @click="handleSuccess()">
			<div class="deleteSuccess">
				<p>添加成功</p>
				<p><img src="../../../static/goodscart/del.png"></p>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	import Vuex from "vuex";
	export default {
		data() {
			return {
				sum: 1,
				Num: 0,
				id: "",
				show: false
			};
		},
		methods: {
			handleAdd() {
				this.sum++
			},
			handleReduce() {
				if (this.sum <= 0) {
					this.sum = 0
				} else {
					this.sum--
				}
			},
			handleGo() {
				axios({
					method: "get",
					url: "/mp/cart/addgoods?num="+this.sum+"&goodsId="+this.id,
					// data: {
					// 	"num": this.sum,
                    //     "goodsId":this.id
					// }
				}).then((data) => {
				    this.show = true;
				});
			},
			handleSuccess() {
				this.show = false;
			},
			handleGogo(){
				this.$router.push("/goodscart")
			}
		},
		created() {
			this.id=this.$route.query.id
		}
	}
</script>

<style scoped>
	.mark {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.1);
		position: fixed;
		top: 0.4rem;
		left: 0;
	}
	.mark .deleteSuccess{
		width:6.06rem;
		height:3rem;
		background: white;
		margin-left: 0.8rem;
		margin-top: 4.5rem;
		border-radius: .2rem;
		display: flex; 
		flex-direction: column;
		align-items: center;
		justify-content: space-around
	}
  .deleteSuccess>p:nth-child(1){font-size: 20px;padding-top:10px;}
	/* .deleteSuccess>p:nth-child(2){line-height: 1.3rem;padding-left:2.3rem;padding-top: 0.3rem;}	 */
	.deleteSuccess>p:nth-child(2)>img{
		width: 1rem;
		height: 1rem;
		margin-bottom:10px;
	}

	.shop {
		width: 0.4rem;
		height: 0.4rem;
		background: red;
		position: fixed;
		bottom: 0.6rem;
		left: 0.7rem;
		border-radius: 50%;
		z-index: 5;
		text-align: center;
	}

	.goodsfooter {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #FFFFFF;
		border: 2px solid #D6D6D6;
		height: .98rem;
		z-index: 3;

	}

	.goodsfooter i {
		font-size: 0.35rem;
		display: inline;
	}

	.goodsfooter>div:nth-of-type(1)>p {
		font-size: 12px
	}

	.goodsfooter>div:nth-of-type(2)>p {
		font-size: 13px
	}

	.goodsfooter>div {
		float: left;
	}

	.goodsfooter>div:nth-of-type(1) {
		width: 1.18rem;
		text-align: center;
	}

	.goodsfooter>div:nth-of-type(1) img {
		margin-left: .42rem;
	}

	.goodsfooter>div:nth-of-type(2) {
		padding-top: 3px;
		width: 1.16rem;
		text-align: center;
	}

	.goodsfooter>div:nth-of-type(2) img {
		margin-left: .36rem;
	}

	.goodsfooter>div:nth-of-type(3) {
		padding-top: .12rem;
	}

	.goodsfooter div:nth-of-type(3) span {
		display: inline-block;
		width: .74rem;
		height: .6rem;
		text-align: center;
		font-size: 18px;
		border: 1px solid #B8CAD2;
		float: left;
	}

	.goodsfooter>div:nth-of-type(3) input {
		border: 0;
		width: .74rem;
		height: .6rem;
		float: left;
		border: 1px solid #B8CAD2;
		padding-left: .28rem;
	}

	.goodsfooter>div:nth-of-type(4) {
		float: right;
		background: #3F2021;
		width: 2.5rem;
		height: .92rem;
		font-family: .PingFang-SC-Medium;
		font-size: 16px;
		color: #FFFFFF;
		letter-spacing: 0;
		line-height: .92rem;
		text-align: center;
	}

	.goodsfooter>.bottom>span {
		width: 0.18rem;
		height: 0.15rem;
	}
</style>
