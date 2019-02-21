import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "../components/home.vue"
import Classification from "../components/classification.vue"
import BuyCar from "../components/buycar.vue"
import Personal from "../components/personal.vue"
import Login from "../components/login.vue"
import Registor from "../components/registor.vue"

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
      path:"/classification",
      component:Classification,
      name:"classification",
      meta:{
        flag:true,
        title:"分类"
      }
    },
    {
      path:"/buyCar",
      component:BuyCar,
      name:"buyCar",
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
