<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/common/footer.vue"
import Vuex from "vuex"
export default {
  components: {
    "Footer" : Footer
  },
}

</script>

<style lang="scss">
#app{
  width: 100%;
  height: 100%;
}
</style>
