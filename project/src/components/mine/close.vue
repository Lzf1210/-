<template>
    <div class="close">
        
        <h3 @click="cancel()">
            <img src="http://qianfeng1.qfjava.cn:8502/mp/static/img/fanhui.png" alt="">
        </h3>
        <h2>确定要退出当前登录吗？</h2>
        <div class="confirm">
            <p @click="cancel()">取消</p>
            <p @click="exit()">确定</p>
        </div>
        
    </div>
    
</template>

<script>
export default {
    methods :{
        cancel(){
            this.observer.$emit("handleTwoChange",false)
        },
        exit(){
            setTimeout(()=>{
                this.$router.push("/open");
                setTimeout(()=>{
                    this.$router.push("/login");
                },2000)
            },1000)
            
        }
    }
}
</script>

<style>
.close{width:91.5%;height:3.2rem;background:#fff;position: absolute;left:4.3%;top:40.5%;z-index: 32;border-radius: 4px;}
.close>h3{height:.8rem;padding:4% 0 0 4%;width:.8rem}
.close>h2{font-family: PingFangSC-Regular;font-size: 18px;color: #222222;font-weight: 200;text-align: center;}
.confirm{height:1.2rem;margin-top:9.5%;border-top:2px solid #979797;display: flex;justify-content: space-around;align-items: center}
.confirm>p{width:2.9rem;height:.80rem;text-align: center;line-height:.80rem;font-size:.28rem;border-radius: 4px;}
.confirm>p:first-child{border:2px solid #60A042;color:#60A042;font-weight: 200;}
.confirm>p:last-child{background: #311818;height:.84rem;width:2.95rem;color:#fff}
</style>
