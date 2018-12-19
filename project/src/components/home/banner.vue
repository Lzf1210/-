<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in banner_list">
                <img :src="item?item:''"/>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "../../../node_modules/swiper/dist/css/swiper.css";
export default {
  data() {
    return{
      banner_list:['http://qianfeng1.qfjava.cn:8502/mp/static/home/9@2x.png','http://qianfeng1.qfjava.cn:8502/mp/static/home/Rectangle10@2x.png','http://qianfeng1.qfjava.cn:8502/mp/static/home/9@2x.png']
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: {
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style scoped>
.swiper-slide > img {
  width: 7.5rem;
}
</style>
  