<template>
  <div class="login">
    <div class="login-wrapper">
      <div class="content">
        <header>欢迎回来</header>
        <label for="">
          <input type="text" placeholder="会员名/手机号">
        </label>
        <label for="">
          <input type="text" placeholder="密码">
        </label>
        <label for="">
          <a href="#/register">注册</a>
        </label>
        <label for="">
          <span @click="$router.push('/users')">登陆</span>
        </label>
      </div>
    </div>
    <div class="bg"><img src="../../assets/images/bg1.png" alt=""></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.login
  position fixed
  top 0
  left 0
  height 100%
  width 100%
  overflow auto
  background #f4788d
  .bg
    margin-top -5rem
    height 5rem
    width 100%
    img
      height 5rem
      float left
  .login-wrapper
    width 55%
    text-align center
    color #fff
    display flex
    justify-content center
    align-items center
    margin 0 auto
    min-height 100%
    position relative
    .content
      width 100%
      padding-bottom 5rem
    header
      margin-bottom 1rem
    label
      display flex
      margin-bottom .7rem
      justify-content flex-end
      a
        color #fff
        display inline-block
        font-size .6rem
      span
        display flex
        width 37.5%
        margin 0 auto
        justify-content center
        align-items center
        height 1.5rem
        font-size .7rem
        background-color #e82020
    input
      width 100%
      text-indent .5em
      background-color transparent
      display inline-block
      color #fff
      box-sizing border-box
      height 1.75rem
      font-size .7rem
      border 1px solid #fff
    ::-moz-placeholder
      color #fff
    input:-ms-input-placeholder
      color #fff
    input::-webkit-input-placeholder
      color #fff

</style>
