<template>
  <div class="min-h-screen bg-gray-100 flex flex-col font-montserrat telegram-webapp">
    <!-- Fixed Header Section -->
    <div class="w-full max-w-md mx-auto px-4 pt-6 pb-3 bg-gray-100 z-30">
      <!-- Forevers Available Section - Fixed -->
      <div class="mb-2">
        <div class="bg-dbd-light-blue border border-purple-200 rounded-2xl p-4">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-2xl font-semibold text-dbd-dark leading-tight mb-1">
                Forevers<br>Available
              </h2>
            </div>
            <div class="flex items-center gap-3">
              <IconSvg name="forevers" :size="36" color="primary" :hover-effect="false" />
              <span class="text-4xl font-bold text-dbd-primary">2,225</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scrollable Content Area -->
    <div class="flex-1 w-full max-w-md mx-auto overflow-y-auto px-4 pb-24">
      <!-- Rent Out Cards List -->
      <div class="space-y-4">
        <div 
          v-for="item in foreversList" 
          :key="item.id"
          class="bg-dbd-off-white border border-purple-200 rounded-2xl p-3"
        >
          <!-- Header -->
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <CountryFlag :country="item.code" />
              <span class="text-dbd-gray font-medium">{{ item.title }}</span>
            </div>
            <button class="bg-dbd-orange text-white px-3 py-2 rounded-full text-sm font-bold">
              Loyality
            </button>
          </div>

          <!-- Exchange Rate -->
          <div class="flex items-center gap-2 mb-3">
            <span class="text-sm text-dbd-gray">1</span>
            <IconSvg name="forevers" :size="16" color="secondary" :hover-effect="false" />
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
                <IconSvg name="forevers" :size="14" color="dark" :hover-effect="false" />
                <span class="text-sm font-medium text-dbd-dark">{{ item.availableAmount }}</span>
              </div>
            </div>

            <button class="w-6 h-6 border border-gray-300 bg-white rounded-full flex items-center justify-center">
              <IconSvg name="info" :size="16" color="secondary" :hover-effect="true" />
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BottomNavigation from '../components/BottomNavigation.vue'
import CountryFlag from '../components/CountryFlag.vue'

const router = useRouter()

// Telegram WebApp optimizations
onMounted(() => {
  // Set viewport height for mobile
  const setViewportHeight = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
  }
  setViewportHeight()
  window.addEventListener('resize', setViewportHeight)
  window.addEventListener('orientationchange', setViewportHeight)

  // Prevent pull-to-refresh on mobile
  document.body.style.overscrollBehavior = 'none'

  // Telegram WebApp API
  if (window.Telegram && window.Telegram.WebApp) {
    const webapp = window.Telegram.WebApp
    webapp.ready()
    webapp.expand()
  }
})

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
    availableAmount: 250
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
    availableAmount: 250
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
    availableAmount: 250
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
    availableAmount: 250
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
    availableAmount: 250
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
    availableAmount: 250
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

/* Mobile first approach for Telegram mini app */
@media (max-width: 375px) {
  .w-full.max-w-md {
    max-width: 100%;
    padding-left: 12px;
    padding-right: 12px;
  }

  .text-4xl {
    font-size: 28px;
    line-height: 32px;
  }

  .text-3xl {
    font-size: 24px;
    line-height: 28px;
  }

  .text-2xl {
    font-size: 18px;
    line-height: 22px;
  }

  .text-xl {
    font-size: 16px;
    line-height: 20px;
  }

  .text-lg {
    font-size: 14px;
    line-height: 18px;
  }

  .text-sm {
    font-size: 12px;
    line-height: 16px;
  }

  /* Smaller padding for mobile */
  .bg-dbd-light-blue {
    padding: 12px !important;
  }

  /* Adjust card spacing */
  .space-y-4 > * + * {
    margin-top: 12px;
  }
}

/* Small mobile devices */
@media (min-width: 376px) and (max-width: 480px) {
  .w-full.max-w-md {
    max-width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }

  .bg-dbd-light-blue {
    padding: 16px;
  }
}

/* Tablets and larger phones */
@media (min-width: 481px) and (max-width: 768px) {
  .w-full.max-w-md {
    max-width: 420px;
  }

  .bg-dbd-light-blue {
    padding: 20px;
  }

  .text-4xl {
    font-size: 32px;
    line-height: 36px;
  }

  .text-2xl {
    font-size: 20px;
    line-height: 24px;
  }
}

@media (min-width: 769px) {
  .w-full.max-w-md {
    max-width: 480px;
  }
}

/* Telegram WebApp optimizations */
.telegram-webapp {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  overscroll-behavior: none;
  -webkit-overflow-scrolling: touch;
}

/* Hide scrollbar in scrollable area */
.overflow-y-auto {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.overflow-y-auto::-webkit-scrollbar {
  display: none;
}

/* Ensure fixed header doesn't interfere with scrolling */
.z-30 {
  position: relative;
  z-index: 30;
}

/* Better touch targets for mobile */
@media (max-width: 768px) {
  button {
    min-height: 44px;
    min-width: 44px;
    touch-action: manipulation;
  }
}

/* Telegram mini app specific styles */
.font-montserrat {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Optimize font sizes for mobile */
@media (max-width: 375px) {
  .text-2xl {
    font-size: 20px;
    line-height: 24px;
  }

  .text-lg {
    font-size: 16px;
  }

  .text-sm {
    font-size: 12px;
  }
}
</style>
