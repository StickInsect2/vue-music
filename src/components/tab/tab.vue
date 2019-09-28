<template>
  <div class="tab">
    <router-link tag="div" class="tabItem" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tabItem" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tabItem" to="/rank">
      <span class="tab-link">排行榜</span>
    </router-link>
    <router-link tag="div" class="tabItem" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'tab'
}
</script>
<style scoped>
.tab {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 18px;
}
.tabItem {
  flex: 1;
}
.tab-link {
  padding: 2px 5px;
}
.active .tab-link {
  color: #ffcd32;
  border-bottom: 2px solid #ffcd32;
}
</style>