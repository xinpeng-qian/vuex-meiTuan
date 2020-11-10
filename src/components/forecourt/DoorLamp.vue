<template>
  <div class="door-lamp">
    <el-row>
      <el-col :span="10">
        <lamp-left />
      </el-col>
      <el-col :span="14">
        <lamp-right />
      </el-col>
    </el-row>
  </div>

</template>

<script>
import LampLeft from '@/components/forecourt/LampLeft.vue';
import LampRight from '@/components/forecourt/LampRight.vue';
export default {
  components: {
    LampLeft,
    LampRight,
  }
};
</script>

<style  scoped>
.door-lamp {
  width: 100%;
  height: 40px;
  background-color: #f8f8f8;
  font-size: 12px;
  color: #999; 
  line-height: 40px;
}

.door-lamp .el-row {
  width: 1190px;
  margin: auto;
}
</style>