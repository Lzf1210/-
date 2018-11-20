<template>
	<div id="page classify">
		<header-com></header-com>
		<sidebar-com></sidebar-com>
		<router-view></router-view>
	</div>
	
</template>

<script>
import header from "./header";
import sidebar from "./sidebar";
import details from "./details";
import details1 from "./details1";
export default {
	components:{
		"header-com":header,
		"sidebar-com":sidebar,
		

	},
	
}
</script>

<style>
	
</style>
