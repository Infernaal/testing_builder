<template>
  <div class="home-view">
    <component :is="currentComponent" @navigate="handleNavigation" />
  </div>
</template>

<script>
import { ref } from 'vue'
import WalletPage from '../components/WalletPage.vue'
import ProfilePage from '../components/ProfilePage.vue'
import MainPage from '../components/MainPage.vue'
import CartPage from '../components/CartPage.vue'
import HoldersPage from '../components/HoldersPage.vue'

export default {
  name: 'HomeView',
  components: {
    WalletPage,
    ProfilePage,
    MainPage,
    CartPage,
    HoldersPage
  },
  setup() {
    const currentTab = ref('wallet')
    
    const components = {
      profile: ProfilePage,
      wallet: WalletPage,
      favorites: MainPage,
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

<style scoped>
.home-view {
  font-family: 'Montserrat', sans-serif;
}
</style>
