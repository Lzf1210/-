import state from "./state"
import axios from "axios";
export default {
    handleGetMsg(state,params){
        state.minemsg = params;
        
    }
 
}