<template>
  <div class="basic-aside">
    <el-menu default-active="/discover" router>
      <el-menu-item-group>
        <el-menu-item index="/discover">
          <span slot="title">发现音乐</span>
        </el-menu-item>
        <el-menu-item index="/personal_fm">
          <span slot="title">私人FM</span>
        </el-menu-item>
        <el-menu-item index="/mv">
          <span slot="title">视频</span>
        </el-menu-item>
        <el-menu-item index="/event">
          <span slot="title">动态</span>
        </el-menu-item>
      </el-menu-item-group>

      <!-- 我的音乐区域 -->
      <el-menu-item-group>
        <template slot="title">我的音乐</template>
        <el-menu-item index="5">
          <i class="el-icon-ice-cream-round"></i>
          <span>本地音乐</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-lollipop"></i>
          <span>下载管理</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-pear"></i>
          <span>音乐云盘</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-cold-drink"></i>
          <span>我的电台</span>
        </el-menu-item>
        <el-menu-item index="9">
          <i class="el-icon-cherry"></i>
          <span>我的收藏</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.basic-aside {
  height: 100%;
  padding: 0 12px 12px 12px;

  .el-menu {
    border: 0;

    /deep/.el-menu-item-group__title {
      padding-left: 12px !important;
      // background-color: #ccc;
    }
    .el-menu-item {
      height: 35px;
      font-size: 15px;
      line-height: 35px;
      padding: 0 0 0 10px !important;
      margin-bottom: 2px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      &:hover {
        background-color: #f6f6f7 !important;
      }
      &.is-active {
        font-weight: 600;
        background-color: #f6f6f7;
      }
    }
  }
}
</style>
