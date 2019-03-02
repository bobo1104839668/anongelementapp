<template>
  <div class="loginOne">
    <mt-header title="快速登录" class="header">
        <router-link to="/home" slot="left" >
            <mt-button icon="back" ></mt-button>
        </router-link>
    </mt-header>
    <div class="content">
        <div class="imgs">
            <img src="http://cdn.anong.com/www/img/anong-logo-ba4acdaa37.png">
        </div>
        <div class="btn">
            <i class="iconfont">&#xe6c6;</i>
            <router-link :to = "{path:'/login'}"><a href="##">手机登录</a></router-link>
        </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex"
export default {
};
</script>

<style lang="scss" scoped>
.loginOne {
  width: 100%;
  height: 100%;
}
.loginOne > .header {
  width: 100%;
  height: 0.88rem;
  background: #eb4339;
  border-bottom-width: 1px;
  font-size: .34rem;
  color: #fff;
  font-weight: 600;
}
.loginOne>.content{
    margin-top: 20%;
    .imgs{
        display: flex;
        justify-content: center;
    }
    .btn{
        margin-top: 30%;
        width: 100%;
        padding: 0 1rem;
        position: relative;
        i{
            font-size: .48rem;
            position: absolute;
            left: 35%;
            color: #fff;
            top: 15%;
        }
        a{
            margin-bottom: .4rem;
            border-radius: .1rem;
            min-height: .8rem;
            height: .8rem;
            line-height: .52rem;
            padding: .14rem 0;
            background: #eb4339;
            font-size: .32rem;
            width: 100%;
            display: block;
            text-align: center;
            border-color: transparent;
            color: #fff;
        }
    }
}
</style>
