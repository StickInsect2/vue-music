<template>
  <div class="recommend">
    <Scroll class="recommend-content" :data="discLists" ref="scroll">
      <div>
      <div v-if="discLists.length">
        <slide  class="slider-wrapper">
          <div v-for="(item,index) in recomends" :key="index">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" alt />
            </a>
          </div>
        </slide>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li class="item" v-for="(item,index) in discLists" :key="index">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl" />
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      <div class="loading-conatiner" v-show="!discLists.length">
        <Loading></Loading>
      </div>
      </div>
    </Scroll>
  </div>
</template>
<script>
import {getRecommend, getDiscList} from 'api/recommend'
import {requestOk} from 'api/config'
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import Slide from 'base/slide/slide'

export default {
  name: 'recommend',
  data() {
    return {
      discLists: [],
      recomends: []
    }
  },
  components: {
    Scroll,
    Loading,
    Slide
  },
  created() {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === requestOk) {
          this.recomends = res.data.slider
        }
      })
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code === requestOk) {
          this.discLists = res.data.list
        }
      })
    }
  }
}
</script>
<style scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
.recommend-content {
  height: 100%;
  overflow: hidden;
}
.slider-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  border: 1px solid red;
}

.list-title {
  height: 65px;
  line-height: 65px;
  text-align: center;
  font-size: 14px;
  color: #ffcd32;
}

.item {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 0 20px 20px 20px;
}

.icon {
  flex: 0 0 60px;
  width: 60px;
  padding-right: 20px;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  line-height: 20px;
  overflow: hidden;
  font-size: 14px;
}

.name {
  margin-bottom: 10px;
  color: #fff;
}
.desc {
  color: rgba(255, 255, 255, 0.3);
}
.loading-conatiner {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
</style>
