<template>
    <div id="home">
        <header-com></header-com>
         <router-view></router-view>
        <!-- <keep-alive>
            <component :is="comName"></component>
        </keep-alive> -->
    </div>
</template>

<script>
import header from './header.vue';

// import content_fushi from './content_fushi'
// import content_goodsa from './content_goodsa'
// import content_guoshu from './content_guoshu'
// import content_jingx from './content_jingx'
// import content_tiaowei from './content_tiaowei'
// import content_xiaoshi from './content_xiaoshi'

export default {
    components:{
        'header-com':header,
    }
}
</script>

<style scoped>
#home{
	width: 100%;
	height: 100%;
    padding-top: 0.4rem;
    overflow: hidden;
}
</style>
