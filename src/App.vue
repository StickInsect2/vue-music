<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Tab from 'components/tab/tab'
import MHeader from 'components/m-header/m-header'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style>
#app {
}
</style>
