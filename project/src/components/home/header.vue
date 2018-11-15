<template>
    <div class="header">
        <div class='header_t'>
            <img src="./img/Page 1 Copy 2.png" alt="">
            <input type="text" placeholder="想吃点什么吗?">
            <img src="./img/Group 2.png" alt="">
            <div class="search">
                <div class="search_l"></div>
            <div class="search_r"></div>
            </div> 
        </div>
        <!--  -->
            <ul>
                <li 
                v-for="(item,index) in navs_home"
                :class="activeIndex == index?'active':''"
                @click="hanleActiveIndex(index)"
                >
                <router-link :to="{name:item.name}">{{item.title}}</router-link>
                </li>
            </ul>
            <!--  -->
            <ul>
                <li 
                v-for="(item,index) in nav_sort"
                :class="sortIndex == index ? 'sortIndex' : ''"
                @click="handleSortIndex(index)"
                >{{item}}</li>
            </ul>
            <!-- 全部分类 -->
            <ul v-show="show_type">
                <li 
                v-for="(item,index) in goodsTypeName"
                
                >{{item.title}}</li>
            </ul>
            <!-- 综合排序 -->
            <ul v-show="show_sort">
                <li 
                v-for="(item,index) in sort"
                
                >{{item.title}}</li>
            </ul>
            <!-- 筛选 -->
            <div 
            class="nav_filter"
            v-show="show_filter"
            >
                <div><em>＜</em><p>筛选</p><em></em></div>
                <p>价格区间</p>
                <!-- 滑块 -->
                <div class="block">
                    <el-slider
                        v-model="value9"
                        range
                        show-stops
                        :max="200">
                    </el-slider>
                    <p>
                        <input :value="value9[0] | sort_price">~
                        <input :value="value9[1] | sort_price">
                    </p>
                    <p>品牌</p>
                    <ul>
                        <li v-for="(item,index) in nav_brand">{{item.title}}</li>
                    </ul>
                    
                </div>
                <p><button>重置</button><button>确定</button></p>
                
            </div>
    </div>
</template>

<script scoped>
export default {
  components: {},
  filters:{
    //   筛选价格区间过滤器
      'sort_price':(val)=>{
          return '￥' + val;
      }
  },
  data() {
    return {
        // 滑块
        value9: [0,200],
      // 分类
      show_type: false,
      // 排序
      show_sort: false,
      // 筛选
      show_filter: false,
      navs_home: [
        {
          title: "精选",
          name: "jingx"
        },
        {
          title: "全部商品",
          name: "goodsa"
        },
        {
          title: "厨房调味",
          name: "tiaowei"
          
        },
        {
          title: "粮油副食",
          name: "fushi"
        },
        {
          title: "休闲小食",
          name: "xiaoshi"
        },
        {
          title: "安心果蔬",
          name: "guoshu"
        }
      ],
      goodsTypeName: [
        {
          title: "全部品类",
          name: "allgoods",
<<<<<<< HEAD
           id:7,
        },
        {
          title: "调味组合",
          name: "group",
           id:8,
        },
        {
          title: "酿造酱油",
          name: "soy",
           id:9,
        },
        {
          title: "调味酱料",
          name: "sauce",
           id:10,
        },
        {
          title: "调味作料",
          name: "seasoning",
           id:11,
        },
        {
          title: "发酵食醋",
          name: "vinegar",
           id:12,
=======
        },
        {
          title: "调味组合",
          name: "group"
        },
        {
          title: "酿造酱油",
          name: "soy"
        },
        {
          title: "调味酱料",
          name: "sauce"
        },
        {
          title: "调味作料",
          name: "seasoning"
        },
        {
          title: "发酵食醋",
          name: "vinegar"
>>>>>>> master
        }
      ],
      sort: [
        {
          title: "价格低到高",
<<<<<<< HEAD
          name: "btt",
           id:13,
        },
        {
          title: "价格高到低",
          name: "ttb",
           id:14,
=======
          name: "btt"
        },
        {
          title: "价格高到低",
          name: "ttb"
>>>>>>> master
        }
      ],
      // nav
      activeIndex: 3,
      nav_sort: ["全部分类 ▼", "综合排序 ▼", "筛选"],
      // 分类等
      sortIndex: 0,
      //筛选
      nav_brand:[
          {
              title:'六月鲜',
              name:'brand_1'
          },
          {
              title:'西王',
              name:'brand_2'
          },
          {
              title:'胡姬花',
              name:'brand_3'
          },
          {
              title:'小伙子',
              name:'brand_4'
          },
          {
              title:'三主元',
              name:'brand_5'
          },
          {
              title:'新食力',
              name:'brand_6'
          },
          {
              title:'圃美多',
              name:'brand_7'
          },
          {
              title:'欧乐',
              name:'brand_8'
          },
          {
              title:'KOKA',
              name:'brand_9'
          },
          {
              title:'巧婆婆',
              name:'brand_10'
          },
          {
              title:'威亨',
              name:'brand_11'
          },
          {
              title:'自然素材',
              name:'brand_12'
          },
          {
              title:'松源',
              name:'brand_3'
          },
          {
              title:'品品好',
              name:'brand_14'
          },
          {
              title:'海朴',
              name:'brand_15'
          },
          {
              title:'品食客',
              name:'brand_16'
          },
          {
              title:'衣谷',
              name:'brand_17'
          },
          {
              title:'日冷',
              name:'brand_18'
          },
          {
              title:'竹笙',
              name:'brand_19'
          },
          {
              title:'永富',
              name:'brand_20'
          },
          {
              title:'龙大',
              name:'brand_21'
          },
          {
              title:'威亨',
              name:'brand_22'
          },
      ]

    };
  },
  methods: {
    hanleActiveIndex(index) {
      this.activeIndex = index;
    },
    handleSortIndex(index) {
      this.sortIndex = index;
      switch (index) {
        case 0:
          this.show_type = !this.show_type;
          this.show_sort = false;
          this.show_filter = false;
          break;
        case 1:
          this.show_sort = !this.show_sort;
          this.show_type = false;
          this.show_filter = false;
          break;
          case 2 :
          this.show_filter = !this.show_filter;
          this.show_type = false;
          this.show_sort = false;
        default:
          break;
      }
    }
  }
};
</script>

<style>
.header {
  width: 100%;
}
.header > .header_t {
  width: 100%;
  height: 0.88rem;
  /* background: red; */
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.header > .header_t > input {
  width: 5.12rem;
  height: 0.6rem;
  background: #efefef;
  border-radius: 20px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  letter-spacing: 0;
  padding-left: 11.2%;
  border: 0;
  outline: none;
}
.header > .header_nav {
  width: 110%;
  display: flex;
}
.header > ul:nth-of-type(1) {
  height: 0.62rem;
  padding: 0 0.32rem;
  display: flex;
  align-items: center;
  /* 导航栏滚动 */
  display: -webkit-box;
  overflow-x: auto;
  /*适应苹果*/
  -webkit-overflow-scrolling: touch;
  border-bottom: 1px solid #e3e3e3;
}
/* 隐藏滚动条 */
.header > ul:nth-of-type(1)::-webkit-scrollbar {
  display: none;
}
.header > ul:nth-of-type(1) > li {
  padding: 0 0.21rem;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #3f2020;
  letter-spacing: 0;
}
/* 导航栏点击效果 */
.active {
  border-bottom: 2px solid #ba874f;
  color: #bb884a;
}
/* 分类点击效果 */
.sortIndex {
  color: #bb884a;
}

/* 搜索按钮*/
.search {
  position: absolute;
  left: 1.5rem;
  top: 0.7rem;
}
.search_l {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 1px solid #999999;
  position: absolute;
  left: rem;
}
.search_r {
  width: 2px;
  height: 6px;
  transform: rotate(-50deg);
  background: #999999;
  border-radius: 1px;
  position: absolute;
  left: 11px;
  top: 11px;
}
.header > ul:nth-of-type(2) {
  border: 1px solid #e3e3e3;
  width: 100%;
  height: 0.8rem;
  padding: 4px 0;
  border-left: none;
  border-right: none;
}
.header > ul:nth-of-type(2) > li {
  float: left;
  height: 100%;
  padding: 0 0.6rem;
  line-height: 0.6rem;
}
.header > ul:nth-of-type(2) > li:nth-of-type(2) {
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
}
.header > ul:nth-of-type(2) > li:nth-of-type(3) {
  background: url(./img/Page1Copy6.png) no-repeat right;
}
/* 全部品类 */
.header > ul:nth-of-type(3) {
  width: 7.5rem;
  height: 2.02rem;
  background: #ffffff;
  /* background: red;     */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  z-index: 10;
}
.header > ul:nth-of-type(3) > li {
  width: 2.16rem;
  height: 0.6rem;
  background: #eeeeee;
  border-radius: 4px;
  text-align: center;
  line-height: 0.6rem;
}
/* 排序 */
.header > ul:nth-of-type(4) {
  width: 7.5rem;
  background: #ffffff;
  padding: 0 0.4rem;
  position: absolute;
  z-index: 10;
}
.header > ul:nth-of-type(4) > li {
  width: 100%;
  height: 0.9rem;
  border-bottom: 1px solid #e5e5e5;
  line-height: 0.9rem;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #222222;
  letter-spacing: -0.7px;
  padding-left: 0.4rem;
}
/* 筛选 */
.nav_filter {
  width: 6.46rem;
  height: 13.34rem;
  /* background: #ffffff; */
  background: red;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  padding: 0.64rem 0.32rem 0;
}
.nav_filter > div:nth-of-type(1) {
  display: flex;
  justify-content: space-between;
}
.nav_filter > div:nth-of-type(1)>p{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #222222;
    letter-spacing: 0.1px;
}
.nav_filter>p:nth-of-type(1){
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #222222;
    letter-spacing: 0.1px;
}
.nav_filter>p:nth-of-type(2){
    position: absolute;
    left: 0;
    bottom: 0;
}
.nav_filter>p:nth-of-type(2)>button{
    width: 3.22rem;
    height: .98rem;
    background: #ffffff;
    border:none;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #222222;
    letter-spacing: 0.1px;
}

.nav_filter > p:nth-of-type(1) {
  margin: 5.3% 0 3.3%;
}
/* 滑块 */ 
.block>p>input{
    width: 2.26rem;
    height: .7rem;
    background: #FFFCFC;
    border: 2px solid #9F8F8F;
    border-radius: 2px;
    text-align: center;
    outline: none;
}
.block>p:nth-of-type(2){
    margin:.76rem 0 .2rem ;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #222222;
    letter-spacing: 0.1px;
}
.block>ul:nth-of-type(1){
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
}
.block>ul:nth-of-type(1)>li{
    width: 1.82rem;
    height: .7rem;
    background: #FFFCFC;
    border: 1px solid #9F8F8F;
    border-radius: 2px;
    text-align: center;
    line-height: .7rem;
    margin-bottom: .2rem; 
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #222222;
    letter-spacing: 0.09px;
}
.el-slider__bar{
    background-color: #B58150;
}
</style>
