import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Alphabet from '@/components/Alphabet'
import Numbers from '@/components/Numbers'

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
      path: '/Numbers',
      name: 'Numbers',
      component: Numbers
    },
    {
      path: '*',
      name: 'Index',
      component: Index
    }
  ]
})
