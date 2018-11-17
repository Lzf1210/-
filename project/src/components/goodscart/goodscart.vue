<template>
    <div class="goodscart_home">
		<cartheader-com></cartheader-com>
		<cartgoodsdetails-com></cartgoodsdetails-com>
		<transition name="bom">
		<cartbottom-com></cartbottom-com>
		</transition>
		<transition name="silde">
			<prompt-com v-show="show"></prompt-com>
		</transition>
		<transition name="fade">
			<mark-com v-show="show"></mark-com>
		</transition>

	</div>
</template>

<script>
import cartheader from "./cartheader.vue"
import cartgoodsdetails from "./cartgoodsdetails.vue"
import cartbottom from "./cartbottom.vue"
 import mark from "./mark.vue"
 import prompt from "./prompt.vue"
export default {
    components:{
		"cartheader-com":cartheader,
		"cartgoodsdetails-com":cartgoodsdetails,
		"cartbottom-com":cartbottom,
        "mark-com":mark,
		"prompt-com":prompt
	},
	methods:{
		
	},
	data(){
		return{
			show:false,
		}
	},
	created(){
		this.observer.$on("change5",(val)=>{
			this.show = val;
		}),
		this.observer.$on("change3",(val)=>{
			this.show = val;
		})
	}
}
</script>

<style scoped>
. goodscart_home{
	width:100%;
	height:100%; 
	}
	 

</style>
