<template>
  <div class="maoyan-film">
    <div class="index-nav">
      <dl @mouseover="over">
        <dt>{{ resultsData.index_nav.title }}</dt>
        <dd 
          v-for="(item, index) in resultsData.index_nav.tab"
          :key="index"
          :class="{active: kind == item.type}" 
          :data-type= item.type
        >
          {{ item.text }}
        </dd>  
        <router-link to="/">全部</router-link>
      </dl>
    </div>
    <div class="maoyan-view">
      <ul class="slider-content">
        <li class="slider-item-film"
          v-for="(item, index) in resultsData.maoyan_view" 
          :key="index"  
        > 
          <a :href="item.url"> 
            <img :src="item.image" class="image" alt="">
            <img :src="item.mark" class="mark" alt=""> 
            <div class="film-info">
              <p class="film-score">
                <b>
                  {{ item.score }}
                  <span>{{ item.score_number }}</span>
                </b>
              </p>
              <p class="film-name">{{ item.name }}</p>
              <span class="buy-ticket">购票</span>
            </div>
          </a>
        </li>
      </ul>
      <div class="btn btn-pre" @click="btn_pre">
        <i></i>
      </div>
      <div class="btn btn-next" @click="btn_next">
        <i></i>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: 'shangying',
      resultsData: {
        index_nav:{
          title: '猫眼电影',
          tab:[
            {
              text: '正在热映',
              type: 'shangying'
            },
            {
              text: '即将上映',
              type: 'jijiang'
            },
            
          ]
        },
        maoyan_view: [
          {
            url: "#",
            image: "https://p0.meituan.net/movie/202ea88abd2abf2aa1964487d61edab64556414.jpg@214w_297h_1e_1c",
            mark: "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png",
            score: '观众评',
            score_number: 9.3,
            name: "我和我的家乡"
          },
          {
            url: "#",
            image: "https://p0.meituan.net/movie/e00977359c9718949a7d1fff69f5baeb3782915.jpg@214w_297h_1e_1c",
            mark: "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
            score: '观众评',
            score_number: 8.4,
            name: "姜子牙"
          },
          {
            url: "#",
            image: "https://p1.meituan.net/movie/e7185e149d79e72c4ef0d70f27fc76da1642784.jpg@214w_297h_1e_1c",
            mark: "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png",
            score: '观众评',
            score_number: 9.1,
            name: "夺冠"
          },
          {
            url: "#",
            image: "https://p0.meituan.net/movie/c16b0a68f95d884d428f339f8eacce834410200.jpg@214w_297h_1e_1c",
            score: '观众评',
            score_number: 9.3,
            name: "一点就到家"
          },
          {
            url: "#",
            image: "https://p1.meituan.net/movie/06a8f52fdac69931db3d26b3b62d8484961259.jpg@214w_297h_1e_1c",
            mark: "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
            score: '观众评',
            score_number: 9.2,
            name: "急先锋"
          },
          {
            url: "#",
            image: "https://p0.meituan.net/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg@214w_297h_1e_1c",
            mark: "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png",
            score: '观众评',
            score_number: 8.3,
            name: "八佰"
          },
          {
            url: "#",
            image: "https://p1.meituan.net/movie/828d68173a64a721d54a61be167a9c864358691.jpg@214w_297h_1e_1c",
            score: '观众评',
            score_number: 9.2,
            name: "再见吧！少年"
          },
          {
            url: "#",
            image: "https://p1.meituan.net/movie/4dc7bde9dbdbb73ecd9b14d2752d17c43681386.jpg@214w_297h_1e_1c",
            score: '观众评',
            score_number: 8.1,
            name: "萌宠流浪记"
          },
          {
            url: "#",
            image: "https://p1.meituan.net/movie/84a2c5e0959ac2d625039690553c19d1454744.jpg@214w_297h_1e_1c",
            mark: "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
            score: '观众评',
            score_number: 8.5,
            name: "木兰：横空出世"
          },
          {
            url: "#",
            image: "https://p1.meituan.net/movie/3a3333db65322d3963cf683863c8d2e3346602.jpg@214w_297h_1e_1c",
            score: '观众评',
            score_number: 9.3,
            name: "2019阅兵盛典"
          }
        ]
      }
    }
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if(tagName != 'dd') {
        return false;
      }
      this.kind = dom.getAttribute('data-type');
    },
    btn_pre() {
      let slider = document.getElementsByClassName('slider-content')[0];
      if(!slider.style.marginLeft || slider.style.marginLeft === 12 + 'px') {
        return false;
      }
      slider.style.marginLeft = 12 + 'px';
    },
    btn_next() {
      let slider = document.getElementsByClassName('slider-content')[0];
      if(slider.style.marginLeft === -1155 + 'px') {
        return false;
      }
      slider.style.marginLeft = -1155 + 'px';
    }
  }
}
</script>

<style lang="less" scoped src="@/assets/css/index/film.less">

  
</style>