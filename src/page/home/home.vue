<template>
  <div class="home">
    <vHeader></vHeader>
    <div class="wrapper">
      <div class="banner">
        <img src="https://dummyimage.com/88x31" alt="">
      </div>
      <div class="sortList">
        <div class="tap" :class="{active: flag}" @click="showtime"></div>
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
    showtime() {
      this.flag = true;
      setTimeout(() => {
        this.flag = false
      }, 2500)
    }
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
.tap
  border 1px solid #ccc
  width 75%
  margin 0 auto
  height 0
  padding-bottom 75%
  bt-1px(green)
  &.active
    &:before
      display block
      animation lines 2.5s linear infinite
  &:before
    width 50%
    top 50%
    left 50%
    display none
    transform translateX(-50%)
@keyframes lines {
  0% { 
    top 0
  }
  50% {
    top 100%
  }
  100% {
    top 0
  }
}
</style>
