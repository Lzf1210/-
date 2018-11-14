<template>
    <div>
        <div class="header">
		<div>
			<p :class="activeIndex==1?'active':''" @click="handleToggle(1)" >促销专区</p>
			<p :class="activeIndex==2?'active':''" @click="handleToggle(2)" >美烹时光</p>  
		</div>
		
        </div>
        <component :is="comName"></component> 
    </div>
	
</template>


<script>
	import Sales from "./sales";
    import Times from "./times";
	export default {
		components: {
			"sales-com": Sales,
			"times-com": Times,
		},
        data(){
            return {
                 comName:"sales-com",
                 activeIndex:1,
            }
        },
        methods:{
            handleToggle(params){
                this.activeIndex = params;
                switch(this.activeIndex){
                    case 1:
                        this.comName ="sales-com";
                        break;
                    case 2:
                        this.comName ="times-com";
                        break;
                    default:
                        break;
                }
        }
    }
	}
</script>

<style scoped>
.discounts{
    height: 100%;
}    
.header{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    background: #fff;
    
}
.header div{
    height: .88rem;
    border-bottom: #F1F1F1 .02rem solid;
    display: flex;
    justify-content: space-around;
   
}
.header p{
    font-size:.36rem;
    color: #BA874F ;
    font-family: PingFangSC-Medium, sans-serif;
    line-height: .88rem;
}
.active{
    color:#BA874F;
    border-bottom: .03rem solid #BA874F;
}
</style>
