<template>
  <div class="share" v-show="flag">
    <transition name="share-fade">
      <div class="share-bg" v-show="flag" @click="changeFlag"></div>
    </transition>
    <transition name="share-move">
      <div class="share-wrapper" v-show="flag" @click.stop>
        <div class="share-box">
          <div class="share-box-group">
            <header class="share-header bb-1px">{{ shareHeader }}</header>
            <div class="share-buttons" v-if="buttons && buttons.length">
              <button class="bb-1px btn" v-for="(btn, index) in buttons" :key="index" @click.stop.prevent="btn.handler"> {{ btn.title }} </button>
            </div>
          </div>
          <div class="share-box-group share-box-cancel">
            <button class="bb-1px btn cancel-btn" @click="changeFlag">取消</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    buttons: {
      type: Array,
      default() {
        return [
          {
            title: 'QQ',
            role: 'destructive',
            handler() {
              alert('QQ')
            }
          },{
            title: 'QQ空间',
            role: 'destructive',
            handler() {
              alert('QQ空间')
            }
          },{
            title: '微博',
            role: 'destructive',
            handler() {
              alert('微博')
            }
          },{
            title: '微信',
            handler() {
              alert('微信');
            }
          }
        ]
      }
    },
    shareHeader: {
      type: String,
      default: '分享'
    }
  },
  data () {
    return {
      flag: false
    }
  },
  methods: {
    changeFlag() {
      this.flag = !this.flag
    }
  }
}
</script>

<style lang="stylus">
@import '../assets/stylus/@mixin.styl'
.share-fade-enter-active, .share-fade-leave-active
  transition: opacity .3s
.share-fade-enter, .share-fade-leave-active
  opacity: 0
.share-move-enter-active, .share-move-leave-active
  transition: all .3s
  transform translateY(0)
.share-move-enter, .share-move-leave-active
  transform translateY(100%)
.btn
  min-height 2.0rem
  display flex
  width 100%
  justify-content center
  align-items center
  position relative
  bb-1px(#d6d6da)
  background-color transparent
  font-size .9rem
  color #222
  border none
  &.cancel-btn
    border-none()
.share
  position fixed
  width 100%
  height 100%
  z-index 101
  top 0
  left 0
  right 0
  bottom 0
  .share-bg
    background-color rgba(0, 0, 0, .26)
    height 100%
  .share-wrapper
    position fixed
    top 50%
    left 0
    right 0
    bottom 0 
    z-index 102
    .share-box
      padding 0 1rem
      display flex
      justify-content flex-end
      flex-direction column
      height 100%
      max-height 100%
      .share-box-group
        flex-shrink: 2
        overflow scroll
        border-radius: 13px
        margin-bottom: 8px
        background: #f9f9f9
        pointer-events: all
        &.share-box-cancel
          overflow hidden
          flex-shrink: 0
      .share-header
        font-size 1rem
        text-align center
        color #8f8f8f
        height 1.8rem
        align-items center
        display flex
        justify-content center
        bb-1px(#d6d6da)
</style>
