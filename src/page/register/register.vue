<template>
  <div class="register">
    <div class="login-wrapper">
      <div class="content">
        <header>欢迎注册</header>
        <label for="">
          <input type="text" placeholder="会员名">
        </label>
        <label for="">
          <input type="text" placeholder="手机号">
        </label>
        <label for="">
          <input type="password" placeholder="密码">
        </label>
        <label for="">
          <input type="text" placeholder="验证码">
          <img src="https://dummyimage.com/88x31" alt="">
        </label>
        <label for="">
          <a href="#/login">已有账号，前往登录</a>
        </label>
        <label for="">
          <span @click="$router.push('/login')">注册</span>
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
.register
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
    min-height 100%
    margin 0 auto
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
    img
      flex 0 0 4.5rem
    input
      flex 1
      text-indent .5em
      background-color transparent
      width 100%
      font-size .7rem
      color #fff
      height 1.75rem
      box-sizing border-box
      border 1px solid #fff
    ::-moz-placeholder
      color: #fff;
    input:-ms-input-placeholder
      color: #fff;
    input::-webkit-input-placeholder
      color: #fff;
</style>
