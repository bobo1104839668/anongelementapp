<template>
  <div class="footer">
    <ul>
      <li v-for="(item,index) in navs">
        <router-link :to="item.path">
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.name}}</span>
        </router-link>
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
        },
        {
          name: "个人中心",
          icon: "&#xe606;",
          path: "/personal"
        }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> shaobo
      ]
    };
<<<<<<< HEAD
=======
=======
>>>>>>> d2c5eb4d52fe418169c6be701169da6ed25cd95b
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
  }
=======
  },
>>>>>>> shaobo
};
</script>

<style lang="scss">
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
.footer > ul > li,.footer > ul > li > a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer > ul > li>i,.footer > ul > li > a > i {
  font-size: 40px;
}
</style>