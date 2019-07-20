<template>
  <footer id="footer_guide">
    <mt-tabbar class="tabBar" v-model="message">
      <mt-tab-item id="Home">
        <i class="iconfont icon-shouye"></i><br />
        <span>首页</span>
      </mt-tab-item>
      <mt-tab-item id="Classify">
        <i class="iconfont icon-icon"></i><br />
        <span>分类</span>
      </mt-tab-item>
      <mt-tab-item id="Identify">
        <i class="iconfont icon-shiwu"></i><br />
        <span>识物</span>
      </mt-tab-item>
      <mt-tab-item id="Shopping">
        <i class="iconfont icon-qicheqianlian-"></i><br />
        <span>购物车</span>
      </mt-tab-item>
      <mt-tab-item id="Personal">
        <i class="iconfont icon-me"></i><br />
        <span>个人</span>
      </mt-tab-item>
    </mt-tabbar>
  </footer>
</template>
<script type="text/ecmascript-6">
export default {
  name: "Footer",
  props: {
    selected: String
  },
  data() {
    return {
      //选中的tabbar值message为页面传入的值selected  默认选中Home
      message: 'Home',
    };
  },
  watch: {
    message: function(val) {
      // 这里就可以通过 val 的值变更来确定去向
      switch (val) {
        case "Home":
          this.$router.push("/home");
          break;
        case "Classify":
          this.$router.push("/classify");
          break;
        case "Identify":
          this.$router.push("/identify");
          break;
        case "Personal":
          this.$router.push("/personal");
          break;
        case "Shopping":
          this.$router.push("/shopping");
          break;
      }
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#footer_guide
  border-top 1px solid #C1C1C1
  background #fff
  position fixed
  bottom 0
  width 100%
  height 100px
  z-index 999
  .mint-tabbar
    background #FFFFFF
    height 96px
    .mint-tab-item
      background #FFFFFF
      padding 12px 0
    .mint-tab-item.is-selected
      color #B4282D
    .mint-tab-item-label
      .iconfont
        font-size 40px
      span
        display block
        font-size 25px
        margin-top 10px
</style>
