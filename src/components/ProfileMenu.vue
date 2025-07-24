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

  <!-- Profile Menu - Exact Figma Implementation -->
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
      class="fixed inset-x-0 bottom-0 z-50 max-w-md mx-auto"
      style="height: calc(100vh - 100px);"
    >
      <!-- Background with exact gradient from Figma -->
      <div 
        class="w-full h-full rounded-t-[20px] border border-white/8 relative overflow-hidden"
        style="background: linear-gradient(94deg, #120B81 33.64%, #09074E 76.52%); backdrop-filter: blur(32px);"
      >
        
        <!-- Profile Header Section -->
        <div class="w-full h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl m-3 p-4 relative">
          <!-- Close Button -->
          <button 
            @click="$emit('close')"
            class="absolute top-4 right-4 w-11 h-11 bg-white/20 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-white">
              <path d="M17.2155 11.2862L8.2216 2.29534C7.82696 1.90169 7.18757 1.90169 6.79192 2.29534C6.39728 2.68898 6.39728 3.32838 6.79192 3.72203L15.0724 11.9996L6.79292 20.2771C6.39827 20.6707 6.39827 21.3101 6.79292 21.7048C7.18756 22.0984 7.82795 22.0984 8.2226 21.7048L17.2165 12.7139C17.6051 12.3244 17.6051 11.6749 17.2155 11.2862Z" fill="#B7B7B7"/>
            </svg>
          </button>

          <div class="flex items-center gap-4">
            <!-- Avatar with exact positioning -->
            <div class="relative">
              <div class="w-20 h-20 rounded-full border-2 border-purple-300 overflow-hidden">
                <img 
                  :src="profileData.avatar" 
                  :alt="profileData.name"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <!-- User Info and Silver Badge -->
            <div class="flex-1">
              <!-- Silver Badge with exact styling -->
              <div class="flex items-center gap-3 mb-2">
                <div class="flex items-center gap-2 px-4 py-1.5 bg-white/20 border border-white/30 rounded-full backdrop-blur-sm">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0004 26.2497C7.24592 26.2497 1.75073 20.7545 1.75073 14.0001C1.75073 7.24564 7.24592 1.75085 14.0004 1.75085C20.7548 1.75085 26.25 7.24564 26.25 14.0001C26.25 20.7545 20.7544 26.2497 14.0004 26.2497Z" fill="white"/>
                    <path d="M20.2071 5.37145C20.73 5.37145 21.2468 5.39833 21.7567 5.4472C19.7049 3.58479 16.9828 2.44812 14 2.44812C7.63041 2.44812 2.448 7.63013 2.448 14.0001C2.448 16.2735 3.11102 18.3941 4.24973 20.1832C4.86143 11.9015 11.769 5.37145 20.2071 5.37145Z" fill="#E0E0E0"/>
                    <path d="M14.0006 25.5519C20.3702 25.5519 25.5526 20.3699 25.5526 13.9999C25.5526 10.6131 24.0873 7.56229 21.7577 5.44697C21.2478 5.39809 20.731 5.37122 20.2081 5.37122C11.7704 5.37122 4.86244 11.9017 4.25073 20.1829C6.30211 23.4072 9.90475 25.5519 14.0006 25.5519Z" fill="#B5B5B5"/>
                    <path d="M14.0004 23.1368C19.0464 23.1368 23.1369 19.0463 23.1369 14.0003C23.1369 8.95433 19.0464 4.86377 14.0004 4.86377C8.95445 4.86377 4.86389 8.95433 4.86389 14.0003C4.86389 19.0463 8.95445 23.1368 14.0004 23.1368Z" fill="#9E9E9E"/>
                    <path d="M19.4965 12.7667L15.6984 12.2148L14.0001 8.77307L12.3014 12.2148L8.50366 12.7667L11.2519 15.4452L10.6031 19.2279L14.0001 17.4421L17.397 19.2279L16.7483 15.4452L19.4965 12.7667Z" fill="#F6F6F6"/>
                  </svg>
                  <span class="text-white text-sm font-medium">Silver</span>
                </div>
                <!-- Dropdown Arrow -->
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="text-white/70">
                  <circle cx="6" cy="6" r="5.57143" fill="#FAFAFA" stroke="#E8E8E8" stroke-width="0.857143"/>
                  <path d="M3.33333 4.66671L5.99999 7.33337L8.66666 4.66671" stroke="#4D4F53" stroke-width="0.857143" stroke-linecap="round"/>
                </svg>
              </div>
              <h1 class="text-white text-xl font-bold">{{ profileData.name }}</h1>
            </div>
          </div>
        </div>

        <!-- Menu Items Section -->
        <div class="px-3 space-y-2 flex-1 overflow-y-auto" style="height: calc(100% - 260px);">
          <!-- Calculator -->
          <div class="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl cursor-pointer">
            <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/40">
              <svg width="20" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1377 0C15.1645 0 16 0.788555 16 1.75781V18.2422C16 19.2114 15.1645 20 14.1377 20H1.8623C0.835502 20 0 19.2114 0 18.2422V1.75781C0 0.788555 0.835502 0 1.8623 0H14.1377Z" fill="white"/>
              </svg>
            </div>
            <span class="text-white font-bold text-base">Calculator</span>
          </div>

          <!-- Ambassador -->
          <div class="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl cursor-pointer">
            <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/40">
              <svg width="20" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 9.64844C9.76508 9.64858 12.0066 11.9652 12.0068 14.8242C12.0068 17.6826 9.76511 19.9999 7 20C4.23394 20 1.99219 17.6827 1.99219 14.8242C1.99243 11.9651 4.23409 9.64844 7 9.64844ZM6.09668 13.8418L4.07715 14.1465L5.53906 15.6182L5.19434 17.6992L7 16.7168L8.80566 17.6992L8.46191 15.6182L9.92383 14.1465L7.90332 13.8418L7 11.9512L6.09668 13.8418ZM4.60547 0L7 3.30078L9.39453 0H14L7 9.64844L0 0H4.60547Z" fill="white"/>
              </svg>
            </div>
            <span class="text-white font-bold text-base">Ambassador</span>
          </div>

          <!-- Verification with Badge -->
          <div class="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl cursor-pointer">
            <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/40">
              <svg width="20" height="20" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.2511 12.4974C15.4932 12.4974 16.5 13.5045 16.5 14.7467V15.3222C16.5 16.2166 16.1805 17.0816 15.5989 17.7611C14.0295 19.5949 11.6422 20.5 8.49673 20.5C5.35076 20.5 2.96466 19.5946 1.39831 17.7601C0.818531 17.081 0.5 16.2174 0.5 15.3245V14.7467C0.5 13.5045 1.50689 12.4974 2.74896 12.4974H14.2511Z" fill="white"/>
              </svg>
            </div>
            <span class="text-white font-bold text-base flex-1">Verification</span>
            <!-- Red X Badge -->
            <div class="w-6 h-6 bg-red-100 border-2 border-red-500 rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="text-red-500">
                <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
          </div>

          <!-- Security -->
          <div class="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl cursor-pointer">
            <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/40">
              <svg width="20" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.78516 0.0354746C8.92389 -0.0121504 9.07611 -0.0121504 9.21484 0.0354746C10.6561 0.531013 12.1438 0.945188 13.6377 1.26497C14.8838 1.5317 16.1601 1.73823 17.4297 1.87922C17.7546 1.91522 18 2.18263 18 2.50032V8.7386C17.9998 13.165 15.3282 17.2234 11.1943 19.0784L9.26953 19.9427C9.18416 19.9808 9.09193 20.0003 9 20.0003C8.90802 20.0003 8.81583 19.9808 8.73047 19.9427L6.80566 19.0784C2.67178 17.2233 0.000192532 13.165 0 8.7386V2.50032C0 2.18263 0.245411 1.91529 0.570312 1.87922C1.83994 1.73823 3.11627 1.53164 4.3623 1.26497C5.85626 0.945192 7.34396 0.531005 8.78516 0.0354746Z" fill="white"/>
              </svg>
            </div>
            <span class="text-white font-bold text-base">Security</span>
          </div>

          <!-- Settings -->
          <div class="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl cursor-pointer">
            <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/40">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.2222 20L12.3457 19.375L12.8148 17.0913C13.5679 16.8029 14.2469 16.3972 14.8642 15.9135L17.1605 16.6827L17.7778 16.875L18.0988 16.3221L19.679 13.6778L20 13.125L19.5309 12.7163L17.7531 11.2019C17.8179 10.8083 17.9012 10.4147 17.9012 10C17.9012 9.58531 17.8179 9.19169 17.7531 8.79808L19.5309 7.28369L20 6.875L19.679 6.32215L18.0988 3.67785L17.7778 3.125L17.1605 3.31731L14.8642 4.08654C14.2469 3.60277 13.5679 3.19708 12.8148 2.90862L12.3457 0.625L12.2222 0H7.77775L7.65426 0.625L7.18516 2.90862C6.43209 3.19708 5.75306 3.60277 5.13581 4.08654L2.83947 3.31731L2.22215 3.125L1.9012 3.67785L0.32095 6.32215L0 6.875L0.469097 7.28369L2.24688 8.79808C2.18209 9.19169 2.09873 9.58531 2.09873 10C2.09873 10.4147 2.18209 10.8083 2.24688 11.2019L0.469097 12.7163L0 13.125L0.32095 13.6778L1.9012 16.3221L2.22215 16.875L2.83947 16.6827L5.13581 15.9135C5.75306 16.3972 6.43209 16.8029 7.18516 17.0913L7.65426 19.375L7.77775 20H12.2222Z" fill="white"/>
              </svg>
            </div>
            <span class="text-white font-bold text-base">Settings</span>
          </div>

          <!-- Support -->
          <div class="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl cursor-pointer">
            <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/40">
              <svg width="20" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99902 0C13.9325 0 17.998 3.80872 17.998 8.58691V10.1348C17.9981 10.1411 17.999 10.1479 17.999 10.1543V12.9561C17.9992 12.9624 18 12.9692 18 12.9756V14.543C17.9997 16.724 16.1499 18.4277 13.9502 18.4277H11.2695C10.9422 19.3551 10.0281 19.9951 8.99902 19.9951C7.71066 19.9949 6.59988 18.993 6.59961 17.6777C6.59962 16.3623 7.71051 15.3606 8.99902 15.3604C10.0286 15.3604 10.9435 15.9998 11.2705 16.9277H13.9502C15.1589 16.9277 16.1261 16.1539 16.4111 15.1514C16.155 15.2407 15.8817 15.293 15.5986 15.293C14.3103 15.2927 13.1995 14.2908 13.1992 12.9756V10.1543C13.1992 8.83884 14.3101 7.83714 15.5986 7.83691C15.9032 7.83691 16.1972 7.89422 16.4697 7.99707C16.1535 4.38853 12.9637 1.5 8.99902 1.5C5.03445 1.50011 1.84359 4.38856 1.52734 7.99707C1.80001 7.89396 2.09449 7.83697 2.39941 7.83691C3.6881 7.83691 4.7998 8.83869 4.7998 10.1543V12.9756C4.79953 14.291 3.68794 15.293 2.39941 15.293C1.11107 15.2927 0.000274862 14.2908 0 12.9756V8.58691C4.31105e-05 3.80879 4.0657 0.000121624 8.99902 0Z" fill="white"/>
              </svg>
            </div>
            <span class="text-white font-bold text-base">Support</span>
          </div>

          <!-- Help -->
          <div class="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl cursor-pointer">
            <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/40">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.47328 0 0 4.47254 0 10V19.2188C0 19.6502 0.349766 20 0.78125 20H10C15.5267 20 20 15.5275 20 10C20 4.47328 15.5275 0 10 0ZM10 18.4375H1.5625V10C1.5625 5.33684 5.33621 1.5625 10 1.5625C14.6632 1.5625 18.4375 5.33621 18.4375 10C18.4375 14.6632 14.6638 18.4375 10 18.4375Z" fill="white"/>
              </svg>
            </div>
            <span class="text-white font-bold text-base">Help</span>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="absolute bottom-0 left-0 right-0 p-3 space-y-3">
          <!-- Language and ID Section -->
          <div class="flex items-center justify-between gap-3">
            <!-- User ID -->
            <div class="flex items-center gap-2 px-3 py-2 bg-white/30 border border-white/40 rounded-full backdrop-blur-sm">
              <span class="text-white/70 text-sm">ID:</span>
              <span class="text-white text-sm font-medium">{{ profileData.id }}</span>
              <button class="ml-1 p-1 bg-white rounded-r-full border border-gray-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="text-white">
                  <path d="M18.2806 1.19995H8.98336C8.42322 1.19995 7.88603 1.43348 7.48995 1.84917C7.09387 2.26486 6.87136 2.82866 6.87136 3.41653V4.26906H5.81536C5.2278 4.26906 4.66431 4.51402 4.24885 4.95006C3.83338 5.3861 3.59998 5.97749 3.59998 6.59414V20.4749C3.59998 21.0915 3.83338 21.6829 4.24885 22.119C4.66431 22.555 5.2278 22.8 5.81536 22.8H14.9132C15.5008 22.8 16.0643 22.555 16.4797 22.119C16.8952 21.6829 17.1286 21.0915 17.1286 20.4749V19.6998H18.2806C18.8363 19.6999 19.3699 19.4709 19.7663 19.0621C20.1627 18.6533 20.3903 18.0975 20.4 17.5143V3.41653C20.398 2.82794 20.1739 2.26417 19.7766 1.8487C19.3794 1.43323 18.8414 1.19995 18.2806 1.19995Z" fill="white"/>
                </svg>
              </button>
            </div>

            <!-- Language Selector -->
            <div class="flex items-center gap-2 px-3 py-2 bg-white/20 border border-white/30 rounded-full backdrop-blur-sm">
              <div class="w-8 h-8 rounded-full overflow-hidden">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#F0F0F0"/>
                  <path d="M15.3438 16.0025H31.0573C31.0573 14.6433 30.8761 13.3266 30.5385 12.0741H15.3438V16.0025Z" fill="#D80027"/>
                  <path d="M15.3438 8.14179H28.847C27.9252 6.63756 26.7466 5.30797 25.3723 4.21338H15.3438V8.14179Z" fill="#D80027"/>
                  <path d="M7.91596 3.29305H9.28825L8.01178 4.22041L8.49937 5.72094L7.22296 4.79358L5.94655 5.72094L6.36772 4.42464C5.24384 5.36082 4.25878 6.45764 3.44702 7.67976H3.88672L3.07419 8.27005C2.94761 8.48123 2.82619 8.69576 2.70984 8.91346L3.09784 10.1076L2.37396 9.5817C2.19402 9.96294 2.02943 10.3528 1.88149 10.7507L2.30896 12.0665H3.88672L2.61025 12.9938L3.09784 14.4943L1.82143 13.567L1.05684 14.1225C0.980312 14.7377 0.94043 15.3643 0.94043 16.0002H15.9993C15.9993 7.68352 15.9993 6.70305 15.9993 0.941406C13.0244 0.941406 10.2513 1.80435 7.91596 3.29305Z" fill="#0052B4"/>
                </svg>
              </div>
              <span class="text-white text-sm font-medium">ENG</span>
              <svg width="12" height="12" viewBox="0 0 20 20" fill="none" class="text-white/70">
                <circle opacity="0.2" cx="10" cy="10" r="10" fill="white"/>
                <path d="M5.71387 8.57146L9.99958 12.8572L14.2853 8.57146" stroke="white" stroke-linecap="round"/>
              </svg>
            </div>
          </div>

          <!-- Upgrade Section -->
          <div class="bg-purple-100 border border-purple-200 rounded-2xl p-4 relative overflow-hidden">
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
              <button class="px-6 py-2.5 bg-gradient-to-r from-dbd-primary to-blue-600 text-white font-bold rounded-full text-sm hover:shadow-lg transition-all duration-200 flex-shrink-0">
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'

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
  avatar: 'https://cdn.builder.io/api/v1/image/assets%2Fd29a17a6fafa45119ee2070a1a2a68d2%2F5769fbc8fc394e4b9ebfe482d01738fe?format=webp&width=800'
})
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

/* Backdrop blur support */
@supports (backdrop-filter: blur(10px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
}
</style>
