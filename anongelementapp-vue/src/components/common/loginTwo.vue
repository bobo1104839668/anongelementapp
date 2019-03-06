<template>
  <div class="loginTwo">
    <!-- 未注册过和注册过两个不同的页面 -->
    <!-- 未注册过 -->
    <mt-header title="账号登录" class="header">
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <p>您的手机号已注册请输入登录密码</p>
      <p class="ps">
        您的手机号：
        <span>{{phone}}</span>
      </p>
      <label class="input-text item">
        <input type="password" placeholder="输入密码" :value="password" @input="handleInput({id:1,e:$event})">
      </label>
      <button class="btn" @click="handleForegt(phone)">忘记密码</button>
        <button class="btns" @click="handleClicks()">登录</button>
    </div>
  </div>
</template>

<script>
/**
 * JSONP请求工具
 * @param url 请求的地址
 * @param data 请求的参数
 * @returns {Promise<any>}
 */
const request = ({ url, data }) => {
  return new Promise((resolve, reject) => {
    // 处理传参成xx=yy&aa=bb的形式
    const handleData = data => {
      const keys = Object.keys(data);
      const keysLen = keys.length;
      return keys.reduce((pre, cur, index) => {
        const value = data[cur];
        const flag = index !== keysLen - 1 ? "&" : "";
        return `${pre}${cur}=${value}${flag}`;
      }, "");
    };
    // 动态创建script标签
    const script = document.createElement("script");
    // 接口返回的数据获取
    window.jsonpCb = res => {
      document.body.removeChild(script);
      delete window.jsonpCb;
      resolve(res);
    };
    script.src = `${url}?${handleData(data)}&cb=jsonpCb`;
    document.body.appendChild(script);
  });
};
import Vuex from "vuex"
export default {
  created() {
    let { phone } = this.$route.query;
    // 使用方式
    // request({
    //   url: "http://www.51talk.com/passport/getMobileCode",
    //   data: {
    //     // 传参
    //     mobile: phone
    //   }
    // }).then(res => {
    //   console.log(res);
    // });
  },
  computed: {
      ...Vuex.mapState({
          password:state=>state.personal.password,
          phone:state=>state.personal.phone,
      })
  },
  methods: {
      ...Vuex.mapActions({
          handleInput:"personal/handleInput",
          handleClick:"personal/handleClickLogin",
      }),
      handleClicks(){
        this.handleClick(this.$router);
      },
      handleForegt(phone){
        this.$router.push({
          name:"forget",
          query:{
            phone
          }
        })
      }
  },
};
</script>

<style lang="scss" scoped>
.loginTwo {
  width: 100%;
  height: 100%;
}
.loginTwo > .header {
  width: 100%;
  height: 0.88rem;
  background: #eb4339;
  border-bottom-width: 1px;
  font-size: 0.32rem;
  color: #fff;
  font-weight: 500;
}
.loginTwo > .content {
  width: 100%;
  height: 100%;
  .btn {
    width: 94%;
    height: 0.8rem;
    text-align: right;
    margin: 0 0.2rem;
    background: none;
    border: none;
    outline: none;
    font-size: 0.26rem;
    color: #999;
  }
  p {
    font-size: 0.3rem;
    color: #666;
    margin: 0.6rem 0 0.4rem 0.2rem;
    line-height: 0.28rem;
  }
  .ps {
    margin: 0;
    margin-left: 0.2rem;
    margin-bottom: 0.2rem;
  }
  .input-text {
    margin: 0 0.2rem 0.2rem;
    border-radius: 0.1rem;
    background-color: #f4f4f0;
  }
  .item {
    border-bottom: 1px solid #d6d6d6;
    border-top: 1px solid #d6d6d6;
    display: flex;
    input {
      font-size: 0.26rem;
      width: 100%;
      border: none;
      height: 0.8rem;
      text-indent: 0.1rem;
      outline: none;
    }
  }
  .btns {
    width: 94%;
    min-height: 0.8rem;
    line-height: 0.76rem;
    border-radius: 0.1rem;
    background-color: #eb4339;
    color: #fff;
    font-size: 0.3rem;
    padding: 0 0.24rem;
    margin: 0rem 0.2rem 0 0.2rem;
    border: none;
    outline: none;
  }
}
</style>