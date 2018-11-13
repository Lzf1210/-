<template>
    <div class="header">
        <div class='header_t'>
            <img src="./img/Page 1 Copy 2.png" alt="">
            <input type="text" placeholder="想吃点什么吗?">
            <img src="./img/Group 2.png" alt="">
            <div class="search">
                <div class="search_l"></div>
            <div class="search_r"></div>
            </div> 
        </div>
            <ul>
                <li 
                v-for="(item,index) in navs_home"
                :class="activeIndex == index?'active':''"
                @click="hanleActiveIndex(index)"
                >{{item}}</li>
            </ul>
            <ul>
                <li v-for="(item,index) in nav_sort">{{item}}</li>
            </ul>
        <banner-com></banner-com> 
        <content-com></content-com>
        <router-view></router-view>
    </div>
</template>

<script>
import banner from './banner';
import content from './content';
export default {
    components:{
        'banner-com':banner,
        'content-com':content
    },
    data(){
        return{
            navs_home:['精选','全部商品','厨房调味','粮油副食','休闲小食','安心果蔬'],
            activeIndex : 2,
            nav_sort:['全部分类 ▼','综合排序 ▼','筛选'],

        }
    },
    methods:{
        hanleActiveIndex(index){
            this.activeIndex = index;
        }
    }
}
</script>

<style>
.header{
    width: 100%;
}
.header>.header_t{
    width: 100%;
    height: 0.88rem;
    /* background: red; */
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.header>.header_t>input{
    width: 5.12rem;
    height: 0.6rem;
    background: #EFEFEF;
    border-radius: 20px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    padding-left: 11.2%;
    border:0;
    outline:none
}
.header>.header_nav{
    width: 110%;
    display: flex;
}
.header>ul:nth-of-type(1){
    height: 0.62rem;
    padding: 0 0.32rem;
    display: flex;
    align-items: center;
    /* 导航栏滚动 */
    display: -webkit-box;
    overflow-x: auto;
    /*适应苹果*/
    -webkit-overflow-scrolling:touch;
    border-bottom: 1px solid #E3E3E3;
}
    /* 隐藏滚动条 */
.header>ul:nth-of-type(1)::-webkit-scrollbar {
    display: none;
}
.header>ul:nth-of-type(1)>li{
    padding: 0 0.21rem;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #3F2020;
    letter-spacing: 0;
}
/*  */ 
.active{
    border-bottom: 2px solid #BA874F;
    color: #BB884A;
}

/* 搜索按钮*/ 
.search{
    position: absolute;
    left: 1.5rem;
    top: 0.7rem;
}
.search_l{
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: 1px solid #999999;
    position: absolute;
    left: rem;
}
.search_r{
    width: 2px;
    height: 6px;
    transform: rotate(-50deg); 
    background: #999999;
    border-radius: 1px;
    position: absolute;
    left: 11px;
    top: 11px;
}
.header>ul:nth-of-type(2){
    border: 1px solid #E3E3E3;
    width: 100%;
    height: 0.8rem;
    padding: 4px 0;
    border-left: none;
    border-right: none;
}
.header>ul:nth-of-type(2)>li{
    float: left;
    height: 100%;
    padding: 0 0.6rem;
    line-height: 0.6rem;
}
.header>ul:nth-of-type(2)>li:nth-of-type(2){
    border-left: 1px solid #E3E3E3;
    border-right: 1px solid #E3E3E3;
    
}
.header>ul:nth-of-type(2)>li:nth-of-type(3){
    background:url(./img/Page1Copy6.png) no-repeat right;
}
</style>
