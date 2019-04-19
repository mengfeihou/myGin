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
// 激活码
const activationCode = r => require.ensure([], () => r(require('../views/myProperty/activationCode')), 'activationCode');
// pos钱包
const pos = r => require.ensure([], () => r(require('../views/myProperty/pos')), 'pos');
// pos资金记录
const posList = r => require.ensure([], () => r(require('../views/myProperty/posList')), 'posList');
// pow钱包
const pow = r => require.ensure([], () => r(require('../views/myProperty/pow')), 'pow');
// 我的
const my = r => require.ensure([], () => r(require('../views/myProperty/my')), 'my');
// 订单记录
const order = r => require.ensure([], () => r(require('../views/order/order')), 'order');
//账户设置
const account = r => require.ensure([], () => r(require('../views/account/account')), 'account');
// 修改登录密码
const loginPos = r => require.ensure([], () => r(require('../views/account/loginPos')), 'loginPos');
// 修改交易密码
const transactionPos = r => require.ensure([], () => r(require('../views/account/transactionPos')), 'transactionPos');
// 修改收款方式
const payment = r => require.ensure([], () => r(require('../views/account/payment')), 'payment');
// 修改后展示
const paymentText = r => require.ensure([], () => r(require('../views/account/paymentText')), 'paymentText');
// 我的邀请码
const inviteCode = r => require.ensure([], () => r(require('../views/account/inviteCode')), 'inviteCode');

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
		{path: '/seed',name: 'seed', component: seed},
		{path: '/activationCode', name: 'activationCode', component: activationCode},
		{path: '/pos', name: 'pos', component: pos},
		{path: '/posList', name: 'posList', component: posList},
		{path: '/pow', name: 'pow', component: pow},
		{path: '/my', name: 'my', component: my},
		{path: '/order',name: 'order', component: order},
		{path: '/account',name: 'account', component: account},
		{path: '/loginPos',name: 'loginPos', component: loginPos},
		{path: '/transactionPos',name: 'transactionPos', component: transactionPos},
		{path: '/payment',name: 'payment', component: payment},
		{path: '/paymentText',name: 'paymentText', component: paymentText},
		{path: '/inviteCode',name: 'inviteCode', component: inviteCode},
	  ]
})
