<template>
  <el-table :data="songData" stripe @row-click="clickPlay" :row-class-name="rowClassName" style="cursor: pointer">
    <el-table-column type="index" align="center"></el-table-column>
    <el-table-column label="音乐标题" prop="name" width="280"></el-table-column>
    <el-table-column label="歌手" prop="ar[0].name" width="150"></el-table-column>
    <el-table-column label="专辑" prop="al.name" width="200"></el-table-column>
    <el-table-column label="时长">
      <template v-slot="scope">
        <span>{{ scope.row.dt | timeFormat }} </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mixin } from '@/mixins'
export default {
  props: ['songData'],
  mixins: [mixin],
  methods: {
    // 给数据表格每一行添加行号
    rowClassName({ row, rowIndex }) {
      // console.log(rowIndex)
      row.sort = rowIndex
    }
  }
}
</script>

<style lang="scss" scope>
.el-table {
  /deep/th {
    padding: 5px 0;
  }
  /deep/td {
    padding: 5px 0;
  }
}
</style>
