const config = {
  state: {
    // 展示歌曲播放列表
    showPlayListView: false
  },
  getters: {
    showPlayListView: state => {
      let showPlayListView = state.showPlayListView
      if (!showPlayListView) {
        showPlayListView = JSON.parse(window.sessionStorage.getItem('showPlayListView') || null)
      }
      return showPlayListView
    }
  },
  mutations: {
    setShowPlayListView: (state, showPlayListView) => {
      state.showPlayListView = showPlayListView
      window.sessionStorage.setItem('showPlayListView', JSON.stringify(showPlayListView))
    }
  }
}

export default config
