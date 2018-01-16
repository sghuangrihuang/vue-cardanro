<template>
  <footer class="main-footer">
    <slot name="cart"></slot>  
    <div class="tabs" v-if="flagFooter">
      <div class="tab">
        <router-link to="/home" :class="{actived: $route.meta.active==0}">
          <i class="fa fa-home"></i>
          <span>首页</span>
        </router-link>
      </div>
      <div class="tab">
        <router-link to="/sort" :class="{actived: $route.meta.active==1}">
          <i class="fa fa-th-large"></i>
          <span>分类</span>
        </router-link>
      </div>
      <div class="tab">
        <router-link to="/shopcart" :class="{actived: $route.meta.active==2}">
          <i class="fa fa-shopping-cart"></i>
          <span>购物车</span>
        </router-link>
      </div>
      <div class="tab">
        <router-link to="/users" :class="{actived: $route.meta.active==3}">
          <i class="fa fa-user"></i>
          <span>我的</span>
        </router-link>
      </div> 
    </div>
    <slot name="detail"></slot>
  </footer>
</template>

<script>
export default {
  props: {
    flagFooter: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/variable.styl'

.main-footer
  position: fixed
  bottom: 0
  left: 0
  right: 0
  z-index 9
  height 2.45rem
  .tabs
    width: 100%
    position: relative
    display: flex
    height: 100%
    .tab
      flex 1
      text-align center
      a
        display flex
        justify-content center
        align-content center
        height 100%
        flex-direction column
        background-color $color-home
        &.actived, &.router-link-active
          background-color #fff
          i, span
            color $color-home
        i
          color #fff
          font-size 1rem
          margin-bottom .25rem
        span
          color #ffffff
          font-size .55rem
</style>
