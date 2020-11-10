<template>
  <div class="left-menu" @mouseleave="menuLeave">
    <dl>
      <dt>全部分类</dt>
      <dd v-for="(item, index) in menuList" :key="index" @mouseenter="mousEnter(item)">
        <i :class="item.type"></i>
        <router-link to="#">{{ item.name }}</router-link>
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="category" v-if="curList">
      <div class="nav" v-for="(item, index) in curList.items" :key="index">
        <div class="navTitle">
          <h2>
            <router-link to="#">{{ item.title }}</router-link>
          </h2>
          <router-link to="#">
            更多
            <span class="arrow"></span>
          </router-link>
        </div>
        <div class="navList">
          <router-link to="#" v-for="(v, i) in item.items" :key="i">
            {{ v }}
          </router-link>
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
      curList: null,
      menuList: [],
    };
  },
  created() {
    api.getIndexMenu().then(res => {
      this.menuList = res.data.data;
    })
  },
  methods: {
    mousEnter(item) {
      this.curList = item;
    },
    menuLeave() {
      let self = this;
      this.timer = setTimeout(function () {
        self.curList = null;
      }, 200);
    },
  },
};
</script>

<style lang="less" scoped src="@/assets/css/index/menu.less">

</style>