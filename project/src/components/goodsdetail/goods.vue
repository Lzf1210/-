<template>
	<div class="goods">
		
		<goodsdetail-com></goodsdetail-com>
		<goodsdetailfooter-com></goodsdetailfooter-com>
	</div>
</template>

<script>
	import goodsdetail from "./goodsdetail.vue";
	import goodsdetailfooter from "./goodsdetailfooter.vue";
	export default {
	    components:{
			"goodsdetail-com":goodsdetail,
			"goodsdetailfooter-com":goodsdetailfooter
	       // "mark-com":mark
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.goods{
		width: 100%;
		height: 100%;
		position: fixed;
		left:0;
		top:0;
		z-index: 2;
	}
	
</style>