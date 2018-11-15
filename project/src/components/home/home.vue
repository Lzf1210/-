<template>
<<<<<<< HEAD
    <div id="home">
=======
    <div class="home">
>>>>>>> hjq
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
    },
    data(){
        return{
            // comName:content_fushi,
        }
    },
    created(){
        // console.log(this.$route.query.id);
        // switch (this.$route.query.id) {
        //     case 1:
        //         this.comName = content_tiaowei;
        //         break;
        //     case 2:
        //         this.comName = content_fushi;
        //         break;
        //     case 3:
        //         this.comName = content_xiaoshi;
        //         break;
        //     case 4:
        //         this.comName = content_guoshu;
        //         break;
        //     case 5:
        //         this.comName = content_jingx;   
        //         break;
        //     case 6:
        //         this.comName = content_goodsa;
        //         break;  
        
        //     default:
        //         break;
        // }
    },
    methods:{
        
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
