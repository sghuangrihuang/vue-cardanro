<template>
  <div class="detail">
    <vHeader :searchFlag="true">
      <div slot="childHeader" class="child-header-wrapper">
        <vChildHeader :title="detail.name" @shareClick="$refs.share.changeFlag()"></vChildHeader>
        <share ref="share" shareHeader="分享标题"></share>
      </div>
    </vHeader>
    <div class="wrapper">
      <div class="detail-avatar">
        <img v-lazy="detail.bigImg" alt="">
      </div>
      <div class="detail-header-mess bb-1px">
        <p>{{detail.info}}</p>
        <div class="">
          <span>¥{{detail.price}}</span>
          <b>降价通知</b>
        </div>
        <h3>{{detail.title}}</h3>
      </div>
      <div class="detail-box bb-1px">
        <div class="detail-content">
          <h3 class="head">已选</h3>
          <div class="message">
            <p>{{detail.name}}  {{count}}瓶</p>
          </div>
        </div>
        <div class="detail-content">
          <h3 class="head">数量</h3>
          <div class="message">
            <input type="button" value="-" @click="reduceCount">
            <input type="text" v-model="count">
            <input type="button" value="+" @click="addCount">
          </div>
        </div>
      </div>
      <div class="detail-box bb-1px">
        <div class="detail-content">
          <h3 class="head">送至</h3>
          <div class="message">
            <p>广州   天河区   黄村</p>
          </div>
        </div>
        <div class="detail-content">
          <h3 class="head">支付方式</h3>
          <div class="message">
            <b :class="{'active':select == 0}" @click="select = 0">支付宝</b>
            <b :class="{'active':select == 1}" @click="select = 1">货到付款</b>
          </div>
        </div>
        <div class="detail-content">
          <h3 class="head">运费</h3>
          <div class="message">
            <p>购满500元即可免运费，不足500元运费为10元</p>
          </div>
        </div>
        <div class="detail-content">
          <h3 class="head">提示</h3>
          <div class="message">
            <p>7天内无条件退货</p>
          </div>
        </div>
      </div>
      <div class="detail-userlist">
        <div class="detail-user-header bb-1px">
          <span>评论
            <template v-if='detail.users'>({{detail.users.length}})</template>
          </span>
          <b>好评 <strong style='color:#e82020'>{{detail.score * 20}}%</strong></b>
        </div>
        <div class="detail-user-item bb-1px" v-for="(user, index) in detail.users" :key="index">
          <div class="detail-user-name">
            <star :score="user.score"></star>
            <span>{{user.name}}</span>
          </div>
          <p class="detail-user-comment">{{user.comment}}</p>
          <div class="detail-user-show" v-if="user.commentImg && user.commentImg.length">
            <div class="detail-user-img" v-for="(img, i) in user.commentImg" :key="i" >
              <img v-lazy="img" >
            </div>
          </div>
          <div class="detail-user-time">{{user.time}}</div>
        </div>
      </div>
      <div class="detail-hotlist">
        <h1 class="detail-hotlist-header">为你推荐</h1>
        <div class="list">
          <div class="item" v-for="(item, index) in hotlist" :key="index">
            <div class="img">
              <img v-lazy="item.img" alt="">
            </div>
            <h2>{{item.name}}</h2>
            <p>¥{{item.price}}</p>
          </div>
        </div>
      </div>
    </div>
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
import api from '@/assets/js/fetch'
import star from '@/components/star'

export default {
  data () {
    return {
      collected: false,
      homelist: [],
      hotlist: [],
      detail: '',
      count: 1,
      select: 0
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
    share,
    star
  },
  methods: {
    addCount()  {
      this.count++
    },
    reduceCount() {
      if ( this.count >1 ) {
        this.count--
      }
    },
    addShopCart() {
      alert(1);
    },
    toShopcart() {
      this.$router.push({ name: 'home' });
    }
  },
  created () {
    var id = this.$route.params.id
    var detailId = this.$route.params.detailId
    var vm = this
    api.homeList()
    .then((res) => {
      this.homelist = res.list;
      this.homelist.forEach((item) => {
        if ( item.id == id ) {
          item.childrens.forEach((i) => {
            if ( i.id == detailId ) {
              vm.detail = i;
              console.log(vm.detail);
            }
          })
        }
      })
    })
    api.shopList()
    .then((res) => {
      this.hotlist = res.list
    })
  }
}
</script>

<style lang="stylus">
@import '../../../assets/stylus/@mixin.styl'

.detail-box
  padding .5rem 0 .1rem
  bb-1px(#cbcbcb)
.detail-content
  padding 0 .5rem
  margin-bottom .625rem
  display flex
  justify-content flex-start
  .head
    flex 0 0 2.1em
    width 2.1em
    color #939292
    font-size .7rem
    line-height 1.1
    font-weight normal
  .message
    width 100%
    flex 1
    display flex
    align-items center
    font-size 0
    color #111010
    padding-left .5rem
    b
      font-size .7rem
      color #111010
      display inline-flex
      justify-content center
      align-items center
      line-height 1.5
      margin-right .75rem
      vertical-align top
      width 5em
      border 1px solid #111010
      &.active
        color #e82020
        border-color #e82020
    p
      font-size .7rem
    input
      background-color #fff
      width 2.1em
      text-align center
      height .75rem
      font-size: .6rem
      color #111010
      display inline-block
      vertical-align top
      box-sizing border-box
      border 1px solid #cbcbcb
.detail-hotlist
  .detail-hotlist-header
    text-indent .5rem
    font-size .9rem
    line-height 2
    color #7b7a7a
  .list
    margin 0 .5rem
    text-align center
    .item
      width 30%
      margin-right 5%
      text-align left
      display inline-block
      margin-bottom 5%
      vertical-align top
      &:nth-child(3n)
        margin-right 0
      &:last-child
        margin-right 0
      h2
        font-size .7rem
        color #111010
        font-weight normal
        line-height 1.2
      p
        line-height 1.5
        font-size .75rem
        color #111010
      .img
        position relative
        width 100%
        height 0
        padding-bottom 100%
        margin-bottom .25rem
        img
          position absolute
          width 100%
          height 100%
          top 0
          left 0
.detail-user-item
  bb-1px(#cbcbcb)
  .detail-user-time
    display flex 
    font-size .6rem
    color #111010
    line-height 1.2
    padding-bottom .5em
    justify-content flex-end
  .detail-user-show
    font-size 0
    margin-bottom .25rem
    .detail-user-img
      position relative
      display inline-block
      vertical-align top
      width 30%
      height 0
      padding-bottom 27.5%
      margin-right 5%
      &:last-child
        margin-right 0
      img
        position absolute
        top 0
        left 0
        width 100%
        height 100%
  .detail-user-comment
    font-size .65rem
    color #111010
    text-align justify
    line-height 1.2
    margin-bottom .5rem
  .detail-user-name
    display flex
    align-items center
    .star
      flex 1
    span
      font-size .7rem
      line-height 2.5
      color #111010
.detail-userlist
  padding 0 .5rem
  .detail-user-header
    display flex
    align-items center
    bb-1px(#cbcbcb)
    span
      flex 1
      font-size .75rem
      line-height 2.5
      color #939292
    b
      color #939292
      font-weight normal
      font-size .75rem
.detail-header-mess
  padding 0 .5rem .5rem
  bb-1px(#cbcbcb)
  p
    text-indent 2em
    font-size .7rem
    color #111010
    line-height 1.2
    text-align justify
  div
    display flex
    align-items center
    span
      font-size .9rem
      flex 1
      display flex
      line-height 2.5
      align-items center
      color #e82020
    b
      display inline-flex
      padding .5em
      vertical-align middle
      color #6e6d6d
      font-size .6rem
      border 1px solid #6e6d6d
  h3
    font-size .8rem
    color #111010
    font-weight normal
.detail-avatar
  width 100%
  position relative
  height 0
  padding-bottom 50%
  margin-bottom .75rem
  img
    position absolute
    top 0
    left 0
    width 100%
    height 100%
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
