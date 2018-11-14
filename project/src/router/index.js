import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Discounts from '../components/discounts/discounts.vue'
import Goodscart from '../components/goodscart/goodscart.vue'
import Classify from '../components/classify/classify.vue'
import Mine from '../components/mine/mine.vue'

import Site from '../components/mine/site.vue'
import payment from '../components/mine/mineOrder.vue'

import jingx from '../components/home/content_jingx.vue'
import goodsa from '../components/home/content_goodsa.vue'
import tiaowei from '../components/home/content_tiaowei.vue'
import fushi from '../components/home/content_fushi.vue'
import xiaoshi from '../components/home/content_xiaoshi.vue'
import guoshu from '../components/home/content_guoshu.vue'


import Goodsdetail from '../components/goodsdetail/goods.vue'
Vue.use(Router)

const router =  new Router({
    routes: [
      {
        path:"/",
        redirect:"/home"
      },
      {
        path: "/home",
        name:"home",
        component: Home,
        children:[
          {
            path:'/home/jingx',
            name:'jingx',
            component:jingx,
          },
          {
            path:'/home/goodsa',
            name:'goodsa',
            component:goodsa,
          },
          {
            path:'/home/tiaowei',
            name:'tiaowei',
            component:tiaowei,
          },
          {
            path:'/home/fushi',
            name:'fushi',
            component:fushi,
          },
          {
            path:'/home/xiaoshi',
            name:'xiaoshi',
            component:xiaoshi,
          },
          {
            path:'/home/guoshu',
            name:'guoshu',
            component:guoshu,
          },
      ]
      },
      {
        path: "/classify",
        name:"classify",
        component: Classify,
        
      },
      {
        path: "/discounts",
        name:"discounts",
        component: Discounts,
      }, 
      {
        name:"goodscart",
        path: "/goodscart",
        component: Goodscart
      },
      {
        name:"mine",
        path: "/mine",
        component: Mine,
        children : [
          {
            path: "/payment",
            name:"payment",
            component: payment,
          }
        ]
      },
      {
        path : "/site",
        name:"site",
        component : Site
      },
      {
      	name:"goodsdetail",
        path:"/goodsdetail/goods/:id",
        component:Goodsdetail,
      },
      {
        //匹配所有
        path:"**",
        component:Home
      }
    ]
  })
  
  export default router;