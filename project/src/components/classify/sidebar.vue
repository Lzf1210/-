 <template>
	<div class="sidebar">
		<ul>
			<li v-for="(item,index) in list" @click="change(index)" :class="active == index ? 'active' : ''">
				<router-link :to="{name:item.name}">
					{{item.title}}
				</router-link>

			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		
		data(){
			return{
				list:[
					{
						name:"details",
						title:"厨房调味",
						id:1
					},
					{
						name:"details1",
						title:"粮油副食",
						id:2
					},
					{
						name:"details2",
						title:"休闲小吃",
						id:3
					},
					{
						name:"details3",
						title:"安心蔬菜",
						id:4
					},
					{
						name:"details4",
						title:"水产海鲜",
					},
					{
						name:"details5",
						title:"肉禽蛋奶"
					},
					{
						name:"details6",
						title:"家庭用品"
					}
				],
				active:0,
			}
		},
		methods:{
			change(index){
				this.active = index;
			}
		},
		
	}
	
	
</script>

<style scoped> 
	.sidebar{
		width: 2rem;
		height:11.1rem;
		border-right: 2px solid #B1B1B1;
		float: left;
	}
	.sidebar>ul>li{
		/* width: 90%; */
		height:1rem;
		/* display: flex;
		/* justify-content: center; */ 
		/* text-align: center; */
		/* padding-left:10% */
		position: relative;
	}
	.sidebar>ul>li>a{
		width: 1.6rem;
		line-height: 1rem;
		font-size: .32rem;
		text-align: right;
		position: absolute;
		/* right: .36rem; */
		color: #222222;
		font-family: PingFangSC-Regular;
	}
	.sidebar>ul>li>.router-link-active{
	    color: #EFB31F;
		border-left:.1rem solid #EFB31F;
		text-decoration: none;
		
	}
</style>