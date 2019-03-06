<template>
  <div class="personal">
    <mt-header title="个人中心" class="header">
        <mt-button slot="right" @click="handleSets()">
            <i class="iconfont">&#xe62f;</i>
        </mt-button>
    </mt-header>
    <div class="list">
        <a href="##" class="icons">
            <i class="iconfont">&#xe620;</i>
        </a>
        <h1>{{username}}</h1>
        <div class="row">
            <a href="##" class="as">
                <div>0</div>
                <span>收藏的商品</span>
            </a>
            <a href="##">
                <div>0</div>
                <span>收藏的店铺</span>
            </a>
        </div>
        <div class="targets">
            <a href="##" @click="handleClickIcon(1)">
                <div>
                    <i class="iconfont">&#xe653;</i>
                </div>
                <span>待付款</span>
            </a>
            <a href="##" @click="handleClickIcon(3)">
                <div>
                    <i class="iconfont">&#xe657;</i>
                </div>
                <span>代发货</span>
            </a>
            <a href="##" @click="handleClickIcon(4)">
                <div>
                    <i class="iconfont">&#xe60b;</i>
                </div>
                <span>待收货</span>
            </a>
            <a href="##" @click="handleClickIcon(5)">
                <div>
                    <i class="iconfont">&#xe60c;</i>
                </div>
                <span>待评价</span>
            </a>
            <a href="##" @click="handleClick()">
                <div>
                    <i class="iconfont">&#xe61e;</i>
                </div>
                <span>退款/售后</span>
            </a>
        </div>
        <div class="msg">
            <p class="pa" @click="handleClickOrder()">
                <a href="##">我的订单</a>
                <span><i class="iconfont">&#xe644;</i></span>
            </p>
            <p>
                <a href="##">我的优惠卷</a>
                <span><i class="iconfont">&#xe644;</i></span>
            </p>
            <p class="pa" @click="handleAddress()">
                <a href="##">收货地址管理</a>
                <span><i class="iconfont">&#xe644;</i></span>
            </p>
            <p>
                <a href="##">关于阿农</a>
                <span><i class="iconfont">&#xe644;</i></span>
            </p>
        </div>
    </div>
  </div>
</template>

<script>

import Vuex from "vuex"
import {getCookie} from "../../utils/auth"
import axios from "axios"
export default {
    data() {
        return {
            username:""
        }
    },
    computed: {
    //   ...Vuex.mapState({
    //       username:state=>state.personal.username
    //   })  
    },
    created() {
        let username = getCookie("username");
        this.username = username;
    },
    methods: {
        // ...Vuex.mapActions({
        //     handleSet:"personal/handleSet"
        // }),
        handleSets(){
            axios({
                method:"get",
                url:"http://localhost:3000/users?username="+getCookie("username"),
            }).then((data)=>{
                this.$router.push({
                    name:"setName",
                    query:data.data[0]
                })
            })
        },
        handleClickIcon(index){
            this.$router.push({
                name:"target",
                query:{
                    id:index
                }
            })
        },
        handleClickOrder(){
            this.$router.push({
                name:"target",
                query:{
                    id:0
                }
            })
        },
        handleClick(){
            this.$router.push({
                name:"refund"
            })
        },
        handleAddress(){
            this.$router.push({
                name:"address"
            })
        }
    },
};
</script>

<style lang="scss" scoped>
.personal {
  width: 100%;
  height: 100%;
  background: #f5f3f3;
  .list{
      height: 5.42rem;
      width: 100%;
      position: relative;
      background: url();
      h1{
        width: 100%;
        font-size: .32rem;
        color: #000;
        text-align: center;
        margin-bottom: .1rem;
      }
      .icons{
          display: inline-block;
          width: 100%;
          margin-bottom: .2rem;
          margin-top: .54rem;
          text-align: center;
          i{
              font-size: 1.3rem;
              color: #999;
          }
      }
      .row{
          background-color: rgba(0,0,0,.3);
          height: 1rem;
          padding: .2rem 0 .1rem;
          display: flex;
          width: 100%;
          a{
              flex: 1;
              width: 50%;
              color: #fff;
              text-align: center;
              div{
                  margin-bottom: .1rem;
              }
          }
          .as{
              border-right: 2px solid #fff;
          }
      }
      .targets{
          margin-top: .2rem;
          height: 1.6rem;
          display: flex;
          background: #fff;
          a{
              width: 20%;
              height: 1.6rem;
              color: #999;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              i{
                  font-size: .7rem;
                  color: #999;
              }
          }
      }
      .msg{
          width: 100%;
          height: 3.7rem;
          p{
              padding: .22rem .3rem .22rem .4rem;
              color: #333;
              font-size: .32rem;
              background: #fff;
              display: flex;
              justify-content: space-between;
              align-items: center;
              span{
                  display: block;
                  i{
                      font-size: .3rem;
                  }
              }
          }
          .pa{
              margin-bottom: .2rem;
          }
      }
  }
}
.personal > .header {
  width: 100%;
  height: 0.88rem;
  background: #eb4339;
  border-bottom-width: 1px;
  font-size: .34rem;
  color: #fff;
  font-weight: 600;
  .iconfont{
      font-size: .4rem;
      margin-right: .2rem;
  }
}
</style>