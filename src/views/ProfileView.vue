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
              <div class="w-24 h-24 rounded-full border-4 border-purple-300 shadow-xl overflow-hidden">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd29a17a6fafa45119ee2070a1a2a68d2%2F5769fbc8fc394e4b9ebfe482d01738fe?format=webp&width=800" 
                  alt="Jason Williams"
                  class="w-full h-full object-cover"
                />
              </div>
              
              <!-- Silver badge -->
              <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-300 shadow-md">
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <path d="M7.99979 14.9998C4.14011 14.9998 1 11.8597 1 8.00005C1 4.14036 4.14011 1.00049 7.99979 1.00049C11.8595 1.00049 14.9996 4.14036 14.9996 8.00005C14.9996 11.8597 11.8592 14.9998 7.99979 14.9998Z" fill="white"/>
                  <path d="M11.5465 3.0694C11.8453 3.0694 12.1406 3.08476 12.432 3.11269C11.2595 2.04845 9.70403 1.39893 7.99958 1.39893C4.35982 1.39893 1.39844 4.36007 1.39844 8.00007C1.39844 9.29912 1.77731 10.5109 2.428 11.5332C2.77754 6.80085 6.72473 3.0694 11.5465 3.0694Z" fill="#E0E0E0"/>
                  <path d="M7.99992 14.601C11.6397 14.601 14.6011 11.6399 14.6011 7.99988C14.6011 6.06457 13.7637 4.32125 12.4326 3.1125C12.1412 3.08457 11.8459 3.06921 11.5471 3.06921C6.72554 3.06921 2.77812 6.8009 2.42857 11.5331C3.60079 13.3755 5.65944 14.601 7.99992 14.601Z" fill="#B5B5B5"/>
                  <path d="M8.00017 13.221C10.8836 13.221 13.221 10.8836 13.221 8.00017C13.221 5.11676 10.8836 2.7793 8.00017 2.7793C5.11676 2.7793 2.7793 5.11676 2.7793 8.00017C2.7793 10.8836 5.11676 13.221 8.00017 13.221Z" fill="#9E9E9E"/>
                  <path d="M11.14 7.29525L8.96965 6.97991L7.99921 5.01318L7.02852 6.97991L4.8584 7.29525L6.4288 8.82586L6.05808 10.9874L7.99921 9.96689L9.94033 10.9874L9.56961 8.82586L11.14 7.29525Z" fill="#F6F6F6"/>
                </svg>
              </div>
            </div>
            
            <!-- User Info -->
            <h2 class="text-3xl font-bold text-dbd-dark mb-2">Jason Williams</h2>
            <div class="flex items-center justify-center gap-2 mb-4">
              <div class="flex items-center gap-2 px-3 py-1 bg-gray-100 border border-gray-300 rounded-full">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M7.99979 14.9998C4.14011 14.9998 1 11.8597 1 8.00005C1 4.14036 4.14011 1.00049 7.99979 1.00049C11.8595 1.00049 14.9996 4.14036 14.9996 8.00005C14.9996 11.8597 11.8592 14.9998 7.99979 14.9998Z" fill="white"/>
                  <path d="M11.5465 3.0694C11.8453 3.0694 12.1406 3.08476 12.432 3.11269C11.2595 2.04845 9.70403 1.39893 7.99958 1.39893C4.35982 1.39893 1.39844 4.36007 1.39844 8.00007C1.39844 9.29912 1.77731 10.5109 2.428 11.5332C2.77754 6.80085 6.72473 3.0694 11.5465 3.0694Z" fill="#E0E0E0"/>
                  <path d="M7.99992 14.601C11.6397 14.601 14.6011 11.6399 14.6011 7.99988C14.6011 6.06457 13.7637 4.32125 12.4326 3.1125C12.1412 3.08457 11.8459 3.06921 11.5471 3.06921C6.72554 3.06921 2.77812 6.8009 2.42857 11.5331C3.60079 13.3755 5.65944 14.601 7.99992 14.601Z" fill="#B5B5B5"/>
                  <path d="M8.00017 13.221C10.8836 13.221 13.221 10.8836 13.221 8.00017C13.221 5.11676 10.8836 2.7793 8.00017 2.7793C5.11676 2.7793 2.7793 5.11676 2.7793 8.00017C2.7793 10.8836 5.11676 13.221 8.00017 13.221Z" fill="#9E9E9E"/>
                  <path d="M11.14 7.29525L8.96965 6.97991L7.99921 5.01318L7.02852 6.97991L4.8584 7.29525L6.4288 8.82586L6.05808 10.9874L7.99921 9.96689L9.94033 10.9874L9.56961 8.82586L11.14 7.29525Z" fill="#F6F6F6"/>
                </svg>
                <span class="text-gray-700 text-sm font-medium">Silver</span>
              </div>
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
                <div class="w-5 h-5 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="#F0F0F0"/>
                    <path d="M15.3438 16.0025H31.0573C31.0573 14.6433 30.8761 13.3266 30.5385 12.0741H15.3438V16.0025Z" fill="#D80027"/>
                    <path d="M15.3438 8.14179H28.847C27.9252 6.63756 26.7466 5.30797 25.3723 4.21338H15.3438V8.14179Z" fill="#D80027"/>
                    <path d="M7.91596 3.29305H9.28825L8.01178 4.22041L8.49937 5.72094L7.22296 4.79358L5.94655 5.72094L6.36772 4.42464C5.24384 5.36082 4.25878 6.45764 3.44702 7.67976H3.88672L3.07419 8.27005C2.94761 8.48123 2.82619 8.69576 2.70984 8.91346L3.09784 10.1076L2.37396 9.5817C2.19402 9.96294 2.02943 10.3528 1.88149 10.7507L2.30896 12.0665H3.88672L2.61025 12.9938L3.09784 14.4943L1.82143 13.567L1.05684 14.1225C0.980312 14.7377 0.94043 15.3643 0.94043 16.0002H15.9993C15.9993 7.68352 15.9993 6.70305 15.9993 0.941406C13.0244 0.941406 10.2513 1.80435 7.91596 3.29305Z" fill="#0052B4"/>
                  </svg>
                </div>
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
