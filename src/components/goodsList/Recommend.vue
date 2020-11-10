<template>
  <div class="recommend-wrapper">
    <div class="map-container">
      <img src="@/assets/map.png" alt="">
    </div>
    <div class="recommend-box">
      <img src="@/assets/tuijian.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.recommend-wrapper {
  position: relative;

  .map-container {
    width: 230px;
    height: 220px;
    cursor: url(https://mapapi.qq.com/jsapi_v2/2/4/135/theme/grab.cur) 10 10, default;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .recommend-box {
    border: 1px solid #e5e5e5;
    margin-top: 10px;

    img {
      width: 230px;
      height: 685px;
    }
  }
}
</style>