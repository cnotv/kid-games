import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Alphabet from '@/components/Alphabet'
import Shapes from '@/components/Shapes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/alphabet',
      name: 'Alphabet',
      component: Alphabet
    },
    {
      path: '/Shapes',
      name: 'Shapes',
      component: Shapes
    },
    {
      path: '*',
      name: 'Index',
      component: Index
    }
  ]
})
