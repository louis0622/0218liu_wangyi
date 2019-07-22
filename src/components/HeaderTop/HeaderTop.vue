<template>
  <div class="homeUpper">  
    <slot name="content"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.homeUpper
  width 100%
  height 88px
  display flex
  align-items center
  .logo
    img
      display block
      width 150px
      margin 0 15px
  .homeInput
    position relative
    line-height 20px
    .homeSearch
      width 420px
      height 55px
      border-radius 10px
      background #EDEDED
      font-size 28px
      line-height 28px
    input::-webkit-input-placeholder
      text-indent 20px
      color #666
      font-size 28px
    .iconfont
      position absolute
      left 5px
      top 50%
      margin-right 20px
      margin-top -8px
      color #666
  .homeLogin
    width 80px
    height 45px
    border 2px solid #b4282d
    border-radius 8px
    text-align center
    line-height 43px
    margin-left 15px
    font-size 13px
    color #B4282D
    background #fff
</style>
