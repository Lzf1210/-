<template>
    <div class="mineOrder">
        <h2>
            全部订单
            <span>&gt;</span>
        </h2>
        <ul class="orderSelect">
            <li v-for="(item,index) in orders">
                <router-link :to="{name:item.name}">
                    <img :src="item.img">
                    {{item.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            orders : [
                {
                    // name : "payment",
                    img : "../../../static/img/daifukuan.png",
                    title : "待付款"
                },
                {
                    // name : "shipments",
                    img : "../../../static/img/daifahuo.png",
                    title : "待发货"
                },
                {
                    // name : "receiving",
                    img : "../../../static/img/daishouhuo.png",
                    title : "待收货"
                },
                {
                    // name : "evaluate",
                    img : "../../../static/img/daipingjia.png",
                    title : "待评价"
                },
                {
                    // name : "serve",
                    img : "../../../static/img/shouhou.png",
                    title : "售后服务"
                }
            ]
        }
    }
}
</script>

<style>
.mineOrder{height:2.65rem;width:100%;background: #fff;margin:3% 0 4%;}
.mineOrder>h2{height:.88rem;width:100%;padding: 0 4.3%;font-size:.32rem;color:#666666;line-height: .88rem;border-bottom:2px solid #F1F1F1;font-weight: 300;font-family:PingFangSC-Regular;}
.mineOrder>h2>span{float:right}
.orderSelect{height:1.76rem;display: flex;}
.orderSelect>li{width:20%;display: flex;flex-direction: column;align-self: center;align-items: center}
.orderSelect>li:last-child a{padding-bottom:3%;}
.orderSelect>li>a{font-size:.25rem;color:#666666;display: block;text-decoration: none}
.orderSelect>li>a>img{margin:0 auto 20%;height:.58rem}
</style>
