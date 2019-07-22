<template>
  <footer id="footer_guide">
    <tabbar>
      <tabbar-item selected link="/home">
        <i slot="icon" class="iconfont icon-shouye"></i>
        <br />
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/classify">
        <i slot="icon" class="iconfont icon-icon"></i>
        <br />
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item link="/identify">
        <i slot="icon" class="iconfont icon-shiwu"></i>
        <br />
        <span slot="label">识物</span>
      </tabbar-item>
      <tabbar-item link="/shopping">
        <i slot="icon" class="iconfont icon-gouwuche"></i>
        <br />
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item link="/personal">
        <i slot="icon" class="iconfont icon-me"></i>
        <br />
        <span slot="label">个人</span>
      </tabbar-item>
    </tabbar>
  </footer>
</template>
<script type="text/ecmascript-6">
export default {
   watch: {
    '$route': function (newV) {
      this.actived = this.tabList.findIndex(i => i.path === newV.path)
    }
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
#footer_guide
  position fixed
  bottom 0
  width 100%
  height 100px
  z-index 999
  .weui-tabbar
    height 100px
  .weui-tabbar__item
    border-top 1px solid #C1C1C1
    width 100%
    height 100px
    background #fff
    display flex
    flex-direction column
    align-items center
    @tabbar-text-active-color
      color #B4282D
    .weui-tabbar__icon
      margin-top 8px
      margin-right 14px
      .iconfont
        font-size 42px
    .weui-tabbar__label
      margin-top 10px
      span
        font-size 28px
</style>
