import Vue from 'vue'
import Router from 'vue-router'

//路由引入
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

// import Search from '../pages/Search/Search.vue'
//在build的webpack.base.conf.js里设置了 '@': resolve('src'),所以可以简写为
import Search from '@/pages/Search/Search.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:Msite
    },
    {
      path:'/msite',
      name:'msite',
      component:Msite
    },
    {
      path:'/order',
      name:'order',
      component:Order
    },
    {
      path:'/profile',
      name:'profile',
      component:Profile
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
   

  ]
})
