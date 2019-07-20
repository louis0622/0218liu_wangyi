<template>
  <div id="homeContainer">
    <header class="homeHeader">
      <div class="homeUpper">
        <a href="javascript:" class="logo">
          <img src="./images/logo.png" alt="网易严选" />
        </a>
        <div class="homeInput">
          <i class="iconfont icon-sousuo"></i>
          <input
            type="text"
            class="homeSearch"
            style="padding-left:10px;"
            placeholder="搜索商品, 共21716款好物"
            onfocus="this.placeholder=' '"
            onblur="this.placeholder='搜索商品, 共21716款好物'"
          />
        </div>
        <button class="homeLogin">登录</button>
      </div>
      <div class="homeLower">
        <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
        <a href="##" class="hBimg"><i class="iconfont icon-xiangyou"></i></a>
      </div>
    </header>
    <section class="homeSwiper">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/swiper001.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="./images/swiper002.png" />
          </div>
          <div class="swiper-slide">
            <img src="./images/swiper003.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="./images/swiper004.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="./images/swiper005.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="./images/swiper006.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="./images/swiper007.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="./images/swiper008.jpg" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </section>
    <div class="homeMiddle">
      <ul class="homelist">
        <li>
          <img src="./images/icon-yi.png" />
          <span>网易自营品牌</span>
        </li>
        <li>
          <img src="./images/icon-du.png" />
          <span>30天无忧退货</span>
        </li>
        <li>
          <img src="./images/icon-qian.png" />
          <span>48小时快速退款</span>
        </li>
      </ul>
    </div>
    <div class="homeContent">
      <div class="homeshops">
        <ul class="homeContent-ul">
          <li>
            <img src="./images/list-001.png" />
            <a href="##">新品首发</a>
          </li>
          <li>
            <img src="./images/list-002.png" />
            <a href="##">新品首发</a>
          </li>
          <li>
            <img src="./images/list-003.png" />
            <a href="##">新品首发</a>
          </li>
          <li>
            <img src="./images/list-004.png" />
            <a href="##">新品首发</a>
          </li>
          <li>
            <img src="./images/list-005.png" />
            <a href="##">新品首发</a>
          </li>
          <li>
            <img src="./images/list-001.png" />
            <a href="##">新品首发</a>
          </li>
          <li>
            <img src="./images/list-002.png" />
            <a href="##">新品首发</a>
          </li>
          <li>
            <img src="./images/list-003.png" />
            <a href="##">新品首发</a>
          </li>
          <li>
            <img src="./images/list-004.png" />
            <a href="##">新品首发</a>
          </li>
          <li>
            <img src="./images/list-005.png" />
            <a href="##">新品首发</a>
          </li>
        </ul>
      </div>
      <div class="NewPeople">
        <div class="NewHeader">
          <span>— 新人专享礼 —</span>
        </div>
        <div class="NewContent">
          <div class="NewContent-item1">
            <span>新人专享礼包</span>
            <img src="./images/xinren.png" />
          </div>
          <div class="NewContent-item2">
            <div class="NewContent-p1">
              <span class="span-1">福利社</span>
              <span class="span-2">今日特价</span>
              <img src="./images/yifu01.png" />
              <div class="NewContent-p1-Mask">
                <span>¥59.9</span>
                <span>¥299</span>
              </div>
            </div>
            <div class="NewContent-p2">
              <span class="span-3">新人拼团</span>
              <span class="span-4">1元起包邮</span>
              <img src="./images/yifu02.png" />
              <div class="NewContent-p2-Mask">
                <span>¥29.6</span>
                <span>¥188</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shop-exhibition-wrap">
        <div class="shop-exhibition">
          <div class="ex_Header">
            <div>品牌制造商直供</div>
            <span>更多</span>
            <i class="iconfont icon-xiangyou"></i>
          </div>
          <ul class="ex_list">
            <li class="ex_item1">
              <span>海外制造商</span>
              <span>8.8元起</span>
              <img src="./images/list-002.png" />
            </li>
            <li class="ex_item2">
              <span>CK制造商</span>
              <span>29.8元起</span>
              <img src="./images/list-002.png" />
            </li>
            <li class="ex_item3">
              <span>新秀丽制造商</span>
              <span>38.8元起</span>
              <img src="./images/list-002.png" />
            </li>
            <li class="ex_item4">
              <span>Nine West制造商</span>
              <span>56.8元起</span>
              <img src="./images/list-002.png" />
            </li>
          </ul>
        </div>
        <div class="shop-exhibition">
          <div class="ex_Header">
            <div>品牌制造商直供</div>
            <span>更多</span>
            <i class="iconfont icon-xiangyou"></i>
          </div>
          <ul class="ex_list">
            <li class="ex_item1">
              <span>海外制造商</span>
              <span>8.8元起</span>
              <img src="./images/list-002.png" />
            </li>
            <li class="ex_item2">
              <span>CK制造商</span>
              <span>29.8元起</span>
              <img src="./images/list-002.png" />
            </li>
            <li class="ex_item3">
              <span>新秀丽制造商</span>
              <span>38.8元起</span>
              <img src="./images/list-002.png" />
            </li>
            <li class="ex_item4">
              <span>Nine West制造商</span>
              <span>56.8元起</span>
              <img src="./images/list-002.png" />
            </li>
          </ul>
        </div>
        <div class="shop-exhibition">
          <div class="ex_Header">
            <div>品牌制造商直供</div>
            <span>更多</span>
            <i class="iconfont icon-xiangyou"></i>
          </div>
          <ul class="ex_list">
            <li class="ex_item1">
              <span>海外制造商</span>
              <span>8.8元起</span>
              <img src="./images/list-002.png" />
            </li>
            <li class="ex_item2">
              <span>CK制造商</span>
              <span>29.8元起</span>
              <img src="./images/list-002.png" />
            </li>
            <li class="ex_item3">
              <span>新秀丽制造商</span>
              <span>38.8元起</span>
              <img src="./images/list-002.png" />
            </li>
            <li class="ex_item4">
              <span>Nine West制造商</span>
              <span>56.8元起</span>
              <img src="./images/list-002.png" />
            </li>
          </ul>
        </div>
      </div>
      <div class="shop-Scoll-wrap">
        <div class="shop-Scoll-img">
          <a href="##">
            <img src="./images/shiwu-002.jpg" />
          </a>
        </div>
        <div class="shop-Scoll-item">
          <div class="horizontal-container">
            <div class="scroll-wrapper" ref="scroll">
              <div class="scroll-content">
                <div class="scroll-item" v-for="(item, index) in emojis" :key="index">
                  {{item}}
                  <ul>
                    <li class="scroll-items" ref="scroll_1">
                      <div>
                        <img src="./images/betterScoll01.png" />
                      </div>
                      <span class="span_1">男式精梳棉圆领短袖T恤衫</span>
                      <span class="span_2">
                        ¥188
                        <span class="span_2-1">¥52</span>
                      </span>
                      <span class="span_3">特价</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="homeFooter">
        <a href="##" class="goApp">下载App</a>
        <a href="##" class="goComputer">电脑版</a>
        <p>
          <span>网易公司版权所有 © 1997-2019</span>
          <br />
          <span>食品经营许可证：JY13301080111719</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import BScroll from "@better-scroll/core";
export default {
  data() {
    name: "Home";
    return {
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
      ],
      //betterScoll区域
      emojis: [
        "8色可选",
        "9色可选",
        "10色可选",
        "5色可选",
        "2色可选",
        "10色可选",
        "5色可选",
        "2色可选"
      ]
    };
  },
  //betterScoll自定义函数
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    changeHandler(cur) {
      this.current = cur;
    },
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        probeType: 3 // listening scroll hook
      });
      this._registerHooks(["scroll", "scrollEnd"], pos => {
        console.log("done");
      });
    },
    _registerHooks(hookNames, handler) {
      hookNames.forEach(name => {
        this.bs.on(name, handler);
      });
    }
  },
  mounted() {
    //轮播图区域
    let mySwiper = new Swiper(".swiper-container", {
      //direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: true, //自动
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
    //betterScoll区域
    this.init();
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
#homeContainer
  width 100%
  height 100%
  background #fff
  .homeHeader
    width 100%
    height 150px
    z-index 999
    position fixed
    top 0
    background #fff
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
          text-indent 70px
          color #666
          font-size 28px
        .iconfont
          position absolute
          left 45px
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
    .homeLower
      display flex
      justify-content space-between
      font-size 28px
      width 100%
      height 60px
      .hBimg
        height 60px
        display inline-block
        text-align center
        line-height 60px
      .cube-scroll-nav-bar_horizontal
        padding-left 30px
        height 56px
        width 592px
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
  .homeSwiper
    margin-top 150px
    .swiper-container
      width 100%
      height 350px
      .swiper-wrapper
        .swiper-slide
          img
            width 100%
            height 100%
      .swiper-pagination
        .swiper-pagination-bullet
          width 40px
          height 4px
          background rgba(255, 255, 255, 0.8)
        .swiper-pagination-bullet-active
          background #fff
  .homeMiddle
    width 100%
    height 72px
    .homelist
      width 100%
      height 72px
      box-sizing border-box
      display flex
      flex-flow row nowrap
      -webkit-box-align center
      align-items center
      padding 0 30px
      li
        width 220px
        height 36px
        margin 6px
        img
          width 35px
          height 32px
          vertical-align middle
          margin-right 5px
        span
          font-size 25px
          vertical-align middle
  .homeContent
    width 100%
    height 100%
    background #eee
    .homeshops
      width 100%
      height 373px
      background #ffffff
      .homeContent-ul
        background #fff
        width 100%
        height 342px
        li
          position relative
          width 110px
          height 110px
          background #F4F4F4
          float left
          margin 30px 20px
          border-radius 35px
          img
            width 100%
            height 100%
          a
            font-size 16px
            color #000
            position absolute
            bottom -38px
            left 8px
    .NewPeople
      margin-top 20px
      width 100%
      height 560px
      background #fff
      .NewHeader
        width 100%
        height 90px
        span
          display block
          height 90px
          font-size 32px
          text-align center
          line-height 90px
      .NewContent
        width 100%
        height 440px
        display flex
        .NewContent-item1
          position relative
          width 350px
          height 440px
          background #F9E9CF
          margin-left 30px
          margin-right 6px
          span
            position absolute
            left 30px
            top 50px
            width 100%
            height 78px
            color #333
            font-size 32px
          img
            display block
            width 260px
            height 260px
            margin 120px auto
        .NewContent-item2
          width 350px
          height 434px
          .NewContent-p1
            position relative
            width 330px
            height 217px
            background #FBE2D3
            display flex
            flex-direction row-reverse
            align-items center
            img
              width 200px
              height 200px
            .span-1
              position absolute
              left 30px
              top 35px
              font-size 32px
              color #333
            .span-2
              position absolute
              left 30px
              top 80px
              font-size 24px
              color #7f7f7f
            .NewContent-p1-Mask
              position absolute
              top 15px
              right 30px
              width 80px
              height 80px
              background rgba(255, 144, 17, 0.7)
              border-radius 50%
              text-align center
              line-height 55px
              span
                height 30px
                display block
                color #ffffff
                font-size 16px
                &:nth-child(2)
                  text-decoration line-through
          .NewContent-p2
            position relative
            background #FFECC2
            margin-top 6px
            width 330px
            height 217px
            display flex
            flex-direction row-reverse
            align-items center
            img
              width 200px
              height 200px
            .span-3
              position absolute
              left 30px
              top 35px
              font-size 32px
            .span-4
              position absolute
              left 30px
              top 80px
              width 130px
              height 38px
              border-radius 5px
              text-align center
              line-height 38px
              font-size 12px
              color #fff
              background #CBB693
            .NewContent-p2-Mask
              position absolute
              top 15px
              right 30px
              width 80px
              height 80px
              background rgba(255, 144, 17, 0.7)
              border-radius 50%
              text-align center
              line-height 55px
              span
                height 30px
                display block
                color #ffffff
                font-size 16px
                &:nth-child(2)
                  text-decoration line-through
    .shop-exhibition-wrap
      margin-top 20px
      width 100%
      height 100%
      .shop-exhibition
        margin-top 20px
        width 100%
        height 645px
        background #fff
        .ex_Header
          position relative
          width 100%
          height 90px
          div
            width 250px
            height 90px
            font-size 32px
            float left
            margin-left 30px
            line-height 90px
            vertical-align middle
          span
            width 120px
            float right
            height 90px
            font-size 28px
            line-height 90px
            display block
          .icon-xiangyou
            position absolute
            right 20px
            top 15px
            font-size 55px
            color #A6A6A6
        .ex_list
          width 100%
          height 560px
          li
            position relative
            width 350px
            height 260px
            span
              position absolute
              top 25px
              left 5px
              width 100%
              text-align center
              line-height 42px
              height 42px
              font-size 27px
              z-index 9
              color #333
              &:nth-child(2)
                position absolute
                top 58px
                left 5px
                font-size 20px
                color #7f7f7f
            img
              width 250px
              height 200px
              position absolute
              bottom 0
              left 40px
          .ex_item1
            float left
            background #F6FBFB
            margin-left 30px
          .ex_item2
            float right
            width 330px
            background #F5FAFA
            margin-right 32px
          .ex_item3
            float left
            clear left
            background #F6F7F9
            margin-left 30px
            margin-top 5px
          .ex_item4
            float right
            width 330px
            background #F1F7FA
            margin-right 32px
            margin-top 5px
    .shop-Scoll-wrap
      margin-top 20px
      width 100%
      height 850px
      background #fff
      margin-bottom 20px
      .shop-Scoll-img
        width 100%
        height 400px
        a
          img
            width 750px
            height 400px
      .shop-Scoll-item
        width 100%
        height 400px
        .horizontal-container
          .scroll-wrapper
            width 100%
            height 400px
            margin 20px auto
            white-space nowrap
            overflow hidden
            .scroll-content
              display inline-block
            .scroll-item
              height 50px
              line-height 50px
              font-size 24px
              display inline-block
              text-align center
              padding 0 10px
              .scroll-items
                display flex
                flex-direction column
                line-height 40px
                width 200px
                height 330px
                margin-left 20px
                div
                  background #F4F4F4
                  img
                    width 200px
                    height 180px
                span
                  text-align left
                .span_1
                  font-size 24px
                  white-space normal
                  margin-top 15px
                .span_2
                  font-size 24px
                  color #B4282D
                  .span_2-1
                    margin-left 10px
                    text-decoration line-through
                    color #8B8585
                .span_3
                  font-size 24px
    .homeFooter
      position relative
      width 100%
      height 350px
      background #414141
      .goApp
        display inline-block
        width 150px
        height 60px
        font-size 26px
        color #fff
        text-align center
        line-height 60px
        margin-left 200px
        margin-top 50px
        border 1px solid #6D6D6D
      .goComputer
        display inline-block
        width 150px
        height 60px
        font-size 26px
        color #fff
        text-align center
        line-height 60px
        margin-left 50px
        margin-top 50px
        border 0.5px solid #6D6D6D
      p
        position absolute
        top 150px
        left 175px
        line-height 32px
        font-size 25px
        text-align center
        color #999
</style>
