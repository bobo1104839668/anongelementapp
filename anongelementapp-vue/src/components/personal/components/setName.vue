<template>
  <div class="setName">
    <mt-header title="账号设置" class="header">
      <router-link to="/personal" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="msg">
            <p class="pa">
                <a href="##">昵称</a>
                <span>{{username}}<i class="iconfont">&#xe644;</i></span>
            </p>
            <p>
                <a href="##">绑定手机号</a>
                <span>{{phone}}<i class="iconfont">&#xe644;</i></span>
            </p>
            <p class="pa">
                <a href="##">登陆密码</a>
                <span>修改密码<i class="iconfont">&#xe644;</i></span>
            </p>
            <p class="pas" @click="hanleToout()">
                <a href="##">退出登录</a>
            </p>
        </div>
  </div>
</template>

<script>
import {removeCookie} from "../../../utils/auth"
import Vuex from "vuex"
export default {
  data () {
    return {
      username:"",
      phone:"",
      id:""
    }
  },
  created () {
    let {username,phone,id} = this.$route.query;
    this.username = username;
    this.phone = phone;
    this.id = id;
  },
  methods: {
    hanleToout(){
      this.hanleToouts();
      this.$router.push("./loginOne")
      removeCookie();
      removeCookie("username");
    },
    ...Vuex.mapActions({
      hanleToouts:"personal/hanleToout"
    })
  },
};
</script>

<style lang="scss">
.setName {
    width: 100%;
    height: 100%;
    background: #f5f3f3;
  .header {
    width: 100%;
    height: 0.88rem;
    background: #eb4339;
    border-bottom-width: 1px;
    font-size: 0.34rem;
    color: #fff;
    font-weight: 600;
    .iconfont {
      font-size: 0.4rem;
      margin-right: 0.2rem;
    }
  }
  .msg{
      width: 100%;
      height: 3.7rem;
      p{
          padding: .22rem .3rem .22rem .4rem;
          color: #333;
          font-size: .32rem;
          background: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span{
              display: block;
              i{
                  font-size: .3rem;
              }
          }
      }
      .pa{
          margin-bottom: .2rem;
      }
      .pas{
        display: flex;
        justify-content: center;
        align-items: center;
        a{
          color: #eb4339;
        }
      }
  }
}
</style>