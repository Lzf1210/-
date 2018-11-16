export default {
    handleHome_fushiget(state,params){
        state.home_fushi = [...state.home_fushi,...params];
    },
    handleHome_tiaoweiget(state,params){
        state.home_tiaowei = [...state.home_tiaowei,...params];
    },
    handleHome_xiaoshiget(state,params){
        state.home_xiaoshi = [...state.home_xiaoshi,...params];
    },
    handleHome_guoshuget(state,params){
        state.home_guoshu = [...state.home_guoshu,...params];
    },
    handleHome_goodsaget(state,params){
        state.home_goodsa = [...state.home_goodsa,...params];
    }
}