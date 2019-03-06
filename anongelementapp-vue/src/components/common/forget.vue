<template>
  <div class="loginTwo">
    <!-- 未注册过和注册过两个不同的页面 -->
    <!-- 未注册过 -->
    <mt-header title="修改密码" class="header">
      <router-link to="/setName" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <label class="input-text item">
        <input type="password" placeholder="原密码" :value="password" @input="handleInput({id:1,e:$event})">
      </label>
      <label class="input-text item">
        <input type="password" placeholder="设置新密码" :value="passwords" @input="handleInputs($event)" >
        <!-- <mt-switch v-model="value" @click="handleToggle()"></mt-switch> -->
      </label>
        <button class="btns" @click="handleUpdatePsd()">修改</button>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex"
export default {
    data () {
        return {
            value:true,
            type:""     
        }
    },
  created() {
    let { phone } = this.$route.query;
  },
  computed: {
      ...Vuex.mapState({
          password:state=>state.personal.password,
          passwords:state=>state.personal.passwords,
      })
  },
  methods: {
      ...Vuex.mapActions({
          handleInput:"personal/handleInput",
          handleUpdatePsds:"personal/handleUpdatePsds",
          handleInputs:"personal/handleInputs"
      }),
      handleUpdatePsd(){
        this.handleUpdatePsds(this.$router);
      },
      handleToggle(){
          this.value = !this.value;
      }
  },
  mounted() {
      if(this.value){
          this.type="text"
      }else{
           this.type="password"
      }
      console.log(this.value)
  },
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
.loginTwo > .content {
  width: 100%;
  height: 100%;
  .btn {
    width: 94%;
    height: 0.8rem;
    text-align: right;
    margin: 0 0.2rem;
    background: none;
    border: none;
    outline: none;
    font-size: 0.26rem;
    color: #999;
  }
  p {
    font-size: 0.3rem;
    color: #666;
    margin: 0.6rem 0 0.4rem 0.2rem;
    line-height: 0.28rem;
  }
  .ps {
    margin: 0;
    margin-left: 0.2rem;
    margin-bottom: 0.2rem;
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
    margin: 0rem 0.2rem 0 0.2rem;
    border: none;
    outline: none;
  }
}
</style>