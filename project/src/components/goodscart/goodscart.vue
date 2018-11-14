<template>
    <div class="goodscart_home">
		
		<cartheader-com></cartheader-com>
		<cartgoodsdetails-com></cartgoodsdetails-com>
		<cartbottom-com></cartbottom-com>
		<mark-com></mark-com>
	</div>
</template>

<script>
import cartheader from "./cartheader.vue"
import cartgoodsdetails from "./cartgoodsdetails.vue"
import cartbottom from "./cartbottom.vue"
 import mark from "./mark.vue"
export default {
    components:{
		"cartheader-com":cartheader,
		
		"cartgoodsdetails-com":cartgoodsdetails,
		"cartbottom-com":cartbottom,
       "mark-com":mark
	},
	methods:{
		
	}
}
</script>

<style scoped>
.goodscart_home{
	width:100%;
	height:100%; 
	/* padding-top: 0.2rem; */
	
}
</style>
