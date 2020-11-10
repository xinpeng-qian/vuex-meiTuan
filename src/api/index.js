import axios from '@/axios.js'

let api = {
  getHeaderSearch() {
    return axios.get('/api/meituan/header/search.json');
  },
  getIndexMenu() {
    return axios.get('/api/meituan/index/nav.json');
  },
  getCityCitylist() {
    return axios.get('/api/meituan/city/cityList.json');
  },
  getCityHotList() {
    return axios.get('/api/meituan/city/hot.json');
  },
  getCityRecents() {
    return axios.get('/api/meituan/city/recents.json');
  },
  getProvinceList() {
    return axios.get('/api/meituan/city/province.json');
  },
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getLabelGoodsList() {
    return axios.get('/api/meituan/list/goodsList.json');
  },
  getGoodsLabelList() {
    return axios.get('/api/meituan/list/classify.json');
  },
  getGoodsAreaList() {
    return axios.get('/api/meituan/list/areaList.json');
  },
  getGoodsrecommend() {
    return axios.get('/api/meituan/list/recommend.json');
  },
  login (params) {
    return axios.get('/api/meituan/login', params)
  },
  register (params) {
    return axios.get('/api/meituan/register', params)
  }



}

export default api;