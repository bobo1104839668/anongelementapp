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
      <p>已发送验证码至您的手机</p>
      <label class="input-text item">
        <input type="tel" placeholder="填写验证码">
      </label>
      <label class="input-text item">
        <input type="tel" placeholder="用户昵称">
      </label>
      <label class="input-text item">
        <input type="tel" placeholder="设置密码(6-20位字符)">
        <mt-switch v-model="value"></mt-switch>
      </label>
      <router-link :to="{path:'/personal'}">
        <button class="btns">注册</button>
      </router-link>
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
export default {
    
}
</script>

<<<<<<< HEAD
<style>

=======

export default {};
</script>

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
