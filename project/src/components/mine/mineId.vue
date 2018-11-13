<template>
    <div class="mineId">
        <h2>我的账号</h2>
        <ul class="idSelect">
            <li v-for="(item,index) in account">
                <router-link :to="{name:item.name}">
                    <img :src="item.img">
                    {{item.title}}
                </router-link>
            </li>
            <li @click="close()" class="">
                <a href="#">
                    <img src="../../../static/img/tuichu.png" alt="">
                    退出登录
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

export default {

    data(){
        return {
            account : [
                {
                    name : "info",
                    img : "../../../static/img/gerenxinxi.png",
                    title : "个人信息"
                },
                {
                    name : "site",
                    img : "../../../static/img/shouhuodizhi.png",
                    title : "收货地址"
                },
                {
                    // name : "safety",
                    img : "../../../static/img/anquanzhongxin.png",
                    title : "安全中心"
                },
                {
                    // name : "options",
                    img : "../../../static/img/shezhi.png",
                    title : "设置"
                },
                // {
                //     // name : "esc",
                //     img : "../../../static/img/tuichu.png",
                //     title : "退出登录"
                // }
            ],
            show : false
        }
    
    },
    methods : {
        close(){
            this.observer.$emit("handleChange",true)
        }
    }
}
</script>

<style>
.mineId{height:2.65rem;width:100%;background:#fff;margin-bottom:3%}
.mineId>h2{height:.88rem;width:100%;padding: 0 4.3%;font-size:.32rem;color:#666666;line-height: .88rem;border-bottom:2px solid #F1F1F1;font-weight: 300;font-family: PingFangSC-Regular;}
.idSelect{height:1.76rem;display: flex;}
.idSelect>li{width:20%;display: flex;flex-direction: column;align-self: center;align-items: center}
.idSelect>li:nth-child(4) img{margin-bottom:30%}
.idSelect>li>a{font-size:.25rem;color:#666666;display: block;text-decoration: none;height:1.14rem;}
.idSelect>li>a>img{margin:0 auto 20%;height:.58rem}
</style>
