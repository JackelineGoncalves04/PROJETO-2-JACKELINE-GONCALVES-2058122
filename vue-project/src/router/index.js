import { createRouter, createWebHistory } from 'vue-router'
import Pesquisa from '@/views/pesquisa.vue'
import Landingpage from '@/views/landingpage.vue'
import Coments from '@/views/coments.vue'
import Cocktail from '@/views/cocktail.vue'
import Carro from '@/views/carro.vue'
import ErrorPage from '@/views/Error.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/pesquisa',
      name: 'pesquisa',
      component: Pesquisa
    },

    {
      path: '/',
      name: 'landingpage',
      component: Landingpage
    },

    {
      path: '/comments',
      name: 'comments',
      component: Coments
    },

    {
      path: '/cocktail/:id',
      name: 'cocktail',
      component: Cocktail
    },

    {
      path: '/carro',
      name: 'carro',
      component: Carro
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: ErrorPage
    }
  ]
})

export default router
