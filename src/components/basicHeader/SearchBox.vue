<template>
  <div class="search-box">
    <el-input placeholder="搜索音乐" v-model="keywords" @keyup.enter.native="goSearch" clearable>
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: '' //搜索关键字
    }
  },
  methods: {
    // 搜索并跳转到搜索结果页面
    goSearch() {
      console.log('搜索->', this.keywords)
      this.$router.push({ path: '/search', query: { keywords: this.keywords } })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box {
  margin-left: 20px;

  /deep/.el-input__inner {
    width: 250px;
    height: 32px;
    border: 0;
    border-radius: 16px;
    background-color: #e13e3e;
    color: #fff;
  }
  i {
    color: #f9d8d8;
  }
}

/deep/.el-input__suffix {
  .el-input__suffix-inner {
    border-color: none;
    .el-icon-circle-close:before {
      content: '\e79d' !important;
      font-size: 16px;
    }
  }
}
</style>
