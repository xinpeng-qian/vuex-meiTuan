<template>
  <div class="page-index">
    <div class="fill"></div>
    <div class="page-wrap">
      <div class="banner-container">
        <div class="menu">
          <left-menu />
        </div>
        <div class="life">
          <right-life />
        </div>
      </div>

      <div class="film-container">
        <film></film>
      </div>

      <div class="minsu-container">
        <min-su></min-su>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "@/components/index/Menu.vue";
import RightLife from "@/components/index/Life.vue";
import MinSu from "@/components/index/MinSu.vue";
import Film from "@/components/index/Film.vue";

export default {
  components: {
    LeftMenu,
    RightLife,
    MinSu,
    Film,
  },
};
</script>

<style lang="less" scoped>
.page-index {
  .fill {
    height: 35px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 10px 15px 0px rgba(102, 102, 102, 0.1);
  }

  .page-wrap {
    width: 1190px;
    margin: 0 auto;

    .banner-container {
      height: 427px;

      .menu,
      .life {
        display: inline-block;
        vertical-align: top;
      }
    }

    .film-container,
    .minsu-container {
      margin-top: 40px;
    }
  }
}
</style>