<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './components/Footer/Footer'

export default {
  components: {
    Footer
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

