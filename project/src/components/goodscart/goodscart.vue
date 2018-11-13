<template>
    <div class="goodscart_home">
		
		<cartheader-com></cartheader-com>
		<cartgoodsdetails-com></cartgoodsdetails-com>
		<cartbottom-com></cartbottom-com>
		<!-- <editorheader-com></editorheader-com>
		<editordetails-com></editordetails-com>
		<ediorbottom-com></ediorbottom-com> -->
	</div>
</template>

<script>
import cartheader from "./cartheader.vue"
import cartgoodsdetails from "./cartgoodsdetails.vue"
import cartbottom from "./cartbottom.vue"
// import editorheader from "./editorheader.vue"
// import editordetails from "./editordetails.vue"
// import ediorbottom from "./editorbottom.vue"
export default {
    components:{
		"cartheader-com":cartheader,
		"cartgoodsdetails-com":cartgoodsdetails,
		"cartbottom-com":cartbottom
//         "editorheader-com":editorheader,
//         "editordetails-com":editordetails,
//         "ediorbottom-com":ediorbottom
	},
	methods:{
		
	}
}
</script>

<style scoped>
.goodscart_home{
	width:100%;
	height:100%; 
	background: pink;
	/* padding-top: 0.2rem; */
	
}
</style>
