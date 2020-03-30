// 导入vue
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
// 注册路由
Vue.use(VueRouter)
// 导入组件
import index from '../views/index/index.vue'
// 配置路由规则
const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  }
]
// 创建路由对象
const router = new VueRouter({
  routes
})
// 暴露路由对象
export default router