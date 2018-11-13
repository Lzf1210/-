<template>
    <div class="mine">
        <div class="mine-con">
            <mineMsg-com></mineMsg-com>
            <mineOrder-com></mineOrder-com>
            <mineServer-com></mineServer-com>
            <mineId-com></mineId-com>
        </div>
        
    </div>
</template>

<script>
import mineMsg from "./mineMsg.vue";
import mineOrder from "./mineOrder.vue";
import mineServer from "./mineServer.vue";
import mineId from "./mineId.vue";
export default {
  components: {
    "mineMsg-com": mineMsg,
    "mineOrder-com": mineOrder,
    "mineServer-com": mineServer,
    "mineId-com": mineId
  }
};
</script>

<style scoped>
.mine {
    width: 100%;
    height:12.35rem;
    background: #f0eff5;
    overflow: auto;
}
.mine-com {
    width: 100%;
    height:100%;
}
</style>
