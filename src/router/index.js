import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import G6 from '@/pages/G6'
import Designer from '@/pages/Designer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/G6',
      name: 'G6',
      component: G6
    },
    {
      path: '/designer',
      name: 'Designer',
      component: Designer
    }
  ]
})
