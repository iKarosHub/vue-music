<template>
  <div class="home">
    find
  </div>
</template>

<script>
import { apiSearch } from 'api/search'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      swiperOptions: {},
      keywords: '海阔天空'
    }
  },
  methods: {
    search() {
      apiSearch({ keywords: this.keywords }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  color: $textColor;
  .mint-swipe-item {
    background-color: #ccc;
  }
}
</style>
