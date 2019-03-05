<template>
    <div class="login">
       <mt-header title="手机登录" class="header">
            <router-link to="/home" slot="left" >
                <mt-button icon="back" ></mt-button>
            </router-link>
        </mt-header>
        <div class="content">
            <p>请输入手机号直接登录</p>
            <label class="input-text item">
                <input type="tel" :value="phone" @input="handleInput" placeholder="手机号" >
            </label>
            <button class="btns" @click="handleTo()">下一步</button>
        </div>
  <div class="login">
    <mt-header title="手机登录" class="header">
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <p>请输入手机号直接登录</p>
      <label class="input-text item">
        <input type="tel" :value="phone" @input="handleInput({id:2,e:$event})" placeholder="手机号">
      </label>
      <button class="btns" @click="handleTo()">下一步</button>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex"

import Vuex from "vuex"
import Vuex from "vuex";
import axios from "axios";
import Vuex from "vuex";
import axios from "axios";
export default {
  computed: {
    ...Vuex.mapState({
      phone: state => state.personal.phone,
      result: state => state.result
    })
  },
  methods: {
    ...Vuex.mapActions({
      handleInput: "personal/handleInput"
    }),
    handleTo() {
      axios({
        method: "get",
        url: "http://localhost:3000/users?phone="+this.phone,
      }).then(data => {
        if (data.data.length) {
          this.$router.push({
            name: "loginTwo",
            query:{
                phone:this.phone
            }
          });
        } else {
          this.$router.push({
            name: "registor",
            query:{
                phone:this.phone
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
}
.login > .header {
  width: 100%;
  height: 0.88rem;
  background: #eb4339;
  border-bottom-width: 1px;
  font-size: 0.34rem;
  color: #fff;
  font-weight: 600;
}
.login > .content {
  width: 100%;
  height: 100%;
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
    border-bottom: 1px solid #666;
    border-top: 1px solid #666;
    display: flex;
    input {
      font-size: 0.24rem;
      width: 100%;
      text-indent: 0.1rem;
      border: none;
      height: 0.8rem;
      outline: none;
    }
  }
  .btns {
    width: 94%;
    min-height: 0.8rem;
    line-height: 0.76rem;
    border-radius: 0.1rem;
    background-color: #d6d6d6;
    color: #999;
    font-size: 0.28rem;
    padding: 0 0.24rem;
    margin: 0.5rem 0.2rem 0 0.2rem;
    border: none;
    outline: none;
  }
}
</style>