<template>
    <div class="site">
        <div class="top"></div>
        <div class="title">
            <p @click="back()">
                <img src="../../../static/img/back.png" alt="">
            </p>
            <p>
                添加收货地址
            </p>
            <p>
                <router-link to="">保存</router-link>
                
            </p>
        </div>
        <form action="" method="post">
            <p>
                <label for="name">收货人</label>
                <input type="text" id="name" name="name" v-model="name">
            </p>
            <p>
                <label for="phone">手机号</label>
                <input type="text" id="phone" name="phone" v-model="phone">
            </p>
            <p>
                <label for="address">收货地址</label>
                <input type="text" id="address" name="address" v-model="address">
            </p>
            <p>
                <label for="detail">详细地址</label>
                <input type="text" id="detail" name="detail" v-model="detail">
            </p>
            <p>
                <label for="addressType">地址类型</label>
                <button type="button" v-for="(item,index) in title"  
                    @click="changeBg(index)"
					:class="changeIndex == index?'changeActive':''">{{item}}</button>
            </p>
            <p>
                <label for="detail">设为默认地址</label>
                <el-switch
                    v-model="value1"
                    active-color="orange"

                    inactive-color="#C0C0C0">
                </el-switch>
            </p>
            <div class="deladdress">
                <button type="button" @click="saveAddress()">保存</button>
            </div>
        </form>
        
    </div>

</template>

<script>
import axios from "axios";
export default {
    data(){
        return {
            title:["公司","家"],
            changeIndex : 0,
            value1: 0,
            value2: 1,
            name:"",
            phone:"",
            address:"",
            detail:"",
            addressType:"",
        }
    },
    methods : {
        changeBg(index){
            this.changeIndex = index;
            // let title = this.title.toString().charAt(index);
            // console.log(this.title[index])
        },
        back(){
            this.$router.back("/mine")
        },
        saveAddress(){
            let Index = this.changeIndex;
            console.log(this.name,this.phone,this.address,this.detail,this.title[Index],this.value2)
            axios({
                method:"post",
                url:"/mp/address/addaddress",
                data:{
                    name:this.name,
                    phone:this.phone,
                    address:this.address,
                    detail:this.detail,
                    addressType:this.title[Index],
                    defaultAddress:this.value2
                }
            }).then((data)=>{
                console.log(data)
            })
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
.site>form>p:nth-child(6){padding-top:4.8%;border:0;}
.el-switch{margin-left: 4rem;}
.deladdress{height:1.44rem;width:100%;border-top:2px solid #E1E1E1;margin-top:50%;display: flex;justify-content: center;align-items: center}
.deladdress>button{height:.88rem;width:6.86rem;background: #3E2020;color:#fff;border:0;font-size:.32rem;font-family: PingFangSC-Regular;outline: none}
</style>

