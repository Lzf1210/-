<template>
	<div class="goods">
		<div class="head"></div>
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
			
		},
		created(){
		
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
	.head{
		width: 100%;
		height: 0.4rem;
		background: white;
	}
	
</style>