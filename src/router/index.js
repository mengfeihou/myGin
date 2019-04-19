import Vue from 'vue'
import Router from 'vue-router'

// 首页
const home = r => require.ensure([], () => r(require('../views/home/home')), 'home'); 
// 申购
const pro = r => require.ensure([], () => r(require('../views/pro/pro')), 'pro'); 
// 出售gin
const sell = r => require.ensure([], () => r(require('../views/sell/sell')), 'sell'); 
// 我的社区
const community = r => require.ensure([], () => r(require('../views/community/community')), 'community'); 
// 我的资产
const myProperty = r => require.ensure([], () => r(require('../views/myProperty/myProperty')), 'myProperty'); 

// 矿机
const myMill = r => require.ensure([], () => r(require('../views/myProperty/myMill')), 'myMill'); 
// 种子
const seed = r => require.ensure([], () => r(require('../views/myProperty/seed')), 'seed'); 
Vue.use(Router)
export default new Router({
  routes: [
		{path: '/',component: home},
		{path: '/home',name: 'home',component: home},
		{path: '/pro',name: 'pro',component: pro},
		{path: '/sell',name: 'sell', component: sell},
		{path: '/community',name: 'community', component: community},
		{path: '/myProperty',name: 'myProperty', component: myProperty},
		{path: '/myMill',name: 'myMill', component: myMill},
		{path: '/seed',name: 'seed', component: seed}
	  ]
})
