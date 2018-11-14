import axios from "axios";
export default {
   handleGetGoods(state,params){
	   state.goodsList = params;
	   
   },
   handleAllToggleSelected(state){
	   state.allSelect = !state.allSelect;
	   state.goodsList.map((item)=>{
		   item.flag = state.allSelect
	   })
   },
   handleToggle(state,index){
   	state.goodsList[index].flag = !state.goodsList[index].flag;
   	var bStop = false;
   	for(var i=0;i< state.goodsList.length;i++){
   			if(!state.goodsList[i].flag){
   					bStop = true;
   					break;
   			}
   	}
   	
   	if(bStop){
   		state.allSelect = false;
   	}else{
   		state.allSelect = true
   	}
   },
   handleReduce(state,index){
	   if(state.goodsList[index].num>1){
		   state.goodsList[index].num--
	   }
   },
   handleAdd(state,index){
   		state.goodsList[index].num++
   },
// 	 handleGoodsDel(state,index){
// 		  for(var i=0;i< state.goodsList.length;i++){
// 		  		if(state.goodsList[i].flag){
// 						state.list.push(state.goodsList[i].id);
// 						console.log(state.list)
//           }
// 		  }
// 			for(var a = 0;a < state.list.length;a++){
// 			axios({
// 							method:"delete",
// 							url:"http://localhost:3000/goods/"+state.list[a],
// 							
// 						}).then((data)=>{
// 							//console.log(data)		
// 					});
// 			}
// 	 },
}