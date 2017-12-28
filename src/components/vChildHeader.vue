<template>
  <div class="child-header">
    <i class="fa fa-angle-left" @click="$router.go(-1)"></i>
    <span>{{title}}</span>
    <i class="fa fa-share-alt"></i>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="stylus">
.child-header
  display flex
  height 100%
  align-items center
  i:first-child
    font-size 1rem
  span
    flex 1
    font-size .9rem
    text-align center
  i:last-child
    font-size 1rem
</style>
