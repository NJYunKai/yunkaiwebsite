import Vue from 'vue';
import router from './router';

// import './public/style/icon.css';
import './public/style/reset.less';
import './public/style/common.less';
import './public/style/iconfont.css';
import App from './App';
import 'animate.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
// router.beforeEach((to, from, next) => {
// 	console.log(to.name)
// })
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})