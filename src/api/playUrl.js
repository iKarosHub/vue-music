import { request } from './request'

// 获取音乐 url
export function apiSongUrl(id) {
  return request({
    method: 'get',
    url: '/song/url',
    params: {
      id
    }
  })
}

// 获取mv url
export function apiMvUrl(id) {
  return request({
    method: 'get',
    url: '/mv/url',
    params: {
      id
    }
  })
}

// 获取视频 url
export function apiVideoUrl(id) {
  return request({
    method: 'get',
    url: '/video/url',
    params: {
      id
    }
  })
}
