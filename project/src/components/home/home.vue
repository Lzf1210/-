<template>
    <div class="index">
        <div class="header">
            <img src="./img/Page 1 Copy 2.png" alt="">
            <input type="text" placeholder="想吃点什么吗?">
            <img src="./img/Group 2.png" alt="">
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.header{
    width: 100%;
    height: 0.88rem;
    background: red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.32rem;
}
.header>input{
    width: 5.12rem;
    height: 0.6rem;
    background: #EFEFEF;
    border-radius: 22px;
    font-family: .PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    padding-left: 11.2%;
}
</style>
