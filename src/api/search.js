import { request } from './request'

// 搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户
// keywords : 关键词
// 可选参数 : limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
export function apiSearch(keywords, limit = 30, offset = 0, type = 1) {
  return request({
    method: 'get',
    url: '/cloudsearch',
    params: {
      keywords,
      limit,
      offset,
      type
    }
  })
}

// 热搜列表(简略)
// 说明 : 调用此接口,可获取热门搜索列表
export function apiSearchHot() {
  return request({
    method: 'get',
    url: '/search/hot'
  })
}

// 热搜列表(详细)
// 说明 : 调用此接口,可获取热门搜索列表
export function apiSearchHotDetail() {
  return request({
    method: 'get',
    url: '/search/hot/detail'
  })
}

// 搜索建议
// 说明 : 调用此接口 , 传入搜索关键词可获得搜索建议 , 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息
// 可选参数 : type : 如果传 'mobile' 则返回移动端数据
export function apiSearchSuggest(keywords) {
  return request({
    method: 'get',
    url: '/search/suggest',
    params: {
      keywords
    }
  })
}

// 搜索多重匹配
// 说明 : 调用此接口 , 传入搜索关键词可获得搜索结果
export function apiSearchMultimatch(keywords) {
  return request({
    method: 'get',
    url: '/search/multimatch',
    params: {
      keywords
    }
  })
}
