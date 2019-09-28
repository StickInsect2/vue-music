<template>
  <div>搜索</div>
</template>
<script>
<<<<<<< HEAD:src/components/search/search.vue
export default {
  name: 'search'
}
=======

  import { getRecommend } from 'api/recommend'

  export default {
    created() {
      console.log(123);
      this._getRecommend();
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          console.log(res);
        });
      }
    }
  }
>>>>>>> jsonp封装完成:src/components/hello.vue
</script>
<style scoped>
</style>