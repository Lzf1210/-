<template>
	<div class="wrapper" ref="detailWrapper">
        <div class="content">
		
	<div class="goodsdetail" v-for="(item,index) in goodsDetailList">
		
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="(imgs,index) in item.imageList">
		        	<img :src="imgs"/>
		        </div>
		    </div>
		    <!-- 如果需要分页器 -->
		   <div class="swiper-pagination" style="z-index: 9999;"></div>
		</div>
		<div class="goodsmain">
			<ul>
				<li>{{item.goodsName}}</li>
				<li></li>
				<li><span>￥{{item.goodsPrice}}</span><del>￥3.42</del></li>
			</ul>
			<div class="huodong">
				<span>活动</span>
				<span>好食狂化节-全场9折</span>
			</div>
		</div>
		<div class="detail">
			<div class="fangxin">
				<p>为什么他让人放心</p>
			</div>
			<div class="tubiao">
				<ul>
					<li>
						<div>
							<img src="static/goodsimg/1.png"/>
						</div>
						<p>非转基因</p>
					</li>
					<li>
						<div>
							<img src="static/goodsimg/2.png"/>
						</div>
						<p>产地直供</p>
					</li>
					<li>
						<div>
							<img src="static/goodsimg/3.png"/>
						</div>
						<p>发酵食品</p>
					</li>
					<li>
						<div>
							<img src="static/goodsimg/4.png"/>
						</div>
						<p>国际保证</p>
					</li>
				</ul>
			</div>
			<div class="alldetail">
				<p>详情</p>
				<ul>
					<li>
						<span>品名</span>
					</li>
					<li>
						<span>规格</span>
					</li>
					<li>
						<span>保存方式</span>
					</li>
					<li>
						<span>保质期</span>
					</li>
					<li>
						<span>制造商</span>
					</li>
					<li>
						<span>生产许可证</span>
					</li>
					<li>
						<span>产地</span>
					</li>
					<li>
						<span>生产标准号</span>
					</li>
					<li>
						<span>箱规</span>
					</li>
					<li>
						<span>食用方法</span>
					</li>
				</ul>
				<ul>
					<li>
						<span>{{item.goodsName}}</span>
					</li>
					<li>
						<span>{{item.goodsDetail}}</span>
					</li>
					<li>
						<span>{{item.saveStyle}}</span>
					</li>
					<li>
						<span>{{item.saveTime}}</span>
					</li>
					<li>
						<span>山东欣和神州一食品有限公司</span>
					</li>
					<li>
						<span>{{item.goodsNo}}</span>
					</li>
					<li>
						<span>{{item.manuFacturer}}</span>
					</li>
					<li>
						<span>{{item.goodsStandNo}}</span>
					</li>
					<li>
						<span>{{item.goodsDetail}}</span>
					</li>
					<li>
						<span>可依据个人口味加入热水冲调，放置2-3分钟后食用。</span>
					</li>
				</ul>
				<div class="jifen">可抵用积分数 157</div>
			</div>
		</div>
		<div class="chanpin">
				<h1>美烹的产品</h1>
				<p>美烹生鲜我们提供每日食用的食物与食品。这些食材不稀奇也不难购买，却值得被细细品尝与分享。我们尝试在稀疏平常的日子里去细细探索他们的魅力。所以我们倾注了大量时间挑选每一款食材为您提供最大的便利。这个过程就好比酿造，不能着急不能分心。因此，我们的每一个员工都是匠心酿造者，效法酵素及酿造的精神寻觅好食，将那些被忙碌中忽略的美食一一挖掘在您的眼前。</p>
		</div>
		<img src="static/goodsimg/味噌汤.png"/>
		<div class="chanpin">
			<h1>美烹的每一克</h1>
			<p>平凡的原料有着不平凡的价值。所展示的食材生活中随处可见，但是它的每一克都有着你想不到的价值。味噌是一种调味品，以营养丰富味道独特而风靡日本。</p>
		</div>
		<img src="static/goodsimg/豆腐.png"/>
		<div class="chanpin">
			<h1>美烹的工艺</h1>
			<p>食材和食品都有严谨的挑选过程，排除非必要性的加工过程，尽量保护食材的原有味道。味噌是由发酵过的大豆（黄豆）制成，主要为糊状。是一种调味料，也被用作为汤底。</p>
		</div>
		<img src="static/goodsimg/豆腐汤.png"/>
		<div class="chanpin">
			<h1>美烹的工艺</h1>
			<p>食材和食品都有严谨的挑选过程，排除非必要性的加工过程，尽量保护食材的原有味道。味噌是由发酵过的大豆（黄豆）制成，主要为糊状。是一种调味料，也被用作为汤底。</p>
		</div>
		<img src="static/goodsimg/味增汤2.png"/>
	</div>
        
        </div>
				<div class="imgg">
					<img src="../../../static/img/back.png" @click="handleBack()">
				</div>
	</div>
       
</template>

<script>
import "../../../node_modules/swiper/dist/css/swiper.css";
import Swiper from "swiper";
import BScroll from "better-scroll";
import Vuex from "vuex";
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.detailWrapper, {
      click: true,
      // tap: true,
      pullUpLoad: true
    });
		var mySwiper = new Swiper('.swiper-container', {
                loop:true,
                autoplay: {
                    delay: 1200,//1秒切换一次
                },
				effect: 'coverflow',
				slidesPerView: 2,
				centeredSlides: true,
				coverflowEffect: {
					rotate: 30,
					stretch: 10,
					depth: 60,
					modifier: 2,
					slideShadows: true
				},
			})

	},
		

  
  created() {
//    axios({
// 		 method:"get",
// 		 url:"http://localhost:3000/details?id="+this.$route.query.id,
// 		 }).then((data)=>{
// 			 console.log(data);
// 		 })
   this.handleGetDetail(this.$route.query.id)//获取详情页信息
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
		...Vuex.mapActions({
			handleGetDetail:"goodsdetail/handleGetDetail"
		})
  },
	computed:{
		...Vuex.mapState({
					goodsDetailList:state=>state.goodsdetail.goodsDetailList
		})
		
	}
		
	
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 0.4rem;
  bottom:0.98rem;
  width: 100%;
  overflow: hidden;
}

.goodsdetail {
  height: 100%;
  width: 100%;
  /* position: fixed;
	z-index: 2;*/
  overflow: auto;
}
.swiper-container {
  width: 100%;
}
.swiper-slide {
		width: 7.5rem;
		height: 4rem;
		display: flex;
		justify-content: center;
	}

	.swiper-slide>img {
		height: 100%;
	}

.goodsmain ul {
  padding: 0.32rem 0;
  margin: 0 0.32rem;
  border-bottom: 1px solid #eeeeee;
}
.goodsmain ul li {
  line-height: 0.56rem;
}
.goodsmain ul li:nth-of-type(1) {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #696969;
  letter-spacing: 0;
}
.goodsmain ul li:nth-of-type(2) {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #000000;
  letter-spacing: 0;
}
.goodsmain ul li:nth-of-type(3) span:nth-of-type(1) {
  font-family: PingFang-SC-Medium;
  font-size: 14px;
  color: #be141c;
  letter-spacing: 0;
}
.goodsmain ul li:nth-of-type(3) del {
  margin-left: 0.1rem;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #9b9b9b;
  letter-spacing: 0;
}
.huodong {
  height: 0.96rem;
  padding: 0.32rem;
  margin-bottom: 0.16rem;
}
.huodong span {
  display: inline-block;
}
.huodong span:nth-of-type(1) {
  background: #3f2021;
  height: 0.42rem;
  width: 0.6rem;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 0.42rem;
  text-align: center;
}
.huodong span:nth-of-type(2) {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #422324;
  letter-spacing: 0;
}
.detail {
  background: #fff;
}
.fangxin p {
  font-family: PingFang-SC-Medium;
  font-size: 14px;
  color: #3f2021;
  letter-spacing: 0;
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 0.32rem;
  border-bottom: 1px solid #e0e0e0;
}
.tubiao ul {
  margin-left: 0.48rem;
  padding: 0.56rem 0;
  overflow: hidden;
}
.tubiao li {
  float: left;
  margin: 0 0.24rem;
}
.tubiao li img {
  width: 0.48rem;
  height: 0.48rem;
  margin-left: 0.32rem;
}
.tubiao li p {
  font-family: PingFang-SC-Medium;
  font-size: 14px;
  color: #3f2021;
  letter-spacing: 0;
  line-height: 0.8rem;
  height: 0.8rem;
}
.alldetail p {
  font-family: PingFang-SC-Medium;
  font-size: 14px;
  color: #b88658;
  letter-spacing: 0;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
}
.alldetail {
  overflow: hidden;
  margin-bottom: 0.16rem;
}
.alldetail ul {
  float: left;
}
.alldetail ul:nth-of-type(1) {
  margin-left: 0.32rem;
  width: 1.76rem;
}
.alldetail ul:nth-of-type(2) {
  width: 4.76rem;
}
.alldetail li {
  font-family: PingFang-SC-Medium;
  font-size: 12px;
  color: #000000;
  letter-spacing: 0;
  height: 0.68rem;
  line-height: 0.34rem;
}
.alldetail .jifen {
  clear: both;
  margin-left: 0.32rem;
  height: 0.68rem;
  line-height: 0.68rem;
}
.chanpin {
  padding: 0.32rem;
  background: #fff;
}
.chanpin h1 {
  font-family: PingFang-SC-Medium;
  font-size: 14px;
  color: #3d1e1f;
  letter-spacing: 0;
  line-height: 0.8rem;
  height: 0.8rem;
  text-align: center;
  margin-bottom: 0.4rem;
}
.chanpin p {
  font-family: PingFang-SC-Medium;
  font-size: 12px;
  color: #888888;
  letter-spacing: 0;
  line-height: 30px;
}
.wrapper .imgg {
  position: fixed;
  top: 0.6rem;
  left: 0.4rem;
  width: 0.6rem;
  height: 0.6rem;
	background: white;
	border-radius: 50%;
	padding-top: 0.1rem;
	padding-left: 0.05rem;
}
.wrapper .imgg > img {
  width: 0.4rem;
  height: 0.4rem;
	display: inline-block;
}
</style>

