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

<style>
.home{
    padding-top: .4rem;
}
</style>
