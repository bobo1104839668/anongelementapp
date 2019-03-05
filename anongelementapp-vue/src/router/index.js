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
import Search from "../components/home/two_page/search.vue"
import Search from "../components/home/two_page/search.vue"
import LoginTwo from "@/components/common/loginTwo.vue"
import LoginOne from "@/components/common/LoginOne.vue"
import Target from "@/components/personal/components/target"
import Refund from "@/components/personal/components/refund"
import Address from "@/components/personal/components/address"
import AddAddress from "@/components/personal/components/addAddress"
import SetName from "@/components/personal/components/setName"

const router = new Router({
  routes: [
    {
      path: "/",
      component: Home,
      name: "home"
    },
    {
      path: "/home",
      component: Home,
      name: "home",
      meta: {
        flag: true,
        title: "首页"
      }
    },
    {
      path: "/search",
      component: Search,
      name: "search",
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
      path: "/target",
      component: Target,
      name: "target",
      meta: {
        flag: false,
        title: "订单"
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
      path: "/refund",
      component: Refund,
      name: "refund",
      meta: {
        flag: true,
        title: "退款"
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
      path: "/classific",
      component: Classific,
      name: "classific",
      flag: false,
      title: "收货地址管理"
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
      path: "/refund",
      component: Refund,
      name: "refund",
      meta: {
        flag: true,
        title: "退款"
      }
    },
    {
      path: "/cart",
      component: Cart,
      name: "cart",
      path: "/classific",
      component: Classific,
      name: "classific",
      meta: {
        flag: true,
        title: "分类"
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
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.flag) {
    if (store.state.personal.token !== undefined) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
})
export default router;
