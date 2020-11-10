<template>
  <div class="right-life">
    <div class="header-title">
      <router-link to="#">美团外卖</router-link>
      <router-link to="#">猫眼电影</router-link>
      <router-link to="#">美团酒店</router-link>
      <router-link to="#">民宿 / 公寓</router-link>
      <router-link to="#">商家入驻</router-link>
      <router-link to="#">美团公益</router-link>
    </div>
    <div class="block3">
      <div class="rotation">
        <slider/>
      </div>
      <div class="pic">
        <a href="#">
          <div class="life-pic"></div>
        </a>
      </div> 
      <div class="logincard">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
          <p>Hi！你好</p>
          <router-link :to="{name: 'register'}">注册</router-link>
          <router-link :to="{name: 'login'}">立即登录</router-link>
      </div>
    </div>
    <div class="block4">
      <div class="pic">
        <a href="#">
          <div class="hotel-pic"></div>
        </a>
      </div>
      <div class="pic">
         <a href="#">
          <div class="knowledge-pic"></div>
        </a>
      </div>
      <div class="pic">
         <a href="#">
          <div class="business-pic"></div>
        </a>
      </div>
      <div class="download-app">
        <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
        <p>美团APP手机版</p>
        <span class="red">1元起</span>
        <span>吃喝玩乐</span>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/index/Slider.vue';

export default {
  components: {
    Slider,
  }
  
}
</script>

<style lang="less" scoped src="@/assets/css/index/life.less">

</style>