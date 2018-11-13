<template>
  <div id="app">
    <router-view></router-view>
    <footer-com></footer-com>
    
  </div>
</template>

<script>

import Footer from "./components/footer"
export default {
    components : {
        "footer-com" : Footer
    }
}

</script>

<style>

</style>
