<template>
  <div class="lamp-right">
    <ul>
      <li class="list">
        <router-link to="">我的美团</router-link>
        <dl>
          <dd>
            <router-link to="">我的订单</router-link>
          </dd>
          <dd>
            <router-link to="">我的收藏</router-link>
          </dd>
          <dd>
            <router-link to="">抵用券</router-link>
          </dd>
          <dd>
            <router-link to="">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li>
        <router-link to="">手机APP</router-link>
      </li>
      <li class="list business">
        <span>商家中心</span>
        <dl>
          <dd>
            <router-link to="">美团餐饮商户中心</router-link>
          </dd>
          <dd>
            <router-link to="">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link to="">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link to="">我想合作</router-link>
          </dd>
          <dd>
            <router-link to="">手机免费开店</router-link>
          </dd>
          <dd>
            <router-link to="">餐饮代理商招募</router-link>
          </dd>
          <dd>
            <router-link to="">商家申请开票</router-link>
          </dd>
          <dd>
            <router-link to="">免费合作美团排队</router-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <span>美团规则</span>
        <dl>
          <dd>
            <router-link to="">规则中心</router-link>
          </dd>
          <dd>
            <router-link to="">规则目录</router-link>
          </dd>
          <dd>
            <router-link to="">规则评议院</router-link>
          </dd>
        </dl>
      </li>
      <li class="list navigation">
        <span>网站导航</span>
        <dl>
          <div class="j-d-l-y">
            <dt>酒店旅游</dt>
            <dd>
              <router-link to="">国际机票</router-link>
            </dd>
            <dd>
              <router-link to="">火车票 </router-link>
            </dd>
            <dd>
              <router-link to="">民宿 </router-link>
            </dd>
            <dd>
              <router-link to="">经济型酒店 </router-link>
            </dd>
            <dd>
              <router-link to="">主题酒店 </router-link>
            </dd>
            <dd>
              <router-link to="">商务酒店 </router-link>
            </dd>
            <dd>
              <router-link to="">公寓 </router-link>
            </dd>
            <dd>
              <router-link to="">豪华酒店 </router-link>
            </dd>
            <dd>
              <router-link to="">客栈 </router-link>
            </dd>
            <dd>
              <router-link to="">青年旅社 </router-link>
            </dd>
            <dd>
              <router-link to="">度假酒店 </router-link>
            </dd>
            <dd>
              <router-link to="">别墅 </router-link>
            </dd>
            <dd>
              <router-link to="">农家院 </router-link>
            </dd>
          </div>

          <div class="c-m-s">
            <dt>吃美食</dt>
            <dd>
              <router-link to="">烤鱼</router-link>
            </dd>
            <dd>
              <router-link to="">特色小吃</router-link>
            </dd>
            <dd>
              <router-link to="">烧烤</router-link>
            </dd>
            <dd>
              <router-link to="">自助餐</router-link>
            </dd>
            <dd>
              <router-link to="">火锅</router-link>
            </dd>
            <dd>
              <router-link to="">代金券</router-link>
            </dd>
          </div>
          <div class="k-d-y">
            <dt>看电影</dt>
            <dd>
              <router-link to="">热映电影</router-link>
            </dd>
            <dd>
              <router-link to="">热门影院</router-link>
            </dd>
            <dd>
              <router-link to="">热映电影口碑榜</router-link>
            </dd>
            <dd>
              <router-link to="">最受期待电影</router-link>
            </dd>
            <dd>
              <router-link to="">国内票房榜</router-link>
            </dd>
            <dd>
              <router-link to="">北美票房榜</router-link>
            </dd>
            <dd>
              <router-link to="">电影排行榜</router-link>
            </dd>
          </div>
          <div class="s-j-y-y">
            <dt>手机应用</dt>
            <dd>
              <router-link to="">
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                >
              </router-link>
            </dd>
            <dd>
              <router-link to="">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                  title="外卖app"
                  alt="外卖app"
                >
              </router-link>
            </dd>
            <dd>
              <router-link to="">
                <img
                  class="appicon"
                  src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                  title="民宿app"
                  alt="民宿app"
                >
              </router-link>
            </dd>
            <dd>
              <router-link to="">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                  title="点评app"
                  alt="点评app"
                >
              </router-link>
            </dd>
            <dd>
              <router-link to="">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                  title="猫眼app"
                  alt="猫眼app"
                >
              </router-link>
            </dd>
          </div>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
ul {
  float: right;
}

ul li {
  float: left;
  width: 80px;
  text-align: center;
  box-sizing: border-box;
  position: relative;
}

ul li:hover span {
  color: #31bbac;
}

ul li a:hover {
  color: #31bbac;
}

ul li dl dd a {
  height: 40px;
  display: block;
}

/* --------- */
ul .list:hover {
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  background-color: #fff;
}

ul .list dl {
  position: absolute;
  width: 80px;
  background-color: #fff;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  right: -1px;
  box-sizing: border-box;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  display: none;
  z-index: 5;
}

ul .list:hover dl {
  display: block;
}

ul .list.business dl {
  width: 140px;
  border-top: 1px solid #e5e5e5;
}

ul .list.business dl::after,
ul .list.navigation dl::after {
  content: "";
  position: absolute;
  top: -1px;
  right: 0px;
  width: 76px;
  border: 1px solid #fff;
}

ul .list.navigation dl {
  width: 1190px;
  line-height: initial;
  padding: 30px 36px 36px 50px;
  border-top: 1px solid #e5e5e5;
}

ul .list.navigation dl dt {
  margin-bottom: 40px;
  font-weight: 500;
  color: #222;
  font-size: 14px;
}

ul .list.navigation dl dd {
  display: inline-block;
}

ul .list.navigation dl dd a {
  padding: 5px 0px;
  height: initial;
}

/* ------------ */
ul .list.navigation div {
  float: left;
  margin-right: 47px;
}

ul .list.navigation .j-d-l-y {
  width: 234px;
}

ul .list.navigation .j-d-l-y dd {
  width: 33%;
}

ul .list.navigation .j-d-l-y dd:last-child {
  float: left;
}

ul .list.navigation .c-m-s {
  width: 156px;
}

ul .list.navigation .c-m-s dd {
  width: 50%;
}

ul .list.navigation .k-d-y {
  width: 90px;
}

ul .list.navigation .s-j-y-y {
  float: right;
}

ul .list.navigation .s-j-y-y dd {
  margin: 0 8px;
}

ul .list.navigation .s-j-y-y img {
  width: 60px;
  height: 60px;
}
</style>