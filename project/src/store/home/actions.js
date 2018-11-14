import axios from "axios";

export default {
    handleHome_fushiget({commit},params){
        // axios({
        //     method:'get',
        //     url:'http://localhost:3000/goods',
        //     data:{
        //         id : 1,
        //     }
        // })
        // .then((data)=>{
        //     // console.log(data.data);
        //     commit('handleHome_fushiget',data.data)
        // })
        
        axios({
            method:"get",
            url:"http://localhost:3000/goods?_page="+params+"&_limit=4",
        }).then((data)=>{
            console.log(params)
                commit("handleHome_fushiget",data.data)
                console.log(data.data)
        })
    },
}