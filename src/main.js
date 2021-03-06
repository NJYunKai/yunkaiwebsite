import Vue from 'vue';
import router from './router';
import axios from 'axios'
import './public/style/reset.less';
import './public/style/common.less';
import './public/style/iconfont.css';
import './public/style/forbidding.css';
import App from './App';
import 'animate.css';
import 'lib-flexible';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill';
// import VideoPlayer from 'vue-video-player'
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
// Vue.use(VideoPlayer)
Vue.config.productionTip = false;
Vue.use(ElementUI);
// router.beforeEach((to, from, next) => {
// 	console.log(to.name)
// })
// axios.defaults.baseURL = 'http://localhost:8081/'
axios.defaults.baseURL = '/api/interface'
Vue.prototype.$http = axios
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  //完全显示的时候加载
  preLoad: 1,
  //失败时显示的图片
  error: require('../static/img/error.png'),
  //加载时显示的GIF图
  loading: require('../static/img/loading.gif'),
  //尝试加载几次
  attempt: 1
});
window.vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
