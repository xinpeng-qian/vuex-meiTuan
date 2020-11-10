<template>
  <div class="index-header">
    <door-lamp/>
    <search/>

  </div>
</template>

<script>
import Search from './Search.vue';
import DoorLamp from './DoorLamp.vue';
export default {
  components: {
    Search,
    DoorLamp,
  }
  
}
</script>

<style lang="less" scoped>
.index-header {
  background: #fff;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
}
</style>