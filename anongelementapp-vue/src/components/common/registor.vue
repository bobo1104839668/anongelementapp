<template>
<<<<<<< HEAD
    <div class="registor">
        注册
    </div>
=======
  <div class="registor">
    <mt-header title="设置密码" class="header">
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <p>已发送验证码至您的手机{{phone}}</p>
      <label class="input-text item">
        <input type="tel" placeholder="填写验证码">
      </label>
      <label class="input-text item">
        <input type="text" :value="username"  placeholder="用户昵称" @input="handleInput({id:3,e:$event})">
      </label>
      <label class="input-text item">
        <input type="password" :value="password" placeholder="设置密码(6-20位字符)" @input="handleInput({id:1,e:$event})">
        <mt-switch></mt-switch>
      </label>
      <button class="btns" @click="handleRegistors()">注册</button>
    </div>
    <mt-header title="设置密码" class="header">
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  </div>
>>>>>>> shaobo
</template>

<script>
import Vuex from "vuex"
import {setCookie} from "../../utils/auth"
import axios from "axios"
export default {
    computed: {
     ...Vuex.mapState({
        username:state=>state.personal.username,
        password:state=>state.personal.password,
        phone:state=>state.personal.phone
     })
    },
    methods: {
      ...Vuex.mapActions({
        handleInput: "personal/handleInput",
        handleRegistor:"personal/handleRegistor"
      }),
      // handleRegistor(){
      //   axios({
      //       method:"post",
      //       url:"http://localhost:3000/users",
      //       data:{
      //           username:username,
      //           phone:phone,
      //           password:password,
      //       }
      //   }).then((data)=>{
      //       setCookie(username)
      //       if(data){
      //         this.$router.push({
      //           name:'personal'
      //         })
      //       }
      //   })
      handleRegistors(){
        this.handleRegistor(this.$router);
      }
      // handleRegistor(){
      //   axios({
      //       method:"post",
      //       url:"http://localhost:3000/users",
      //       data:{
      //           phone:this.phone,
      //       }
      //   }).then((data)=>{
      //       setCookie(username)
      //       if(data){
      //         this.$router.push({
      //           name:'personal'
      //         })
      //       }
      //   })
      // }
    },
}
</script>

<<<<<<< HEAD
<style>

=======


<style lang="scss">
.registor {
  width: 100%;
  height: 100%;
}
.registor > .header {
  width: 100%;
  height: 0.88rem;
  background: #eb4339;
  border-bottom-width: 1px;
  font-size: 0.34rem;
  color: #fff;
  font-weight: 600;
}
.registor > .content {
  width: 100%;
  height: 100%;
  .btn {
    width: 100%;
    height: 0.8rem;
    text-align: right;
  }
  p {
    font-size: 0.3rem;
    color: #666;
    margin: 0.6rem 0 0.4rem 0.2rem;
    line-height: 0.28rem;
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
    background: #fff;
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
    margin: 0.5rem 0.2rem 0 0.2rem;
    border: none;
    outline: none;
  }
}
>>>>>>> shaobo
</style>
