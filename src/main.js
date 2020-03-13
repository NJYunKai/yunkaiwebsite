import Vue from 'vue';
import router from './router';

import './public/style/reset.less';
import './public/style/common.less';
import './public/style/iconfont.css';
import './public/style/forbidding.css';
import App from './App';
import 'animate.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})