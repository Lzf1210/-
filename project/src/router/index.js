import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Discounts from '../components/discounts/discounts.vue'
import Goodscart from '../components/goodscart/goodscart.vue'
import Classify from '../components/classify/classify.vue'
import Mine from '../components/mine/mine.vue'
Vue.use(Router)

const router =  new Router({
    routes: [
      {
        path:"/",
        redirect:"home"
      },
      {
        path: "/home",
        name:"home",
        component: Home,
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
        component: Mine
      },
      {
        //匹配所有
        path:"**",
        component:Home
      }
    ]
  })
  
  export default router;