import Vue from 'vue'
import Router from 'vue-router'

// 首页
import Index from '@/views/Index'
import Main from '@/views/Layout/Main'
// 注册
import Register from '@/components/Register'
// 主页面
import selectMain from '@/views/selectMain'
// 选课页面
import courseChoice from '@/views/courseChoice'
// 个人信息中心
import personalInfo  from '@/views/personalInfo'
// 我的课
import myCourse from '@/views/myCourse'
// 404 
import NotFind from '@/components/404.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Index,
      redirect: '/index',
      children: [{
          path: '/index',
          name: 'index',
          component: Main
        },
        {
          path: '/register',
          name: 'register',
          component: Register
        },
        {
          path: '/selectMain',
          name: 'selectMain',
          component: selectMain,
          children:[
            {
              path: '/selectMain/courseSelection',
              name: 'courseChoice',
              component: courseChoice
            },
            {
              path: '/selectMain/personalInfo',
              name: 'personalInfo',
              component: personalInfo
            },
            {
              path: '/selectMain/myCourse',
              name: 'myCourse',
              component: myCourse
            }
          ]
        }
      ]
    },
    {
      path: '/*',
      name:　'notFind',
      component: NotFind
    }
  ]
})
