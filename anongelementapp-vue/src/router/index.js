import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "../components/home/home.vue"
import Classific from "../components/classific/classific.vue"
import Cart from "../components/cart/cart.vue"
import Personal from "../components/personal/personal.vue"
import Login from "../components/common/login.vue"
import Registor from "../components/common/registor.vue"
import Search from "../components/home/two_page/search.vue"
import Circle_nongren from "../components/home/two_page/circle_nongren.vue"
import Stores from "../components/home/three_page/stores.vue"

const router = new Router({
  routes: [
    {
      path:"/",
      component:Home,
      name:"home"
    },
    {
      path:"/home",
      component:Home,
      name:"home",
      meta:{
        flag:true,
        title:"首页"
      }
    },
    {
      path:"/stores",
      component:Stores,
      name:"stores",
      meta:{
        flag:true,
        title:"商家店铺"
      }
    },
    {
      path:"/search",
      component:Search,
      name:"search",
      meta:{
        flag:true,
        title:"二级页面"
      }
    },
    {
      path:"/circle_nongren",
      component:Circle_nongren,
      name:"circle_nongren",
      meta:{
        flag:true,
        title:"二级农人圈"
      }
    },
    {
      path:"/classific",
      component:Classific,
      name:"classific",
      meta:{
        flag:true,
        title:"分类"
      }
    },
    {
      path:"/cart",
      component:Cart,
      name:"cart",
      meta:{
        flag:true,
        title:"购物车"
      }
    },
    {
      path:"/personal",
      component:Personal,
      name:"personal",
      meta:{
        flag:true,
        title:"个人中心"
      }
    },
    {
      path:"/login",
      component:Login,
      name:"login",
      meta:{
        flag:true,
        title:"登录"
      }
    },
    {
      path:"/registor",
      component:Registor,
      name:"registor",
      meta:{
        flag:true,
        title:"注册"
      }
    }
  ]
})
export default router;
