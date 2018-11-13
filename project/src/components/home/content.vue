<template>
    <div class="content_T">
        <div class="content">
            <div class="content_c">
                <img src="static/home/img/6@2x.png">
                <p>高堂菜谱</p>
                <p>150g/袋</p>
                <p>￥18.80</p>
            </div>
            <div class="content_c">
                <img src="static/home/img/6@2x.png">
                <p>高堂菜谱</p>
                <p>150g/袋</p>
                <p>￥18.80</p>
            </div>
            <div class="content_c">
                <img src="static/home/img/6@2x.png">
                <p>高堂菜谱</p>
                <p>150g/袋</p>
                <p>￥18.80</p>
            </div>
            <div class="content_c">
                <img src="static/home/img/6@2x.png">
                <p>高堂菜谱</p>
                <p>150g/袋</p>
                <p>￥18.80</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.content{
    height:400px;
    overflow:auto;
    padding-bottom: .98rem;
}
.content>.content_c{
    margin-top: .2rem;
    margin-left: .32rem;
    float: left;
}
.content>.content_c>img{
    width: 3.28rem;
    height: 3.5rem;
}
.content>.content_c>P:nth-of-type(1){
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #3F2020;
    letter-spacing: 0;
    line-height: .4rem;
}
.content>.content_c>P:nth-of-type(2){
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #6B6B6B;
    letter-spacing: 0;
    line-height:.34rem;
}
.content>.content_c>P:nth-of-type(3){
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #A30707;
    letter-spacing: 0;
    line-height: .4rem;
}

</style>
