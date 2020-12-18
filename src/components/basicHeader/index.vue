<template>
  <!-- header区域 -->
  <div class="top-bar">
    <div class="top-bar-logo">
      <img src="../../assets/img/logo.svg" alt="" />
    </div>

    <!-- 主体区域 -->
    <div class="top-bar-main">
      <!-- 控制区域 -->
      <div class="top-bar-control">
        <controls></controls>
      </div>

      <!-- 搜索区域 -->
      <div class="top-bar-search">
        <search-box></search-box>
      </div>

      <!-- 用户信息区域 -->
      <div class="top-bar-user">
        <user-info></user-info>
      </div>
    </div>
  </div>
</template>

<script>
import Controls from './Controls'
import SearchBox from './SearchBox'
import userInfo from './userInfo'
export default {
  components: {
    Controls,
    SearchBox,
    userInfo
  }
}
</script>

<style lang="scss" scoped>
.top-bar {
  height: 100%;
  display: flex;

  .top-bar-logo {
    width: 200px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    img {
      width: 140px;
    }
  }

  .top-bar-main {
    flex: 1;
    display: flex;
    align-items: center;

    .top-bar-control {
      margin-left: 30px;
    }
    .top-bar-user {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      padding-right: 20px;
    }
  }
}
</style>
