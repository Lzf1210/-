<template>
    <div class="mineOrder">
        <router-link :to="{name:'allOrderheader',query:{id:-1}}">
            <h2>
                全部订单<span>&gt;</span>
            </h2>
        </router-link>
        <ul class="orderSelect">
            <li v-for="(item,index) in orders" @click="sendData(index)">
                <router-link :to="{name:item.name,query:{id:index}}">
                    <img :src="item.img">
                    {{item.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            orders : [
                {
                    name : "payment",
                    img : "http://qianfeng1.qfjava.cn:8502/mp/static/img/daifukuan.png",
                    title : "待付款",
                    id:1
                },
                {
                    name : "shipments",
                    img : "http://qianfeng1.qfjava.cn:8502/mp/static/img/daifahuo.png",
                    title : "待发货",
                    id:3
                },
                {
                    name : "receiving",
                    img : "http://qianfeng1.qfjava.cn:8502/mp/static/img/daishouhuo.png",
                    title : "已付款",
                    id:2

                },
                {
                    name : "evaluate",
                    img : "http://qianfeng1.qfjava.cn:8502/mp/static/img/daipingjia.png",
                    title : "已发货",
                    id:4
                },
                {
                    // name : "serve",
                    img : "http://qianfeng1.qfjava.cn:8502/mp/static/img/shouhou.png",
                    title : "售后服务"
                }
            ],

        }
    },
    methods:{
        sendData(index){
            axios({
				method:"get",
				url:"/mp/order/myorder?status="+this.orders[index].id,
			}).then((data)=>{
				// console.log(data)
			});
        }
    }
}
</script>

<style>
.mineOrder{height:2.65rem;width:100%;background: #fff;margin:3% 0 4%;}
.mineOrder>a{text-decoration: none}
.mineOrder>a>h2{height:.88rem;width:100%;padding: 0 4.3%;font-size:.32rem;color:#666666;line-height: .88rem;border-bottom:2px solid #F1F1F1;font-family:PingFangSC-Regular;font-weight: 200;}
.mineOrder>a>h2>span{float:right}
.orderSelect{height:1.76rem;display: flex;}
.orderSelect>li{width:20%;display: flex;flex-direction: column;align-self: center;align-items: center}
.orderSelect>li:last-child a{padding-bottom:3%;}
.orderSelect>li>a{font-size:.25rem;color:#666666;display: block;text-decoration: none}
.orderSelect>li>a>img{margin:0 auto 20%;height:.58rem}
</style>
