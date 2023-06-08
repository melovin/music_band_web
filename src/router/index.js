import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import NewsView from '../views/NewsView.vue'
import GalleryView from '../views/GalleryView'
import ContactView from '../views/ContactView'
import galleryTest from '@/views/galleryTest'

const routes = [
  {
    path: '/',
    name: 'Domů',
    component: HomeView
  },
  {
    path: '/about',
    name: 'O nás',
    component: AboutView
  },
  {
    path: '/news',
    name: 'Aktuality',
    component: NewsView
  },
  {
    path: '/gallery',
    name: 'Galerie',
    component: GalleryView
  },
  {
    path: '/contact',
    name: 'Kontakt',
    component: ContactView
  },
  {
    path: '/galleryTest',
    name: 'gtest',
    component: galleryTest
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
