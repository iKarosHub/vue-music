<template>
  <el-drawer
    title="播放列表"
    :visible="showPlayListView"
    direction="rtl"
    size="420px"
    :modal="false"
    :show-close="false"
    @close="closePlayList"
  >
    <template v-slot:title>
      <h1 style="text-align: center">播放列表</h1>
    </template>
    <el-table :data="songList" @row-click="clickPlay" :row-class-name="tableRowClassName" stripe style="cursor: pointer">
      <el-table-column prop="name" label="音乐标题" width="200"></el-table-column>
      <el-table-column prop="ar[0].name" label="歌手" width="100"></el-table-column>
      <el-table-column label="时间" width="100" align="center">
        <template v-slot="scope">
          <span style="color: #c7c8c7">{{ scope.row.dt | timeFormat }} </span>
        </template>
      </el-table-column>
    </el-table>
  </el-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
import { mixin } from '@/mixins'
export default {
  mixins: [mixin],
  computed: {
    ...mapGetters(['showPlayListView', 'songList', 'songListIndex'])
  },
  methods: {
    closePlayList() {
      this.$store.commit('setShowPlayListView', false)
      console.log('close play list')
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === this.songListIndex) {
        // console.log(this.songListIndex)
        return 'success-row'
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
.el-table {
  .cell {
    font-size: 12px;
  }

  .success-row {
    background: #fff;
    .cell {
      color: red;
    }
  }
}
</style>
