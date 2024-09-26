import { createMemoryHistory, createRouter } from 'vue-router'

import NoticiaView from '../views/NoticiaView.vue'
import Corpo from '../Corpo.vue'
import AbaDestaquesView from '../views/AbaDestaquesView.vue'
// import UserVisualizer from '../views/UserVisualizer.vue'
import AdminVisualizer from '../views/AdminVisualizer.vue'

const routes = [
  { path: '/', component: Corpo },
  { path: '/adminPainel', component: AdminVisualizer},
  { path: '/noticia', component: NoticiaView },
  { path: '/abaDestaques', component: AbaDestaquesView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router