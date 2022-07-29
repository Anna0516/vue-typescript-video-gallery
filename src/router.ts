import { createRouter, createWebHashHistory } from 'vue-router'
import AllVideos from '../src/views/AllVideos.vue'
import HomeView from '../src/views/HomeView.vue'

export default createRouter({

  history: createWebHashHistory(),

  routes: [

    {

      component: AllVideos,

      path: '/all-videos'

    },

    {

      component: HomeView,

      path: '/'

    }

  ]

})
