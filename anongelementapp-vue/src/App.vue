<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
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

<style>
#app{
  width: 100%;
  height: 100%;
}
</style>
