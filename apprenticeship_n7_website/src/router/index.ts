import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post-bac',
      name: 'PostBac',
      component: () => import('@/views/PostBacView.vue')
    },
    {
      path: '/admission/post-prepa',
      name: 'PostPrepa',
      component: () => import('@/views/admission/PostPrepaView.vue')
    },
    {
      path: '/admission/post-but',
      name: 'PostBut',
      component: () => import('@/views/admission/PostButView.vue')
    },
    {
      path: '/admission/post-licence',
      name: 'PostLicence',
      component: () => import('@/views/admission/PostLicenceView.vue')
    },
    {
      path: '/ecoles',
      name: 'Ecoles',
      component: () => import('@/views/EcolesView.vue')
    },
    {
      path: '/alternance',
      name: 'Alternance',
      component: () => import('@/views/OffersView.vue')
    },
    {
      path: '/offer/:id',
      name: 'OfferDetails',
      component: () => import('@/views/OfferDetailView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
