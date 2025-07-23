<template>
  <div class="min-h-screen bg-white">
    <component :is="currentComponent" @navigate="handleNavigation" />
  </div>
</template>

<script>
import WalletPage from './components/WalletPage.vue'

export default {
  name: 'App',
  components: {
    WalletPage
  }
}
</script>
