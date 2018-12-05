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
            // http://jianglianglong.qfjava.cn:8080/mp/goods/searchallgoods
            url:"/mp/goods/searchgoodsbytypeid?&id=1&_page="+params+"&_limit=4",
        }).then((data)=>{
            // console.log(params)
                commit("handleHome_fushiget",data.data)
                // console.log(data.data)
        })
    },
    handleHome_tiaoweiget({commit},params){
        axios({
            method:"get",
            // url:"http://localhost:3000/home_tiaowei?&id=1&_page="+params+"&_limit=4",
            url:"/mp/goods/searchgoodsbytypeid?&id=1&_page="+params+"&_limit=4",
        }).then((data)=>{
            // console.log(params)
                commit("handleHome_tiaoweiget",data.data)
                // console.log(data.data)
        })
    },
    handleHome_xiaoshiget({commit},params){
        axios({
            method:"get",
            // url:"http://localhost:3000/home_xiaoshi?&id=3&_page="+params+"&_limit=4",
            url:"/mp/goods/searchgoodsbytypeid?&id=1&_page="+params+"&_limit=4",
        }).then((data)=>{
            // console.log(params)
                commit("handleHome_xiaoshiget",data.data)
                // console.log(data.data)
        })
    },
    handleHome_guoshuget({commit},params){
        axios({
            method:"get",
            // url:"http://localhost:3000/home_guoshu?&id=4&_page="+params+"&_limit=4",
            url:"/mp/goods/searchgoodsbytypeid?&id=1&_page="+params+"&_limit=4",
        }).then((data)=>{
            // console.log(params)
                commit("handleHome_guoshuget",data.data)
                // console.log(data.data)
        })
    },
    handleHome_goodsaget({commit},params){
        axios({
            method:"get",
            // url:"http://localhost:3000/goodsa?&id=6&_page="+params+"&_limit=6",
            url:"/mp/goods/searchgoodsbytypeid?&id=1&_page="+params+"&_limit=4",
        }).then((data)=>{
            // console.log(params)
                commit("handleHome_goodsaget",data.data)
                // console.log(data.data)
        })
    },
}