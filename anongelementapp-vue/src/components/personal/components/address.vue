<template>
  <div class="address">
    <mt-header title="管理收货地址" class="header">
      <router-link to="/personal" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="adds">
      <span>添加收货地址</span>
    </div>
    <div class="list">
      
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.handleProvices();  
  },
};
</script>

<style lang="scss" scoped>
.address {
  width: 100%;
  height: 100%;
  position: relative;
  background: #f4f4f0;
  .adds{
    height: 1.1rem;
    width: 100%;
    margin: .2rem 0;
    background: #fff;
    span{
      display: block;
      width: 100%;
      font-size: .28rem;
      color: #EB4339;
      text-align: center;
      line-height: 1.1rem;
    }
  }
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
   .content {
    width: 100%;
    height: 100%;
    .select{
        border: none;
        outline: none;
        width: 20%;
        background: #fff;
        font-size: .26rem;
    }
    .input-text {
      background-color: #f4f4f0;
    }
    .items{
        height: 3rem;
        background: #fff;
    }
    .item {
      border-bottom: 1px solid #666;
      display: flex;
      input {
        font-size: 0.28rem;
        width: 100%;
        text-indent: 0.3rem;
        border: none;
        height: 0.9rem;
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
      font-size: 0.28rem;
      padding: 0 0.24rem;
      margin: 0.5rem 0.2rem 0 0.2rem;
      border: none;
      position: absolute;
      outline: none;
      bottom: 100px;
      left: 0;
    }
  }
}
</style>