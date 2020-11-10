<template>
  <div class="hot-city">
    <h3>{{title}}</h3>
    <p>
      <a href="#" v-for="(item,index) in list" :key="index">{{item.name}}</a>
    </p>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    'list',
  ],
  
}
</script>

<style lang="less" scoped>
.hot-city {
  padding: 30px 0;
  border-bottom: 1px solid #e5e5e5;
  line-height: 20px;

  h3 {
    display: inline-block;
    color: #333;
    font-weight: 500;
  }

  p {
    display: inline-block;

    a {
      margin: 0 20px;
      font-size: 14px;
      color: #666;

      &:hover {
        color: #000;
      }
    }
  }
}
</style>