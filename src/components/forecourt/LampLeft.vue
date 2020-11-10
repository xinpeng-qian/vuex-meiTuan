<template>
  <div class="lamp-left">
    <div class="city">
      <i class="el-icon-location"></i>
      <span>{{($store.state.position.name)?$store.state.position.name:city}}</span>
      <router-link :to="{name: 'changeCity'}" class="switchCity">
        切换城市
      </router-link>
      [<a href="#" v-for="item in cityList" :key="item.name" @click="cityClick(item)">
        {{item.name}}
      </a>]
    </div>
    <div class="user">
      <router-link :to="{name: 'login'}">
        立即登录
      </router-link>
      <router-link :to="{name: 'register'}">
        注册
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '北京',
      cityList: [
        {name:'上海'},
        {name:'广州'},
        {name:'苏州'},
      ]
    }
  },
  methods: {
    cityClick(item) {
      this.$store.dispatch('setPosition', item);
      if(this.$route.name == 'index') {
        return ;
      }else {
        this.$router.push({name: 'index'});
      }
    }
  }
};
</script>

<style scoped>
.city,
.user {
  display: inline-block;
}

.city i {
  font-size: 16px;
}

.city span,
.city .switchCity {
  color: #666;
}

.city .switchCity {
  border: 1px solid #e5e5e5;
}

.city .switchCity:hover {
  color: #fe8c00;
}

.city a {
  margin: 0 4px;
}

.user {
  margin-left: 20px;
}

.user a {
  margin-left: 6px;
}

.user a:nth-child(1) {
  color: #31bbac;
}

/* 通用样式 */
a:hover {
  color: #31bbac;
}
</style>