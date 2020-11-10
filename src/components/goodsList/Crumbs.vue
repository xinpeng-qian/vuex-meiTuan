<template>
  <div class="breadcrumb" id="mt-categ">
    <div class="content">
      <span>
        <router-link to="/index"> 美团</router-link>
        <i class="el-icon-arrow-right"></i>
      </span>
      <span>
        <a href="#" > 火锅</a>
      </span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.breadcrumb {
  margin: 10px 0;
  line-height: 21px;

  span {
    font-size: 12px;
    color: #222;

    &:hover {
      color: #FE8C00;
    }

    i {
      font-weight: 600;
    }
  }
}
</style>