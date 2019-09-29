<template>
    <div class="loading">
        <img width="50" height="50" src = "./loading.gif">
        <p class="desc">{{title}}</p>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>
<style scoped>
.loading{
    width: 100%;
    text-align: center;
}
.desc{
    line-height: 20px;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
}
</style>