import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from 'views/layouts/BasicLayout'

Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法，防止重复点击相同路径报错
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '',
    name: 'nullPath',
    component: BasicLayout,
    redirect: '/discover'
  },
  {
    path: '/discover',
    name: 'discover',
    component: BasicLayout,
    meta: { title: '发现音乐' },
    children: [
      {
        path: '/discover',
        component: () => import('views/discover/index.vue'),
        name: 'discover-main',
        meta: { title: '发现音乐' }
      }
    ]
  },
  {
    path: '/personal_fm',
    component: BasicLayout,
    children: [
      {
        path: '/personal_fm',
        component: () => import('views/personal_fm/index.vue'),
        name: 'fm',
        meta: {
          title: '私人FM'
        }
      }
    ]
  },
  {
    path: '/mv',
    component: BasicLayout,
    children: [
      {
        path: '/mv',
        component: () => import('views/mv/index.vue'),
        name: 'mv1',
        meta: {
          title: '视频'
        }
      }
    ]
  },
  {
    path: '/event',
    component: BasicLayout,
    children: [
      {
        path: '/event',
        component: () => import('views/event/index.vue'),
        name: 'event',
        meta: {
          title: '动态'
        }
      }
    ]
  },
  {
    path: '/search',
    component: BasicLayout,
    children: [
      {
        path: '/search',
        component: () => import('views/search/index.vue'),
        name: 'search',
        meta: {
          title: '搜索音乐'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
