<template>
  <div class="shopcart">
    <vHeader :searchFlag="true">
      <div slot="childHeader" class="child-header-wrapper">
        <vChildHeader title="我的购物车" @shareClick="shareClick" ></vChildHeader>
        <share ref="share" shareHeader="分享标题"></share>
      </div>
    </vHeader>
    <div class="shopcart-wrapper wrapper">
      <div class="icon-box">
        <div class="icon-item">
          <i class="fa fa-sticky-note-o"></i>
          <span>待付款</span>
        </div>
        <div class="icon-item">
          <i class="fa fa-sticky-note-o"></i>
          <span>待收货</span>
        </div>
        <div class="icon-item">
          <i class="fa fa-sticky-note-o"></i>
          <span>已收货</span>
        </div>
      </div>
      <div class="shopcart-list">
        <div class="shopcart-item">
          <div class="shopcart-checkbox">
            <i class="checked-box fa" :class="{ 
              'fa-circle-o': true,
              'fa-check-circle': false,
              checked: false}" ></i>
          </div>
          <div class="shopcart-avgtar">
            <img src="https://dummyimage.com/88x31" alt="">
          </div>
          <div class="shopcart-mess">
            <h2 class="shopcart-mess-title">(官方正品，专营店直销)欧舒丹美肌无暇保湿霜50ML</h2>
            <p class="shopcart-mess-count"><span>数量：1</span><span>折扣 无</span></p>
            <p class="shopcart-mess-price">¥340</p>
          </div>
        </div>
      </div>
    </div>
    <vFooter :flagFooter='false'>
      <div class="child-footer" slot="cart">
        <div class="mess">
          <i class="checked-box fa" :class="{ 
            'fa-circle-o': true,
            'fa-check-circle': false,
            checked: false}" ></i>
          <span>全选</span>
          <strong>合计：</strong>
          <b>¥952</b>
        </div>
        <div class="btns">前往确认</div>
      </div>
    </vFooter>
  </div>
</template>

<script>
import vHeader from '@/components/vHeader'
import vChildHeader from '@/components/vChildHeader'
import share from '@/components/share'
import vFooter from '@/components/vFooter'
export default {
  components: {
    vHeader,
    vChildHeader,
    share,
    vFooter
  },
  methods: {
    shareClick() {
      this.$refs.share.changeFlag();
    }
  }
}
</script>

<style lang="stylus">
.checked-box
  font-size 1rem
  color #ccc
  &.checked
    color #e62a2a
.child-footer
  height 100%
  width 100%
  display flex
  align-items center
  .mess
    flex 1
    height 100%
    padding-left .5rem
    align-items center
    display flex
    background-color #eeecea
    box-sizing border-box
    span
      margin-left .25em
      font-size .75rem
      color #111010
      margin-right 1em
    strong
      font-weight normal
      font-size .75rem
    b
      font-weight normal
      color #e62a2a
      font-size .9rem
  .btns
    width 6.25rem
    flex 0 0 6.25rem
    background-color #e51c1c
    font-size .75rem
    height 100%
    color #fff
    display flex
    justify-content center
    align-items center
.shopcart-item
  display flex
  width 100%
  margin-bottom .625rem
  .shopcart-checkbox
    flex 0 0 1.75rem
    width 1.75rem
    justify-content center
    display flex
    flex-direction column
    align-items center
  .shopcart-avgtar
    flex 0 0 33.3333%
    width 33.3333%
    height 0
    position relative
    padding-bottom 33.3333%
    img
      position absolute
      top 0
      left 0
      width 100%
      height 100%
  .shopcart-mess
    flex 1
    width 100%
    padding 0 .5rem
    flex-direction column
    display flex
    .shopcart-mess-title
      margin-top .5rem
      text-align justify
      font-size .75rem
      line-height .9rem
      color #111010
      font-weight normal
    .shopcart-mess-count
      font-size .7rem
      line-height 2.5
      span
        margin-right 1em
    .shopcart-mess-price
      font-size .9rem
      color #e51c1c
.icon-box
  padding .5rem 0
  text-align center
  display flex
  justify-content center
  .icon-item
    width 4.75rem
    height 4.75rem
    margin 0 .7rem
    box-sizing border-box
    border 1px solid #000;
    border-radius 50%
    display flex
    flex-direction column
    justify-content center
    align-items center
    i
      font-size 1.75rem
    span
      font-size .6rem
      margin-top .5rem
      color #111010

</style>
