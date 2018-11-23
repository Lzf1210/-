<template>
<div class="con_c">
    <div class="wrapper" ref="goodsWrapper">
        <div class="content">
            
            <banner-com></banner-com>
            <div 
            class="content_c" 
            v-for="(item,index) in home_fushi"
            @click="handleGo()"
            >
                <img :src="'http://ceshi.qfjava.cn/'+item.imageList"/>
                <p>{{item.goodsName}}</p>
                <p>{{item.goodsDetail}}</p>
                <p>{{item.goodsPrice | home_price}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import banner from './banner';
import Vuex from 'vuex';
import BScroll from 'better-scroll';
export default {
    components:{
        'banner-com':banner,
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
        handleGo(){
            this.$router.push('/goods/:id')
        }
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

</style>
