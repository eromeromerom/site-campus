import { createMemoryHistory, createRouter } from 'vue-router'

import NoticiaView from '../views/NoticiaView.vue'
import Corpo from '../Corpo.vue'
import AbaDestaquesView from '../views/AbaDestaquesView.vue'

const routes = [
  { path: '/', component: Corpo },
  { path: '/noticia', component: NoticiaView },
  { path: '/abaDestaques', component: AbaDestaquesView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router