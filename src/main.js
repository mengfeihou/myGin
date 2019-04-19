// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import VueClipboard from "vue-clipboard2"	
Vue.use(VueClipboard)

// vant框架引用
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 屏幕点击事件
import FastClick from 'fastclick';

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
