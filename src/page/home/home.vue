<template>
  <div class="home">
    <vHeader></vHeader>
    <div class="wrapper">
      <div class="banner">
        <img src="https://dummyimage.com/88x31" alt="">
      </div>
      <div class="sortList">
        <router-link :to="'/sort/'+item.id" class="item" v-for="(item, index) in homelist" :key="index">
          <i class="fa fa-home"></i>
          <span>{{item.name}}</span>
        </router-link>
      </div>
      <div class="hotLists">
        <div class="hot-list"  v-for="(items, index) in homelist" :key="index">
          <h1 class="hot-header">{{items.name}}</h1>
          <div class="hot-list-box">
            <div class="item" v-for="(item, i) in items.childrens" :key="i">
              <router-link :to="'/sort/'+items.id+'/detail/'+item.id">
                <img v-lazy="item.img" alt="">
                <span>{{item.name}}</span>
                <b>¥{{item.price}}</b>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vFooter></vFooter>
  </div>
</template>

<script>
import vHeader from '@/components/vHeader'
import vFooter from '@/components/vFooter'
import api from '@/assets/js/fetch'

export default {
  name: 'home',
  data () {
    return {
      homelist: [],
      flag: false
    }
  },
  created () {
    api.homeList()
    .then((res) => {
      this.homelist = res.list;
    })
  },
  components: {
    vHeader,
    vFooter
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '../../assets/stylus/@mixin.styl'

.banner
  position relative
  width 100%
  height 0
  padding-bottom 66.666667%
  img
    width 100%
    height 100%
    position absolute
    top 0
    left 0
.hot-list
  .hot-header
    display flex
    justify-content center
    align-items center
    height 2rem
    background-color #c73f63
    color #fff
    font-weight bold
    font-size 1.2rem
  .hot-list-box
    text-align center
    font-size 0
    .item
      width 40%
      box-sizing border-box
      height 0
      padding-bottom 40%
      display inline-block
      margin .75rem 5%
      border 1px solid #eae6e6
      a
        display flex
        flex-direction column
        justify-content center
        align-items center
      img
        display block
        width 4.5rem
        height 4.5rem
        margin 5%
      span
        font-size .75rem
      b
        font-size 1rem
        color #f22626
        font-weight normal
        line-height 1.5
.sortList
  margin .25rem 0
  text-align center
  .item
    width 3.5rem
    border 1px solid #333
    margin .5rem
    height 3.5rem
    border-radius 50%
    display inline-flex
    flex-direction column
    justify-content center
    align-items center
    i
      color #272636
      font-size 1.75rem
    span
      color #332a2a
      font-size .6rem
      margin-top .25rem
</style>
