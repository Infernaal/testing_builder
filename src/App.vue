<template>
  <div class="min-h-screen bg-white">
    <component :is="currentComponent" @navigate="handleNavigation" />
  </div>
</template>

<script>
import { ref } from 'vue'
import WalletPage from './components/WalletPage.vue'
import ProfilePage from './components/ProfilePage.vue'
import FavoritesPage from './components/FavoritesPage.vue'
import CartPage from './components/CartPage.vue'
import HoldersPage from './components/HoldersPage.vue'

export default {
  name: 'App',
  components: {
    WalletPage,
    ProfilePage,
    FavoritesPage,
    CartPage,
    HoldersPage
  },
  setup() {
    const currentTab = ref('wallet')

    const components = {
      profile: ProfilePage,
      wallet: WalletPage,
      favorites: FavoritesPage,
      cart: CartPage,
      holders: HoldersPage
    }

    const currentComponent = ref(components[currentTab.value])

    const handleNavigation = (tab) => {
      currentTab.value = tab
      currentComponent.value = components[tab]
    }

    return {
      currentComponent,
      currentTab,
      handleNavigation
    }
  }
}
</script>
