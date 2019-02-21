<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/footer.vue"
export default {
  data () {
    return {
      
    }
  },
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
