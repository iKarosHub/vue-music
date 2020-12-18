<template>
  <div class="remd-ul">
    <a class="remd-li" v-for="item in remdSongsData" :key="item.id" href="#">
      <div class="remd-img">
        <img class="u-img" :src="item.picUrl" alt="" />
        <span class="remd-num"><i class="el-icon-caret-right"></i> {{ item.playCount | countFormat }}</span>
      </div>

      <p class="remd-text">{{ item.name }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    remdSongsData: Array
  }
}
</script>

<style lang="scss" scoped>
.remd-ul {
  width: 100%;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .remd-li {
    width: 137px;
    margin-bottom: 15px;
    .remd-img {
      width: 137px;
      position: relative;
      margin-bottom: 100%;
      .u-img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;

        border-radius: 5px;
      }
      .remd-num {
        position: absolute;
        right: 5px;
        top: 2px;
        z-index: 3;
        color: #fff;
        font-size: 12px;
        i {
          color: #fff;
        }
      }
    }
    .remd-text {
      padding: 6px 2px 0 6px;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 13px;
      line-height: 1.2;
    }
  }
}
</style>
