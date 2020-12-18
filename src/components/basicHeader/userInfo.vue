<template>
  <div class="user-box">
    <!-- 用户头像区域 -->
    <div class="user-img">
      <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" />
    </div>
    <!-- 用户信息区域 -->
    <div class="user-info">
      <el-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <span slot="reference">三年里程</span>
      </el-popover>
    </div>
    <!-- 用户等级区域 -->
    <div class="user-level">
      <img src="@/assets/img/vip.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.el-popper .popper__arrow,
.el-popper .popper__arrow::after {
  border: 0 !important;
}
</style>

<style lang="scss" scope>
.user-box {
  display: flex;
  align-items: center;
  .user-img {
    width: 28px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      border-radius: 14px;
      overflow: hidden;
    }
  }
  .user-info {
    margin: 5px;
    .el-popover__reference {
      cursor: pointer;
      color: #fbd9d9;
    }
  }
  .user-level {
    width: 25px;
    line-height: 10px;
    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }
}
</style>
