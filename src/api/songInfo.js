import { request } from './request'

// 歌曲详情api

// 获取歌曲详情
export function apiSongDetail(ids) {
  return request({
    method: 'get',
    url: '/song/detail',
    params: {
      ids
    }
  })
}
