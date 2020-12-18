<template>
  <div class="song-box">
    <!-- 歌曲照片 -->
    <div class="song-img">
      <img :src="picUrl" alt="歌曲封面" title="展开音乐详情页" />
    </div>

    <!-- 歌曲信息 -->
    <div class="song-info">
      <div class="song-title">
        <span class="song-name">{{ songTitle }}</span>
        <!-- <button @click="likeSong"><i :class="[isLike ? 'el-icon-plus' : 'el-icon-check']"></i></button> -->
      </div>
      <div class="singer">
        <span>{{ artist }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isLike: false
    }
  },
  computed: {
    ...mapGetters(['picUrl', 'songTitle', 'artist'])
  },
  methods: {
    likeSong() {
      this.isLike = !this.isLike
      console.log('link song')
    }
  }
}
</script>

<style lang="scss" scoped>
.song-box {
  display: flex;
  padding: 12px;
  .song-img {
    width: 50px;
    height: 50px;
    margin-right: 12px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
  .song-info {
    line-height: 25px;
    .song-name {
      margin-right: 12px;
      font-size: 16px;
    }
    .singer {
      font-size: 14px;
    }
  }
}
button {
  width: 24px;
  height: 24px;
  border: 0;
  border-radius: 50%;
  background-color: #d93b3b;
  margin-right: 10px;
  cursor: pointer;
}
</style>
