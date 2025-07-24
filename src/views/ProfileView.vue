<template>
  <div class="profile-view w-full max-w-md mx-auto min-h-screen font-montserrat relative overflow-hidden">
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950"></div>
    
    <!-- Close Button -->
    <button 
      @click="handleClose"
      class="absolute top-4 right-4 w-11 h-11 bg-white/10 border border-white/20 rounded-full flex items-center justify-center z-10 transition-all duration-200 hover:bg-white/20"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="text-white">
        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <!-- Scrollable Content -->
    <div class="relative z-10 p-4 pt-16 pb-6 h-full min-h-screen flex flex-col">
      <!-- Profile Header -->
      <div class="flex items-center gap-4 mb-8">
        <div class="relative">
          <img 
            :src="profileData.avatar" 
            :alt="profileData.name"
            class="w-20 h-20 rounded-full border-2 border-purple-300 object-cover"
          />
          <!-- Silver Badge -->
          <div class="absolute -bottom-1 -right-1 w-7 h-7 bg-white rounded-full flex items-center justify-center border border-gray-300">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7.99979 14.9998C4.14011 14.9998 1 11.8597 1 8.00005C1 4.14036 4.14011 1.00049 7.99979 1.00049C11.8595 1.00049 14.9996 4.14036 14.9996 8.00005C14.9996 11.8597 11.8592 14.9998 7.99979 14.9998Z" fill="white"/>
              <path d="M11.5465 3.0694C11.8453 3.0694 12.1406 3.08476 12.432 3.11269C11.2595 2.04845 9.70403 1.39893 7.99958 1.39893C4.35982 1.39893 1.39844 4.36007 1.39844 8.00007C1.39844 9.29912 1.77731 10.5109 2.428 11.5332C2.77754 6.80085 6.72473 3.0694 11.5465 3.0694Z" fill="#E0E0E0"/>
              <path d="M7.99992 14.601C11.6397 14.601 14.6011 11.6399 14.6011 7.99988C14.6011 6.06457 13.7637 4.32125 12.4326 3.1125C12.1412 3.08457 11.8459 3.06921 11.5471 3.06921C6.72554 3.06921 2.77812 6.8009 2.42857 11.5331C3.60079 13.3755 5.65944 14.601 7.99992 14.601Z" fill="#B5B5B5"/>
              <path d="M8.00017 13.221C10.8836 13.221 13.221 10.8836 13.221 8.00017C13.221 5.11676 10.8836 2.7793 8.00017 2.7793C5.11676 2.7793 2.7793 5.11676 2.7793 8.00017C2.7793 10.8836 5.11676 13.221 8.00017 13.221Z" fill="#9E9E9E"/>
              <path d="M11.14 7.29525L8.96965 6.97991L7.99921 5.01318L7.02852 6.97991L4.8584 7.29525L6.4288 8.82586L6.05808 10.9874L7.99921 9.96689L9.94033 10.9874L9.56961 8.82586L11.14 7.29525Z" fill="#F6F6F6"/>
            </svg>
          </div>
        </div>
        
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <div class="flex items-center gap-2 px-3 py-1 bg-white/20 border border-white/30 rounded-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="text-white">
                <path d="M7.99979 14.9998C4.14011 14.9998 1 11.8597 1 8.00005C1 4.14036 4.14011 1.00049 7.99979 1.00049C11.8595 1.00049 14.9996 4.14036 14.9996 8.00005C14.9996 11.8597 11.8592 14.9998 7.99979 14.9998Z" fill="white"/>
                <path d="M11.5465 3.0694C11.8453 3.0694 12.1406 3.08476 12.432 3.11269C11.2595 2.04845 9.70403 1.39893 7.99958 1.39893C4.35982 1.39893 1.39844 4.36007 1.39844 8.00007C1.39844 9.29912 1.77731 10.5109 2.428 11.5332C2.77754 6.80085 6.72473 3.0694 11.5465 3.0694Z" fill="#E0E0E0"/>
                <path d="M7.99992 14.601C11.6397 14.601 14.6011 11.6399 14.6011 7.99988C14.6011 6.06457 13.7637 4.32125 12.4326 3.1125C12.1412 3.08457 11.8459 3.06921 11.5471 3.06921C6.72554 3.06921 2.77812 6.8009 2.42857 11.5331C3.60079 13.3755 5.65944 14.601 7.99992 14.601Z" fill="#B5B5B5"/>
                <path d="M8.00017 13.221C10.8836 13.221 13.221 10.8836 13.221 8.00017C13.221 5.11676 10.8836 2.7793 8.00017 2.7793C5.11676 2.7793 2.7793 5.11676 2.7793 8.00017C2.7793 10.8836 5.11676 13.221 8.00017 13.221Z" fill="#9E9E9E"/>
                <path d="M11.14 7.29525L8.96965 6.97991L7.99921 5.01318L7.02852 6.97991L4.8584 7.29525L6.4288 8.82586L6.05808 10.9874L7.99921 9.96689L9.94033 10.9874L9.56961 8.82586L11.14 7.29525Z" fill="#F6F6F6"/>
              </svg>
              <span class="text-white text-sm font-medium">Silver</span>
            </div>
          </div>
          <h1 class="text-white text-xl font-semibold">{{ profileData.name }}</h1>
        </div>
      </div>

      <!-- Menu Items -->
      <div class="flex-1 space-y-3">
        <div 
          v-for="item in menuItems" 
          :key="item.id"
          @click="handleMenuItemClick(item)"
          class="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-200 hover:bg-white/20 cursor-pointer"
        >
          <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <component :is="item.icon" class="w-5 h-5 text-white" />
          </div>
          <span class="text-white font-semibold flex-1">{{ item.title }}</span>
          <div v-if="item.badge" class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="text-white">
              <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Upgrade Section -->
      <div class="mt-6 p-4 bg-purple-100 border border-purple-200 rounded-xl">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="text-white">
                <path d="M8 1L10.09 5.26L15 6L11.5 9.74L12.18 15L8 12.77L3.82 15L4.5 9.74L1 6L5.91 5.26L8 1Z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <div class="text-dbd-dark font-semibold text-lg">Start</div>
              <div class="text-sm text-dbd-gray">
                buy <span class="font-semibold text-purple-600">123</span> more Forevers to upgrade
              </div>
            </div>
          </div>
          <button 
            @click="handleUpgrade"
            class="px-6 py-2 bg-gradient-to-r from-dbd-primary to-blue-600 text-white font-semibold rounded-full text-sm hover:shadow-lg transition-all duration-200"
          >
            Upgrade
          </button>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="mt-6 flex items-center justify-between">
        <!-- User ID -->
        <div class="flex items-center gap-2 px-3 py-2 bg-white/20 border border-white/40 rounded-full backdrop-blur-sm">
          <span class="text-white/70 text-sm">ID:</span>
          <span class="text-white text-sm font-medium">{{ profileData.id }}</span>
          <button 
            @click="copyUserId"
            class="ml-1 text-white/70 hover:text-white transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M4.66667 9.33333H3.5C2.39543 9.33333 1.5 8.4379 1.5 7.33333V3.5C1.5 2.39543 2.39543 1.5 3.5 1.5H7.33333C8.4379 1.5 9.33333 2.39543 9.33333 3.5V4.66667M6.66667 4.66667H10.5C11.6046 4.66667 12.5 5.56209 12.5 6.66667V10.5C12.5 11.6046 11.6046 12.5 10.5 12.5H6.66667C5.56209 12.5 4.66667 11.6046 4.66667 10.5V6.66667C4.66667 5.56209 5.56209 4.66667 6.66667 4.66667Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <!-- Language Selector -->
        <div class="flex items-center gap-2 px-3 py-2 bg-white/20 border border-white/30 rounded-full backdrop-blur-sm">
          <div class="w-6 h-6 rounded-full overflow-hidden bg-gray-200">
            <img src="https://flagcdn.com/w20/us.png" alt="English" class="w-full h-full object-cover" />
          </div>
          <span class="text-white text-sm font-medium">ENG</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="text-white/70">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Profile data
const profileData = ref({
  name: 'Jason Williams',
  id: '515745',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format'
})

// Menu items
const menuItems = ref([
  {
    id: 'calculator',
    title: 'Calculator',
    icon: 'CalculatorIcon',
    action: 'calculator'
  },
  {
    id: 'ambassador',
    title: 'Ambassador',
    icon: 'AwardIcon',
    action: 'ambassador'
  },
  {
    id: 'verification',
    title: 'Verification',
    icon: 'UserCheckIcon',
    action: 'verification',
    badge: true
  },
  {
    id: 'security',
    title: 'Security',
    icon: 'ShieldIcon',
    action: 'security'
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: 'SettingsIcon',
    action: 'settings'
  },
  {
    id: 'support',
    title: 'Support',
    icon: 'HeadphonesIcon',
    action: 'support'
  },
  {
    id: 'help',
    title: 'Help',
    icon: 'HelpCircleIcon',
    action: 'help'
  }
])

// Methods
const handleClose = () => {
  router.go(-1)
}

const handleMenuItemClick = (item) => {
  console.log('Menu item clicked:', item.action)
  // Handle navigation or actions based on item
  switch (item.action) {
    case 'calculator':
      // Navigate to calculator
      break
    case 'settings':
      // Navigate to settings
      break
    case 'verification':
      // Navigate to verification
      break
    default:
      console.log(`Action ${item.action} not implemented yet`)
  }
}

const handleUpgrade = () => {
  console.log('Upgrade clicked')
  // Navigate to upgrade flow
  router.push('/favorites')
}

const copyUserId = async () => {
  try {
    await navigator.clipboard.writeText(profileData.value.id)
    // Show success feedback
    console.log('User ID copied to clipboard')
  } catch (err) {
    console.error('Failed to copy user ID:', err)
  }
}
</script>

<!-- Icon Components -->
<script>
// Simple icon components
const CalculatorIcon = {
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zM6 4h8v3H6V4zm0 5h2v2H6V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9zm-8 4h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/>
    </svg>
  `
}

const AwardIcon = {
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  `
}

const UserCheckIcon = {
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  `
}

const ShieldIcon = {
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
    </svg>
  `
}

const SettingsIcon = {
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"/>
    </svg>
  `
}

const HeadphonesIcon = {
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M18 8A8 8 0 0 0 2 8v4a2 2 0 0 0 2 2h2v-4H4V8a6 6 0 1 1 12 0v2h-2v4h2a2 2 0 0 0 2-2V8z"/>
    </svg>
  `
}

const HelpCircleIcon = {
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"/>
    </svg>
  `
}

export default {
  components: {
    CalculatorIcon,
    AwardIcon,
    UserCheckIcon,
    ShieldIcon,
    SettingsIcon,
    HeadphonesIcon,
    HelpCircleIcon
  }
}
</script>

<style scoped>
.profile-view {
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height for mobile */
}

/* Mobile optimizations for Telegram WebApp */
@media (max-width: 375px) {
  .profile-view {
    max-width: 100%;
  }
  
  .text-xl {
    font-size: 18px;
    line-height: 24px;
  }
  
  .text-lg {
    font-size: 16px;
    line-height: 20px;
  }
}

@media (min-width: 376px) and (max-width: 430px) {
  .profile-view {
    max-width: 100%;
  }
}

/* Tablets and larger phones */
@media (min-width: 431px) and (max-width: 768px) {
  .profile-view {
    max-width: 420px;
  }
}

/* Desktop and large tablets */
@media (min-width: 769px) {
  .profile-view {
    max-width: 480px;
  }
}

/* Ensure smooth scrolling on mobile */
.profile-view {
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

/* Custom scrollbar styling */
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

/* Hide scrollbar in Firefox */
.profile-view {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* Telegram mini app optimizations */
@media (max-width: 480px) {
  .profile-view {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

/* Backdrop blur support */
@supports (backdrop-filter: blur(10px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
}

/* Safe area support */
@supports (padding: max(0px)) {
  .profile-view {
    padding-top: max(16px, env(safe-area-inset-top));
    padding-bottom: max(24px, env(safe-area-inset-bottom));
  }
}
</style>
