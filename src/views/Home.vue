<template>
  <div class="home">
    <el-container>
      <el-header height="">
        <forecourt />
      </el-header>
      <el-main >
        <router-view></router-view>
      </el-main>
      <el-footer height="">
        <my-footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Forecourt from "@/components/forecourt/Index.vue";
import MyFooter from "@/components/footer/Index.vue";

export default {
  name: "Home",
  components: {
    Forecourt,
    MyFooter,
  },
};
</script>

<style scoped >
.home {
  min-width: 960px;
  margin: 0 auto;
  background-color: #F8F8F8;
}

.el-header {
  padding: 0;
}

.el-main {
  overflow: inherit;
  padding: inherit;
}
</style>
