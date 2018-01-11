<template>
  <div class="detail">
    <vHeader :searchFlag="true">
      <div slot="childHeader" class="child-header-wrapper">
        <vChildHeader title="详情页" @shareClick="$refs.share.changeFlag()"></vChildHeader>
        <share ref="share" shareHeader="分享标题"></share>
      </div>
    </vHeader>
    <div class="wrapper">detail</div>
    <vFooter :flagFooter='false'>
      <div class="detail-footer" slot="detail">
        <div class="detail-left">
          <a href="">
            <i class="fa fa-user"></i>
            <span>客服</span>
          </a>
          <a :class="{'active': collected }" @click="collected = !collected">
            <i class="fa" :class="{'fa-heart-o':!collected,'fa-heart':collected, }"></i>
            <span>{{collectedMess}}</span>
          </a>
          <a href="">
            <i class="fa fa-shopping-cart"></i>
            <span>购物车</span>
          </a>  
        </div>
        <div class="detail-btn" style="background:#ec8539" @click="addShopCart">加入购物车</div>
        <div class="detail-btn" style="background:#e82020" @click="toShopcart">立即购买</div>
      </div>
    </vFooter>
  </div>
</template>

<script>
import vHeader from '@/components/vHeader'
import vFooter from '@/components/vFooter'
import vChildHeader from '@/components/vChildHeader'
import share from '@/components/share'

export default {
  data () {
    return {
      collected: false,
    }
  },
  computed: {
    collectedMess() {
      return this.collected ? '取消' : '关注'
    }
  },
  components: {
    vHeader,
    vFooter,
    vChildHeader,
    share
  },
  methods: {
    addShopCart() {
      alert(1);
    },
    toShopcart() {
      this.$router.push({ name: 'home' });
    }
  },
  created () {
  }
}
</script>

<style lang="stylus">
.detail-footer
  height 100%
  display flex
  .detail-left
    flex 1
    width 100%
    display flex
    background-color #eeecea
    text-align center
    a
      flex 1
      width 100%
      display flex
      justify-content center
      align-items center
      flex-direction column
      &.active
        i
          color #e82020
      i
        color #111010
        font-size 1rem
      span
        margin-top .25em
        color #111010
        font-size .75rem
  .detail-btn
    flex 0 0 5rem
    width 5rem
    display flex
    justify-content center
    align-items center
    font-size .7rem
    color #fff
</style>
