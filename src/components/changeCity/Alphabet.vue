<template>
  <div class="category">

    <div class="alphabet-category">
      <h3>按拼音首字母选择：</h3>
      <p>
        <a :href="'#city-' + item"
        v-for="(item, index) in list" 
        :key="index"
        > {{ item }} </a>
      </p>
    </div>

    <div class="alphabet-city-area">
      <div class="city-area" v-for="(item, index) in cityGroup" :key="index" :id="'city-' + index">
        <span class="city-label">{{index}}</span>
        <span class="cities">
          <a href="#" v-for="city in item" :key="city.id" @click="changeCity(city)">
            {{city.name}}
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      list: "ABCDEFGHJKLMNPQRSTWXYZ",
      AList: ['鞍山','安庆','安阳','安顺','安康','安丘','安岳','安陆市','阿克苏','安州区','阿图什市','安吉','阿拉善盟','阿荣旗','安平','安溪','安宁','安化','阿拉尔','安福','阿勒泰市'],
      cityGroup: {},
    }
  },
  created() {
    api.getCityCitylist().then(res => {
      var obj = {};
      res.data.data.forEach((item,index) => {
        if(!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = [];
        }
        obj[item.firstChar.toUpperCase()].push(item);
      })
      this.cityGroup = obj;
    })
  },
  methods: {
    changeCity(item) {
        this.$store.dispatch('setPosition', item);
        this.$router.push({name: 'index'})
    }
  }

  
}
</script>

<style lang="less" scoped>
.category {
  .alphabet-category {
    padding: 30px 0;

    h3 {
      display: inline-block;
      color: #333;
      font-weight: 500;
      vertical-align: top;
      margin-top: 3px;
    }

    p {
      display: inline-block;
      margin-top: 2px;

      a {
        width: 25px;
        height: 25px;
        margin: 0 10px;
        color: #666;
        font-size: 15px;
        margin: 0 10px;
        display: inline-block;
        text-align: center;
        padding-top: 5px;
        box-sizing: border-box;
        border-radius: 50%;

        &:hover {
          background-color: #f8f8f8;
          color: #222;
          font-weight: 500;
        }
      }
    }
  }

  .alphabet-city-area {
    .city-area {
      padding: 13px 30px 13px 10px;
      border-radius: 10px;

      &:hover {
        background-color: #f8f8f8;
      }

      .city-label {
        width: 40px;
        height: 40px;
        background-color: #ffd000;
        border-radius: 50%;
        display: inline-block;
        padding-top: 12px;
        box-sizing: border-box;
        text-align: center;
        vertical-align: top;
      }
      .cities {
        max-width: 1065px;
        display: inline-block;

        a {
          margin: 10px 20px;
          display: inline-block;
          color: #666;
          font-size: 14px;
          line-height: 1.4em;
        }
      }
    }
  }
}
</style>