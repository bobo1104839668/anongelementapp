import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "../components/home/home.vue"
import Classific from "../components/classific/classific.vue"
import Cart from "../components/cart/cart.vue"
import Personal from "../components/personal/personal.vue"
import Login from "../components/common/login.vue"
import Registor from "../components/common/registor.vue"
<<<<<<< HEAD
import Search from "../components/home/two_page/search.vue"
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
import LoginTwo from "@/components/common/loginTwo.vue"
import LoginOne from "@/components/common/LoginOne.vue"
import Target from "@/components/personal/components/target"
import Refund from "@/components/personal/components/refund"
import Address from "@/components/personal/components/address"
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
>>>>>>> shaobo

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
<<<<<<< HEAD
      path:"/search",
      component:Search,
      name:"search",
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
      path:"/target",
      component:Target,
      name:"target",
>>>>>>> shaobo
      meta:{
        flag:true,
        title:"二级页面"
      }
    },
    {
<<<<<<< HEAD
=======
      path:"/address",
      component:Address,
      name:"address",
      meta:{
        flag:true,
        title:"收货地址管理"
      }
    },
    {
      path:"/refund",
      component:Refund,
      name:"refund",
      meta:{
        flag:true,
        title:"退款"
      }
    },
    {
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
>>>>>>> shaobo
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
<<<<<<< HEAD
=======
        flag:false,
=======
<<<<<<< HEAD
        flag:true,
=======
        flag:false,
>>>>>>> master
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
>>>>>>> shaobo
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
        flag:true,
        title:"登录"
=======
        flag:false,
        title:"登录"
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
      },
    },
    {
      path:"/loginTwo",
      component:LoginTwo,
      name:"loginTwo",
      meta:{
        flag:false,
        title:"手机号"
      }
    },
    {
      path:"/loginOne",
      component:LoginOne,
      name:"loginOne",
      meta:{
        flag:false,
        title:"登录首页"
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
>>>>>>> shaobo
      }
    },
    {
      path:"/registor",
      component:Registor,
      name:"registor",
      meta:{
        flag:true,
<<<<<<< HEAD
=======
        flag:false,
=======
<<<<<<< HEAD
        flag:true,
=======
        flag:false,
>>>>>>> master
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
>>>>>>> shaobo
        title:"注册"
      }
    }
  ]
})
export default router;
