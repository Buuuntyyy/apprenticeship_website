import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PostBacView from '@/views/PostBacView.vue'
import PrepaView from '@/views/pathways/PrepaView.vue'
import ButView from '@/views/pathways/ButView.vue'
import LicenceView from '@/views/pathways/LicenceView.vue'
import BtsView from '@/views/pathways/BtsView.vue'
import LegalMentionsView from '@/views/LegalMentionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bac-plus-2',
      name: 'BacPlus2',
      component: () => import('@/views/BacPlus2View.vue')
    },
    {
      path: '/post-bac',
      name: 'PostBac',
      component: () => import('@/views/PostBacView.vue')
    },
    {
      path: '/prepa',
      name: 'prepa',
      component: () => import('@/views/pathways/PrepaView.vue')
    },
    {
      path: '/but',
      name: 'But',
      component: () => import('@/views/pathways/ButView.vue')
    },
    {
      path: '/licence',
      name: 'Licence',
      component: () => import('@/views/pathways/LicenceView.vue')
    },
    {
      path: '/bts',
      name: 'Bts',
      component: () => import('@/views/pathways/BtsView.vue')
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
      component: () => import('@/views/AlternanceInfoView.vue')
    },
    {
      path: '/alternance/offres',
      name: 'AlternanceOffres',
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
    {
      path: '/mentions-legales',
      name: 'legal',
      component: LegalMentionsView,
    },
  ],
})

export default router
