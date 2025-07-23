<template>
  <div class="min-h-screen bg-gray-100 flex flex-col font-montserrat">
    <!-- Header Section -->
    <header class="relative bg-white pb-4">
      <!-- Status Bar -->
      <div class="flex justify-between items-center px-4 pt-4 pb-2">
        <span class="text-lg font-medium text-dbd-dark">9:41</span>
        <div class="bg-blue-600 rounded-full px-4 py-1">
          <span class="text-white text-sm font-medium">TELEGRAM</span>
        </div>
        <div class="flex items-center gap-1">
          <!-- Signal strength bars -->
          <div class="flex gap-1">
            <div class="w-1 h-4 bg-dbd-dark rounded-sm"></div>
            <div class="w-1 h-3 bg-dbd-dark rounded-sm"></div>
            <div class="w-1 h-2 bg-dbd-dark rounded-sm"></div>
            <div class="w-1 h-1 bg-dbd-dark rounded-sm"></div>
          </div>
          <!-- WiFi icon -->
          <svg class="w-4 h-4 text-dbd-dark ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.93 7.93A9.5 9.5 0 0 1 10 5a9.5 9.5 0 0 1 7.07 2.93.75.75 0 1 0 1.06-1.06A11 11 0 0 0 10 3.5a11 11 0 0 0-8.13 3.37.75.75 0 1 0 1.06 1.06zM5.05 10.05A5.5 5.5 0 0 1 10 8a5.5 5.5 0 0 1 4.95 2.05.75.75 0 1 0 1.1-1.02A7 7 0 0 0 10 6.5a7 7 0 0 0-6.05 2.53.75.75 0 1 0 1.1 1.02zM7.17 12.17A1.5 1.5 0 0 1 10 11.5c.83 0 1.5.67 1.5 1.5a.75.75 0 0 0 1.5 0 3 3 0 0 0-6 0 .75.75 0 0 0 1.5 0z"/>
          </svg>
          <!-- Battery -->
          <div class="ml-1 w-6 h-3 border border-dbd-dark rounded-sm relative">
            <div class="w-full h-full bg-dbd-dark rounded-sm"></div>
          </div>
        </div>
      </div>

      <!-- DBD Logo -->
      <div class="flex justify-center py-2">
        <svg width="60" height="42" viewBox="0 0 60 42" fill="none">
          <g clip-path="url(#clip0_38_17393)">
            <path d="M58.3804 5.66168C57.3799 4.0435 55.9873 2.78187 54.1756 1.8905C52.3639 1.01284 50.2953 0.560303 47.9698 0.560303H37.8972V2.65845C38.6814 3.64581 39.0735 4.83888 39.0735 6.21022C39.0735 7.38957 38.7896 8.4455 38.2082 9.39172C38.1136 9.55628 38.0054 9.70713 37.8972 9.84426V11.3939C38.2758 11.7093 38.6138 12.0521 38.9112 12.4498C39.7089 13.5057 40.101 14.7811 40.101 16.2484C40.101 18.2369 39.3574 19.8413 37.8972 20.9932V22.1726H47.9698C50.3088 22.1726 52.3774 21.7338 54.1756 20.8424C55.9873 19.9647 57.3799 18.7031 58.3804 17.0712C59.3674 15.4393 59.8676 13.5469 59.8676 11.3664C59.8676 9.18602 59.3674 7.29357 58.3804 5.66168Z" fill="#2019CE"/>
            <path d="M2.39308 40.809C1.64947 40.4113 1.05458 39.849 0.635451 39.1359C0.202803 38.4228 0 37.6 0 36.6949C0 35.7899 0.216323 34.9808 0.635451 34.254C1.0681 33.5409 1.64947 32.9786 2.39308 32.5809C3.1367 32.1832 3.97495 31.9775 4.92137 31.9775C5.7461 31.9775 6.47619 32.1284 7.13868 32.4164C7.80118 32.7043 8.34199 33.1295 8.77463 33.6917L7.15221 35.1728C6.57084 34.4597 5.86778 34.1031 5.04305 34.1031C4.55632 34.1031 4.12367 34.2128 3.74511 34.4322C3.36654 34.6516 3.06909 34.9533 2.86629 35.351C2.66349 35.7487 2.55532 36.2013 2.55532 36.7087C2.55532 37.2161 2.66349 37.6686 2.86629 38.0663C3.06909 38.464 3.36654 38.7657 3.74511 38.9851C4.12367 39.2045 4.55632 39.3142 5.04305 39.3142C5.86778 39.3142 6.57084 38.9576 7.15221 38.2446L8.76111 39.7256C8.32847 40.2741 7.77414 40.6993 7.12517 41.0009C6.46267 41.2889 5.73258 41.4398 4.90785 41.4398C3.98847 41.4123 3.1367 41.2204 2.39308 40.809Z" fill="#54565A"/>
            <path d="M15.8592 39.465H12.0735L11.3705 41.234H8.78809L12.736 32.1558H15.2237L19.1851 41.234H16.5487L15.8592 39.465ZM15.1156 37.5725L13.9663 34.6653L12.8171 37.5725H15.1156Z" fill="#54565A"/>
            <path d="M26.2428 32.5671C26.8377 32.8413 27.2974 33.2253 27.6219 33.7327C27.9464 34.2401 28.1086 34.8298 28.1086 35.5155C28.1086 36.2011 27.9464 36.7908 27.6219 37.2982C27.2974 37.8056 26.8377 38.1896 26.2428 38.4638C25.6479 38.7381 24.9449 38.8752 24.1337 38.8752H22.5788V41.2477H20.0505V32.1694H24.1472C24.9449 32.1557 25.6479 32.2928 26.2428 32.5671ZM25.1612 36.4891C25.4316 36.256 25.5533 35.9269 25.5533 35.5155C25.5533 35.0903 25.4181 34.7612 25.1612 34.5281C24.9043 34.295 24.4987 34.1715 23.9849 34.1715H22.5788V36.8319H23.9849C24.4987 36.8457 24.8908 36.7222 25.1612 36.4891Z" fill="#54565A"/>
            <path d="M29.366 32.1558H31.8943V41.234H29.366V32.1558Z" fill="#54565A"/>
            <path d="M36.1531 34.199H33.4084V32.1694H41.4259V34.199H38.6949V41.234H36.1666V34.199H36.1531Z" fill="#54565A"/>
            <path d="M47.7264 39.465H43.9407L43.2376 41.234H40.6553L44.6032 32.1558H47.0909L51.0523 41.234H48.4159L47.7264 39.465ZM46.9827 37.5725L45.8335 34.6653L44.6843 37.5725H46.9827Z" fill="#54565A"/>
            <path d="M51.9043 32.1558H54.4326V39.1907H58.705V41.2203H51.9043V32.1558Z" fill="#54565A"/>
            <path d="M58.9213 25.9026H0.270508V28.1927H58.9213V25.9026Z" fill="#FF6800"/>
          </g>
        </svg>
      </div>
    </header>

    <!-- Content Area -->
    <div class="flex-1 bg-gray-100 rounded-t-2xl relative">
      <!-- Navigation Header -->
      <div class="relative bg-gray-100 pt-2 pb-4">
        <div class="flex items-center justify-between px-4">
          <button 
            @click="goBack"
            class="w-11 h-11 rounded-full border border-gray-300 bg-dbd-off-white flex items-center justify-center"
          >
            <div class="relative w-5 h-5">
              <div class="absolute w-4 h-0.5 bg-dbd-dark rounded-full rotate-45 top-2 left-0.5"></div>
              <div class="absolute w-4 h-0.5 bg-dbd-dark rounded-full -rotate-45 top-2.5 left-0.5"></div>
            </div>
          </button>

          <div class="text-center">
            <h1 class="text-lg font-medium">
              <span class="text-dbd-orange">DBD Capital</span>
              <span class="text-dbd-primary"> Forevers Bot</span>
            </h1>
            <p class="text-xs text-dbd-light-gray">mini App</p>
          </div>

          <button class="w-11 h-11 flex items-center justify-center">
            <div class="flex flex-col gap-1">
              <div class="w-1 h-1 bg-dbd-dark rounded-full"></div>
              <div class="w-1 h-1 bg-dbd-dark rounded-full"></div>
              <div class="w-1 h-1 bg-dbd-dark rounded-full"></div>
            </div>
          </button>
        </div>
      </div>

      <!-- Forevers Available Section -->
      <div class="px-4 mb-6">
        <div class="bg-dbd-light-blue border border-purple-200 rounded-2xl p-3">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-semibold text-dbd-dark leading-tight">
                Forevers<br>Available
              </h2>
            </div>
            <div class="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" class="text-dbd-primary">
                <path d="M30.6666 7.38069V1.33325H7.1291V9.01136H1.33325V15.0588H7.1291V30.1075H13.894V22.7276H19.6153V16.6801H13.894V15.0588H25.1316V9.01136H13.894V7.38069H30.6666Z" fill="currentColor"/>
              </svg>
              <span class="text-3xl font-bold text-dbd-primary">2,225</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Rent Out Cards List -->
      <div class="px-4 space-y-4 pb-24">
        <div 
          v-for="item in foreversList" 
          :key="item.id"
          class="bg-dbd-off-white border border-purple-200 rounded-2xl p-3"
        >
          <!-- Header -->
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                <component :is="item.flagComponent" class="w-full h-full" />
              </div>
              <span class="text-dbd-gray font-medium">{{ item.title }}</span>
            </div>
            <button class="bg-dbd-orange text-white px-3 py-2 rounded-full text-sm font-bold">
              Loyality
            </button>
          </div>

          <!-- Exchange Rate -->
          <div class="flex items-center gap-2 mb-3">
            <span class="text-sm text-dbd-gray">1</span>
            <svg width="16" height="16" viewBox="0 0 16 16" class="text-dbd-gray">
              <path d="M15.2636 2H4.61925C4.15063 2 3.8159 2.28571 3.8159 2.68571V5.48571H0.803347C0.334728 5.54286 0 5.82857 0 6.22857C0 6.62857 0.334728 6.91429 0.803347 6.91429H3.8159V13.3143C3.8159 13.7143 4.15063 14 4.61925 14C5.08787 14 5.42259 13.7143 5.42259 13.3143V10.3429H8.83682C9.30544 10.3429 9.64017 10.0571 9.64017 9.65714C9.64017 9.25714 9.30544 8.97143 8.83682 8.97143H5.42259V6.85714H11.9163C12.3849 6.85714 12.7197 6.57143 12.7197 6.17143C12.7197 5.77143 12.3849 5.48571 11.9163 5.48571H5.42259V3.37143H15.1967C15.6653 3.37143 16 3.08571 16 2.68571C16 2.28571 15.7322 2 15.2636 2Z" fill="currentColor"/>
            </svg>
            <span class="text-sm text-dbd-gray">{{ item.code }}</span>
            <span class="text-sm text-dbd-gray">/</span>
            <span class="text-sm text-dbd-primary font-medium">{{ item.usdRate }} USD</span>

            <!-- Price change indicator -->
            <div class="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold"
                 :class="item.priceChange >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
              <svg class="w-2 h-2" :class="item.priceChange >= 0 ? '-rotate-45' : 'rotate-45'" viewBox="0 0 10 13">
                <path d="M0.720539 4.9362L4.6673 1.01033M4.6673 1.01033L8.58641 4.92944M4.6673 1.01033L4.65686 12.3136" 
                      :stroke="item.priceChange >= 0 ? '#07B80E' : '#FF1919'" 
                      stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ item.priceChange >= 0 ? '+' : '' }}{{ item.priceChange }}%
            </div>
          </div>

          <!-- Values Section -->
          <div class="bg-dbd-light-blue rounded-xl p-3 mb-3">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-dbd-gray">Rental cost per 1 Forevers</span>
              <span class="text-base font-semibold text-dbd-gray">${{ item.rentalCost }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-dbd-gray">Potential income per month</span>
              <span class="text-base font-semibold text-dbd-gray">${{ item.potentialIncome }}</span>
            </div>
          </div>

          <!-- Available Section -->
          <div class="bg-green-100 rounded-xl p-3 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-sm text-gray-600">{{ item.availableText }}</span>
              <span v-if="item.availableAmount" class="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
              <div v-if="item.availableAmount" class="flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 14 14" class="text-dbd-dark">
                  <path d="M12.8602 1.40015H4.3802C4.00686 1.40015 3.7402 1.66681 3.7402 2.04015V4.65348H1.3402C0.966862 4.70681 0.700195 4.97348 0.700195 5.34681C0.700195 5.72015 0.966862 5.98681 1.3402 5.98681H3.7402V11.9601C3.7402 12.3335 4.00686 12.6001 4.3802 12.6001C4.75353 12.6001 5.0202 12.3335 5.0202 11.9601V9.18681H7.7402C8.11353 9.18681 8.3802 8.92015 8.3802 8.54681C8.3802 8.17348 8.11353 7.90681 7.7402 7.90681H5.0202V5.93348H10.1935C10.5669 5.93348 10.8335 5.66681 10.8335 5.29348C10.8335 4.92015 10.5669 4.65348 10.1935 4.65348H5.0202V2.68015H12.8069C13.1802 2.68015 13.4469 2.41348 13.4469 2.04015C13.4469 1.66681 13.2335 1.40015 12.8602 1.40015Z" fill="currentColor"/>
                </svg>
                <span class="text-sm font-medium text-dbd-dark">{{ item.availableAmount }}</span>
              </div>
            </div>

            <button class="w-6 h-6 border border-gray-300 bg-white rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" class="text-dbd-gray">
                <path d="M10 2C5.5888 2 2 5.58885 2 10C2 14.4112 5.5888 18 10 18C14.4112 18 18 14.4112 18 10C18 5.58885 14.4112 2 10 2ZM10 16.5455C6.39079 16.5455 3.45455 13.6092 3.45455 10C3.45455 6.39088 6.39079 3.45455 10 3.45455C13.6092 3.45455 16.5455 6.39088 16.5455 10C16.5455 13.6092 13.6092 16.5455 10 16.5455Z" fill="currentColor"/>
                <path d="M10 5.39453C9.46543 5.39453 9.03052 5.82973 9.03052 6.36466C9.03052 6.89911 9.46543 7.33393 10 7.33393C10.5346 7.33393 10.9695 6.89911 10.9695 6.36466C10.9695 5.82973 10.5346 5.39453 10 5.39453Z" fill="currentColor"/>
                <path d="M9.99998 8.78711C9.59833 8.78711 9.27271 9.11273 9.27271 9.51438V13.878C9.27271 14.2797 9.59833 14.6053 9.99998 14.6053C10.4016 14.6053 10.7273 14.2797 10.7273 13.878V9.51438C10.7273 9.11273 10.4016 8.78711 9.99998 8.78711Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BottomNavigation from '../components/BottomNavigation.vue'

const router = useRouter()

// Flag components
const GermanyFlag = {
  template: `
    <div class="w-full h-full relative bg-gray-300 rounded-full overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-1/3 bg-black"></div>
      <div class="absolute top-1/3 left-0 w-full h-1/3 bg-red-600"></div>
      <div class="absolute top-2/3 left-0 w-full h-1/3 bg-yellow-400"></div>
    </div>
  `
}

const UAEFlag = {
  template: `
    <div class="w-full h-full relative bg-gray-300 rounded-full overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-1/3 bg-green-600"></div>
      <div class="absolute top-1/3 left-0 w-full h-1/3 bg-white"></div>
      <div class="absolute top-2/3 left-0 w-full h-1/3 bg-black"></div>
      <div class="absolute top-0 left-0 w-1/4 h-full bg-red-600"></div>
    </div>
  `
}

const KazakhstanFlag = {
  template: `
    <div class="w-full h-full bg-blue-400 rounded-full flex items-center justify-center">
      <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
    </div>
  `
}

// Rent out data
const foreversList = ref([
  {
    id: 'de',
    title: 'Forevers DE Balance',
    code: 'DE',
    usdRate: '4',
    priceChange: 0.17,
    rentalCost: 4,
    potentialIncome: 120,
    availableText: 'Available',
    availableAmount: 250,
    flagComponent: GermanyFlag
  },
  {
    id: 'uae',
    title: 'Forevers UAE Balance',
    code: 'UAE',
    usdRate: '9',
    priceChange: 0.17,
    rentalCost: 4,
    potentialIncome: 120,
    availableText: 'Available without restrictions',
    availableAmount: 250,
    flagComponent: UAEFlag
  },
  {
    id: 'kz',
    title: 'Forevers KZ Balance',
    code: 'KZ',
    usdRate: '8',
    priceChange: -0.17,
    rentalCost: 4,
    potentialIncome: 120,
    availableText: 'Available',
    availableAmount: 250,
    flagComponent: KazakhstanFlag
  },
  {
    id: 'pl',
    title: 'Forevers PL Balance',
    code: 'PL',
    usdRate: '4',
    priceChange: -0.17,
    rentalCost: 4,
    potentialIncome: 120,
    availableText: 'Available',
    availableAmount: 250,
    flagComponent: KazakhstanFlag
  },
  {
    id: 'ua',
    title: 'Forevers UA Balance',
    code: 'UA',
    usdRate: '4',
    priceChange: -0.17,
    rentalCost: 4,
    potentialIncome: 120,
    availableText: 'Available',
    availableAmount: 250,
    flagComponent: KazakhstanFlag
  },
  {
    id: 'us',
    title: 'Forevers US Balance',
    code: 'US',
    usdRate: '4',
    priceChange: -0.17,
    rentalCost: 4,
    potentialIncome: 120,
    availableText: 'Available',
    availableAmount: 250,
    flagComponent: KazakhstanFlag
  }
])

const goBack = () => {
  router.push('/favorites')
}
</script>

<style scoped>
/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 0;
}

/* Ensure proper touch scrolling on iOS */
* {
  -webkit-tap-highlight-color: transparent;
}

/* Mobile optimizations */
@media (max-width: 375px) {
  .text-3xl {
    font-size: 28px;
  }
  
  .text-xl {
    font-size: 18px;
  }
  
  .px-4 {
    padding-left: 12px;
    padding-right: 12px;
  }
}

@media (min-width: 376px) and (max-width: 768px) {
  .max-w-md {
    max-width: 420px;
  }
}

/* Telegram mini app specific styles */
.font-montserrat {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
</style>
