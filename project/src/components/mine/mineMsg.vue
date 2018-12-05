<template>
<div>
    <div class="top">

    </div>
    <div class="mineMsg">
        <div class="nom" >
            <div class="mineImg">
                <img :src="'http://ceshi.qfjava.cn/'+minemsg.userImage" alt="">
            </div>
            <div class="mineName">
                <p class="mobile">{{minemsg.mobile}}</p>
                <p class="userName">{{minemsg.userName}}</p>
            </div>
        </div>
        <ul class="coupon">
            <li>
                <p>0</p>
                <p>优惠券</p>
            </li>
            <li class="center">
                <p>00</p>
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
import Vuex from "vuex";
import axios from "axios";
export default {
    // data(){
    //     return {
    //         userImage:"../../../static/img/me.png",
    //         userName:"黄女士",
    //         mobile:"123123123123",
    //     }
    // },
   
    created() {
        this.handleGetMsg()
    },
     computed:{
        ...Vuex.mapState({
				minemsg:state=>state.mine.minemsg
			})
    },
    methods:{
        ...Vuex.mapActions({
				handleGetMsg:"mine/handleGetMsg"
				
			}),
    }
    
}
</script>

<style scoped>
.top{height:.4rem;width:100%;background:#3E1E1F;}
.mineMsg{height:3.6rem;width:100%;background:#3E1E1F;overflow: hidden;}
.nom{height:1.6rem;width:100%;margin:5.4% 0 6.1%;display: flex;}
.mineImg{width:1.6rem;height:1.6rem;margin:0 4.3%;border-radius:.8rem;overflow: hidden;}
.mineImg>img{width:100%;}
.mineName{width:30%;font-size:.30rem;display: flex;justify-content:space-around;flex-direction: column;color:#fff;font-family:PingFangSC-Regular;font-weight: 300;letter-spacing:1px}
.coupon{height:1rem;display: flex;justify-content: space-around;align-items: center;}
.coupon>li{width:33%;text-align: center;}
.coupon>li>p:nth-child(1){font-size:.32rem;color:#EFB31F}
.coupon>li>p:nth-child(2){font-size:.24rem;color:#fff;font-family: PingFangSC-Regular}
.coupon>.center{border-left:2px solid #fff;border-right:2px solid #fff}
</style>
