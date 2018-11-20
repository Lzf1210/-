import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'

import Discounts from '../components/discounts/discounts.vue'
import sales from '../components/discounts/sales.vue'
import times from '../components/discounts/times.vue'
import cheap from '../components/discounts/cheap.vue'

import Goodscart from '../components/goodscart/goodscart.vue'
import Classify from '../components/classify/classify.vue'


import Mine from '../components/mine/mine.vue'
import login from '../components/mine/login.vue'
import allOrderheader from '../components/mine/allOrderheader.vue'
import Site from '../components/mine/site.vue'
import payment from '../components/mine/minePayment.vue'
import allorder from '../components/mine/allorder.vue'
import shipments from '../components/mine/mineShipments.vue'
import receiving from '../components/mine/mineReceiving.vue'

import myself from '../components/mine/myself.vue'
import safety from '../components/mine/safety.vue'



import jingx from '../components/home/content_jingx.vue'
import goodsa from '../components/home/content_goodsa.vue'
import tiaowei from '../components/home/content_tiaowei.vue'
import fushi from '../components/home/content_fushi.vue'
import xiaoshi from '../components/home/content_xiaoshi.vue'
import guoshu from '../components/home/content_guoshu.vue'

import Goods from '../components/goodsdetail/goods.vue'


import goPay from '../components/goodscart/goPay.vue'
import Order from '../components/goodscart/order.vue'


// classify
import details from "../components/classify/details.vue"
import details1 from "../components/classify/details1.vue"
import details2 from "../components/classify/details2.vue"
import details3 from "../components/classify/details3.vue"
import details4 from "../components/classify/details4.vue"
import details5 from "../components/classify/details5.vue"
import details6 from "../components/classify/details6.vue"


Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: "/",
			redirect: "/home/fushi"
		},
		{
			path: "/home",
			name: "home",
			component: Home,
			children: [{
					path: '/home/jingx',
					name: 'jingx',
					component: jingx,
				},
				{
					path: '/home/goodsa',
					name: 'goodsa',
					component: goodsa,
				},
				{
					path: '/home/tiaowei',
					name: 'tiaowei',
					component: tiaowei,
				},
				{
					path: '/home/fushi',
					name: 'fushi',
					component: fushi,
				},
				{
					path: '/home/xiaoshi',
					name: 'xiaoshi',
					component: xiaoshi,
				},
				{
					path: '/home/guoshu',
					name: 'guoshu',
					component: guoshu,
				},
			]
		},
		{
			path: "/classify",
			name: "classify",
			component: Classify,
			children: [
				{
					path: "/classify/details",
					name: "details",
					component: details,
				},
				{
					path: "details1",
					name: "details1",
					component: details1,
				},
				{
					path: "details2",
					name: "details2",
					component: details2,
				},
				{
					path: "details3",
					name: "details3",
					component: details3,
				},
				{
					path: "details4",
					name: "details4",
					component: details4,
				},
				{
					path: "details5",
					name: "details5",
					component: details5,
				},
				{
					path: "details6",
					name: "details6",
					component: details6,
				},
			]

		},
		{
			path: "/discounts",
			name: "discounts",
			component: Discounts,
            children:[
                {
                    path: "/discounts/sales",
                    name: "sales",
                    component: sales,
                },
                {
                	path: "/discounts/times",
                	name: "times",
                	component: times,
                },
                
            ]
		},
		{
			
			path: "/goodscart",
			name: "goodscart",
			component: Goodscart
		},
		{
			
			path: "/order",
			name: "order",
			component: Order
		},
		{
			name: "mine",
			path: "/mine",
			component: Mine,
			children: [
				
				
				
				// {
				//   name:"evaluate",
				//   path: "/evaluate",
				//   component: evaluate
				// },
				// {
				//   name:"serve",
				//   path: "/serve",
				//   component: serve
				// }
			]
		},
		{
			path: "/myself",
			name: "myself",
			component: myself,
		},
		{
			path: "/site",
			name: "site",
			component: Site,
		},
		{
			path: "/safety",
			name: "safety",
			component: safety,
		},
		{
			path: "/allOrderheader",
			name: "allOrderheader",
			component: allOrderheader,
			children : [			
				{
					path: "/allOrderheader",
					name: "allOrderheader",
					component: allorder,
				},
				{
					path: "/payment",
					name: "payment",
					component: payment,
				},
				{
					path: "/shipments",
					name:"shipments",
					component: shipments,
				},
				{
				  path: "/receiving",
				  name:"receiving",
				  component: receiving,
				}, 
			]
		},

		
		{
			path: "/site",
			name: "site",
			component: Site
		},
		{
			name: "goods",
			path: "/goods",
			component: Goods,
		},
		{
			name:"goPay",
			path:"/gopay",
			component:goPay
		},
		{
			name:"login",
			path:"/login",
			component:login
		},
		
		{
			//匹配所有
			path: "**",
			component: Home
		}
	]
})

export default router;
