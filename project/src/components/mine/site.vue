<template>
    <div class="site">
        <div class="top"></div>
        <div class="title">
            <p>
                <img src="../../../static/img/back.png" alt="">
            </p>
            <p>
                添加收货地址
            </p>
            <p>
                保存
            </p>
        </div>
        <form action="" method="post">
            <p>
                <label for="name">收货人</label>
                <input type="text" id="name" name="name" >
            </p>
            <p>
                <label for="phone">手机号</label>
                <input type="text" id="phone" name="phone" >
            </p>
            <p>
                <label for="address">收货地址</label>
                <input type="text" id="address" name="address" >
            </p>
            <p>
                <label for="detail">详细地址</label>
                <input type="text" id="detail" name="detail" >
            </p>
            <p>
                <label for="detail">地址类型</label>
                <button type="button" v-for="(item,index) in title"  
                    @click="changeBg(index)"
					:class="changeIndex == index?'changeActive':''">{{item}}</button>
            </p>
            <p>
                <label for="detail">设为默认地址</label>
                
            </p>
        </form>
    </div>

</template>

<script>
export default {
    data(){
        return {
            title:["公司","家"],
            changeIndex : 0,
        }
    },
    methods : {
        changeBg(index){
            this.changeIndex = index;
        }
    }
}
</script>

<style>
.top{height:.4rem;width:100%;}
.site{width:100%;height:100%;position:fixed;left:0;z-index:2;background: #fff}
.site>.title{height:.88rem;width:100%;display: flex;justify-content: space-between;padding:0 4.4%;align-items: center}
.site>.title>p:nth-child(2){font-size:.34rem;font-family:PingFangSC-Regular}
.site>.title>p:nth-child(3){font-size:.26rem;font-family:PingFangSC-Regular}
.site>form>p{height:1.14rem;width:100%;display:flex;align-items: center;border-top:2px solid #E1E1E1;padding:0 4.4%;}
.site>form>p>input{height:1.1rem;width:100%;border:0;font-size:.28rem;color:#888888;font-family: PingFangSC-Regular;outline: none}
.site>form>p>label{width:1.92rem;font-size:.31rem;color:#222222;font-family: PingFangSC-Regular}
.site>form>p:nth-child(5) button{width:1.2rem;height:.6rem;border:0;margin-right:8%;background:#fff;color:#BA8750;outline: none;border:1px solid #BA8750;font-size:.28rem;font-family: PingFangSC-Regular}
.site>form>p:nth-child(5) .changeActive{background:#BA8750;color:#fff}
.site>form>p:nth-child(6){padding-top:4.8%}
</style>

