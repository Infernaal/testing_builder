<template>
  <!-- Background Overlay -->
  <Transition
    name="overlay"
    enter-active-class="transition-opacity duration-300 ease-out"
    leave-active-class="transition-opacity duration-200 ease-in"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isVisible"
      class="fixed inset-0 bg-black/10 backdrop-blur-md z-40"
      @click="$emit('close')"
    ></div>
  </Transition>

  <!-- Profile Menu -->
  <Transition
    name="slide"
    enter-active-class="transition-transform duration-300 ease-out"
    leave-active-class="transition-transform duration-200 ease-in"
    enter-from-class="transform translate-y-full"
    enter-to-class="transform translate-y-0"
    leave-from-class="transform translate-y-0"
    leave-to-class="transform translate-y-full"
  >
    <div
      v-if="isVisible"
      class="fixed inset-x-0 bottom-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-indigo-950 rounded-t-3xl z-50 max-w-md mx-auto border border-white/8"
      style="height: calc(100vh - 100px);"
    >
      <!-- Content -->
      <div class="p-5 h-full flex flex-col relative">
        
        <!-- Close Button -->
        <button 
          @click="$emit('close')"
          class="absolute top-4 right-4 w-11 h-11 bg-white/20 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm z-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-white">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- Profile Header -->
        <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-4 mb-6 mt-2">
          <div class="flex items-center gap-4">
            <!-- Avatar with Rank Badge -->
            <div class="relative">
              <img 
                :src="profileData.avatar" 
                :alt="profileData.name"
                class="w-20 h-20 rounded-full border-2 border-purple-300 object-cover"
              />
              <!-- User's Rank Badge - Single, not duplicated -->
              <RankBadge 
                :rank="profileData.rank" 
                class="absolute -bottom-1 -right-1 scale-75 origin-bottom-right"
              />
            </div>
            
            <!-- User Info -->
            <div class="flex-1">
              <!-- Name with Rank -->
              <div class="flex items-center gap-3 mb-2">
                <RankBadge 
                  :rank="profileData.rank" 
                  class="bg-white/20 border-white/30 text-white" 
                />
                <button class="w-6 h-6 bg-dbd-off-white/20 border border-gray-300 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="text-gray-500">
                    <path d="M3.33333 4.66671L5.99999 7.33337L8.66666 4.66671" stroke="currentColor" stroke-width="0.857143" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
              <h1 class="text-white text-xl font-semibold">{{ profileData.name }}</h1>
            </div>
          </div>
        </div>

        <!-- Menu Items -->
        <div class="flex-1 space-y-2 overflow-y-auto mb-4">
          <div 
            v-for="item in menuItems" 
            :key="item.id"
            @click="handleMenuItemClick(item)"
            class="flex items-center gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-200 hover:bg-white/20 cursor-pointer"
          >
            <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/40">
              <component :is="item.icon" class="w-6 h-6 text-white" />
            </div>
            <span class="text-white font-semibold flex-1 text-base">{{ item.title }}</span>
            <div v-if="item.badge" class="w-6 h-6 bg-red-100 border-2 border-red-500 rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="text-red-500">
                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Upgrade Section -->
        <div class="bg-purple-100 border border-purple-200 rounded-2xl p-4 mb-4 relative overflow-hidden">
          <!-- Star Icon -->
          <div class="absolute left-2 top-3.5">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#8C4CD1"/>
              <path d="M15.9997 5.11792V15.4117L19.3443 11.8949L15.9997 5.11792Z" fill="#FF9F00"/>
              <path d="M15.9996 5.11792V15.4117L12.655 11.8949L15.9996 5.11792Z" fill="#FED110"/>
            </svg>
          </div>
          
          <!-- Background gradient -->
          <div class="absolute left-0 top-0 w-36 h-full bg-gradient-to-r from-purple-400/40 to-transparent rounded-l-2xl"></div>
          
          <div class="flex items-center justify-between relative z-10">
            <div class="ml-10">
              <div class="text-dbd-dark font-bold text-lg">Start</div>
              <div class="text-sm text-dbd-gray">
                buy <span class="font-bold text-purple-600">123</span> more Forevers to upgrade
              </div>
            </div>
            <button 
              @click="handleUpgrade"
              class="px-6 py-2.5 bg-gradient-to-r from-dbd-primary to-blue-600 text-white font-semibold rounded-full text-sm hover:shadow-lg transition-all duration-200 flex-shrink-0"
            >
              Upgrade
            </button>
          </div>
        </div>

        <!-- Bottom Section with Language and ID -->
        <div class="flex items-center justify-between gap-3">
          <!-- User ID -->
          <div class="flex items-center gap-2 px-3 py-2 bg-white/30 border border-white/40 rounded-full backdrop-blur-sm flex-1">
            <span class="text-white/70 text-sm">ID:</span>
            <span class="text-white text-sm font-medium">{{ profileData.id }}</span>
            <button 
              @click="copyUserId"
              class="ml-1 p-1 bg-white/20 border border-gray-300 rounded-full"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="text-white">
                <path d="M4.66667 9.33333H3.5C2.39543 9.33333 1.5 8.4379 1.5 7.33333V3.5C1.5 2.39543 2.39543 1.5 3.5 1.5H7.33333C8.4379 1.5 9.33333 2.39543 9.33333 3.5V4.66667M6.66667 4.66667H10.5C11.6046 4.66667 12.5 5.56209 12.5 6.66667V10.5C12.5 11.6046 11.6046 12.5 10.5 12.5H6.66667C5.56209 12.5 4.66667 11.6046 4.66667 10.5V6.66667C4.66667 5.56209 5.56209 4.66667 6.66667 4.66667Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <!-- Language Selector -->
          <div class="flex items-center gap-2 px-3 py-2 bg-white/20 border border-white/30 rounded-full backdrop-blur-sm">
            <div class="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              <!-- US Flag -->
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" fill="#F0F0F0"/>
                <path d="M16.0003 31.0591C24.317 31.0591 31.0591 24.317 31.0591 16.0002C31.0591 7.68347 24.317 0.941406 16.0003 0.941406C7.68347 0.941406 0.941406 7.68347 0.941406 16.0002C0.941406 24.317 7.68347 31.0591 16.0003 31.0591Z" fill="#F0F0F0"/>
                <path d="M15.3438 16.0025H31.0573C31.0573 14.6433 30.8761 13.3266 30.5385 12.0741H15.3438V16.0025Z" fill="#D80027"/>
                <path d="M15.3438 8.14179H28.847C27.9252 6.63756 26.7466 5.30797 25.3723 4.21338H15.3438V8.14179Z" fill="#D80027"/>
                <path d="M16.0038 31.06C19.5478 31.06 22.8053 29.8351 25.3776 27.7864H6.62988C9.20224 29.8351 12.4597 31.06 16.0038 31.06Z" fill="#D80027"/>
                <path d="M3.15241 23.855H28.8496C29.5896 22.6475 30.1636 21.3275 30.5411 19.9266H1.46094C1.83841 21.3275 2.41235 22.6475 3.15241 23.855Z" fill="#D80027"/>
                <path d="M7.91596 3.29305H9.28825L8.01178 4.22041L8.49937 5.72094L7.22296 4.79358L5.94655 5.72094L6.36772 4.42464C5.24384 5.36082 4.25878 6.45764 3.44702 7.67976H3.88672L3.07419 8.27005C2.94761 8.48123 2.82619 8.69576 2.70984 8.91346L3.09784 10.1076L2.37396 9.5817C2.19402 9.96294 2.02943 10.3528 1.88149 10.7507L2.30896 12.0665H3.88672L2.61025 12.9938L3.09784 14.4943L1.82143 13.567L1.05684 14.1225C0.980312 14.7377 0.94043 15.3643 0.94043 16.0002H15.9993C15.9993 7.68352 15.9993 6.70305 15.9993 0.941406C13.0244 0.941406 10.2513 1.80435 7.91596 3.29305Z" fill="#0052B4"/>
              </svg>
            </div>
            <span class="text-white text-sm font-medium">ENG</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="text-white/70">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import RankBadge from './RankBadge.vue'

// Props
defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

// Emits
defineEmits(['close'])

// Profile data
const profileData = ref({
  name: 'Jason Williams',
  id: '515745',
  avatar: 'https://cdn.builder.io/api/v1/image/assets%2Fd29a17a6fafa45119ee2070a1a2a68d2%2F5769fbc8fc394e4b9ebfe482d01738fe?format=webp&width=800',
  rank: 'silver', // Can be: no-rank, bronze, silver, gold, diamond, double-diamond, ambassador, royal-ambassador
  language: 'ENG'
})

// Menu items with proper icons matching the design
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
    icon: 'AmbassadorIcon',
    action: 'ambassador'
  },
  {
    id: 'verification',
    title: 'Verification',
    icon: 'VerificationIcon',
    action: 'verification',
    badge: true
  },
  {
    id: 'security',
    title: 'Security',
    icon: 'SecurityIcon',
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
    icon: 'SupportIcon',
    action: 'support'
  },
  {
    id: 'help',
    title: 'Help',
    icon: 'HelpIcon',
    action: 'help'
  }
])

// Methods
const handleMenuItemClick = (item) => {
  console.log('Menu item clicked:', item.action)
  // Handle navigation or actions based on item
}

const handleUpgrade = () => {
  console.log('Upgrade clicked')
  // Handle upgrade action
}

const copyUserId = async () => {
  try {
    await navigator.clipboard.writeText(profileData.value.id)
    console.log('User ID copied to clipboard')
    // Could show a toast notification here
  } catch (err) {
    console.error('Failed to copy user ID:', err)
  }
}
</script>

<!-- Icon Components matching Figma design -->
<script>
// Calculator Icon
const CalculatorIcon = {
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M14.1377 0C15.1645 0 16 0.788555 16 1.75781V18.2422C16 19.2114 15.1645 20 14.1377 20H1.8623C0.835502 20 0 19.2114 0 18.2422V1.75781C0 0.788555 0.835502 0 1.8623 0H14.1377ZM1.8623 1.17188C1.52004 1.17188 1.24121 1.43473 1.24121 1.75781V18.2422C1.24121 18.5653 1.52004 18.8281 1.8623 18.8281H14.1377C14.48 18.8281 14.7587 18.5653 14.7588 18.2422V1.75781C14.7588 1.43473 14.48 1.17188 14.1377 1.17188H1.8623Z" fill="currentColor"/>
    </svg>
  `
}

// Ambassador Icon  
const AmbassadorIcon = {
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M4.60547 0L7 3.30078L9.39453 0H14L7 9.64844L0 0H4.60547Z" fill="currentColor"/>
      <path d="M7 9.64844C9.76508 9.64858 12.0066 11.9652 12.0068 14.8242C12.0068 17.6826 9.76511 19.9999 7 20C4.23394 20 1.99219 17.6827 1.99219 14.8242C1.99243 11.9651 4.23409 9.64844 7 9.64844Z" fill="currentColor"/>
    </svg>
  `
}

// Verification Icon
const VerificationIcon = {
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M14.2511 12.4974C15.4932 12.4974 16.5 13.5045 16.5 14.7467V15.3222C16.5 16.2166 16.1805 17.0816 15.5989 17.7611C14.0295 19.5949 11.6422 20.5 8.49673 20.5C5.35076 20.5 2.96466 19.5946 1.39831 17.7601C0.818531 17.081 0.5 16.2174 0.5 15.3245V14.7467C0.5 13.5045 1.50689 12.4974 2.74896 12.4974H14.2511Z" fill="currentColor"/>
    </svg>
  `
}

// Security Icon
const SecurityIcon = {
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M8.78516 0.0354746C8.92389 -0.0121504 9.07611 -0.0121504 9.21484 0.0354746C10.6561 0.531013 12.1438 0.945188 13.6377 1.26497C14.8838 1.5317 16.1601 1.73823 17.4297 1.87922C17.7546 1.91522 18 2.18263 18 2.50032V8.7386C17.9998 13.165 15.3282 17.2234 11.1943 19.0784L9.26953 19.9427C9.18416 19.9808 9.09193 20.0003 9 20.0003C8.90802 20.0003 8.81583 19.9808 8.73047 19.9427L6.80566 19.0784C2.67178 17.2233 0.000192532 13.165 0 8.7386V2.50032C0 2.18263 0.245411 1.91529 0.570312 1.87922C1.83994 1.73823 3.11627 1.53164 4.3623 1.26497C5.85626 0.945192 7.34396 0.531005 8.78516 0.0354746Z" fill="currentColor"/>
    </svg>
  `
}

// Settings Icon
const SettingsIcon = {
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M12.2222 20L12.3457 19.375L12.8148 17.0913C13.5679 16.8029 14.2469 16.3972 14.8642 15.9135L17.1605 16.6827L17.7778 16.875L18.0988 16.3221L19.679 13.6778L20 13.125L19.5309 12.7163L17.7531 11.2019C17.8179 10.8083 17.9012 10.4147 17.9012 10C17.9012 9.58531 17.8179 9.19169 17.7531 8.79808L19.5309 7.28369L20 6.875L19.679 6.32215L18.0988 3.67785L17.7778 3.125L17.1605 3.31731L14.8642 4.08654C14.2469 3.60277 13.5679 3.19708 12.8148 2.90862L12.3457 0.625L12.2222 0H7.77775L7.65426 0.625L7.18516 2.90862C6.43209 3.19708 5.75306 3.60277 5.13581 4.08654L2.83947 3.31731L2.22215 3.125L1.9012 3.67785L0.32095 6.32215L0 6.875L0.469097 7.28369L2.24688 8.79808C2.18209 9.19169 2.09873 9.58531 2.09873 10C2.09873 10.4147 2.18209 10.8083 2.24688 11.2019L0.469097 12.7163L0 13.125L0.32095 13.6778L1.9012 16.3221L2.22215 16.875L2.83947 16.6827L5.13581 15.9135C5.75306 16.3972 6.43209 16.8029 7.18516 17.0913L7.65426 19.375L7.77775 20H12.2222Z" fill="currentColor"/>
    </svg>
  `
}

// Support Icon
const SupportIcon = {
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M8.99902 0C13.9325 0 17.998 3.80872 17.998 8.58691V10.1348C17.9981 10.1411 17.999 10.1479 17.999 10.1543V12.9561C17.9992 12.9624 18 12.9692 18 12.9756V14.543C17.9997 16.724 16.1499 18.4277 13.9502 18.4277H11.2695C10.9422 19.3551 10.0281 19.9951 8.99902 19.9951C7.71066 19.9949 6.59988 18.993 6.59961 17.6777C6.59962 16.3623 7.71051 15.3606 8.99902 15.3604C10.0286 15.3604 10.9435 15.9998 11.2705 16.9277H13.9502C15.1589 16.9277 16.1261 16.1539 16.4111 15.1514C16.155 15.2407 15.8817 15.293 15.5986 15.293C14.3103 15.2927 13.1995 14.2908 13.1992 12.9756V10.1543C13.1992 8.83884 14.3101 7.83714 15.5986 7.83691C15.9032 7.83691 16.1972 7.89422 16.4697 7.99707C16.1535 4.38853 12.9637 1.5 8.99902 1.5C5.03445 1.50011 1.84359 4.38856 1.52734 7.99707C1.80001 7.89396 2.09449 7.83697 2.39941 7.83691C3.6881 7.83691 4.7998 8.83869 4.7998 10.1543V12.9756C4.79953 14.291 3.68794 15.293 2.39941 15.293C1.11107 15.2927 0.000274862 14.2908 0 12.9756V8.58691C4.31105e-05 3.80879 4.0657 0.000121624 8.99902 0Z" fill="currentColor"/>
    </svg>
  `
}

// Help Icon
const HelpIcon = {
  template: `
    <svg viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.69301 13.4082C9.12117 13.4082 8.6582 13.8848 8.6582 14.4566C8.6582 15.0149 9.10754 15.5051 9.69301 15.5051C10.2785 15.5051 10.7414 15.0149 10.7414 14.4566C10.7414 13.8848 10.2649 13.4082 9.69301 13.4082Z" fill="currentColor"/>
      <path d="M10 0C4.47328 0 0 4.47254 0 10V19.2188C0 19.6502 0.349766 20 0.78125 20H10C15.5267 20 20 15.5275 20 10C20 4.47328 15.5275 0 10 0Z" fill="currentColor"/>
    </svg>
  `
}

export default {
  components: {
    CalculatorIcon,
    AmbassadorIcon,
    VerificationIcon,
    SecurityIcon,
    SettingsIcon,
    SupportIcon,
    HelpIcon,
    RankBadge
  }
}
</script>

<style scoped>
/* Ensure smooth scrolling */
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.overflow-y-auto::-webkit-scrollbar {
  display: none;
}

/* Mobile optimizations */
@media (max-width: 375px) {
  .text-xl {
    font-size: 18px;
    line-height: 24px;
  }
  
  .text-lg {
    font-size: 16px;
    line-height: 20px;
  }
}

/* Backdrop blur support */
@supports (backdrop-filter: blur(10px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
}

/* Custom scrollbar for webkit browsers */
.overflow-y-auto::-webkit-scrollbar {
  width: 2px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
