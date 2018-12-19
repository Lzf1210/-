import state from "./state"
import axios from "axios";
export default {
    handleGetMsg(state,params){
        state.minemsg = params;
        console.log(state.minemsg,111)
        
    },
    handlePaymentGoods(state,params){
        state.paymentGoodsList = params;
        
    },
    handleReceivingGoods(state,params){
        state.receivingGoodsList = params;
        
    },
    handleShipmentsGoods(state,params){
        state.shipmentsGoodsList = params;
        
    },
    handleEvaluateGoods(state,params){
        state.evaluateGoodsList = params;
        
    },
}