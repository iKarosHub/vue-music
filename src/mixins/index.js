// api
import { apiSearch } from 'api/search'
import { apiSongUrl } from 'api/playUrl'
import { apiSongDetail } from 'api/songInfo'

export const mixin = {
  methods: {
    // 点击播放音乐，row: 表格行参数（自动添加）
    clickPlay(row) {
      // console.log('我点击了播放row', row)
      // 获取点击歌曲的id，然后播放歌曲
      this.Playsong(row.id)
      // 获取点击的行号
      this.$store.commit('setSongListIndex', row.sort)
    },
    // 搜索歌曲或专辑
    searchSongs() {
      if (!this.$route.query.keywords) {
        return this.$message.error('您输入的内容为空！')
      } else {
        apiSearch(this.$route.query.keywords).then(res => {
          console.log(res.data)
          res = res.data
          if (res.code !== 200) {
            return this.$message.error('搜索失败！')
          }
          if (res.result.songCount === 0) {
            this.$message.info('很抱歉，未能找到与' + this.$route.query.keywords + '相关的任何单曲')
          } else {
            this.$store.commit('setSongList', res.result.songs)
          }
        })
      }
    },
    // 获取音乐播放地址
    getSongUrl(id) {
      apiSongUrl(id).then(res => {
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取音乐地址失败！')
        }
        this.$store.commit('setSongUrl', res.data[0].url)
        // console.log('音乐地址:', res.data[0].url)
      })
    },
    // 获取音乐详细信息
    getSongDetail(id) {
      apiSongDetail(id).then(res => {
        // console.log(res.data)
        res = res.data
        if (res.code !== 200) {
          return this.$message.error('获取歌曲信息失败！')
        }
        // 保存歌曲id
        this.$store.commit('setSongId', res.songs[0].id)
        // 保存歌曲名
        this.$store.commit('setSongTitle', res.songs[0].name)
        // 保存歌手
        this.$store.commit('setArtist', res.songs[0].ar[0].name)
        // 保存歌曲封面
        this.$store.commit('setPicUrl', res.songs[0].al.picUrl)
      })
    },
    // 播放音乐，id: 音乐id
    Playsong(id) {
      // 音乐播放地址
      this.getSongUrl(id)
      // 音乐详细信息
      this.getSongDetail(id)
    }
  }
}
