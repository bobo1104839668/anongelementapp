import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import store from "../store"
import Home from "../components/home/home.vue"
import Classific from "../components/classific/classific.vue"
import Cart from "../components/cart/cart.vue"
import Personal from "../components/personal/personal.vue"
import Login from "../components/common/login.vue"
import Registor from "../components/common/registor.vue"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Search from "../components/home/two_page/search.vue"
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
=======
>>>>>>> shaobo
=======
import Search from "../components/home/two_page/search.vue"
import Search from "../components/home/two_page/search.vue"
>>>>>>> shaobo
import LoginTwo from "@/components/common/loginTwo.vue"
import LoginOne from "@/components/common/LoginOne.vue"
import Forget from "@/components/common/forget.vue"
import Target from "@/components/personal/components/target"
import Refund from "@/components/personal/components/refund"
import Address from "@/components/personal/components/address"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
>>>>>>> shaobo
=======
>>>>>>> shaobo
=======
import AddAddress from "@/components/personal/components/addAddress"
import SetName from "@/components/personal/components/setName"
import UpdateAddress from "@/components/personal/components/updateAddress"
>>>>>>> shaobo

const router = new Router({
  routes: [
    {
<<<<<<< HEAD
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
=======
>>>>>>> shaobo
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
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
>>>>>>> shaobo
=======
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
<<<<<<< HEAD
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
=======
        flag:true,
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
=======
>>>>>>> shaobo
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
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
>>>>>>> shaobo
=======
>>>>>>> shaobo
      }
    },
    {
      path:"/registor",
      component:Registor,
      name:"registor",
      meta:{
<<<<<<< HEAD
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
=======
        flag:true,
>>>>>>> shaobo
        title:"注册"
=======
      path: "/",
      component: Home,
      name: "home",
      meta: {
        flag: true
      }
    },
    {
      path: "/home",
      component: Home,
      name: "home",
      meta: {
        flag: true,
      }
    },
    {
      path: "/target",
      component: Target,
      name: "target",
      meta: {
        flag: true,
        title: "二级页面"
      }
    },
    {
      path: "/address",
      component: Address,
      name: "address",
      meta: {
        flag: true,
        title: "收货地址管理"
      }
    }, {
      path: "/forget",
      component: Forget,
      name: "forget",
      meta: {
        flag: false,
      }
    },
    {
      path: "/search",
      component: Search,
      name: "search",
      meta: {
        flag: true,
      }
    },
    {
      path: "/setName",
      component: SetName,
      name: "setName",
      meta: {
        flag: false
      }
    },
    {
      path: "/classific",
      component: Classific,
      name: "classific",
      meta: {
        flag: true,
        title: "分类"
      }
    }, {
      path: "/target",
      component: Target,
      name: "target",
      meta: {
        flag: false,
        title: "订单"
      }
    },
    {
      path: "/address",
      component: Address,
      name: "address",
      meta: {
        flag: false,
        title: "收货地址管理"
      }
    },
    {
      path: "/personal",
      component: Personal,
      name: "personal",
      meta: {
        flag: true,
        title: "个人中心"
      }
    },
    {
      path: "/login",
      component: Login,
      name: "login",
      meta: {
        flag: true,
        title: "登录"
      }
    }, {
      path: "/refund",
      component: Refund,
      name: "refund",
      meta: {
        flag: true,
        title: "退款"
      }
    },
    {
      path: "/addAddress",
      name: "addAddress",
      component: AddAddress,
      meta: {
        flag: false
      }
    },
    {
      path: "/classific",
      component: Classific,
      name: "classific",
      meta: {
        flag: true,
        title: "分类"
      }
    },
    {
      path: "/updateAddress",
      component: UpdateAddress,
      name: "updateAddress",
      meta: {
        flag: false,
      }
    },
    {
      path: "/cart",
      component: Cart,
      name: "cart",
      meta: {
        flag: false,
        title: "购物车"
      }
    },
    {
      path: "/personal",
      component: Personal,
      name: "personal",
      meta: {
        flag: true,
        title: "个人中心"
      }
    },
    {
      path: "/login",
      component: Login,
      name: "login",
      meta: {
        flag: false,
        title: "登录"
      },
    },
    {
      path: "/loginTwo",
      component: LoginTwo,
      name: "loginTwo",
      meta: {
        flag: false,
        title: "手机号"
      }
    },
    {
      path: "/loginOne",
      component: LoginOne,
      name: "loginOne",
      meta: {
        flag: false,
        title: "登录首页"
      }
    },
    {
      path: "/registor",
      component: Registor,
      name: "registor",
      meta: {
        flag: true,
        title: "注册"
      }
    }, {
      path: "/loginOne",
      component: LoginOne,
      name: "loginOne",
      meta: {
        flag: false,
        title: "登录首页"
      }
    },
    {
      path: "/registor",
      component: Registor,
      name: "registor",
      meta: {
        title: "注册",
        flag: false
>>>>>>> shaobo
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.flag) {
    if (store.state.personal.token !== undefined) {
      next();
    } else {
      next("/loginOne");
    }
  } else {
    next();
  }
})
export default router;
