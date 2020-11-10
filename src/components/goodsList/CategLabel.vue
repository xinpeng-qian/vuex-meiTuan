<template>
  <div class="mt-categ">
    <div class="filter-component">
      <div class="label">
        <label>分类</label>
        <a href="#">
          <span>全部</span>
        </a>
      </div>
      <ul class="tags">
        <li
          v-for="(list, index) in tags"
          :key="index"
        >
          <div class="wrap">
            <a href="#mt-categ">
              {{list.title}}
              <i class="el-icon-caret-bottom"></i>
            </a>
            <dl>
              <dt>美食</dt>
              <dd href="#mt-categ">
                 <a href="#mt-categ">全部</a>
              </dd>
              <dd v-for="(item, index) in list.subList" :key="index">
                <a href="#mt-categ">{{item.name}}</a>
              </dd>
            </dl>
          </div>
        </li>

      </ul>
    </div>
    <div class="filter-component">
      <div class="label">
        <label>区域</label>
        <a href="#">
          <span>全部</span>
        </a>
      </div>
      <ul class="tags">
        <li
          v-for="(item, index) in areas"
          :key="index"
        >
          <div class="wrap">
            <a href="#">
              {{item}}
              <i class="el-icon-caret-bottom"></i>
            </a>
            <dl>
              <dt>美食</dt>
              <dd href="#mt-categ">
                 <a href="#mt-categ">全部</a>
              </dd>
              <dd v-for="(item, index) in areasList" :key="index">
                <a href="#mt-categ">{{item}}</a>
              </dd>
            </dl>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      tags: [],
      areas: [
        "推荐商圈",
        "金水区",
        "中原区",
        "二七区",
        "管城区",
        "新郑市",
        "惠济区",
        "上街区",
        "登封市",
        "荥阳市",
        "新密市",
        "巩义市",
        "中牟县",
        "高新区",
      ],
      areasList: ['郑州大学','长江中路沿线','郑铁体育中心','升龙广场','二七万达','长城康桥','华城鑫苑','鑫都汇万象城'],
      tagsItem: "美食",
    };
  },
  created() {
    api.getGoodsLabelList().then((res) => {
      this.tags = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped src="@/assets/css/goodslist/categlabel.less">

</style>