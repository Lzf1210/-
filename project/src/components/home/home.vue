<template>
    <div class="home">
        <header-com></header-com>
        <router-view></router-view>

    </div>
</template>

<script>
import header from './header.vue'
export default {
    components:{
        'header-com':header
    }
}
</script>

<style scoped>
.home{
	width: 100%;
	height: 100%;
}
.home>.home-header{
    width: 100%;
    height: 0.88rem;
    background: red;
    display: flex;
    align-items: center;
    justify-content: space-around;
	position: fixed;
	left:0;
	top:0;
	/* z-index: 10; */
}
.home>.home-header>input{
    width: 5.12rem;
    height: 0.6rem;
    background: #EFEFEF;
    border-radius: 20px;
    font-family: .PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    padding-left: 11.2%;
    border:0;
    outline:none
}
</style>
