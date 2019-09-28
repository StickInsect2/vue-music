<template>
  <div>hello</div>
</template>

<script>

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
</script>

<style>
</style>