const song = {
  state: {
    songList: [], //当前歌曲列表
    songListIndex: null, //当前歌曲在歌单中的位置
    songUrl: '', //歌曲地址
    songId: '', //歌曲id
    playState: false, //播放状态：播放或暂停
    songDuration: 0, //音乐总时长
    curTime: 0, //当前音乐播放位置
    changeTime: 0, //指定播放时刻
    songTitle: '', //歌名
    artist: '', // 歌手名
    picUrl: '', //歌曲图片
    autoNext: true, //自动触发播放下一首
    lyric: [], //未处理的歌词数据
    tempList: {}, //单个歌单信息
    volume: 50 //音量
  },
  getters: {
    songList: state => {
      let songList = state.songList
      if (!songList.length) {
        // 加入sessionStorage更安全一些
        songList = JSON.parse(window.sessionStorage.getItem('songList') || null)
      }
      return songList
    },
    songUrl: state => {
      let songUrl = state.songUrl
      if (!songUrl) {
        songUrl = JSON.parse(window.sessionStorage.getItem('songUrl') || null)
      }
      return songUrl
    },
    songId: state => {
      let songId = state.songId
      if (!songId) {
        songId = JSON.parse(window.sessionStorage.getItem('songId') || null)
      }
      return songId
    },
    playState: state => {
      let playState = state.playState
      if (!playState) {
        playState = JSON.parse(window.sessionStorage.getItem('playState') || null)
      }
      return playState
    },
    songDuration: state => {
      let songDuration = state.songDuration
      if (!songDuration) {
        songDuration = JSON.parse(window.sessionStorage.getItem('songDuration') || null)
      }
      return songDuration
    },
    curTime: state => {
      let curTime = state.curTime
      if (!curTime) {
        curTime = JSON.parse(window.sessionStorage.getItem('curTime') || null)
      }
      return curTime
    },
    changeTime: state => {
      let changeTime = state.changeTime
      if (!changeTime) {
        changeTime = JSON.parse(window.sessionStorage.getItem('changeTime') || null)
      }
      return changeTime
    },
    songTitle: state => {
      let songTitle = state.songTitle
      if (!songTitle) {
        songTitle = JSON.parse(window.sessionStorage.getItem('songTitle') || null)
      }
      return songTitle
    },
    artist: state => {
      let artist = state.artist
      if (!artist) {
        artist = JSON.parse(window.sessionStorage.getItem('artist') || null)
      }
      return artist
    },
    picUrl: state => {
      let picUrl = state.picUrl
      if (!picUrl) {
        picUrl = JSON.parse(window.sessionStorage.getItem('picUrl') || null)
      }
      return picUrl
    },
    autoNext: state => {
      let autoNext = state.autoNext
      if (!autoNext) {
        autoNext = JSON.parse(window.sessionStorage.getItem('autoNext') || null)
      }
      return autoNext
    },
    lyric: state => {
      let lyric = state.lyric
      if (!lyric) {
        lyric = JSON.parse(window.sessionStorage.getItem('lyric') || null)
      }
      return lyric
    },
    tempList: state => {
      let tempList = state.tempList
      if (!tempList) {
        tempList = JSON.parse(window.sessionStorage.getItem('tempList') || null)
      }
      return tempList
    },
    songListIndex: state => {
      let songListIndex = state.songListIndex
      if (!songListIndex) {
        songListIndex = JSON.parse(window.sessionStorage.getItem('songListIndex') || null)
      }
      return songListIndex
    },
    volume: state => {
      let volume = state.volume
      if (!volume) {
        volume = JSON.parse(window.sessionStorage.getItem('volume') || null)
      }
      return volume
    }
  },
  mutations: {
    setSongList: (state, songList) => {
      state.songList = songList
      // 加入sessionStorage更安全一些，双重保险
      window.sessionStorage.setItem('songList', JSON.stringify(songList))
    },
    setSongUrl: (state, songUrl) => {
      state.songUrl = songUrl
      window.sessionStorage.setItem('songUrl', JSON.stringify(songUrl))
    },
    setSongId: (state, songId) => {
      state.songId = songId
      window.sessionStorage.setItem('songId', JSON.stringify(songId))
    },
    setPlayState: (state, playState) => {
      state.playState = playState
      window.sessionStorage.setItem('playState', JSON.stringify(playState))
    },
    setSongDuration: (state, songDuration) => {
      state.songDuration = songDuration
      window.sessionStorage.setItem('songDuration', JSON.stringify(songDuration))
    },
    setCurTime: (state, curTime) => {
      state.curTime = curTime
      window.sessionStorage.setItem('curTime', JSON.stringify(curTime))
    },
    setChangeTime: (state, changeTime) => {
      state.changeTime = changeTime
      window.sessionStorage.setItem('changeTime', JSON.stringify(changeTime))
    },
    setSongTitle: (state, songTitle) => {
      state.songTitle = songTitle
      window.sessionStorage.setItem('songTitle', JSON.stringify(songTitle))
    },
    setArtist: (state, artist) => {
      state.artist = artist
      window.sessionStorage.setItem('artist', JSON.stringify(artist))
    },
    setPicUrl: (state, picUrl) => {
      state.picUrl = picUrl
      window.sessionStorage.setItem('picUrl', JSON.stringify(picUrl))
    },
    setAutoNext: (state, autoNext) => {
      state.autoNext = autoNext
      window.sessionStorage.setItem('autoNext', JSON.stringify(autoNext))
    },
    setLyric: (state, lyric) => {
      state.lyric = lyric
      window.sessionStorage.setItem('lyric', JSON.stringify(lyric))
    },
    setTempList: (state, tempList) => {
      state.tempList = tempList
      window.sessionStorage.setItem('tempList', JSON.stringify(tempList))
    },
    setSongListIndex: (state, songListIndex) => {
      state.songListIndex = songListIndex
      window.sessionStorage.setItem('songListIndex', JSON.stringify(songListIndex))
    },
    setVolume: (state, volume) => {
      state.volume = volume
      window.sessionStorage.setItem('volume', JSON.stringify(volume))
    }
  }
}

export default song
