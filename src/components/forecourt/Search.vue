<template>
  <div class="search">
    <el-row>
      <el-col
        :span="6"
        class="loge"
      >
        <router-link :to="{name: 'index'}">
          <img
            src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
            alt="美团"
          />
        </router-link>
      </el-col>
      <el-col
        :span="18"
        class="center"
      >
        <el-input
          v-model="input"
          placeholder="火锅"
          @focus="inputFocus"
          @blur="inputBlur"
          @input="inputVale"
        ></el-input>

        <el-button
          type="primary"
          icon="el-icon-search"
          @click="btnclick"
        ></el-button>
        <ul
          class="list-item"
          v-show="input != '' && searchInput"
        >
          <li v-for="(item, index) in inputList" :key="index">
            <router-link :to="{name: 'goods'}">{{item}}</router-link>
          </li>
        </ul>
        <p class="suggest">
          <a href="#">京东第一温泉度假村</a>
          <a href="#">99旅馆连锁</a>
          <a href="#">尚客优快酒店</a>
          <a href="#">7天连锁酒店</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      input: "",
      inputList: [],
      searchInput: true,
    };
  },
  methods: {
    btnclick: function() {
      if(this.input != ''){
      this.$router.push({name: 'goods'})

      }
    },
    inputFocus: function() {
      this.searchInput = true;
    },
    inputBlur: function() {
      let self = this;
      setTimeout(function() {
        self.searchInput = false;
      }, 200);
    },
    inputVale() {
      let time = null;
      let mThis = this;
      mThis.inputList = [];
      clearTimeout(time);
      time = setTimeout(function() {
        let val = mThis.input;
        api.getHeaderSearch().then(res => {
          mThis.inputList = res.data.data.list.filter((item, index) => {
            return item.indexOf(val) > -1;
          }) 
        });
      }, 300);
    }
  },
};
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  height: 94px;
  background-color: #fff;
  padding-top: 28px;
  .el-row {
    width: 1190px;
    margin: 0 auto;
    
    .loge {
      a {
        img {
          width: 126px;
          height: 46px;
        }
      }
    }
    
    .center {
      padding-left: 25px;
      position: relative;
      .el-input {
        width: 470px;
        border: none;
      }

      .el-button {
        width: 80px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        margin-left: -2px;
        position: absolute;
        background-color: #31bbac;
        border-color: #31bbac;
      }

      .suggest {
        margin-top: 10px;
        a {
          margin: 0 15px;
          font-size: 12px;
          color: #999;
        }
        a:hover {
          color: #31bbac;
        }
      }

      .list-item {
        position: absolute;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        border-top: none;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        width: 467px;
        z-index: 3;
        
        li {
          font-size: 11px;
          color: #606266;
          a {
            display: block;
            padding: 6px 10px;
          }
          a:hover {
            color: #31bbac;
            background-color: #f8f8f8;
          }
        }
      }
    }
  }
}
</style>