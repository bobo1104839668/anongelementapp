<template>
  <div id="app">
    <router-view/>
    <Footer v-if="$route.meta.flag"></Footer>
  </div>
</template>

<script>
import Footer from "./components/common/footer.vue"
export default {
  components: {
    "Footer" : Footer
  }
}
</script>

<style lang="scss">
#app{
  width: 100%;
  height: 100%;
}
.mintui-back{
  font-size: .3rem !important;
}
</style>
