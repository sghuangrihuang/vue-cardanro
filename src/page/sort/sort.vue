<template>
  <div class="sort">
    <vHeader></vHeader>
    <div class="wrapper">
      <div class="sort-wrapper">
        <div class="nav">
          <div class="item bb-1px" @click="selectIndex = index" :class="{ 'active': selectIndex == index }" v-for="(item, index) in homelist" :key="index">
            {{item.name}}
          </div>
        </div>
        <div class="nav-childs">
          <div class="nav-child" v-for="(items, index) in homelist" :key="index" v-if="selectIndex == index">
            <div class="nav-child-header">{{items.name}}</div>
            <div class="item" v-for="(item, i) in items.childrens" :key="i">
              <div class="avatar">
                <img v-lazy="item.img" alt="">
              </div>
              <div class="mess">
                <h1>{{item.name}}</h1>
                <p>¥{{item.price}}</p>
                <div class="star-box">
                  <star :score="item.score"></star>
                  <span>({{item.users.length}}人使用心得)</span>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="nav-child" v-for="(item, index) in homelist" :key="index"></div> -->
        </div>
      </div>
    </div>
    <vFooter></vFooter>
  </div>
</template>

<script>
import vHeader from '@/components/vHeader'
import vFooter from '@/components/vFooter'
import star from '@/components/star'
import api from '@/assets/js/fetch'

export default {
  data () {
    return {
      homelist: [],
      selectIndex: 1,
      starClass: ['fa-star','fa-star-half-o', 'fa-star-o']
    }
  },
  created () {
    api.homeList()
    .then((res) => {
      this.homelist = res.list;
    })
  },
  methods: {
  },
  components: {
    vHeader,
    vFooter,
    star
  }
}
</script>

<style lang="stylus">
@import '../../assets/stylus/@mixin.styl'

.sort-wrapper
  position relative
  display flex
  .nav
    flex 0 0 5rem
    width 5rem
    .item
      display flex
      justify-content center
      align-items center
      color #111010
      background-color #e2e0de
      height 3.75rem
      font-size .8rem
      bb-1px(#fff)
      &:last-child
        border-none()
      &.active
        background-color #fff
  .nav-childs
    flex 1
    width 100%
    padding 0 .5rem
    .nav-child-header
      font-size .8rem
      height 1.25rem
      bb-1px(#111010)
      text-align center
      margin-bottom .5rem
    .item
      display flex
      margin-bottom .5rem
      &:last-child
        margin-bottom 0
      .avatar
        width 3.75rem
        flex 0 0 3.75rem
        border 1px solid #e2e0de
        img
          width 100%
          display block
          height 5rem
      .mess
        width 100%
        flex 1
        display flex
        flex-direction column
        justify-content center
        padding-left .5rem
        h1
          font-weight normal
          font-size .8rem
          color #111010
        p
          color #f22626
          font-size 1rem
          line-height 1.8
        .star-box
          font-size 0
        .star
          font-size 0
          display inline-block
          i
            color #f22626
            font-size .8rem
        span
          margin-left .5em
          font-size .6rem
        
</style>
