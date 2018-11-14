<template>
    <div id="home">
        <header-com></header-com>
        <router-view></router-view>
    </div>
</template>

<script>
import header from './header.vue';
export default {
    components:{
        'header-com':header,
    },
    data(){
        return{
            
        }
    },
    created(){
        
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
