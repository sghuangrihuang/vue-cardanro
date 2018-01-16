<template>
  <header class="main-header">
    <slot name="search"></slot>
    <slot name="childHeader"></slot>
    <div class="search-box" v-if="!searchFlag">
      <div class="search-wrapper">
        <i class="fa fa-reorder" @click="toggleSidebarFlag"></i>
        <button class="border-1px" @click="toSearch"></button>
        <i class="fa fa-search" @click="toSearch"></i>
      </div>
      <sidebar ref="sidebar"></sidebar>
    </div>
  </header>
</template>

<script>
import sidebar from './sidebar'
export default {
  props: {
    searchFlag: {
      type: Boolean,
      default: false
    }
  },
  components: {
    sidebar
  },
  methods: {
    toSearch() {
      this.$router.push('/search');
    },
    toggleSidebarFlag() {
      this.$refs.sidebar.flag()
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/@mixin.styl'

.main-header
  position fixed
  top 0
  left 0
  width 100%
  height 2.2rem
  z-index 50
  box-sizing border-box
  padding 0 .25rem
  background-color #fff
.search-box
  height 100%
.search-wrapper
  display flex
  height 100%
  align-items center
  justify-content center
  button
    blr-1px(#c3c3c3)
    btb-1px(#c3c3c3)
    flex 1
    display inline-block
    height 1.1rem
    margin 0 .875rem
    padding 0
    background-color #fff
    border none
  i
    font-size 1.15rem
</style>
