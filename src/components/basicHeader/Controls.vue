<template>
  <div>
    <button @click="back"><i class="el-icon-arrow-left"></i></button>
    <button @click="forward"><i class="el-icon-arrow-right"></i></button>
    <button @click="refresh"><i class="el-icon-refresh"></i></button>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
      console.log('back')
    },
    forward() {
      this.$router.go(1)
      console.log('forward')
    },
    refresh() {
      console.log('refresh')
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  width: 24px;
  height: 24px;
  border: 0;
  border-radius: 50%;
  background-color: #d93b3b;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: #d84b4b;
  }
  i {
    color: #f6cece;
  }
}
</style>
