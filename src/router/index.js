import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import WalletView from '../views/WalletView.vue'
import ProfileView from '../views/ProfileView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import CartView from '../views/CartView.vue'
import HoldersView from '../views/HoldersView.vue'
import RentOutView from '../views/RentOutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: WalletView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/holders',
      name: 'holders',
      component: HoldersView,
    },
    // Redirect /home to /wallet as default
    {
      path: '/home',
      redirect: '/wallet'
    }
  ],
})

export default router
