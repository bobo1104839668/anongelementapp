<template>
  <div class="target">
    <mt-header title="我的订单" class="header">
      <router-link to="/personal" slot="left" >
            <mt-button icon="back" ></mt-button>
        </router-link>
    </mt-header>
    <ul>
        <li v-for="(item,index) in tags">
            <a href="##" :class="id==index?'activeClass':''">{{item}}</a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data () {
        return {
            tags:["全部","待付款","拼团中","待发货","待收货","待评价"],
            id:""
        }
    },
    created() {
        let {id} = this.$route.query;
        this.id = id;
    },
};
</script>

<style lang="scss">
.target {
  width: 100%;
  height: 100%;
  background: #f4f4f0;
  ul{
      height: .9rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #fff;
      li>.activeClass{
          color: red;
      }
      li>a{
        height: .9rem;
        line-height: .9rem;
        color: #333;
        font-size: .3rem;
        font-weight: 500;
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
}
</style>