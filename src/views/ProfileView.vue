<template>
  <div class="profile-page max-w-md mx-auto bg-white min-h-screen pb-24 lg:max-w-lg xl:max-w-xl">
    <!-- Content Container -->
    <div class="content-container bg-white pt-4">
      
      <!-- Profile Section -->
      <div class="profile-section px-4 mb-4 sm:px-6">
        <div class="profile-card bg-gray-50 rounded-2xl p-4 mb-4 sm:p-5 lg:p-6">
          <div class="flex flex-col items-center text-center">
            <div class="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 border-4 border-purple-300 mb-4"></div>
            <h2 class="text-2xl font-bold text-dbd-dark mb-2">Profile</h2>
            <p class="text-dbd-gray">Coming soon...</p>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom Navigation Component -->
    <BottomNavigation />
  </div>
</template>

<script>
import BottomNavigation from './BottomNavigation.vue'

export default {
  name: 'ProfilePage',
  components: {
    BottomNavigation
  }
}
</script>

<style scoped>
.profile-page {
  font-family: 'Montserrat', sans-serif;
}
</style>
