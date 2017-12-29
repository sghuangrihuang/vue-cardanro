<template>
  <div class="users">
    <vHeader :searchFlag="true" v-if="!$route.meta.isUsers">
      <div slot="childHeader" class="child-header-wrapper">
        <vChildHeader :title="$route.meta.title"></vChildHeader>
      </div>
    </vHeader>
    <div class="user-message" v-if="$route.meta.isUsers">
      <div class="user-avater">
        <img v-lazy="'https://dummyimage.com/88x31'" alt="">
      </div>
      <div class="user-router bt-1px">
        <router-link to="/users/userinfo" class="bb-1px">
          <i class="fa fa-user-o"></i>
          <span>个人资料</span>
          <i class="fa fa-angle-right"></i>
        </router-link>
        <router-link to="/users/address"  class="bb-1px">
          <i class="fa fa-user-o"></i>
          <span>收货地址</span>
          <i class="fa fa-angle-right"></i>
        </router-link>
        <router-link to="/users/purchase"  class="bb-1px">
          <i class="fa fa-user-o"></i>
          <span>购买记录</span>
          <i class="fa fa-angle-right"></i>
        </router-link>
        <router-link to="/users/comment"  class="bb-1px">
          <i class="fa fa-user-o"></i>
          <span>　评论　</span>
          <i class="fa fa-angle-right"></i>
        </router-link>
        <router-link to="/users/collection"  class="bb-1px">
          <i class="fa fa-star-o"></i>
          <span>　收藏　</span>
          <i class="fa fa-angle-right"></i>
        </router-link>
      </div>
    </div>
    <router-view class="users-wrapper"></router-view>
    <vFooter></vFooter>
  </div>
</template>

<script>
import vHeader from '@/components/vHeader'
import vFooter from '@/components/vFooter'
import vChildHeader from '@/components/vChildHeader'
export default {
  components: {
    vChildHeader,
    vHeader,
    vFooter
  }
}
</script>

<style lang="stylus">
@import '../../assets/stylus/@mixin.styl'
.user-message
  margin-bottom 2.45rem
.users-wrapper
  position fixed
  top 2.2rem
  right 0
  bottom 2.45rem
  left 0
  z-index 49
  overflow auto
.user-avater
  width 66.6667%
  height 0
  padding-bottom 66.6667%
  margin 0 auto 1.5rem
  position relative
  img
    position absolute
    top 0
    left 0
    width 100%
    display inline-block
    height 100%
    border-radius 50%
.user-router
  bt-1px(#e1e1e1)
  a
    display flex
    align-items center
    height 2.5rem
    bb-1px(#e1e1e1)
    padding 0 1.125rem
    i:first-child
      font-size .8rem
      color #c73f63
    span
      box-sizing border-box
      padding 0 .5rem
      font-size .7rem
      color #111010
      flex 1
    i:last-child
      font-size 1.2rem
      color #cfcfcf
</style>
