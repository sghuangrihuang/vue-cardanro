<template>
  <div class="home">
    <vHeader></vHeader>
    <div class="wrapper">
      <div class="banner">
        <img src="https://dummyimage.com/88x31" alt="">
      </div>
      <div class="sortList">
      </div>
    </div>
    <vFooter></vFooter>
  </div>
</template>

<script>
import vHeader from '@/components/vHeader'
import vFooter from '@/components/vFooter'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      flag: false
    }
  },
  components: {
    vHeader,
    vFooter
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '../../assets/stylus/@mixin.styl'
.banner
  position relative
  width 100%
  height 0
  padding-bottom 66.666667%
  img
    width 100%
    height 100%
    position absolute
    top 0
    left 0
</style>
