<template>
<div class="con_c">
    <div class="wrapper" ref="goodsWrapper">
        <div class="content">
            <banner-com></banner-com>
            <div class="nav_jx">
                <div>
                    <img src="http://qianfeng1.qfjava.cn:8502/mp/static/home/Page1-1.png" alt="">
                    <a href="##">美烹宅配</a>
                </div>
                <div>
                    <img src="http://qianfeng1.qfjava.cn:8502/mp/static/home/Page2-1.png" alt="">
                    <a href="##">美烹新品</a>
                </div>
                <div>
                    <img src="http://qianfeng1.qfjava.cn:8502/mp/static/home/Page3-1.png" alt="">
                    <a href="##">美烹环保</a>
                </div>
                <div>
                    <img src="http://qianfeng1.qfjava.cn:8502/mp/static/home/Page4-1.png" alt="">
                    <a href="##">企业团购</a>
                </div>
                <div>
                    <img src="http://qianfeng1.qfjava.cn:8502/mp/static/home/Page5-1.png" alt="">
                    <a href="##">美烹优惠</a>
                </div>
            </div>
                <div class="jx_ccc"></div>
            <div class="jx_ad">
                公告:欣和自营电商平台，品质保障
            </div>
                 <div class="jx_ccc"></div>
            <p class="jx_con">美烹好食</p>
                <div class="jx_haoshi">
                    <a href="##"><img src="http://qianfeng1.qfjava.cn:8502/mp/static/home/Rectangle6Copy@2x(2).png" alt=""></a>
                    <a href="##"><img src="http://qianfeng1.qfjava.cn:8502/mp/static/home/Rectangle6Copy@2x(1).png" alt=""></a>
                </div>
            <p class="jx_con" @click="handle_chanpin()">明星产品></p>
                <div 
            class="content_c" 
            v-for="(item,index) in home_fushi"
            @click="handleGo(item.id)"
            >
                <img :src="'http://ceshi.qfjava.cn/'+(item.imageList?item.imageList:'')"/>
                <p>{{item.goodsName}}</p>
                <p>{{item.goodsDetail}}</p>
                <p>{{item.goodsPrice | home_price}}</p>
            </div>
            <p class="jx_con" @click="handle_tiaowei()">厨房调味></p>
                <div 
            class="content_c" 
            v-for="(item,index) in home_fushi"
            @click="handleGo(item.id)"
            >
               <img :src="'http://ceshi.qfjava.cn/'+(item.imageList?item.imageList:'')"/>
                <p>{{item.goodsName}}</p>
                <p>{{item.goodsDetail}}</p>
                <p>{{item.goodsPrice | home_price}}</p>
            </div>
            <p class="jx_con" @click="handle_guoshu()">安心果蔬></p>
                <div 
            class="content_c" 
            v-for="(item,index) in home_fushi"
            @click="handleGo(item.id)"
            >
               <img :src="'http://ceshi.qfjava.cn/'+(item.imageList?item.imageList:'')"/>
                <p>{{item.goodsName}}</p>
                <p>{{item.goodsDetail}}</p>
                <p>{{item.goodsPrice | home_price}}</p>
            </div>
            
        </div>
    </div>
    
</div>
</template>

<script>
import banner from './banner_jx';
import Vuex from 'vuex';
import BScroll from 'better-scroll';
import contentfushi from './content_fushi'
export default {
    components:{
        'banner-com':banner,
        'contentfushi-com':contentfushi
    },
    data(){
        return{
            pageNum:1 
        }
    },
    filters:{
        // 价格前加￥
        "home_price":(val)=>{
            return '￥' + val;
        }
    },
    created(){
        this.handleHome_fushiget(this.pageNum);
    },
    computed:{
        ...Vuex.mapState({
            home_fushi:state=>state.home.home_fushi
        })
    },
    methods:{
        ...Vuex.mapActions({
            handleHome_fushiget:'home/handleHome_fushiget',
        }),
        handleGo(val){
            this.$router.push({path:'/goods',query:{id:val}})
        },
        handle_tiaowei(){
            this.$router.push('/home/tiaowei')
        },
        handle_chanpin(){
             this.$router.push('/home/fushi')
        },
        handle_guoshu(){
            this.$router.push('/home/guoshu')
        },
    },
    mounted() {
			this.scroll = new BScroll(this.$refs.goodsWrapper, {
				click: true,
				// tap: true,
				pullUpLoad: true
			});
			
			this.scroll.on("pullingUp", () => {
				this.handleHome_fushiget(++this.pageNum)
				
			})
			
        },
    updated () {
        //重新计算高度
        this.scroll.refresh();
        //当数据加载完毕以后通知better-scroll
        this.scroll.finishPullUp();
    }
        
}
</script>

<style scoped>
.content{
    display:flex;
    /* justify-content:space-around; */
    flex-wrap:wrap;
}
.wrapper{
    position: absolute;
    top: 2.68rem;
    bottom: 0.98rem;
    width: 100%;
    overflow: hidden;
}
.content>.content_c{
    margin-top: .2rem;
    margin-left: .32rem;
    float: left;
}
.content>.content_c>img{
    width: 3.28rem;
    height: 3.5rem;
}
.content>.content_c>P:nth-of-type(1){
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #3F2020;
    letter-spacing: 0;
    line-height: .4rem;
}
.content>.content_c>P:nth-of-type(2){
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #6B6B6B;
    letter-spacing: 0;
    line-height:.34rem;
}
.content>.content_c>P:nth-of-type(3){
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #A30707;
    letter-spacing: 0;
    line-height: .4rem;
}


    /* 写死部分 */
.nav_jx{
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #ffffff;
}
.nav_jx>div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.jx_ccc{
    width: 100%;
    height: .1rem;
    background: #ECECEC;
}
    /* 公告 */
.jx_ad{
    width: 100%;
    height: 0.8rem;
    background:#fff;
    line-height: .8rem;
    padding-left: .32rem;
}
    /* 文字分类 */
.jx_con{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #222222;
    letter-spacing: 0;
    width: 100%;
    height: 1.4rem;
    text-align: center;
    line-height: 1.4rem;
}
    /* 明星好食 */
.jx_haoshi{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center
}
.jx_haoshi>a>img{
    width: 3.22rem;
    height: 2rem;
}
</style>

