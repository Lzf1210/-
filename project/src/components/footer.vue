<template>
		<div class="footer">
					<ul>
							<li v-for="(item,index) in navs" @click="changeBg(index)"
									:class="active == index?'footerActive':''">
									<router-link :to="{name:item.name}">
											<i :class="'iconfont' + ' ' +item.img"></i>
											{{item.title}}        
									</router-link>
									
							</li>
					</ul>
		</div>
      
</template>

<script>
import home from "./home/home.vue" 

export default {
	
    data() {
        return {
            navs: [
                {
                    name : "fushi",
                    title : "首页",
                    img : "icon-icon4"
                },
                {
                    name : "details",
                    title : "分类",
                    img : "icon-fenlei"
                },
                {
                    name : "sales",
                    title : "优惠",
                    img : "icon-youhuifangshi"
                },
                {
                    name : "goodscart",
                    title : "购物车",
                    img : "icon-daohanggouwuche"
                },
                {   
                    name : "mine",
                    title : "我的",
                    img : "icon-wode"
                }
            ],
            active : 0,
        }
    },
    methods : {
        changeBg(index){
          this.active = index;
        }
    }
}
</script>

<style scoped>
.footer{
    background: #fff;
    height:.98rem;
    width: 100%;
    position: fixed;
    left: 0;
    bottom:0;
    border-top:1px solid #C7D3DB;
	background: #FFFFFF;
	z-index: 2;
}
.footer > ul {
  display: flex;
  justify-content: space-around;
}
.footer > ul > li {
  width: 100%;
  height: 0.98rem;
}
.footer>ul>li>a{
    height: 100%;
    display: block;
    color: #3f2021;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none
}
.footer>ul>li>a>.iconfont{
   font-size:20px;
   line-height: 22px;
}
.footer>ul>.footerActive .iconfont{
    color:#3f2021;
    
}
</style>
