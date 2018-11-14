import state from './state'
export default {
   goodsCount(){
	   let goodsNumCount = 0;
	   let goodsNumPrice = 0;
	   state.goodsList.map((item)=>{
		   if(item.flag){
			   goodsNumCount += item.num;
			   goodsNumPrice += item.num * (item.goodsPrice*10)
		   }
	   })
	   return{
		   goodsNumCount,
		   goodsNumPrice:goodsNumPrice/10
	   }
   }
}