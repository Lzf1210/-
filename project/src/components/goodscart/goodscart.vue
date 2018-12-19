<template>
    <div class="goodscart_home">
		<cartheader-com></cartheader-com>
		<cartgoodsdetails-com></cartgoodsdetails-com>
		<transition name="bom">
		<cartbottom-com></cartbottom-com>
		</transition>
	</div>
</template>

<script>
import cartheader from "./cartheader.vue"
import cartgoodsdetails from "./cartgoodsdetails.vue"
import cartbottom from "./cartbottom.vue"
export default {
    components:{
		"cartheader-com":cartheader,
		"cartgoodsdetails-com":cartgoodsdetails,
		"cartbottom-com":cartbottom
	},
	methods:{
		
	},
	data(){
		return{
			show:false,
		}
	},
	created(){
// 		this.observer.$on("change5",(val)=>{
// 			this.show = val;
// 		}),
		this.observer.$on("change3",(val)=>{
			this.show = val;
		})
	}
}
</script>

<style scoped>
.goodscart_home{
	width:100%;
	height:100%; 
	}
	 

</style>
