<template>
    <div slot="content">
      <div class="left-panel">
        <cube-scroll>
          <cube-tab-bar v-model="selectedLabel" :data="tabs" @change="changeHandler"></cube-tab-bar>
        </cube-scroll>
      </div>
      <div class="right-panel">
        <cube-scroll ref="scroll">
          <ul>
            <li v-for="(hero, index) in scrollData" :key="index">
              <img :src="hero.avatar" alt="">
              <span>{{hero.name}}</span>
            </li>
          </ul>
        </cube-scroll>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
  import * as DATAS from '../config/tab-bar'
  const DATA_MAP = {
    '推荐专区': DATAS.ALL_HEROES,
    '夏凉专区': DATAS.MELEE_HEROES,
    '爆品专区': DATAS.REMOTE_HEROES,
    '新品专区': DATAS.SUPPORT_HEROES,
    '居家生活': DATAS.MAGIC_HEROES,
    '服饰鞋包': DATAS.JUNGLE_HEROES,
    '美食酒水': DATAS.TANK_HEROES,
    '个护清洁': DATAS.INVISIBLE_HEROES,
    '母婴亲子': DATAS.CARRY_HEROES,
    '运动旅行': DATAS.BLINK_HEROES,
    '数码家电': DATAS.HIGH_DAMAGE_HEROES,
    '全球特色': DATAS.INVOKE_HEROES,
  }
  const genTabLabels = Object.keys(DATA_MAP).map(label => ({
    label
  }))
  export default {
    data () {
      return {
        selectedLabel: '推荐专区',
        scrollData: [],
        tabs: genTabLabels
      }
    },
    created () {
      this.scrollData = DATA_MAP[this.selectedLabel]
    },
    methods: {
      changeHandler (label) {
        this.scrollData = DATA_MAP[label]
        this.$nextTick(() => {
          // reset better-scroll'postion
          this.$refs.scroll.scrollTo(0, 0)
          // you need to caculate scroll-content height when your dom has changed in nextTick
          this.$refs.scroll.refresh()
        })
      }
    },
    watch: {
      selectedLabel (newV) {
        console.log(newV)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cube-scroll-list-wrapper
    .cube-tab-bar
      flex-wrap: wrap
      width 162px
      height 1500px
      .cube-tab
        width: 100%
        flex-basis: unset
        height: 50px
        line-height: 50px
        font-size: 30px
        color: #333
        border-left 8px solid #fff
        &.cube-tab_active
          border-left 8px solid #AB2B2B
          color #AB2B2B
          font-size: 30px
  .left-panel
    position: absolute
    top: 100px
    left: 0px
    bottom: 0
    width: 180px
    background-color: #fff
  .right-panel
    position: absolute
    top: 100px
    left: 180px
    right: 0
    bottom: 0
    background-color: #fff
    li
      height: 80px
      display: flex
      align-items: center
      background-color: #fff
      img
        width: 102px
        margin: 0 10px 0 20px
        border: 1px solid #ff9f38
        border-radius: 3px
        box-shadow: 0 1px 5px 0 #000
      span
        color: #db8931
</style>