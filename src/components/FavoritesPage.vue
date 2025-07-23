<template>
  <div class="favorites-page max-w-md mx-auto bg-white min-h-screen pb-24 lg:max-w-lg xl:max-w-xl">
    <!-- Content Container -->
    <div class="content-container bg-white pt-4">
      
      <!-- Favorites Section -->
      <div class="favorites-section px-4 mb-4 sm:px-6">
        <div class="favorites-card bg-dbd-light-blue rounded-2xl p-4 mb-4 sm:p-5 lg:p-6">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-dbd-primary rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 20 20" class="text-white">
                <path d="M19.0791 0C19.6648 0 19.9999 0.476058 20 1.14258C20 1.80914 19.5817 2.28598 18.9961 2.28613H6.77832V5.80957H14.8955C15.4812 5.80963 15.8993 6.28565 15.8994 6.95215C15.8994 7.61877 15.4812 8.09564 14.8955 8.0957H6.77832V11.6191H11.0459C11.6316 11.6191 12.0497 12.0951 12.0498 12.7617C12.0498 13.4284 11.6317 13.9043 11.0459 13.9043H6.77832V18.8574C6.7782 19.5238 6.35992 19.9998 5.77441 20C5.18872 20 4.76965 19.5239 4.76953 18.8574V8.19043H1.00391C0.418346 8.19028 9.72129e-05 7.71429 0 7.04785C0 6.38129 0.418278 5.90491 1.00391 5.80957H4.76953V1.14258C4.76965 0.476058 5.18872 0 5.77441 0H19.0791Z" fill="currentColor"/>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-dbd-dark mb-2">Favorites</h2>
            <p class="text-dbd-gray">Coming soon...</p>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom Navigation Component -->
    <BottomNavigation :activeTab="'favorites'" @navigate="handleNavigate" />
  </div>
</template>

<script>
import BottomNavigation from './BottomNavigation.vue'

export default {
  name: 'FavoritesPage',
  components: {
    BottomNavigation
  },
  emits: ['navigate'],
  methods: {
    handleNavigate(tab) {
      this.$emit('navigate', tab)
    }
  }
}
</script>

<style scoped>
.favorites-page {
  font-family: 'Montserrat', sans-serif;
}
</style>
