import VueRouter from 'vue-router'

import HomeIndex from './components/HomeIndex.vue'
import SeatShoose from './components/SeatChoose.vue'
import MovieInfo from './components/MovieInfo.vue'
import MovieLibrary from './components/MovieLibrary.vue'

var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home'},
    { path: '/home', component: HomeIndex },
    { path: '/choose', component: SeatShoose },
    { path: '/info/:id', component: MovieInfo, name: 'movieinfo' },
    { path: '/library/:q', component: MovieLibrary , name: 'movielibrary'}
  ]
})

export default router
