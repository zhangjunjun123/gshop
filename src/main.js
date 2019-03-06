/*
入口js
*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 个人总结：
// 1.import...from...的from命令后面可以跟很多路径格式，若只给出vue，axios这样的包名，则会自动到node_modules中加载；若给出相对路径及文件前缀，则到指定位置寻找。
// 2.可以加载各种各样的文件：.js、.vue、.less等等。
// 3.可以省略掉from直接引入。

// 完整写法：import Vue from '../node_modules/vue/dist/vue.js'
import Vue from 'vue'
import App from './App'
// 默认加载'./router/index.js'
import router from './router'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 2.0的写法
  render: h => h(App),
  // 1.0的写法
  // template: '<App/>',
  // components: {App}
  router, // 使用上vue-router
  store // 使用上vuex
})
