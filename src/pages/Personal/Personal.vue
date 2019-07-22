<template>
  <div id="personal_login">
    <HeaderTop>
      <div slot="content" class="personalHeader">
        <slot name="up">
          <i class="iconfont icon-shouye"></i>
        </slot>
        <span href="javascript:" class="logo">
          <img src="./images/logo.png" alt="网易严选" />
        </span>
        <slot name="down">
          <span><i class="iconfont icon-sousuo1"></i></span>
          <span><i class="iconfont icon-gouwuche"></i></span>
        </slot>
      </div>
    </HeaderTop>
    <div class="personalContent">
      <section class="logo_2">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" >
      </section>
      <section class="chooseLogin">
        <button class="phoneLogin">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登陆</span>
        </button>
        <button class="mailLogin">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登陆</span>
        </button>
        <p>
          <span>手机号快捷注册</span>
          <i class="iconfont icon-xiangyou"></i>
        </p>
      </section>
    </div>
    <footer class="personalFooter">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weixin"></use>
        </svg>
        <span>微信</span>
        <span class="line">|</span>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-QQ"></use>
        </svg>
        <span>QQ</span>
        <span class="line">|</span>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weibo1"></use>
        </svg>
        <span>微博</span>
      </div>
    </footer>
  </div>
</template>
<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
  export default {
    components:{
      HeaderTop
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #personal_login
    width 100%
    height 100%
    background #F2F5F4
    .homeUpper
      width 100%
      height 88px
      background #fff
      .personalHeader
        position relative
        width 100%
        height 88px
        line-height 88px
        display flex
        line-height 88px
        .iconfont
          font-size 50px
          &:nth-child(1)
            margin-left 20px
        .logo
          img
            display block
            width 170px
            margin 21px 80px 0 240px
        span
          .iconfont
            font-size 50px
            margin 20px
    .personalContent
      display flex
      flex-direction column
      align-items center
      .logo_2
        height 450px
        line-height 490px
        text-align center
        img
          width 268px
          height 90px
      .chooseLogin
        margin-top -15px
        display flex
        flex-direction column 
        button
          border 1px solid #b4282d
          height 98px
          width 679px
          font-size 28px
          .iconfont
            font-size 40px
            margin-right 16px
            margin-top 5px
            vertical-align middle
          span 
            vertical-align middle
        .phoneLogin
          background-color #b4282d
          color #fff
        .mailLogin
          margin-top 30px
          color #b4282d
          background-color #f2f5f4
        p
          text-align center
          span
            font-size 28px
            margin-top 32px
            text-align center
            vertical-align middle
          .iconfont
            font-size 70px
            color #999
            vertical-align middle
            margin-left -15px
    .personalFooter
      display flex
      justify-content center
      width 100%
      height 100px
      margin-top 350px
      div
        .icon
          font-size 38px
          color #7f7f7f
          margin-right 5px
          vertical-align middle
        span
          font-size 30px
          color #7f7f7f
          margin-right 30px
        .line
          font-weight bold
          font-size 30px
</style>
