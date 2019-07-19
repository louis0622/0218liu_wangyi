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
        <div class="homeNavBar">
          <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
        </div>
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
    <div class="">   
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    name: "Home";
    return {
//cube-UI
      current: '快车',
      labels: [
        '推荐',
        '居家生活',
        '服饰鞋包',
        '美食酒水',
        '个护清洁',
        '母婴亲子',
        '运动旅行',
        '数码家电',
        '全球特色'
      ]
    };
  },
  methods:{
    changeHandler(cur) {
      this.current = cur
    }
  },
  mounted() {
    let mySwiper = new Swiper(".swiper-container", {
      //direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: true, //自动
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#homeContainer
  width 100%
  height 100%
  background #fff
  .homeHeader
    width 100%
    height 150px
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
      width 100%
      height 62px
      .homeNavBar
        width 100%
        height 62px
        .cube-scroll-nav-bar
          border-bottom 5px solid #b4282d
          z-index 9
  .homeSwiper
    .swiper-container
      width 100%
      height 350px
      .swiper-wrapper
        .swiper-slide
          img
            width 100%
            height 100%
      .swiper-pagination-bullet
        width 10px
</style>
