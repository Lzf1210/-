<template>
<div>
    <div class="top">

    </div>
    <div class="mineMsg">
        <div class="nom">
            <div class="mineImg">
                <img src="../../../static/img/me.png" alt="">
            </div>
            <div class="mineName">
                <p>12345678987</p>
                <p>黄女士</p>
            </div>
        </div>
        <ul class="coupon">
            <li>
                <p>5</p>
                <p>优惠券</p>
            </li>
            <li class="center">
                <p>200</p>
                <p>积分</p>
            </li>
            <li>
                <p>0.00</p>
                <p>预存款</p>
            </li>
        </ul>
    </div>
</div>
    
</template>

<script>
export default {

}
</script>

<style scoped>
.top{height:.4rem;width:100%;background:#3E1E1F;}
.mineMsg{height:3.6rem;width:100%;background:#3E1E1F;overflow: hidden;}
.nom{height:1.6rem;width:100%;margin:5.4% 0 6.1%;display: flex;}
.mineImg{width:1.6rem;height:1.6rem;margin:0 4.3%;}
.mineImg>img{width:100%;}
.mineName{width:30%;font-size:.30rem;display: flex;justify-content:space-around;flex-direction: column;color:#fff;font-family:PingFangSC-Regular}
.coupon{height:1rem;display: flex;justify-content: space-around;align-items: center;}
.coupon>li{width:33%;text-align: center;}
.coupon>li>p:nth-child(1){font-size:.32rem;color:#EFB31F}
.coupon>li>p:nth-child(2){font-size:.24rem;color:#fff;font-family: PingFangSC-Regular}
.coupon>.center{border-left:2px solid #fff;border-right:2px solid #fff}
</style>
