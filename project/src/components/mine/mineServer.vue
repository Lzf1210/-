<template>
    <div class="mineServer">
        <h2>我的服务</h2>
        <ul class="choose">
            <li v-for="(item,index) in server">
                <router-link :to="{name:item.name}">
                    <img :src="item.img" alt="">
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
            server : [
                {
                    // name : "like",
                    img : "http://qianfeng1.qfjava.cn:8502/mp/static/img/xihuan.png",
                    title : "我喜欢的"
                },
                {
                    // name : "service",
                    img : "http://qianfeng1.qfjava.cn:8502/mp/static/img/kefu.png",
                    title : "客服"
                },
                {
                    // name : "recommend",
                    img : "http://qianfeng1.qfjava.cn:8502/mp/static/img/tuijian.png",
                    title : "推荐有礼"
                }
            ]
        }
    }
}
</script>

<style>
.mineServer{height:2.56rem;background: #fff;margin-bottom:4%}
.mineServer>h2{height:.88rem;width:100%;padding: 0 4.3%;font-size:.32rem;color:#666666;line-height: .88rem;border-bottom:2px solid #F1F1F1;font-weight: 300;font-family: PingFangSC-Regular}
.choose{height:1.76rem;display: flex;}
.choose>li{height:100%;width:20%;display: flex;flex-direction: column;text-align: center;justify-content: center}
.choose>li>a{font-size:.25rem;color:#666666;display: block;}
.choose>li>a>img{margin:0 auto 20%;height:.58rem}
</style>
