import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/main.css';
import store from './store'

Vue.use(ElementUI);
Vue.config.productionTip = false

// 自定义事件，点击dom触发
Vue.directive('docum-click', {
  bind(el, binding, vnode) {
    document.addEventListener('click', binding.value, false);
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
