<template>
  <div class="profile-view w-full max-w-md mx-auto bg-white min-h-screen">
    <!-- Content Container -->
    <div class="content-container bg-white px-4 pb-20 flex items-center justify-center min-h-screen">
      
      <!-- Profile Section -->
      <div class="profile-section">
        <div class="profile-card bg-gray-50 rounded-2xl p-6">
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
import BottomNavigation from '../components/BottomNavigation.vue'

export default {
  name: 'ProfileView',
  components: {
    BottomNavigation
  }
}
</script>

<style scoped>
.profile-view {
  font-family: 'Montserrat', sans-serif;
}

/* Mobile first approach for Telegram mini app */
@media (max-width: 430px) {
  .profile-view {
    max-width: 100%;
  }
}

@media (min-width: 431px) and (max-width: 768px) {
  .profile-view {
    max-width: 400px;
  }
}
</style>
