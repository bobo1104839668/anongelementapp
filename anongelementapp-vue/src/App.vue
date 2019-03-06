<template>
  <div id="app">
    <router-view/>
    <Footer v-if="$route.meta.flag"></Footer>
  </div>
</template>

<script>
import Footer from "./components/common/footer.vue";
export default {
  components: {
<<<<<<< HEAD
    Footer: Footer
  }
};
</script>


<style lang="scss">
#app {
=======
    "Footer" : Footer
  }
}
</script>

<style lang="scss">
#app{
>>>>>>> d2c5eb4d52fe418169c6be701169da6ed25cd95b
  width: 100%;
  height: 100%;
}
.mintui-back {
  font-size: 0.3rem !important;
}
</style>
