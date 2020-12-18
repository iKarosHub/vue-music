import { request } from './request'

// 推荐相关api
// 获取推荐歌单，limit:获取数量
export function apiGetTuiJianPlayList(limit) {
  return request({
    method: 'get',
    url: `/personalized?limit=${limit}`
  })
}
