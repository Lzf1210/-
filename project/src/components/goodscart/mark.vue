<template>
    <div class="mark">

    </div>
</template>

<script>
export default {
    data(){
		return{
			
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
.mark{width:100%;height:100%;position: absolute;left:0;top:0;background:#000000;z-index:4;opacity: 0.5;}
.lala-enter,.lala-leave-to{transform: translateY(200%);}
.lala-enter-active,.lala-leave-active{transition:all 1s}
</style>
