<template>
	<div>
		<div class="header">
			<div>
				<p 
                v-for="(item,index) in list" 
                :class="activeIndex==index?'active':''" 
                @click="handleToggle(index)"
                >
					<router-link :to="{name:item.name}">{{item.title}}</router-link>
                    
				</p>
			</div>
		</div>
        
	</div>

</template>


<script>
    
	export default {

        data() {
			return {
				list: [
                    {
						title: "促销专区",
						name: "sales"
					},
					{
						title: "美烹时光",
						name: "times"
					},
				],
                activeIndex:0,
			}
		},
		methods: {
			handleToggle(params) {
				this.activeIndex = params;

			}
		}
	}
</script>

<style scoped>
	.discounts {
		height: 100%;
	}

	.header {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
		background: #fff;

	}

	.header div {
		height: .88rem;
		border-bottom: #F1F1F1 .02rem solid;
		display: flex;
		justify-content: space-around;

	}

	.header p {
		font-size: .36rem;
		color: #BA874F;
		font-family: PingFangSC-Medium, sans-serif;
		line-height: .88rem;
	}

	.active {
		color: #BA874F;
		border-bottom: .03rem solid #BA874F;
	}
</style>
