<template>
  <div class="mt-products">
    <ul class="sort-option">
      <li><a href="#x" class="active">智能排序</a></li>
      <li><a href="#x">
        价格排序
        <i class="el-icon-d-caret"></i>
        </a></li>
      <li><a href="#x">人气最高</a></li>
      <li><a href="#x">评价最高</a></li>
    </ul>
    <div class="main-list" v-for="(item, index) in 2" :key="index">
      <div class="item-img">
        <a href="#">
          <span></span>
          <img
            src="//p1.meituan.net/bbia/193570949_1589795230932.jpeg@220w_125h_1e_1c"
            alt=""
          >
        </a>
      </div>
      <div class="item-desc">
        <div class="desc-explain">
          <a href="#">川渝九宫格火锅</a>
          <div class="evaluate">
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
            <span>很好</span>
            <span>5分</span>
            <span class="highlight">991人评论</span>
          </div>
          <div class="address">
            <span class="left">重庆火锅|北大学城</span>
            <span class="right">惠济区英才街中州大学向东100米路北2楼</span>
            <div class="map">
              <i class="el-icon-location-information"></i>
              <span>查看地图</span>
            </div>
          </div>
          <div class="avg-price">人均¥48</div>
        </div>
        <div class="desc-package" >
          <div class="deal-wrapper">
            <a href="#" v-for="(item, index) in 4" :key="index">
              <div class="deal-title">超值四人火锅套餐</div>
              <div class="deal-info">
                <span class="deal-price">¥139</span>
                <span>门市价¥212</span>
                <span>已售1859</span>
              </div>
            </a>
          </div>
          <div class="toggle-btn">
           {{(btn==toggleBtn[index])?'收起':toggleBtn[index]}}
            <i @click.stop class="el-icon-arrow-down"></i>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      value: 3.7,
      toggleBtn: ['更多4个优惠','查看更多优惠'],
      btn: false,
    };
  },
  methods: {
    toggle_btn(e,index) {
      let mythis = this;
      let m = e.target;
      let xd = e.target.previousElementSibling;
      let i = e.target.firstElementChild;
      if(mythis.btn) {
        mythis.btn = false;
      }
      else {
        mythis.btn = mythis.toggleBtn[index];
      }

      if( mythis.btn == mythis.toggleBtn[index]) {
        xd.style.height = 'auto';
        i.className = 'el-icon-arrow-up';
      }else {
        xd.style.height = '112px';
        i.className = 'el-icon-arrow-down';
      }
    }
  },
};
</script>

<style lang="less" scoped src="@/assets/css/goodslist/productslist.less">

</style>
