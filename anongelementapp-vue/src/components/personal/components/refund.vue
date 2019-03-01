<template>
  <div class="refund">
    <mt-header title="退款" class="header">
      <router-link to="/personal" slot="left" >
            <mt-button icon="back" ></mt-button>
        </router-link>
    </mt-header>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.refund {
  width: 100%;
  height: 100%;
  background: #f4f4f0;
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