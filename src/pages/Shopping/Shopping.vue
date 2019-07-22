<template>
  <div id="shopping">
    <HeaderTop>
      <div slot="content" class="shoppingHeader">
        <span class="title_1">购物车</span>
        <span class="title_2">领劵</span>
      </div>
    </HeaderTop>
    <div class="shoppingNav">
      <ul>
        <li>
          <i class="iconfont icon-yuandian"></i>
          <span>30天无忧退货</span>
        </li>
        <li>
          <i class="iconfont icon-yuandian"></i>
          <span>48小时快速退款</span>
        </li>
        <li>
          <i class="iconfont icon-yuandian"></i>
          <span>满88元免邮费</span>
        </li>
      </ul> 
    </div>
    <div class="shoppingContent">
      <div class="shoppingImg">
        <img src="./images/d-gouwu.png">
      </div>
      <div class="shoppingText">去添加点什么吧</div>
      <div class="shoppingButton">登录</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import HeaderTop from "../../components/HeaderTop/HeaderTop";
  export default {
    components:{
      HeaderTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#shopping
  width 100%
  height 1300px
  background #F4F4F4
  .homeUpper
    width 100%
    height 88px
    display flex
    align-items center
    background #fff
    .shoppingHeader
      width 100%
      height 88px
      line-height 88px
      span
        display block
        width 120px
        height 88px
      .title_1
        font-size 36px
        float left
        margin-left 40px
      .title_2
        float right 
        font-size 30px
        color #B4282D
  .shoppingNav
    display flex
    justify-content space-between
    font-size 28px
    width 100%
    height 60px
    background #D1D0D0
    ul
      width 100%
      height 60px
      display flex
      line-height 60px
      justify-content space-around
      li
        .iconfont
          font-size 10px
        span
          font-size 24px
          color #666
  .shoppingContent
    width 100%
    height 370px
    .shoppingImg
      width 100%
      height 300px
      text-align center
      line-height 300px
      margin-top 400px      
      img
        width 250px 
        height 250px
    .shoppingText
      font-size 28px
      color #999
      margin-top -55px
      text-align center
      margin-bottom 40px
    .shoppingButton
      width 480px
      height 92px
      background #B4282D
      margin 0 auto
      text-align center
      line-height 92px
      font-size 30px
      color #fff

    
      
      
      



  
</style>
