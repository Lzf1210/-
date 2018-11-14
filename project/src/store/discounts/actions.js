import axios from "axios";
export default {
//     handleGetImg({commit}){
//         
//             axios({
//                 method:"get",
//                 url:"http://localhost:3000/imgs",
//             }).then((data)=>{
//                 console.log(data)
//                     commit("handleGetImg",data.data)
//             })
//             
//     },
    handleGetImg({commit},params){
    	
    	if(params<4){
    		axios({
    			method:"get",
    			url:"http://localhost:3000/imgs?_page="+params+"&_limit=4",
    		}).then((data)=>{
    			console.log(data)
    				commit("handleGetImg",data.data)
    		})
    	}    
    },
}