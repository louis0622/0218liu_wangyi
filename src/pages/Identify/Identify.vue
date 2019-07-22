<template>
  <div id="Identifys">
    <HeaderTop>
      <div slot="content" class="Identify_header">
        <i class="iconfont icon-shouye"></i>
        <div>
          <span :class="{active:show}" @click="show=!show">发现</span>
          <span :class="{active:!show}" @click="show=!show">甄选家</span>
        </div>
        <span class="span_1"><i class="iconfont icon-sousuo1"></i></span>
        <span class="span_2"><i class="iconfont icon-gouwuche"></i></span>
      </div>
    </HeaderTop>
    <div class="homeLower">
      <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
    </div>
    <div class="IdentifyContent">
      <div class="IC_header">
        <div class="headerImg">
          <img src="./images/bdb121b22f382f1d2a116ace09bcfaf4.jpg" />
        </div>
      </div>
      <div class="IC_item1">
        <div class="H_1">
          <img src="./images/yanxuan1.png" />选妹
        </div>
        <div class="H_2">夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20</div>
        <div class="H_3">
          <img src="./images/6f5e7bb94350b7eed05134a9b1d83200.jpg" />
        </div>
        <div class="H_4">
          <i class="iconfont icon-wangjimima-copy"></i>7202人看过
        </div>
      </div>
      <div class="IC_item2">
        <div class="U_left">
          <div class="U_1">
            <img src="./images/yanxuan2.jpg" />
            <span>网易文漫：小蕙</span>
          </div>
          <div class="U_2">
            <span class="span1">大牌最爱的玻尿酸原液,1瓶等于20片面膜</span><br>
            <span class="span2">赋活原液系列限时7.1折</span>
          </div>
          <div class="U_3">
            <i class="iconfont icon-wangjimima-copy"></i>1200人看过
          </div>
        </div>
        <div class="U_right">
          <img src="./images/119ea021198fbc19e7d0cb76c718e324.jpg" />
        </div>
      </div>
      <div class="IC_item1">
        <div class="H_1">
          <img src="./images/yanxuan1.png" />选妹
        </div>
        <div class="H_2">夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20</div>
        <div class="H_3">
          <img src="./images/ae09169ca36f7adc57458c5a371ab6df.jpg" />
        </div>
        <div class="H_4">
          <i class="iconfont icon-wangjimima-copy"></i>7202人看过
        </div>
      </div>
       <div class="IC_item2">
        <div class="U_left">
          <div class="U_1">
            <img src="./images/yanxuan2.jpg" />
            <span>网易文漫：小蕙</span>
          </div>
          <div class="U_2">
            <span class="span1">大牌最爱的玻尿酸原液,1瓶等于20片面膜</span><br>
            <span class="span2">赋活原液系列限时7.1折</span>
          </div>
          <div class="U_3">
            <i class="iconfont icon-wangjimima-copy"></i>1200人看过
          </div>
        </div>
        <div class="U_right">
          <img src="./images/e90cef1231f016f3db49360530461e38.jpg" />
        </div>
      </div>
      <div class="IC_item1">
        <div class="H_1">
          <img src="./images/yanxuan1.png" />选妹
        </div>
        <div class="H_2">夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20</div>
        <div class="H_3">
          <img src="./images/6f5e7bb94350b7eed05134a9b1d83200.jpg" />
        </div>
        <div class="H_4">
          <i class="iconfont icon-wangjimima-copy"></i>7202人看过
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";

export default {
  components: {
    HeaderTop
  },
  data() {
    return {
      show: true,
      //Navbar区域
      current: "快车",
      labels: [
        "推荐",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个护清洁",
        "母婴亲子",
        "运动旅行",
        "数码家电",
        "全球特色"
      ]
    };
  },
  methods:{
    //navbar轮播
    changeHandler(cur) {
      this.current = cur;
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#Identifys
  background #F4F4F4
  .homeUpper
    width 100%
    height 88px
    display flex
    align-items center
    background #fff
    border-bottom 2px solid #D9D9D9
    .Identify_header
      display flex
      flex 1
      line-height 88px
      div
        width 300px
        height 85px
        font-size 30px
        margin-left 160px
        color #7f7f7f
        text-align center
        span
          &.active
            color #b4282d
            font-weight bold
            font-size 42px
      .iconfont
          font-size 50px
          &:nth-child(1)
            margin-left 30px
      .span_1
        .iconfont
          font-size 50px
          margin-right 20px
  .homeLower
    border-bottom 2px solid #D9D9D9
    display flex
    justify-content space-between
    font-size 28px
    width 100%
    height 60px
    .cube-scroll-nav-bar_horizontal
      padding-left 30px
      height 56px
      width 100%
      overflow hidden
      .cube-scroll-wrapper
        width 1400px
        .cube-scroll-content
          .cube-scroll-list-wrapper
            .cube-scroll-nav-bar-items
              .cube-scroll-nav-bar-item
                height 56px
                margin-left 20px
                text-align center
                vertical-align middle
                box-sizing border-box
                padding 0 15px
                &:nth-child(1)
                  margin-left 0
                span
                  line-height 56px
                  font-size 28px
                  font-family PingFangSC-Light, helvetica, 'Heiti SC'
                  color #333
              .cube-scroll-nav-bar-item_active
                border-bottom 4px solid #b4282d
                span
                  color #b4282d
  .IdentifyContent
    width 100%
    .IC_header
      position relative
      width 100%
      height 450px
      margin-top 20px
      background #fff
      .headerImg
        width 680px
        height 390px
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        margin auto
        img
          display block
          border-radius 15px
          width 100%
          height 100%
    .IC_item1
      width 100%
      height 670px
      background #fff
      padding-top 35px
      margin-top 20px
      div
        width 680px
        height 60px
        margin 0 auto
      .H_1
        line-height 60px
        display flex
        font-size 28px
        img
          display block
          border-radius 50%
          width 60px
          height 60px
          margin-right 20px
      .H_2
        font-size 35px
        color #333
        line-height 50px
        margin-top 20px
      .H_3
        height 390px
        margin-top 60px
        img
          width 100%
          height 100%
          display block
          border-radius 15px
      .H_4
        margin-top 25px
        font-size 28px
        color #999999
        .iconfont
          font-size 32px
          color #999999
          margin-right 10px
          vertical-align middle
    .IC_item2
      width 100%
      height 340px
      background #fff
      padding-top 35px
      margin-top 20px
      display flex
      justify-content space-around
      .U_left
        width 300px
        div
          width 360px
          height 60px
        .U_1
          line-height 60px
          display flex
          font-size 28px
          img
            display block
            border-radius 50%
            width 60px
            height 60px
            margin-right 20px
        .U_2
          line-height 48px
          margin-top 30px
          .span1
            display block
            width 400px
            font-size 35px
            color #333       
          .span2
            display block
            margin-top -40px
            font-size 28px
            color #7f7f7f
        .U_3
          margin-top 120px
          font-size 28px
          color #999999
          .iconfont
            font-size 32px
            color #999999
            margin-right 10px
            vertical-align middle
      .U_right
        width 300px
        height 300px
        img
          display block
          border-radius 10px
          width 280px
          height 300px
          margin-left 20px
</style>
