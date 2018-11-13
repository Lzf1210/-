<template>
    <div class="mine">
        
        <div class="mine-con">
            <mineMsg-com></mineMsg-com>
            <div class="mineAll">
                <mineOrder-com></mineOrder-com>
                <mineServer-com></mineServer-com>
                <mineId-com></mineId-com>
            </div>     
        </div>
        <transition name="silde">
            <close-com v-show="show"></close-com>
        </transition>
        <transition name="fade">
            <mark-com v-show="show"></mark-com>
        </transition>
    </div>
</template>

<script>
import mineMsg from "./mineMsg.vue";
import mineOrder from "./mineOrder.vue";
import mineServer from "./mineServer.vue";
import mineId from "./mineId.vue";
import close from "./close.vue";
import mark from "./mark.vue" 
export default {
  components: {
    "mineMsg-com": mineMsg,
    "mineOrder-com": mineOrder,
    "mineServer-com": mineServer,
    "mineId-com": mineId,
    "close-com":close,
    "mark-com":mark
  },
  data(){
      return {
          show : false
      }
  },
  created() {
      this.observer.$on("handleChange",(value)=>{
          this.show = value
      })
      this.observer.$on("handleTwoChange",(value)=>{
          this.show = value
      })
  },
};
</script>

<style scoped>
.top{height:.4rem;width:100%;background:#3E1E1F;}
.mine {
    width: 100%;
    
}
.mine-com {
    width: 100%;
    height:100%;
}
.mineAll{width:100%;position: fixed;overflow: auto;height:8.38rem;background: #f0eff5;}

</style>
