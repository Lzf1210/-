import state from "./state"
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
 
}