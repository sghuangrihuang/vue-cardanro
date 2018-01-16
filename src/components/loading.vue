<template>
  <div class="loading-wrapper" v-show="flag">
    <div class="loading">
      <img width="24" height="24" src="./../assets/images/loading.gif">
      <p class="desc">{{title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      flag: {
        type: Boolean | String | Number,
        default: true
      },
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>

<style lang="stylus">
.loading-wrapper
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  display flex
  flex-direction column
  align-items center
  justify-content center
  z-index 998
  background-color #fff
  .loading
    width: 100%
    text-align: center
    .desc
      line-height: 20px
      font-size: 14px
      color: #666
</style>
