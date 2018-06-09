import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Alphabet from '@/pages/Alphabet'
import Numbers from '@/pages/Numbers'
import Animals from '@/pages/Animals'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
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
      path: '/Animals',
      name: 'Animals',
      component: Animals
    },
    {
      path: '*',
      name: 'Index',
      component: Index
    }
  ]
})
