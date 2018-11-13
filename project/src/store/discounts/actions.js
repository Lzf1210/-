import axios from "axios";
export default {
    handleGetImg({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/imgs"
        }).then((data)=>{
            console.log(data);
            commit("handleGetImg",data.data)
        })
    },
}