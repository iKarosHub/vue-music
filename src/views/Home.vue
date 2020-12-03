<template>
  <div class="home">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <input v-model="keywords" />
    <mt-button @click="search">搜索</mt-button>
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
