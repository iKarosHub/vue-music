<template>
  <el-container class="win-box">
    <el-header>
      <!-- 头部区域 -->
      <basic-header></basic-header>
    </el-header>

    <el-container>
      <!-- 侧边栏区域 -->
      <el-aside width="200px">
        <basic-aside></basic-aside>
      </el-aside>
      <el-container>
        <el-main>
          <el-scrollbar style="height: 100%">
            <!-- 嵌套子路由 -->
            <keep-alive>
              <router-view :key="$route.fullPath"> </router-view>
            </keep-alive>
          </el-scrollbar>
        </el-main>
        <!-- 播放列表弹出框 -->
        <play-list></play-list>
      </el-container>
    </el-container>

    <!-- 底部区域 -->
    <el-footer>
      <play-bar></play-bar>
    </el-footer>
  </el-container>
</template>

<script>
import BasicHeader from 'components/basicHeader'
import BasicAside from 'components/basicAside'
import PlayBar from 'components/playBar'
import PlayList from 'components/playBar/playList'
export default {
  components: {
    BasicHeader,
    BasicAside,
    PlayBar,
    PlayList
  }
}
</script>

<style lang="scss" scoped>
.win-box {
  width: 1022px;
  height: 670px;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.1);

  .el-header {
    height: 60px;
    line-height: 60px;
    background-color: $themeColor;
    padding: 0;
    margin: 0;

    position: relative;
  }
  .el-footer {
    height: 72px !important;
    background-color: $gray;
    border-top: 1px solid $ccc;
    padding: 0;
    margin: 0;

    z-index: 99;
  }

  .el-aside {
    background-color: $white;
    border-right: 1px solid $ccc;
    padding: 0;
    margin: 0;

    position: relative;
  }

  .el-main {
    background-color: $white;
    margin: 0;
    padding: 0 0 70px 0;

    position: absolute;
    left: 200px;
    right: 0;
    top: 60px;
    bottom: 0;
  }
  /deep/.el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
/deep/.el-drawer__wrapper {
  top: 60px !important;
  bottom: 74px;
}
/deep/.el-drawer.rtl {
  overflow: scroll;
}

/deep/.el-drawer__container ::-webkit-scrollbar {
  display: none;
}
</style>
