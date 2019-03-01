<template>
  <div class="loginTwo">
    <!-- 未注册过和注册过两个不同的页面 -->
    <!-- 未注册过 -->
    <mt-header title="账号登录" class="header">
        <router-link to="/home" slot="left" >
            <mt-button icon="back" ></mt-button>
        </router-link>
    </mt-header>
    <div class="content">
        <p>您的手机号已注册请输入登录密码</p>
        <p class="ps">您的手机号：<span>18510416568</span></p>
        <label class="input-text item">
            <input type="tel" placeholder="输入密码" >
        </label>
        <button class="btn">忘记密码</button>
        <router-link :to = "{path:'/personal'}"><button class="btns">登录</button></router-link>
    </div>
  </div>
</template>

<script>
export default {

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
.loginTwo>.content{
    width: 100%;
    height: 100%;
    .btn{
        width: 94%;
        height: .8rem;
        text-align: right;
        margin: 0 .2rem;
        background: none;
        border: none;
        outline: none;
        font-size: .26rem;
        color: #999;
    }
    p{
        font-size:.3rem;
        color: #666;
        margin: .6rem 0 .4rem .2rem;
        line-height: .28rem;
    }
    .ps{
        margin: 0;
        margin-left: .2rem;
        margin-bottom: .2rem;
    }
    .input-text{
        margin: 0 .2rem .2rem;
        border-radius: .1rem;
        background-color: #F4F4F0;
    }
    .item{
        border-bottom: 1px solid #D6D6D6;
        border-top: 1px solid #D6D6D6;
        display: flex;
        input{
            font-size: .26rem;
            width: 100%;
            border: none;
            height: .8rem;
            text-indent: .1rem;
            outline: none;
        }
    }
    .btns{
        width: 94%;
        min-height: .8rem;
        line-height: .76rem;
        border-radius: .1rem;
        background-color: #eb4339;
        color: #fff;
        font-size: .3rem;
        padding: 0 .24rem;
        margin: 0rem .2rem 0 .2rem;
        border: none;
        outline: none;
    }
}
</style>