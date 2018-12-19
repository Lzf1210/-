<template>
    <div class="allOrderheader">
        <div class="top"></div>
        <div class="title">
            <p @click="back()">
                <img src="http://qianfeng1.qfjava.cn:8502/mp/static/img/back.png" alt="">
            </p>
            <h2>全部订单</h2>
        </div>
        <ul class="orderheader">
            <li v-for="(item,index) in orders" 
                @click="changeBg(index)"
				:class="activeIndex == index?'orderActive':''">
                <router-link :to="{name:item.name}">{{item.title}}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import Vuex from "vuex";
import axios from "axios";
import BScroll from "better-scroll"
export default {
    data(){
        return {
             orders : [
                 {
                    name : "allOrderheader",
                    title : "全部订单",

                },
                {
                    name : "payment",
                    title : "待付款",
                    id:1
                },
                {
                    name : "shipments",
                    title : "待发货",
                    id:3
                },
                {
                    name : "receiving",
                    title : "已付款",
                    id:2,
                },
                {
                    name : "evaluate",
                    title : "已发货",
                    id:4
                },
                
            ],
            activeIndex : 0,
        }
    },
    methods : {
        back(){
            this.$router.push("/mine")
        },
        changeBg(index){
            this.activeIndex = index;
        }
    },
    created(){
        if(this.$route.query.id < 0){
             this.activeIndex=0;
        }else{
           this.activeIndex = this.$route.query.id+1;
        }
       
    }
}
</script>

<style scoped>
.top{height:.4rem;width:100%;background:#fff}
.allOrderheader{height:100%;width:100%;position: absolute;left:0;z-index: 2;background: #FCFCFC}
.allOrderheader>.title>h2{margin-left:38%;font-size:.34rem;font-family:PingFangSC-Regular}
.allOrderheader>.title{height:.88rem;width:100%;display: flex;padding:0 4.4%;align-items: center;border-bottom:2px solid #E1E1E1;background: #fff}
.allOrderheader>.orderheader{height:.88rem;width:100%;display: flex;}
.allOrderheader>.orderheader>li{width:20%;text-align: center;height:.88;line-height:.88rem}
.allOrderheader>.orderheader>li>a{text-decoration: none}
.allOrderheader>.orderheader>.orderActive{border-bottom: 2px solid gray}
</style>
