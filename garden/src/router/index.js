import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import auth from '../auth/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/auth/:id',
      name: 'auth',
      component: auth,
      children: []
    }
  ]
})
