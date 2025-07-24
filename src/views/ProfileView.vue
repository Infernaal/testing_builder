<template>
  <div class="profile-view w-full max-w-md mx-auto bg-white min-h-screen font-montserrat relative">
    <!-- Profile Menu Component -->
    <ProfileMenu 
      :isVisible="isMenuVisible" 
      @close="closeMenu" 
    />

    <!-- Main Content -->
    <div class="content-container bg-white px-6 pb-24 flex items-center justify-center" style="min-height: calc(100vh - 96px);">
      
      <!-- Profile Section -->
      <div class="profile-section text-center">
        <div class="profile-card bg-gradient-to-br from-dbd-light-blue to-white rounded-3xl p-8 shadow-lg border border-purple-100">
          <div class="flex flex-col items-center">
            
            <!-- Profile Avatar -->
            <div class="relative mb-6">
              <div class="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600 border-4 border-white shadow-xl flex items-center justify-center">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd29a17a6fafa45119ee2070a1a2a68d2%2F5769fbc8fc394e4b9ebfe482d01738fe?format=webp&width=800" 
                  alt="Profile"
                  class="w-20 h-20 rounded-full object-cover"
                />
              </div>
              
              <!-- Silver badge -->
              <div class="absolute -bottom-2 -right-2">
                <RankBadge rank="silver" />
              </div>
            </div>
            
            <!-- User Info -->
            <h2 class="text-3xl font-bold text-dbd-dark mb-2">Jason Williams</h2>
            <div class="flex items-center justify-center gap-2 mb-4">
              <RankBadge rank="silver" class="scale-110" />
            </div>
            
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 w-full mb-6">
              <div class="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-xl p-3">
                <div class="text-2xl font-bold text-dbd-primary">127</div>
                <div class="text-xs text-dbd-gray">Transactions</div>
              </div>
              <div class="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-xl p-3">
                <div class="text-2xl font-bold text-amber-600">4.8</div>
                <div class="text-xs text-dbd-gray">Rating</div>
              </div>
              <div class="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-xl p-3">
                <div class="text-2xl font-bold text-green-600">98%</div>
                <div class="text-xs text-dbd-gray">Success</div>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex gap-3 w-full">
              <button 
                @click="openMenu"
                class="flex-1 bg-gradient-to-r from-dbd-primary to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="text-white">
                  <path d="M10 12C12.7614 12 15 9.76142 15 7C15 4.23858 12.7614 2 10 2C7.23858 2 5 4.23858 5 7C5 9.76142 7.23858 12 10 12Z" fill="currentColor"/>
                  <path d="M10 14C6.13401 14 3 17.134 3 21H17C17 17.134 13.866 14 10 14Z" fill="currentColor"/>
                </svg>
                Open Profile Menu
              </button>
            </div>
            
            <!-- Quick Info -->
            <div class="mt-6 flex items-center justify-between w-full text-sm">
              <div class="flex items-center gap-2 text-dbd-light-gray">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill="currentColor"/>
                  <path d="M8.5 4h-1v5l4 2.4.8-1.3-3.8-2.2V4z" fill="currentColor"/>
                </svg>
                <span>ID: 515745</span>
              </div>
              <div class="flex items-center gap-2 text-dbd-light-gray">
                <CountryFlag country="us" size="small" />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom Navigation Component -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BottomNavigation from '../components/BottomNavigation.vue'
import ProfileMenu from '../components/ProfileMenu.vue'
import RankBadge from '../components/RankBadge.vue'
import CountryFlag from '../components/CountryFlag.vue'

// Profile menu visibility
const isMenuVisible = ref(false)

const openMenu = () => {
  isMenuVisible.value = true
}

const closeMenu = () => {
  isMenuVisible.value = false
}
</script>

<style scoped>
.profile-view {
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
  min-height: 100vh;
}

.profile-card {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Mobile first approach for Telegram mini app */
@media (max-width: 430px) {
  .profile-view {
    max-width: 100%;
  }
  
  .profile-card {
    margin: 0 -8px;
  }
  
  .content-container {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (min-width: 431px) and (max-width: 768px) {
  .profile-view {
    max-width: 400px;
  }
}

/* Animation for stats cards */
.profile-card .grid > div {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.profile-card .grid > div:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(32, 25, 206, 0.15);
}

/* Button hover effects */
button {
  transition: all 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}

/* Responsive text scaling */
@media (max-width: 375px) {
  .text-3xl {
    font-size: 1.75rem;
    line-height: 2rem;
  }
  
  .text-2xl {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .profile-view {
    background: linear-gradient(135deg, #1a1b23 0%, #0f1015 100%);
  }
  
  .profile-card {
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%);
    border-color: rgba(139, 92, 246, 0.2);
  }
}
</style>
