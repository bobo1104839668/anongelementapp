<template>
  <div class="address">
    <mt-header title="管理收货地址" class="header">
      <router-link to="/personal" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <router-link :to="{name:'addAddress'}">
      <div class="adds">
        <span>添加收货地址</span>
      </div>
    </router-link>
    <div class="list">
      <div class="ads" v-for="(item,index) in addresss">
        <div>
          <span>收货人：{{item.name}}</span>
          <span>{{item.phone}}</span>
          <p>{{item.address}}</p>
        </div>
        <div>
          <p>
            <input
              type="radio"
              class="ch"
              @click="handleCheck($event)"
              :value="item.id"
              :checked="item.status==1?'checked':''"
              ref = "check"
            >设为默认地址
          </p>
          <p>
            <span @click="handleUpdate(item.id)">编辑</span>
            <span @click="handleClickDel(item.id)">删除</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import axios from "axios";
export default {
  created() {
    this.handleAddress();
  },
  computed: {
    ...Vuex.mapState({
      addresss: state => state.personal.addresss
    })
  },
  methods: {
    ...Vuex.mapActions({
      handleAddress: "personal/handleAddress",
      handleChecks: "personal/handleCheck",
      handleClickDel:"personal/handleClickDel",
      handleUpdates:"personal/handleUpdates"
    }),
    handleUpdate(id){
      this.handleUpdates({router:this.$router,id:id})
    },
    handleCheck(e) {
      console.log(this.$refs.check)
      axios({
        method: "get",
        url: "http://localhost:3000/address?status=1"
      }).then((data) => {
        if (data.data.length != 0) {
          console.log(111)
          axios({
            method: "patch",
            url: "http://localhost:3000/address/" + data.data[0].id,
            data: {
              status: 0
            }
          }).then(data => {
            if (data) {
              this.handleChecks({router:this.$router,id:e.target.value});
            }
          });
        }else{
          axios({
            method: "patch",
            url: "http://localhost:3000/address/"+e.target.value,
            data: {
              status: 1
            }
          }).then(()=>{
            this.handleAddress();
          })
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.address {
  width: 100%;
  height: 100%;
  position: relative;
  background: #f4f4f0;
  .list {
    .ads {
      padding: 0.24rem 0.2rem;
      width: 100%;
      background: #fff;
      color: #666;
      font-size: 0.28rem;
      border-width: 1px 0;
      border-style: solid;
      border-color: #f1f0f1;
      div:nth-child(1) > span:nth-child(1) {
        font-weight: 700;
      }
      div:nth-child(1) > span:nth-child(2) {
        float: right;
      }
      div:nth-child(2) {
        padding: 0.32rem 0 0 0.6rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        p:nth-child(2) {
          color: #eb4339;
        }
        .ch {
          position: absolute;
          width: 0.4rem;
          height: 0.4rem;
          display: block;
          border: 0;
          left: 1px;
          top: 25px;
          cursor: pointer;
        }
        .ch:checked {
          background: #eb4339;
          border-color: #eb4339;
        }
      }
    }
  }
  .adds {
    height: 1.1rem;
    width: 100%;
    margin: 0.2rem 0;
    background: #fff;
    span {
      display: block;
      width: 100%;
      font-size: 0.32rem;
      color: #eb4339;
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
    .select {
      border: none;
      outline: none;
      width: 20%;
      background: #fff;
      font-size: 0.26rem;
    }
    .input-text {
      background-color: #f4f4f0;
    }
    .items {
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