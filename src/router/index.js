
import { createRouter, createWebHashHistory } from 'vue-router'
import MeuCurriculo from '../views/MeuCurriculo'
import PaginaInicial from '../views/PaginaInicial'
import ProjetosPessoais from '../views/ProjetosPessoais'
import SobreMim from '../views/SobreMim'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PaginaInicial,
  },
  {
    path: '/about',
    name: 'About',
    component: SobreMim
  },
  {
    path: '/resume',
    name: 'resume',
    component: MeuCurriculo
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: ProjetosPessoais
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
