<template>
  <transition name="move">
    <div class="sidebar" v-show="sidebarFlag" @click="sidebarFlag = false">
      <div class="sidebar-warrper" @click.stop.prevent>
        <div class="sidebar-box">
          <div class="content">
            <header>侧边栏</header>
            <router-link to="/users">用户</router-link>
            <router-link to="/users">用户</router-link>
            <router-link to="/users">用户</router-link>
            <router-link to="/users">用户</router-link>
          </div>
        </div>
        <div class="sidebar-footer">
          <i class="fa fa-close" @click="flag"></i>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      sidebarFlag: false
    }
  },
  methods: {
    flag() {
      this.sidebarFlag = !this.sidebarFlag
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/@mixin.styl'
.sidebar
  position fixed
  top 0
  left 0
  z-index 10
  right 0
  height 100%
  .sidebar-warrper
    height 100%
    overflow auto
    width 60%
    background rgba(0, 0, 0, .5)
  .sidebar-box
    min-height 100%
    .content
      padding-bottom 60px
      header
        line-height 1.5
        font-size 1rem
        color #fff
        text-align center
        bb-1px(#ccc)
        margin-bottom .25rem
      a
        line-height 1.5
        font-size 1rem
        display block
        text-align center
        color #fff
        bb-1px(#ccc)
  .sidebar-footer
    margin-top -60px
    height 60px
    text-align center
    i
      font-size 1rem
      color #fff
.move-enter-active, .move-leave-active
  transform: translate(0, 0)
  transition: all .3s
.move-enter, .move-leave-active
  transform: translate(-100%, 0)
</style>
