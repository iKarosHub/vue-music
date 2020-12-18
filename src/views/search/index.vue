<template>
  <!-- 搜索页面 -->
  <div class="search">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="单曲" name="searchSongs">
        <song-table :songData="songList"></song-table>
      </el-tab-pane>
      <el-tab-pane label="专辑" name="searchSongList">专辑</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mixin } from '@/mixins'
import SongTable from './children/SongTable'
export default {
  mixins: [mixin],
  components: {
    SongTable
  },
  data() {
    return {
      activeName: 'searchSongs'
    }
  },
  computed: {
    ...mapGetters(['songList'])
  },
  mounted() {
    this.searchSongs()
  },
  methods: {
    handleClick(key, event) {
      console.log(key, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  /deep/.el-tabs__nav-wrap::after {
    height: 1px;
  }
  /deep/.el-tabs__item.is-active {
    font-weight: 700;
  }
  /deep/.el-tabs__item {
    font-size: 18px;
  }
  /deep/.el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding-left: 20px;
  }
}
</style>
