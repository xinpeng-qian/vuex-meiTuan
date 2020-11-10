<template>
  <div class="commodity">
    <el-row>
      <crumbs />
    </el-row>
    <div class="product-search">
      <div class="left-content">
        <div class="categ-filter">
          <categ-label />
        </div>
        <div class="categ-list">
          <products-list />
        </div>
      </div>
      <div class="right-content">
        <recommend />
      </div>
    </div>
  </div>
  
</template>

<script>
import Crumbs from '@/components/goodsList/Crumbs.vue'
import CategLabel from '@/components/goodsList/CategLabel.vue'
import ProductsList from '@/components/goodsList/ProductsList.vue'
import Recommend from '@/components/goodsList/Recommend.vue'
export default {
  components: {
    Crumbs,
    CategLabel,
    ProductsList,
    Recommend
  }
}
</script>

<style lang="less" scoped>
.commodity {
  width: 1190px;
  padding-top: 10px;
  margin: 0 auto;

  .product-search {
    width: 100%;
    margin-top: 10px;

    .left-content {
      display: inline-block;
      width: 950px;
    }

    .right-content {
      display: inline-block;
      width: 230px;
      vertical-align: top;
      margin-left: 10px;
    }
  }
}


</style>