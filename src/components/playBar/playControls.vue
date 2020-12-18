<template>
  <div class="controls-box">
    <!-- 播放控件 -->
    <div class="l-control">
      <div class="play-control">
        <button @click="prev">上一首</button>
        <button @click="togglePlay"><i :class="[playState ? 'el-icon-video-pause' : 'el-icon-video-play']"></i></button>
        <button @click="next">下一首</button>
      </div>
      <div class="time-control">
        <div class="time-text">{{ nowTime }}</div>
        <el-slider class="time-slider" v-model="curLength" :show-tooltip="false" @change="changeTime"></el-slider>
        <div class="time-text">{{ songTime }}</div>
      </div>
    </div>
    <!-- 音量、列表控件 -->
    <div class="r-control">
      <div class="volume">
        <i class="el-icon-close-notification" v-if="volume === 0"></i>
        <i class="el-icon-bell" v-else></i>
        <el-slider v-model="volume" style="width: 100px" :show-tooltip="false"></el-slider>
      </div>
      <i class="el-icon-download"></i>
      <!-- 歌曲播放列表按钮 -->
      <i class="el-icon-s-unfold" @click="showPLView"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mixin } from '@/mixins'
export default {
  mixins: [mixin],
  data() {
    return {
      nowTime: '00:00', //当前播放进度时间
      songTime: '00:00', //当前歌曲总时间
      curLength: 0, //当前播放位置(0-100)
      volume: 50 // 当前音量,默认一半(0-100)
    }
  },
  computed: {
    ...mapGetters([
      'songId', //歌曲id
      'songUrl', //歌曲url
      'playState', //播放状态
      'curTime', //当前音乐播放位置
      'songDuration', //音乐时长
      'showPlayListView',
      'songList', //音乐播放列表
      'songListIndex', //音乐播放下标
      'autoNext'
    ])
  },
  watch: {
    curTime() {
      this.nowTime = this.fotmatSeconds(this.curTime)
      this.songTime = this.fotmatSeconds(this.songDuration)
      // 根据播放时间改变播放控制条位置
      this.curLength = (this.curTime / this.songDuration) * 100
    },
    // 音量变化
    volume() {
      this.$store.commit('setVolume', this.volume / 100)
    },
    // 自动播放下一首
    autoNext() {
      this.next()
    }
  },
  methods: {
    // 控制音乐播放、暂停
    togglePlay() {
      if (this.playState) {
        this.$store.commit('setPlayState', false)
      } else {
        this.$store.commit('setPlayState', true)
      }
    },
    // 解析时间
    fotmatSeconds(val) {
      let theTime = parseInt(val)
      let result = '' //返回值
      let hour = parseInt(theTime / 3600) //小时
      let minute = parseInt((theTime / 60) % 60) //分钟
      let second = parseInt(theTime % 60)
      if (hour > 0) {
        if (hour < 10) {
          result = '0' + hour + ':'
        }
      }
      // 分
      if (minute > 0) {
        if (minute < 10) {
          result += '0' + minute + ':'
        } else {
          result += minute + ':'
        }
      } else {
        result += '00:'
      }
      // 秒
      if (second > 0) {
        if (second < 10) {
          result += '0' + second
        } else {
          result += second
        }
      } else {
        result += '00'
      }
      return result
    },
    // 手动改变播放条时间
    changeTime(val) {
      let newCurTime = parseInt(val * 0.01 * this.songDuration)
      this.$store.commit('setChangeTime', newCurTime)
      // console.log('val', val)
      // console.log('newCurTime', newCurTime)
    },
    // 展示歌曲播放列表
    showPLView() {
      this.$store.commit('setShowPlayListView', !this.showPlayListView)
      console.log('showPLView: ', this.showPlayListView)
    },
    // 上一首
    prev() {
      // 当前处于不可能状态或者只有一首音乐的时候不执行
      if (this.songListIndex != -1 && this.songList.length > 1) {
        // 如果不是第一首音乐
        if (this.songListIndex > 0) {
          // 直接返回上一首
          this.$store.commit('setSongListIndex', this.songListIndex - 1)
        } else {
          //否则是第一首
          // 切换到倒数第一首
          this.$store.commit('setSongListIndex', this.songList.length - 1)
        }
        // 因为时间数据保存到缓存中，所以最后提交播放即可
        this.Playsong(this.songList[this.songListIndex].id)
      }
    },
    // 下一首
    next() {
      // 当前处于不可能状态或者只有一首音乐的时候不执行
      if (this.songListIndex != -1 && this.songList.length > 1) {
        // 如果不是最后一首音乐
        if (this.songListIndex < this.songList.length - 1) {
          // 直接返回下一首
          this.$store.commit('setSongListIndex', this.songListIndex + 1)
        } else {
          // 否则是最后一首
          // 切换到第一首
          this.$store.commit('setSongListIndex', 0)
        }
        this.Playsong(this.songList[this.songListIndex].id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.controls-box {
  display: flex;
  .l-control {
    width: 500px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .play-control {
      width: 200px;
      margin: 0px auto;
    }
    .time-control {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #acacae;
      .time-text {
        padding: 5px;
      }
      .time-slider {
        width: 390px;
      }
    }
  }
  .r-control {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .volume {
      width: 130px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    i {
      font-size: 24px;
    }
  }
  /deep/.el-slider__runway {
    height: 4px;
    .el-slider__button-wrapper {
      height: auto;
      bottom: -15px;
    }
  }
  /deep/.el-slider__bar {
    height: 4px;
    background-color: #ff4e4e;
  }
  /deep/.el-slider__button {
    width: 10px;
    height: 10px;
    border: none;
    background-color: #ff4e4e;
  }
}
</style>
