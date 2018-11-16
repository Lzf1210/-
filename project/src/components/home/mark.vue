<template>
    <div class="mark" @click="handleToggle()"></div>
</template>

<script>
    export default {
        methods:{
            handleToggle(){
                this.$emit("handleMark",false)
            }
           
        }
    }
</script>
<style scoped>
.mark{
    width:100%;
    height: 100%;
    position: absolute;
    left:0;
    top:0;
    background: rgba(0,0,0,0.3);
    z-index: 9;
}
.fade-enter,.fade-leave-to{
    opacity: 0;
}
.fade-enter-active,.fade-leave-active{
    transition: all 300ms;
}
</style>
