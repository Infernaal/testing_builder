import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import WalletPage from '../components/WalletPage.vue'
import ProfilePage from '../components/ProfilePage.vue'
import MainPage from '../components/MainPage.vue'
import CartPage from '../components/CartPage.vue'
import HoldersPage from '../components/HoldersPage.vue'

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
      component: ProfilePage,
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: WalletPage,
    },
    {
      path: '/main',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage,
    },
    {
      path: '/holders',
      name: 'holders',
      component: HoldersPage,
    },
    // Redirect /home to /wallet as default
    {
      path: '/home',
      redirect: '/wallet'
    }
  ],
})

export default router
