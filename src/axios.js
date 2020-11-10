import axios from 'axios'

axios.defaults.baseURL = 'https://open.duyiedu.com';

axios.interceptors.request.use(config => {
  // 请求拦截器
  config.params = {
    ...config.params,
    appkey: 'xinpeng_qian_1602993483013'
  }
  return config;
})

export default axios;