// 导入vue
import Vue from 'vue'
// 导入根组件
import App from './App.vue'
// 导入路由对象
import router from './router'
// 导入vuex对象
import store from './store'
// 是否提示生产信息
Vue.config.productionTip = false
// 导入基础样式
import './style/base.css';
// 导入dataV
import dataV from '@jiaminghi/data-view'
// 注册dataV
Vue.use(dataV)
// 创建Vue实例，挂载到ip为app的div上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
