<template>
  <div class="op-area">
    <span>按省份选择:</span>
    <m-select
      title="省份"
      :value="province"
      :list="provinceList"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      className="province"
    />
    <m-select
      title="城市"
      :value="city"
      :list="cityList"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"
    />

    <span class="search">直接搜索：</span>
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>
  </div>

</template>

<script>
import api from "@/api/index.js";
import MSelect from "@/components/changeCity/Select.vue";
export default {
  data() {
    return {
      province: "省份",
      provinceList: [],
      provinceActive: false,
      city: "城市",
      cityList: [],
      cityActive: false,
      cityDisabled: true,

      restaurants: [],
      state: '',
      timeout:  null
    };
  },
  components: {
    MSelect,
  },
  created() {
    api.getProvinceList().then((res) => {
      this.provinceList = res.data.data.map((item) => {
        item.name = item.provinceName;
        return item;
      });
    });
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(item) {
      this.province = item.name;
      this.cityList = item.cityInfoList;
      this.cityDisabled = false;
    },
    changeCity(item) {
      this.city = item.name;
      this.$store.dispatch('setPosition', item);
      this.$router.push({name: 'index'});
    },

    loadAll() {
       // 请求后端接口
      return [{"value":'未找到匹配的城市'}]
    },
    querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    },
};
</script>

<style lang="less" scoped>
.op-area {
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;

  span {
    vertical-align: middle;
    color: #333;
    font-weight: 500;
  }

  .search {
    margin-left: 40px;
  }

  .el-autocomplete {
    margin-left: 10px;
  }
}
</style>