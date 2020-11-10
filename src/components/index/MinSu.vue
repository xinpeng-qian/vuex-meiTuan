<template>
  <div class="civil-room">
    <div class="index-nav">
      <dl @mouseover="over">
        <dt>{{ resultsData.index_nav.title }}</dt>
        <dd 
          v-for="(item, index) in resultsData.index_nav.tab"
          :key="index"
          :class="{'active': kind == item.type}" 
          :data-type= item.type
        >
          {{ item.text }}
        </dd>  
        <router-link to="/">全部</router-link>
      </dl>
    </div>
    <div class="minsu-view">
      <ul>
        <li v-for="(item, index) in resultsData.minsu_view" :key="index"> 
          <a :href="item.url">
            <img :src="item.image" alt="">
            <p class="product-title">{{ item.title }}</p>
            <p class="sub-title">{{ item.sub_title }}</p>
            <p class="price-number">
              <span>￥</span>{{ item.price }}
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: 'xian',
      resultsData: {
        index_nav:{
          title: '推荐民宿',
          tab:[
            {
              text: '西安',
              type: 'xian'
            },
            {
              text: '郑州',
              type: 'zhengzhou'
            },
            {
              text: '武汉',
              type: 'wuhan'
            },
            {
              text: '合肥',
              type: 'hefei'
            },
            {
              text: '太原',
              type: 'taiyuan'
            },
            {
              text: '石家庄',
              type: 'shijiazhuang'
            },
            {
              text: '徐州',
              type: 'xuzhou'
            },
          ]
        },
        minsu_view: [
          {
            url: "#",
            image: "https://img.meituan.net/phoenix/1a6f098ce02bbb74ea2b7b7189f6db1f3462761.jpg@740w_416h_1e_1c",
            title: "【八便士room捌】地铁口/生日/暗黑系/主题民宿/露天阳台",
            sub_title: "整套可住4人 | 北关/龙首村",
            price: "248",
          },
          {
            url: "#",
            image: "https://img.meituan.net/phoenix/3764622d5503ae98460c7789dc53720b2913619.jpg@740w_416h_1e_1c",
            title: "半夏拾光.摩登少女北欧小清新文艺风/近音乐学院/省人民医院/黄鹤楼户部巷景区温馨少女大床房/设施齐全/24小时热水",
            sub_title: "整套1居室·可住2人 | 丁字桥/石牌岭",
            price: "228",
          },
          {
            url: "#",
            image: "https://img.meituan.net/phoenix/80c0d3b0e6c6bc86ab02135540efb4b52108955.jpg@740w_416h_1e_1c",
            title: "每日一消毒「轻奢公寓」鸿发.天赋店 铜山万达广场 江苏师范大学 临近徐州乐园加勒比水世界 云龙湖风景区",
            sub_title: "江苏师范/铜山万达",
            price: "199",
          },
          {
            url: "#",
            image: "https://img.meituan.net/phoenix/127715cffbc62fde12f756f1d7cc7e2c1664721.jpg@740w_416h_1e_1c",
            title: "尧里/人间/地铁直达//超大投影/步行街/火车站",
            sub_title: "整套2居室可住4人|北关/龙首村",
            price: "164",
          },
          {
            url: "#",
            image: "http://p1.meituan.net/iphoenix/c2a107cfd3c2cc0f996e6cd3b7ee9b5b2964138.jpg@740w_416h_1e_1c",
            title: "中南双地铁口/日式极简园林风民宿/超大投影、落地窗",
            sub_title: "整套1居室·可住2人 | 丁字桥/石牌岭",
            price: "190",
          },
          {
            url: "#",
            image: "https://img.meituan.net/phoenix/e1f2c5c17cd5682ec189310d3b403b09408667.jpg@740w_416h_1e_1c",
            title: "【特惠房】米亚罗—绮梦/公寓/精装/天河机场/奥特莱斯/横店街道中心街",
            sub_title: "整套2居室可住4人|北关/龙首村",
            price: "169",
          }
        ]
      }
    }
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if(tagName != 'dd') {
        return false;
      }
      this.kind = dom.getAttribute('data-type');
    }
  }
}
</script>

<style lang="less" scoped src="@/assets/css/index/minsu.less">

  
</style>