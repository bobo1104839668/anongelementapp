<template>
  <div class="address">
    <mt-header title="添加收货地址" class="header">
      <router-link to="/personal" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <label class="input-text item">
        <input type="text" placeholder="收货人姓名">
      </label>
      <label class="input-text item">
        <input type="text" placeholder="手机号码">
      </label>
      <label class="input-text item">
        <input type="text" placeholder="省份">
        <select class="select" id="">
            <option value="请选择">请选择</option>
        </select>
      </label>
      <label class="input-text item">
        <input type="text" placeholder="城市">
        <select class="select" id="">
            <option value="请选择">请选择</option>
        </select>
      </label>
      <label class="input-text item">
        <input type="text" placeholder="区县">
        <select class="select" id="">
            <option value="请选择">请选择</option>
        </select>
      </label>
      <label class="input-text item items">
        <input type="text" placeholder="详细地址">
      </label>
      <p>

      </p>
      <button class="btns" @click="handleTo()">确认添加</button>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  data() {
    return {};
  },
  created () {
    this.handleProvices();  
  },
  computed: {
      ...Vuex.mapState({
          // provices:state=>state.provices
      })
  },
  methods: {
      ...Vuex.mapActions({
          // handleProvices:"/personal/handleProvices"
      })
  }
};
</script>

<style lang="scss">
.address {
  width: 100%;
  height: 100%;
  position: relative;
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