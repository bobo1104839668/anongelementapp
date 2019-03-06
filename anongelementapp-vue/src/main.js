// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "./common/css/reset.css"
import "./common/js/flexble"

import store from "./store"
import MintUI from 'mint-ui'
Vue.use(MintUI)
// import axios from "axios"
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
// axios.defaults.withCredentials = true
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> 42904599a063ca6eeb1631cc6ca9c36914a6f317
=======
>>>>>>> shaobo
=======
// axios.defaults.withCredentials = true
// axios.defaults.withCredentials = true
>>>>>>> shaobo
//引入mint-ui插件

import {Cell,Checklist} from "mint-ui"
Vue.component(Cell.name,Cell)
Vue.component(Checklist.name,Checklist)

Vue.use(Mint);
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

//引入mint-ui插件

>>>>>>> shaobo
// Vue.prototype.$axios = axios
Vue.config.productionTip = false
//当post请求数据的时候如果后端无法接收到响应的数据 我们可以对其进行转换
// import qs from "qs";
// axios.interceptors.request.use((config)=>{
//   if(config.method == "get"){
//     config.params = config.data;
//   }else if(config.method == "post"){
//     config.data = qs.stringify(config.data);
//   }

//   return confog;
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
