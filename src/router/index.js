import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ListAlphabet from '@/components/ListAlphabet'
import ListNumbers from '@/components/ListNumbers'
import MorphNumbers from '@/components/MorphNumbers'

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
      path: '/list-alphabet',
      name: 'ListAlphabet',
      component: ListAlphabet
    },
    {
      path: '/list-numbers',
      name: 'ListNumbers',
      component: ListNumbers
    },
    {
      path: '/morph-numbers',
      name: 'MorphNumbers',
      component: MorphNumbers
    },
    {
      path: '*',
      name: 'Index',
      component: Index
    }
  ]
})
