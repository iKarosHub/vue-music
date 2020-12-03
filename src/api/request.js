import axios from 'axios'

export function request(config) {
  // 1、创建axios实例
  const service = axios.create({
    baseURL: 'http://47.114.35.198:9000',
    // 超时
    timeout: 5000
  })

  // 请求拦截
  service.interceptors.request.use(
    req => {
      return req
    },
    err => {
      console.log('请求失败-->', err)
    }
  )

  // 响应拦截
  service.interceptors.response.use(
    response => {
      let res = {}
      res.data = response.data
      res.status = response.status

      return res
    },
    err => {
      console.log('响应失败-->', err)
    }
  )

  // 发送网络请求
  return service(config)
}
