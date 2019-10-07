<template>
  <div class="wrapper">
    <Scroll class="content" :data="singnerList">
      <ul>
        <li v-for="(group,group_index) in singnerList" :id="group.title"
            @click="slideScreen(group_index)" @touchstart="slideScreen(group_index)"
            @touchend="slideScreen(group_index)"
            :key="group_index">
          <p class="place-hold">{{group.title}}</p>
          <ul class = "group">
            <li v-for="(item,index) in group.items" :key="index">
              <img :src="item.avatar"/>
              <span>{{item.name}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </Scroll>
    <div class = "fix">
        <p v-for="(item,index) in catalog" :class="[{active:index == currendIndex}]" class="demo" :id = "item" @click="catalogClick(item,index)" :key="index">{{item}}</p>
      </div>
  </div>
</template>
<script>
import {getSingerList} from 'api/singnerList'
import {requestOk} from 'api/config'
import {Singner} from 'common/js/singner'
import Scroll from 'base/scroll/scroll'

const HOST_NAME = '热门'
const HOST_SINGNER_LEN = 10

export default {
  name: 'singer',
  data() {
    return {
      singnerList: [],
      catalog: [],
      currendIndex: 0
    }
  },
  mounted() {
    // 获取所有歌手信息,并将数据进行处理
    getSingerList().then((res) => {
      if (res.code === requestOk) {
        this.buildGroup(res.data.list)
      }
    })
  },
  methods: {
    buildGroup(data) {
      let hot = []
      let list = []
      let map = {}
      data.forEach((val, index) => {
        if (!val.Findex.match(/[a-zA-Z]/)) {
          return true
        }
        let newSingner = new Singner(val.Fsinger_id, val.Fsinger_name, val.Fsinger_mid)
        // 将排名靠前的存放至热门组
        if (index < HOST_SINGNER_LEN) {
          hot.push(newSingner)
        }
        // 判断该排序词是否存在
        if (!map[val.Findex]) {
          list.push({title: val.Findex, items: []})
          map[val.Findex] = list.length - 1
        }
        // 将用户信息添加至对应得排序词分组内
        list[map[val.Findex]].items.push(newSingner)
      })
      // 对list进行排序
      list.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      // 将热门分组放至第一位
      list.unshift({title: HOST_NAME, items: hot})
      this.singnerList = list
    },
    buildCatalog() {
      this.singnerList.forEach((val, index) => {
        this.catalog.push(val.title.substring(0, 1))
      })
      console.log(this.catalog)
    },
    catalogClick(id, index) {
      if (index === 0) {
        id = HOST_NAME
      }
      console.log(document.querySelector('#' + id))
      document.querySelector('#' + id).scrollIntoView(true)
      this.currendIndex = index
    },
    slideScreen(index) {
      console.log('slideScreen')
      this.currendIndex = index
    }
  },
  watch: {
    singnerList() {
      // 监听歌手信息,动态创建目录
      this.buildCatalog()
      console.log(6666666666)
      console.log(this.catalog)
    }
  },
  components: {
    Scroll
  }
}
</script>
<style scoped>
  .wrapper{
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
  }

  .content{
    height: 100%;
    overflow: hidden;
  }

  .place-hold{
    font-size: 14px;
    color: #878787;
    background-color: #333333;
    height: 25px;
    line-height: 25px;
    text-indent: 1em;
  }

  .group{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }

  .group img{
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: auto 20px;
  }

  .group li{
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .fix{
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 70%;
    right: 10px;
    top: 50%;
    transform: translateY(-40%);
    align-items: center;
  }

  .fix p{
    font-size: 14px;
    align-self: center;
  }
  .fix .active{
    color: #dbb02e;
    font-size: 16px;
  }
/* #dbb02e */
/* #7e7e7e */
</style>
