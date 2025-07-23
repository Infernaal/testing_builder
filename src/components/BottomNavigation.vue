<template>
  <div class="bg-white rounded-t-2xl shadow-lg border-t border-gray-100">
    <!-- Home Indicator -->
    <div class="flex justify-center pt-4 pb-2">
      <div class="w-35 h-1.5 bg-black rounded-full"></div>
    </div>
    
    <!-- Navigation Items -->
    <div class="flex items-center justify-center px-1 pb-2">
      <div class="flex items-center gap-4 w-full max-w-sm">
        <!-- Profile -->
        <button 
          @click="navigateTo('profile')"
          :class="[
            'flex flex-col items-center gap-1 p-2 min-w-[52px]',
            activeTab === 'profile' ? 'text-blue-700' : 'text-gray-600'
          ]"
        >
          <div class="relative">
            <div 
              :class="[
                'w-8 h-8 rounded-lg flex items-center justify-center',
                activeTab === 'profile' ? 'bg-blue-700' : ''
              ]"
            >
              <!-- Profile Avatar with Badge -->
              <div class="relative w-8 h-8">
                <div class="w-8 h-8 rounded-full border-2 border-purple-400 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" 
                    alt="Profile" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <!-- Silver Badge -->
                <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 8 8" class="text-white">
                    <path d="M4 0L5 3H8L5.5 5L6.5 8L4 6L1.5 8L2.5 5L0 3H3L4 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <!-- Dropdown Arrow -->
                <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-gray-100 border border-gray-300 rounded-full flex items-center justify-center">
                  <svg width="8" height="6" viewBox="0 0 8 6" class="text-gray-600">
                    <path d="M1 1L4 4L7 1" stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <span class="text-xs font-medium">Profile</span>
        </button>

        <!-- Wallet -->
        <button 
          @click="navigateTo('wallet')"
          :class="[
            'flex flex-col items-center gap-1 p-2 min-w-[52px]',
            activeTab === 'wallet' ? 'text-blue-700' : 'text-gray-600'
          ]"
        >
          <div 
            :class="[
              'w-8 h-8 rounded-lg flex items-center justify-center',
              activeTab === 'wallet' ? 'bg-blue-700' : ''
            ]"
          >
            <svg width="20" height="18" viewBox="0 0 20 18" :class="activeTab === 'wallet' ? 'text-white' : 'text-gray-600'">
              <path d="M15.3369 0C16.7553 0 17.9215 1.10571 18.0293 2.50488C19.1647 2.82612 19.9999 3.87598 20 5.11914V15.2842C19.9998 16.7817 18.7879 18 17.2988 18H2.70117C1.21206 18 0.0002339 16.7817 0 15.2842V2.71582C0.000233829 1.21827 1.21206 0 2.70117 0H15.3369ZM2.70117 3.67188C1.90768 3.67188 1.2618 4.32114 1.26172 5.11914V15.2842C1.26195 16.082 1.90778 16.7314 2.70117 16.7314H17.2988C18.0922 16.7314 18.738 16.082 18.7383 15.2842V13.1484H14.7158C13.1219 13.1484 11.8244 11.8443 11.8242 10.2412C11.8242 8.63803 13.1217 7.33301 14.7158 7.33301H18.7383V5.11914C18.7382 4.32114 18.0923 3.67188 17.2988 3.67188H2.70117ZM14.7158 8.60254C13.8174 8.60254 13.0859 9.33767 13.0859 10.2412C13.0861 11.1446 13.8175 11.8799 14.7158 11.8799H18.7383V8.60254H14.7158ZM15.9404 9.6748C16.3756 9.6748 16.7283 9.99219 16.7285 10.3838C16.7285 10.7755 16.3757 11.0938 15.9404 11.0938C15.5052 11.0937 15.1523 10.7755 15.1523 10.3838C15.1526 9.99222 15.5053 9.67484 15.9404 9.6748ZM2.70117 1.26855C1.90778 1.26855 1.26195 1.91796 1.26172 2.71582V2.82227C1.67869 2.5571 2.17244 2.40332 2.70117 2.40332H16.7422C16.5994 1.75535 16.0235 1.26855 15.3369 1.26855H2.70117Z" fill="currentColor"/>
            </svg>
          </div>
          <span class="text-xs font-medium">Wallet</span>
        </button>

        <!-- Favorites (Forevers) - Active -->
        <button 
          @click="navigateTo('favorites')"
          :class="[
            'flex flex-col items-center gap-1 p-2 min-w-[52px]',
            activeTab === 'favorites' ? 'text-blue-700' : 'text-gray-600'
          ]"
        >
          <div 
            :class="[
              'w-8 h-8 rounded-lg flex items-center justify-center',
              activeTab === 'favorites' ? 'bg-blue-700' : ''
            ]"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" :class="activeTab === 'favorites' ? 'text-white' : 'text-gray-600'">
              <path d="M19.0791 0C19.6648 0 19.9999 0.476058 20 1.14258C20 1.80914 19.5817 2.28598 18.9961 2.28613H6.77832V5.80957H14.8955C15.4812 5.80963 15.8993 6.28565 15.8994 6.95215C15.8994 7.61877 15.4812 8.09564 14.8955 8.0957H6.77832V11.6191H11.0459C11.6316 11.6191 12.0497 12.0951 12.0498 12.7617C12.0498 13.4284 11.6317 13.9043 11.0459 13.9043H6.77832V18.8574C6.7782 19.5238 6.35992 19.9998 5.77441 20C5.18872 20 4.76965 19.5239 4.76953 18.8574V8.19043H1.00391C0.418346 8.19028 9.72129e-05 7.71429 0 7.04785C0 6.38129 0.418278 5.90491 1.00391 5.80957H4.76953V1.14258C4.76965 0.476058 5.18872 0 5.77441 0H19.0791Z" fill="currentColor"/>
            </svg>
          </div>
          <span class="text-xs font-medium font-semibold">Favorites</span>
        </button>

        <!-- Cart -->
        <button 
          @click="navigateTo('cart')"
          :class="[
            'flex flex-col items-center gap-1 p-2 min-w-[52px]',
            activeTab === 'cart' ? 'text-blue-700' : 'text-gray-600'
          ]"
        >
          <div 
            :class="[
              'w-8 h-8 rounded-lg flex items-center justify-center',
              activeTab === 'cart' ? 'bg-blue-700' : ''
            ]"
          >
            <svg width="18" height="20" viewBox="0 0 18 20" :class="activeTab === 'cart' ? 'text-white' : 'text-gray-600'">
              <path d="M8.99992 0C11.2937 6.01927e-05 13.1601 1.71665 13.1601 3.82617V4.95801H15.8886C16.2926 4.95801 16.6298 5.24124 16.6659 5.61133L17.9892 19.165C17.996 19.2031 17.9998 19.2424 17.9999 19.2822C17.9999 19.6786 17.6508 19.9999 17.2197 20H0.781174C0.562191 20 0.352885 19.9152 0.205002 19.7666C0.0571058 19.6179 -0.0167136 19.4186 0.00285324 19.2178L1.33195 5.61133C1.3681 5.24123 1.70529 4.95801 2.1093 4.95801H4.83977V3.82617C4.83977 1.71662 6.70624 0 8.99992 0ZM2.82317 6.39355L1.63469 18.5645H16.3632L15.1747 6.39355H13.1601V7.67676C13.1601 8.07321 12.81 8.39551 12.3788 8.39551C11.9478 8.3953 11.5986 8.07308 11.5986 7.67676V6.39355H6.40129V7.67676C6.40129 8.07314 6.05211 8.39539 5.62102 8.39551C5.18982 8.39551 4.83977 8.07321 4.83977 7.67676V6.39355H2.82317ZM8.99992 1.43555C7.56707 1.43555 6.40129 2.50827 6.40129 3.82617V4.95801H11.5986V3.82617C11.5986 2.50828 10.4329 1.43556 8.99992 1.43555Z" fill="currentColor"/>
            </svg>
          </div>
          <span class="text-xs font-medium">Cart</span>
        </button>

        <!-- Holders -->
        <button 
          @click="navigateTo('holders')"
          :class="[
            'flex flex-col items-center gap-1 p-2 min-w-[52px]',
            activeTab === 'holders' ? 'text-blue-700' : 'text-gray-600'
          ]"
        >
          <div 
            :class="[
              'w-8 h-8 rounded-lg flex items-center justify-center',
              activeTab === 'holders' ? 'bg-blue-700' : ''
            ]"
          >
            <svg width="18" height="20" viewBox="0 0 18 20" :class="activeTab === 'holders' ? 'text-white' : 'text-gray-600'">
              <path d="M8.44238 12.1094C9.31973 12.1094 10.1776 12.2621 10.9922 12.5625C11.4039 12.7144 11.6127 13.1645 11.458 13.5684C11.3032 13.9722 10.8432 14.1763 10.4316 14.0244C9.79694 13.7904 9.12755 13.6719 8.44238 13.6719H7.24805C4.12994 13.6719 1.59277 16.1602 1.59277 19.2188C1.59277 19.6501 1.23657 19.9998 0.796875 20C0.35699 20 0 19.6502 0 19.2188C0 15.2986 3.25161 12.1094 7.24805 12.1094H8.44238ZM15.5312 10.3125C15.971 10.3126 16.3271 10.6624 16.3271 11.0938V11.6953C16.63 11.7604 16.9748 11.86 17.3701 12.0107C17.78 12.1671 17.9834 12.6195 17.8242 13.0215C17.6648 13.4236 17.2029 13.6232 16.793 13.4668C16.0335 13.1771 15.5576 13.1377 15.1924 13.1377C14.8301 13.1377 14.5352 13.4301 14.5352 13.7891C14.5352 14.1663 14.955 14.4405 15.5332 14.4404C16.8933 14.4404 17.9998 15.4329 18 16.6533C18 17.2476 17.7543 17.8071 17.3086 18.2285C17.0281 18.4937 16.6913 18.6817 16.3271 18.7822V19.2188C16.3271 19.6501 15.971 19.9999 15.5312 20C15.0914 20 14.7344 19.6502 14.7344 19.2188V18.7588C14.3074 18.6775 13.8264 18.5489 13.3652 18.3691C12.9565 18.2098 12.7564 17.7555 12.9189 17.3545C13.0814 16.9537 13.5445 16.758 13.9531 16.917C14.6767 17.1991 15.4104 17.3046 15.7031 17.3047C16.0779 17.3047 16.4072 17.0001 16.4072 16.6533C16.407 16.3005 16.0068 16.0029 15.5332 16.0029C14.0562 16.0029 12.9424 15.051 12.9424 13.7891C12.9424 12.7229 13.7127 11.8309 14.7344 11.6221V11.0938C14.7344 10.6623 15.0914 10.3125 15.5312 10.3125ZM7.76562 0C10.7299 7.33854e-05 13.1416 2.36571 13.1416 5.27344C13.1416 8.18117 10.7299 10.5468 7.76562 10.5469C4.80124 10.5469 2.38965 8.18121 2.38965 5.27344C2.38965 2.36566 4.80124 0 7.76562 0ZM7.76562 1.5625C5.67958 1.5625 3.98242 3.22723 3.98242 5.27344C3.98242 7.31965 5.67958 8.98438 7.76562 8.98438C9.85161 8.9843 11.5488 7.3196 11.5488 5.27344C11.5488 3.22727 9.85161 1.56257 7.76562 1.5625Z" fill="currentColor"/>
            </svg>
          </div>
          <span class="text-xs font-medium">Holders</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

// Props
const props = defineProps({
  activeTab: {
    type: String,
    default: 'favorites'
  }
})

// Emits
const emit = defineEmits(['navigate'])

// Methods
const navigateTo = (tab) => {
  emit('navigate', tab)
}
</script>

<style scoped>
/* Additional responsive styles if needed */
@media (max-width: 375px) {
  .min-w-[52px] {
    min-width: 48px;
  }
}
</style>
