<template>
  <!-- Simple Profile Menu for BottomNavigation integration -->
  <Transition
    name="slide-up"
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="transform translate-y-full opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-full opacity-0"
  >
    <div
      v-if="isVisible"
      class="fixed inset-0 z-50 flex items-end justify-center"
    >
      <!-- Background Overlay -->
      <div 
        class="absolute inset-0 bg-[#595959]/10 backdrop-blur-[12px]"
        @click="$emit('close')"
      ></div>
      
      <!-- Menu Content -->
      <div 
        class="relative w-full max-w-md bg-gradient-to-r from-[#120B81] to-[#09074E] rounded-t-[20px] border border-white/8 backdrop-blur-[32px] p-4 mx-2 mb-2"
        style="max-height: calc(100vh - 100px);"
      >
        <!-- Header with User Info -->
        <div class="flex items-center gap-3 mb-6 p-3 bg-white/10 rounded-2xl border border-white/20">
          <div class="w-12 h-12 rounded-full border border-[#7E73D6] overflow-hidden">
            <img 
              :src="profileData.avatar" 
              :alt="profileData.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99979 14.9998C4.14011 14.9998 1 11.8597 1 8.00005C1 4.14036 4.14011 1.00049 7.99979 1.00049C11.8595 1.00049 14.9996 4.14036 14.9996 8.00005C14.9996 11.8597 11.8592 14.9998 7.99979 14.9998Z" fill="white"/>
                <path d="M11.5465 3.0694C11.8453 3.0694 12.1406 3.08476 12.432 3.11269C11.2595 2.04845 9.70403 1.39893 7.99958 1.39893C4.35982 1.39893 1.39844 4.36007 1.39844 8.00007C1.39844 9.29912 1.77731 10.5109 2.428 11.5332C2.77754 6.80085 6.72473 3.0694 11.5465 3.0694Z" fill="#E0E0E0"/>
                <path d="M7.99992 14.601C11.6397 14.601 14.6011 11.6399 14.6011 7.99988C14.6011 6.06457 13.7637 4.32125 12.4326 3.1125C12.1412 3.08457 11.8459 3.06921 11.5471 3.06921C6.72554 3.06921 2.77812 6.8009 2.42857 11.5331C3.60079 13.3755 5.65944 14.601 7.99992 14.601Z" fill="#B5B5B5"/>
                <path d="M8.00017 13.221C10.8836 13.221 13.221 10.8836 13.221 8.00017C13.221 5.11676 10.8836 2.7793 8.00017 2.7793C5.11676 2.7793 2.7793 5.11676 2.7793 8.00017C2.7793 10.8836 5.11676 13.221 8.00017 13.221Z" fill="#9E9E9E"/>
                <path d="M11.14 7.29525L8.96965 6.97991L7.99921 5.01318L7.02852 6.97991L4.8584 7.29525L6.4288 8.82586L6.05808 10.9874L7.99921 9.96689L9.94033 10.9874L9.56961 8.82586L11.14 7.29525Z" fill="#F6F6F6"/>
              </svg>
              <span class="text-white text-xs">Silver</span>
            </div>
            <h3 class="text-white text-sm font-bold">{{ profileData.name }}</h3>
          </div>
          <button 
            @click="$emit('close')"
            class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <!-- Quick Menu Items -->
        <div class="space-y-2 mb-4">
          <button @click="navigateToProfile" class="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl transition-all">
            <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8ZM8 10C5.33333 10 0 11.3333 0 14V16H16V14C16 11.3333 10.6667 10 8 10Z" fill="white"/>
              </svg>
            </div>
            <span class="text-white font-medium">Full Profile</span>
          </button>
          
          <button @click="handleSettings" class="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl transition-all">
            <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.778 16L9.877 15.5L10.252 13.667C10.854 13.442 11.398 13.118 11.891 12.731L13.728 13.346L14.222 13.5L14.479 13.058L15.743 10.942L16 10.5L15.625 10.173L14.202 8.962C14.254 8.647 14.321 8.332 14.321 8C14.321 7.668 14.254 7.353 14.202 7.038L15.625 5.827L16 5.5L15.743 5.058L14.479 2.942L14.222 2.5L13.728 2.654L11.891 3.269C11.398 2.882 10.854 2.558 10.252 2.333L9.877 0.5L9.778 0H6.222L6.123 0.5L5.748 2.333C5.146 2.558 4.602 2.882 4.109 3.269L2.272 2.654L1.778 2.5L1.521 2.942L0.257 5.058L0 5.5L0.375 5.827L1.798 7.038C1.746 7.353 1.679 7.668 1.679 8C1.679 8.332 1.746 8.647 1.798 8.962L0.375 10.173L0 10.5L0.257 10.942L1.521 13.058L1.778 13.5L2.272 13.346L4.109 12.731C4.602 13.118 5.146 13.442 5.748 13.667L6.123 15.5L6.222 16H9.778ZM8 10.769C9.538 10.769 10.785 9.523 10.785 8C10.785 6.477 9.538 5.231 8 5.231C6.462 5.231 5.215 6.477 5.215 8C5.215 9.523 6.462 10.769 8 10.769Z" fill="white"/>
              </svg>
            </div>
            <span class="text-white font-medium">Settings</span>
          </button>
        </div>

        <!-- User ID Copy -->
        <div class="flex items-center gap-2 px-3 py-2 bg-white/20 rounded-full">
          <span class="text-white/70 text-sm">ID: {{ profileData.id }}</span>
          <button @click="copyUserId" class="ml-auto p-1 bg-white/20 rounded">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="text-white">
              <path d="M2 2H8V3H2V2ZM2 4H8V5H2V4ZM2 6H6V7H2V6Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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
  avatar: 'https://cdn.builder.io/api/v1/image/assets%2Fcd0d81f444984dacbac377cc9f78a1aa%2F4eb4e03d21f643beba2785a6e5329330?format=webp&width=800'
})

// Methods
const navigateToProfile = () => {
  router.push('/profile')
}

const handleSettings = () => {
  console.log('Settings clicked')
  // TODO: Add settings logic
}

const copyUserId = async () => {
  try {
    await navigator.clipboard.writeText(profileData.value.id)
    console.log('User ID copied to clipboard')
    // TODO: Show success notification
  } catch (err) {
    console.error('Failed to copy user ID:', err)
  }
}
</script>

<style scoped>
/* Backdrop blur support */
@supports (backdrop-filter: blur(10px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
}

/* Animations */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
