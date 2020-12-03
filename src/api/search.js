import { request } from './request'

export function apiSearch(params) {
  return request({
    method: 'get',
    url: '/cloudsearch',
    params
  })
}
