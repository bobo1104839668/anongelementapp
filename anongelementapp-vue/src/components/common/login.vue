<template>
    <div class="login">
        登录
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
    </div>
</template>

<script>

import Vuex from "vuex"
export default {
    computed: {
        ...Vuex.mapState({
            phone:state=>state.personal.phone,
            result:state=>state.result
        })
    },
    methods: {
       ...Vuex.mapActions({
            handleInput:"handleInput"
       }),
       handleTo(){
           if(result){
               this.$router.push({
                   name:"loginTwo"
               })
           }else{
               this.$router.push({
                   name:"registor"
               })
           }
       }
    }
}
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
  font-size: .34rem;
  color: #fff;
  font-weight: 600;
}
.login>.content{
    width: 100%;
    height: 100%;
    p{
        font-size:.3rem;
        color: #666;
        margin: .6rem 0 .4rem .2rem;
        line-height: .28rem;
    }
    .input-text{
        margin: 0 .2rem .2rem;
        border-radius: .1rem;
        background-color: #F4F4F0;
    }
    .item{
        border-bottom: 1px solid #666;
        border-top: 1px solid #666;
        display: flex;
        input{
            font-size: .24rem;
            width: 100%;
            text-indent: .1rem;
            border: none;
            height: .8rem;
            outline: none;
        }
    }
    .btns{
        width: 94%;
        min-height: .8rem;
        line-height: .76rem;
        border-radius: .1rem;
        background-color: #D6D6D6;
        color: #999;
        font-size: .28rem;
        padding: 0 .24rem;
        margin: .5rem .2rem 0 .2rem;
        border: none;
        outline: none;
    }
}
</style>