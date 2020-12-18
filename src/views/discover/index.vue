<template>
  <section class="discover-layout">
    <header>
      <el-menu mode="horizontal" @select="handleSelect" default-active="remd">
        <el-menu-item v-for="item in discoverNav" :key="item.component" :index="item.component">{{
          item.title
        }}</el-menu-item>
      </el-menu>
    </header>
    <section class="discover-box">
      <component :is="currentView"></component>
    </section>
  </section>
</template>

<script>
import remd from 'views/discover/remd'
import album from 'views/discover/album'
import artist from 'views/discover/album'
import playList from 'views/discover/playlist'
import topList from 'views/discover/toplist'
import djRadio from 'views/discover/djradio'
export default {
  components: {
    remd,
    album,
    artist,
    playList,
    topList,
    djRadio
  },
  data() {
    return {
      // 发现音乐导航栏
      discoverNav: [
        {
          title: '个性推荐',
          component: 'remd'
        },
        {
          title: '歌单',
          component: 'playList'
        },
        {
          title: '排行榜',
          component: 'topList'
        },
        {
          title: '歌手',
          component: 'artist'
        },
        {
          title: '主播电台',
          component: 'djRadio'
        },
        {
          title: '最新音乐',
          component: 'album'
        }
      ],
      // 导航栏显示页
      currentView: 'remd'
    }
  },
  methods: {
    handleSelect(key) {
      // console.log(key)
      this.currentView = key
    }
  }
}
</script>

<style lang="scss" scoped>
.discover-layout {
  header {
    position: fixed;
    top: 60px;
    left: 200px;
    z-index: 3;

    width: 822px;
    height: 60px;
  }
  .discover-box {
    padding: 70px 20px 70px 20px;
  }
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 3px solid red;
  font-size: 20px;
  font-weight: 700;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
</style>
