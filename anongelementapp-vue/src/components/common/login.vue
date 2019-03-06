<template>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div class="login">
<<<<<<< HEAD
        登录
=======
=======
    <div class="login">
>>>>>>> d2c5eb4d52fe418169c6be701169da6ed25cd95b
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
<<<<<<< HEAD
>>>>>>> shaobo
=======
=======
>>>>>>> shaobo
=======
>>>>>>> d2c5eb4d52fe418169c6be701169da6ed25cd95b
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> shaobo
=======
>>>>>>> shaobo
=======
>>>>>>> d2c5eb4d52fe418169c6be701169da6ed25cd95b
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default {
    
}
</script>

<style>
=======
>>>>>>> shaobo
=======
import Vuex from "vuex"
>>>>>>> d2c5eb4d52fe418169c6be701169da6ed25cd95b

import Vuex from "vuex"
<<<<<<< HEAD
=======
=======
>>>>>>> shaobo
import Vuex from "vuex";
import { Toast } from "mint-ui";
import axios from "axios";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> shaobo
=======
>>>>>>> shaobo
=======
import Vuex from "vuex";
import axios from "axios";
>>>>>>> d2c5eb4d52fe418169c6be701169da6ed25cd95b
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
      let reg = /^(13|14|15|17|18|19)[0-9]{9}$/;
      if (reg.test(this.phone)) {
        axios({
          method: "get",
          url: "http://localhost:3000/users?phone=" + this.phone
        }).then(data => {
          if (data.data.length) {
            this.$router.push({
              name: "loginTwo",
              query: {
                phone: this.phone
              }
            });
          } else {
            this.$router.push({
              name: "registor",
              query: {
                phone: this.phone
              }
            });
          }
        });
      } else {
        let instance = Toast("手机号格式有误");
        setTimeout(() => {
          instance.close();
        }, 2000);
      }
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