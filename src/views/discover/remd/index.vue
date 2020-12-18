<template>
  <div>
    <!-- 横幅 -->
    <banner :banners="banners"></banner>

    <!-- 推荐歌单 -->
    <el-row>
      <!-- 标题区域 -->
      <h2 class="remd-title">
        <router-link to="/discover/playlist">推荐歌单<i class="el-icon-arrow-right"></i></router-link>
      </h2>
      <!-- 歌单区域 -->
      <remd-songs :remdSongsData="remdSongsList"></remd-songs>
    </el-row>
  </div>
</template>

<script>
// 组件
import Banner from '../components/Banner'
import RemdSongs from '../components/RemdSongs'
// api
import { apiGetDiscoverData } from 'api/discover'
import { apiGetTuiJianPlayList } from 'api/personalized'
export default {
  components: {
    Banner,
    RemdSongs
  },
  data() {
    return {
      // 横幅数据
      banners: [],
      // 推荐歌单
      remdSongsList: []
    }
  },
  created() {
    this.getDiscoverData()
  },
  methods: {
    // 获取发现音乐首页数据
    getDiscoverData() {
      // 获取首页数据
      apiGetDiscoverData().then(res => {
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取数据失败！')
        }
        // 获取首页横幅数据
        this.banners = res.data.blocks[0].extInfo.banners
      })

      // 获取推荐歌单
      apiGetTuiJianPlayList(10).then(res => {
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取推荐歌单失败')
        }
        this.remdSongsList = res.result
        // console.log(this.remdSongsList)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  width: 100%;
  .remd-title {
    padding: 6px 0;
    margin-bottom: 14px;
    font-size: 20px;
    line-height: 20px;
  }
}
</style>
