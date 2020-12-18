<template>
  <el-carousel :interval="4000" type="card" height="197px" :autoplay="false">
    <el-carousel-item v-for="(item, i) in banners" :key="i">
      <img :src="item.pic" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: {
    banners: Array
  }
}
</script>

<style lang="scss" scoped>
.el-carousel {
  .el-carousel__item--card {
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }

  .el-carousel__item--card.is-active {
    width: 540px;
    position: relative;
    transform: translateX(111px) !important;
  }

  /deep/.el-carousel__mask {
    opacity: 0;
  }
  /deep/.el-carousel__indicators--outside button {
    background-color: red;
  }
}
</style>
