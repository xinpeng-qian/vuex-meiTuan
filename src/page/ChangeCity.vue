<template>
  <div class="page-changeCity">
    <div>
      <province />
    </div>
    
    <div>
      <city-list title="热门城市：" :list="cityHotList"/>
    </div>
    <div>
      <city-list title="最近访问：" :list="cityLatelyList"/>
    </div>

    <div>
      <alphabet />
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
import Province from '@/components/changeCity/Province.vue'
import CityList from '@/components/changeCity/CityList.vue'
import Alphabet from '@/components/changeCity/Alphabet.vue'
export default {
  data() {
    return {
      cityHotList: [],
      cityLatelyList: [],
    }
  },
  components: {
    Province,
    CityList,
    Alphabet,
  },
  created() {
    api.getCityHotList().then(res => {
      this.cityHotList = res.data.data;
    });
    api.getCityRecents().then(res => {
      this.cityLatelyList = res.data.data;
    });
  }
}
</script>

<style lang="less" scoped>
.page-changeCity {
  width: 1190px;
  padding: 20px;
  box-sizing: border-box;
  margin: 20px auto;
  border: 1px solid #e5e5e5;
  background-color: #fff;
}
</style>