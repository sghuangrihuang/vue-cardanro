<template>
  <div class="search">
    <vHeader :searchFlag = 'true'>
      <div slot="search" class="search-content">
        <input type="text" placeholder="请输入关键词/产品名称" v-model="filterData" v-focus="focusState" ref="inputSearch">
        <i class="fa fa-search" @click="searchBtn"></i>
        <ul v-show="searchFlag && searchFiterList && searchFiterList.length != 0">
          <li class="bb-1px" v-for="item in searchFiterList" :key="item.id" @click="selectItem(item.name)"> {{item.name}} </li>
        </ul>
      </div>
    </vHeader>
    <div class="search-main wrapper">
      <div class="search-list" v-show="searchlist && searchlist.length != 0">
        <header class="search-header">热点搜索</header>
        <ul class="search-ul">
          <li v-for="item in searchlist" :key="item.id">
            <a href="">
              <img v-lazy="item.img" alt="">
              <span>{{item.name}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="search-history" v-show="searchHistory && searchHistory.length != 0">
        <header class="search-header">历史搜索</header>
        <ul class="search-ul">
          <li v-for="item in searchHistory" :key="item.id">
            <a href="">
              <img v-lazy="item.img" alt="">
              <span>{{item.name}}</span>
            </a>
          </li>
        </ul>
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
  data () {
    return {
      searchHistory: [], //历史记录
      allSearchList: [], //总数据
      filterData: '', //过滤
      searchlist: [], //搜索数据
      searchFlag: false,
      focusState: false
    }
  },
  components: {
    vHeader,
    vFooter
  },
  methods: {
    selectItem(name) {
      this.filterData = name;
      this.searchlist = this.searchFiterList;
      this.searchFlag = false;
      this.searchHistory = this.searchlist.concat(this.searchHistory);
      this.$store.set('search', this.searchHistory);
    },
    searchBtn() {
      if ( this.filterData == '' ) {
        return ;
      }
      this.searchlist = this.searchFiterList
      this.searchFlag = false;
      this.searchHistory = this.searchlist.concat(this.searchHistory);
      this.$store.set('search', this.searchHistory);
    }
  },
  computed: {
    searchFiterList() {
      var vm = this;
      this.searchFlag = true;
      return this.allSearchList.filter((item) => {
        if (vm.filterData == '') return 0
        return item.name.indexOf(vm.filterData) >= 0
      })
    }
  },
  created () {
    this.$nextTick(() => {
      this.focusState = true;
      // this.$refs.inputSearch.focus()
      var history = this.$store.get('search');
      if ( history == '' ) {
        return;
      }
      this.searchHistory = history;
    })
    api.searchList()
    .then((res) => {
      this.allSearchList = res.searchlist
    })
  },
  directives: {
    focus: {
      update: function(el, {value}) {
        if (value) {
          el.focus()
        }
      }
    }
  }
}
</script>

<style lang="stylus">
@import '../../assets/stylus/@mixin.styl'
.search-main
  margin-bottom 2.45rem
  .search-header
    display flex
    justify-content center
    align-items center
    font-size .75rem
    color #111010
    height 1.9rem
  .search-ul
    text-align center
    overflow hidden
    li
      width 33.333333%
      font-size 0
      float left
      display inline-block
      a
        display block
      img
        width 4.5rem
        height 4.5rem
        box-sizing border-box
        border 1px solid #ccc
        border-radius 50%
      span
        display inline-flex
        justify-content center
        align-items center
        font-size .75rem
        color #111010
        height 1.25rem
        width 4.5rem
        overflow hidden
.search-content
  height 100%
  display flex
  justify-content center
  align-items center
  ul
    position fixed
    top 2.2rem
    left 0
    width 100%
    right 0
    z-index 100
    background-color #fff
    bottom 2.45rem
    li
      margin 0 0.25rem
      color #111010
      font-size .75rem
      display flex
      bb-1px(#ccc)
      align-items center
      line-height 1.5
  input
    font-size .55rem
    color #d8d8d8
    border 1px solid #c3c3cc
    text-indent .5em
    height 1.5rem
    display inline-block
    flex 1
    margin-right 1rem
  i
    font-size 1.15rem
</style>
