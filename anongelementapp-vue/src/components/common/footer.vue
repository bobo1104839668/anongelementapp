<template>
  <div class="footer">
    <ul>
      <li v-for="(item,index) in navs">
        <router-link :to="item.path">
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.name}}</span>
        </router-link>
      </li>
       <li @click="handleToken">
          <i class="iconfont" >&#xe606;</i>
          <span>个人中心</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Vuex from "vuex"
export default {
  data() {
    return {
      navs: [
        {
          name: "首页",
          icon: "&#xe61f;",
          path: "/home"
        },
        {
          name: "分类",
          icon: "&#xe60e;",
          path: "/classific"
        },
        {
          name: "购物车",
          icon: "&#xe66e;",
          path: "/cart"
        }
<<<<<<< HEAD
<<<<<<< HEAD
      ]
=======
      ],
>>>>>>> shaobo
    };
=======
      ]
    }
  },
  methods: {
    ...Vuex.mapActions({
      handleTokens:"handleToken"
    }),
    handleToken(){
      this.handleTokens(this.$router);
    }
>>>>>>> shaobo
  }
};
</script>

<<<<<<< HEAD
<style lang="">
=======
<style lang="scss">
>>>>>>> shaobo
.footer {
  width: 100%;
  height: 0.98rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #ffffff;
  z-index: 111;
}
.footer > ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.footer > ul > li > a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer > ul > li > a > i {
  font-size: 40px;
}
</style>