import Vue from 'vue'
import Router from 'vue-router'

import home from './home'
import card from './card'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    home,
    card
  ]
})
