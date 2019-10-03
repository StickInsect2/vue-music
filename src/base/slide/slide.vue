/* eslint-disable vue/require-v-for-key */
<!--  -->
<template>
  <div class="slider" ref="slider" >
    <div class="slider-group" ref="sliderGroup" @mouseover="_autoPlayMouseOver" @mouseout="_autoPlayMouseOut" @touchstart="_autoPlayMouseOver" @touchend="_autoPlayMouseOut">
      <slot></slot>
    </div>
    <div class="dots">
      <span v-for="(item,index) in dots" :key="index" class="dot" :class="[{active : currendIndex === index }]" />
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { addClass } from 'common/js/dom'

export default {
  props: {
    /* 是否循环 */
    loop: {
      type: Boolean,
      default: true
    },
    /* 是否自动播放 */
    autoPlay: {
      type: Boolean,
      default: true
    },
    /* 间隔时间 */
    interval: {
      type: Number,
      default: 4000
    }
  },
  data() {
    return {
      currendIndex: 0, // 当前图片的索引值
      childrenNode: [], // 需要进行轮播的子节点
      dots: []// 下方白点
    }
  },

  methods: {
    // 初始化轮播图的宽度
    _initSlideWidth() {
      // 获取所有图片节点
      this.childrenNode = this.$refs.sliderGroup.children
      // 设置轮播图下方的白点
      this.dots = new Array(this.childrenNode.length)
      // 获取轮播图初始长度
      let sliderInitWidth = this.$refs.slider.clientWidth
      for (let child of this.childrenNode) {
        // 给每一个子元素添加class,并且将子元素的长度设为轮播图初始长度
        addClass(child, 'slider-item')
        child.style.width = sliderInitWidth + 'px'
      }
      // 设置轮播图宽度
      if (this.loop) {
        // 循环轮播时,会在两端都多成一个节点
        this.$refs.sliderGroup.style.width = (this.childrenNode.length + 2) * sliderInitWidth + 'px'
      } else {
        this.$refs.sliderGroup.style.width = this.childrenNode.length * sliderInitWidth + 'px'
      }
    },
    // 初始化better-scroll的实例
    _initSlide() {
      this.slider = new BScroll(this.$refs.slider, {
        // 创建BScroll实例，并设置配置项
        scrollX: true,
        scrollY: false,
        moentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400,
        click: true
      })
      // 设置切换图片时触发的函数
      this.slider.on('scrollEnd', () => {
        // 获取当前页面索引值
        let nowIndex = this.slider.getCurrentPage().pageX
        // 如果是循环轮播,会在首尾多生成一个节点,所以循环轮播时需要减一
        this.currendIndex = this.loop ? nowIndex - 1 : nowIndex
      })
    },
    // 播放当前图片
    _play() {
      // 向目标页跳转
      this.timer = setInterval(() => {
      // 如果是循环轮播,因为会触发scrollEnd函数,会多减个一所以要加二,非循环轮播前进一步即可
        this.slider.goToPage(this.loop ? this.currendIndex + 2 : this.currendIndex + 1, 0, 400)
      }, this.interval)
    },
    // 自动轮播时当鼠标移入,移除定时器,
    _autoPlayMouseOver() {
      console.log('鼠标移入')
      if (this.autoPlay && this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    // 自动轮播时当鼠标移入,添加定时器,
    _autoPlayMouseOut() {
      console.log('鼠标移出')
      if (this.autoPlay && !this.timer) {
        this._play()
      }
    }
  },
  mounted() {
    setTimeout(() => { // 浏览器刷新时间为17ms,适当延迟
      this._initSlideWidth()
      this._initSlide()
      if (this.autoPlay) {
        this._play()
      }
    }, 20)
  },
  destroyed() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>
.slider {
  min-height: 1px;
  position: relative;
}

.slider-group {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}
.slider-item {
  float: left;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
}
a {
  display: block;
  width: 100%;
  overflow: hidden;
  text-decoration: none;
}
img {
  display: block;
  width: 100%;
}
.dots {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 5%;
  text-align: center;
  font-size: 0;
}
.dot {
  display: inline-block;
  margin: 0 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ff5000;
}
.active {
  width: 20px;
  border-radius: 5px;
  background-color: #ffffff;
}
</style>