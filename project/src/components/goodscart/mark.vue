<template>
    <div class="mark" v-show="show">

    </div>
</template>

<script>
export default {
    data(){
		return{
			show:false
		}
	},
	methods:{
// 		handleMark(){
// 			this.observer.$emit("changeM",false)
// 		}
	}
}
</script>

<style scoped>
.mark{width:100%;height:100%;position: absolute;left:0;top:0;background:#000000;z-index:2;opacity: 0.5;}
.fade-enter,.fade-leave-to{transform: translateY(200%);}
.fade-enter-active,.fade-leave-active{transition:all 1s}
</style>
