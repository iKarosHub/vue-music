import { request } from './request'

// 获取首页数据
export function apiGetDiscoverData() {
  return request({
    method: 'get',
    url: '/homepage/block/page'
  })
}
