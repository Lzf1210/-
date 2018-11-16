<template>
    <div id="app">
        <!-- <div class="top">

        </div> -->
        <footer-com></footer-com>
		<router-view></router-view>
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
#app{
	width: 100%;
	height: 100%;
}
.page{
	padding-top:.98rem;
}
</style>
