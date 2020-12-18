<template>
  <el-row class="play-bar">
    <!-- 歌曲信息 -->
    <el-col :span="6">
      <play-info></play-info>
    </el-col>
    <!-- 播放控件 -->
    <el-col :span="18">
      <play-controls></play-controls>
    </el-col>
    <audio
      ref="player"
      :src="songUrl"
      preload="true"
      @canplay="startPlay"
      @ended="ended"
      @timeupdate="timeUpdate"
    ></audio>
  </el-row>
</template>

<script>
import PlayInfo from './playInfo'
import PlayControls from './playControls'
import { mapGetters } from 'vuex'
export default {
  components: {
    PlayInfo,
    PlayControls
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'songUrl',
      'playState',
      'songList',
      'songDuration',
      'curTime',
      'changeTime',
      'songTitle',
      'artist',
      'picUrl',
      'autoNext',
      'lyric',
      'tempList',
      'listIndex',
      'volume'
    ])
  },
  watch: {
    // 监听播放状态
    playState: function() {
      this.togglePlay()
    },
    // 跳转到指定播放时间
    changeTime() {
      this.$refs.player.currentTime = this.changeTime
    },
    // 改变音量
    volume(val) {
      this.$refs.player.volume = val
    }
  },
  methods: {
    // 获取链接后准备播放时，获取缓存中已有的信息
    startPlay() {
      let player = this.$refs.player
      // 保存歌曲时间
      this.$store.commit('setSongDuration', player.duration)
      this.$store.commit('setChangeTime', this.curTime)
      // console.log('curTime:', this.curTime)
      // 如果播放状态为播放，则播放音乐
      if (this.playState) {
        player.play()
      }
    },
    // 播放完成之后触发
    ended() {
      this.$store.commit('setPlayState', false)
      this.$store.commit('setCurTime', 0)
      this.$store.commit('setAutoNext', !this.autoNext)
    },
    // 开始，暂停
    togglePlay() {
      let player = this.$refs.player
      if (this.playState) {
        player.play()
      } else {
        player.pause()
      }
    },
    // 音乐播放时记录音乐的播放位置
    timeUpdate() {
      this.$store.commit('setCurTime', this.$refs.player.currentTime)
    }
  }
}
</script>

<style lang="scss" scoped></style>
