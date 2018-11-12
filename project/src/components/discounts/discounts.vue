<template>
	<div class="discounts">
		<cheap-com></cheap-com>
		<router-view></router-view>
	</div>
    
</template>

<script>
	import Cheap from "./cheap";
	export default {
		components: {
			"cheap-com": Cheap,
		},
        
    }
	
</script>

<style scoped>
.discounts{
    height: 100%;
}
</style>
