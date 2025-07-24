<template>
  <div class="h-screen bg-gray-100 flex flex-col font-sans overflow-hidden">
    <!-- Main Content -->
    <main class="flex-1 w-full max-w-md mx-auto px-3.5 pt-4 pb-2 flex flex-col">
      <!-- Total Balance Card -->
      <div class="bg-purple-50 border border-purple-200 rounded-2xl p-3 mb-2 flex-shrink-0">
        <div class="flex items-start justify-between mb-4">
          <h2 class="text-xl font-semibold text-black leading-5">
            Forevers<br>Balance
          </h2>

          <div class="flex flex-col items-end gap-2">
            <div class="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" class="text-blue-700">
                <path d="M30.6666 7.38078V1.33334H7.1291V9.01145H1.33325V15.0589H7.1291V30.1076H13.894V22.7277H19.6153V16.6802H13.894V15.0589H25.1316V9.01145H13.894V7.38078H30.6666Z" fill="currentColor"/>
              </svg>
              <span class="text-2xl font-bold text-blue-700">{{ totalBalance.toLocaleString() }}</span>
            </div>
            <p class="text-base text-gray-600">Worth ${{ totalWorth.toLocaleString() }}</p>
          </div>
        </div>

        <button
          @click="handleRentOut"
          class="w-full bg-gradient-to-r from-blue-700 to-purple-600 text-white font-bold py-3 px-12 rounded-full hover:from-blue-800 hover:to-purple-700 transition-all duration-200"
        >
          Rent Out Forevers
        </button>
      </div>

      <!-- Scroll Content -->
      <div class="flex-1 overflow-y-auto pt-2 space-y-2" v-if="balances.length > 0">
        <div
          v-for="balance in balances"
          :key="balance.id"
          class="bg-white border border-purple-200 rounded-2xl p-3 relative min-h-[216px] flex flex-col justify-between"
        >
          <!-- Country Header -->
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                <div :class="flagClasses[balance.code]" class="w-full h-full"></div>
              </div>
              <span class="text-gray-700 font-medium text-base">{{ balance.country }} Balance</span>
            </div>

            <button
              @click="handleAddBalance(balance.id)"
              class="w-16 h-11 border border-blue-700 bg-purple-50 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" class="text-blue-700">
                <path d="M18 13H6C5.4 13 5 12.6 5 12C5 11.4 5.4 11 6 11H18C18.6 11 19 11.4 19 12C19 12.6 18.6 13 18 13Z" fill="currentColor"/>
                <path d="M12 19C11.4 19 11 18.6 11 18V6C11 5.4 11.4 5 12 5C12.6 5 13 5.4 13 6V18C13 18.6 12.6 19 12 19Z" fill="currentColor"/>
              </svg>
            </button>
          </div>

          <!-- Token Info -->
          <div class="flex items-center gap-1 mb-3 flex-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" class="text-blue-700">
              <path d="M23 5.53558V1H5.34689V6.75858H1V11.2942H5.34689V22.5807H10.4206V17.0457H14.7116V12.5102H10.4206V11.2942H18.8488V6.75858H10.4206V5.53558H23Z" fill="currentColor"/>
            </svg>
            <span class="text-lg font-semibold text-blue-700">{{ balance.amount.toLocaleString() }}</span>
            <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span class="text-sm text-gray-600">1₽{{ balance.code }}/{{ balance.usdRate }} USD</span>

            <div
              :class="[
                'px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1 ml-1',
                balance.priceChange > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              ]"
            >
              <svg
                :class="[
                  'w-2 h-2 transform',
                  balance.priceChange > 0 ? '-rotate-45' : 'rotate-45'
                ]"
                viewBox="0 0 10 13"
                fill="none"
              >
                <path
                  d="M0.720539 4.9362L4.6673 1.01033M4.6673 1.01033L8.58641 4.92944M4.6673 1.01033L4.65686 12.3136"
                  :stroke="balance.priceChange > 0 ? '#07B80E' : '#FF1919'"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ balance.priceChange > 0 ? '+' : '' }}{{ balance.priceChange.toFixed(2) }}%
            </div>
          </div>

          <!-- Values Section -->
          <div class="bg-purple-50 rounded-xl p-3 mb-3">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-gray-600">Current value</span>
              <span class="text-base font-semibold text-gray-700">${{ balance.currentValue.toLocaleString() }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600">Potential worth</span>
              <span class="text-base font-semibold text-gray-700">${{ balance.potentialWorth.toLocaleString() }}</span>
            </div>
          </div>

          <!-- Available Section -->
          <div class="bg-green-100 rounded-xl p-3 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-sm text-gray-600">Available</span>
              <template v-if="balance.availableAmount">
                <span class="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                <div class="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 14 14" class="text-black">
                    <path d="M12.8602 1.40021H4.3802C4.00686 1.40021 3.7402 1.66687 3.7402 2.04021V4.65354H1.3402C0.966862 4.70687 0.700195 4.97354 0.700195 5.34687C0.700195 5.72021 0.966862 5.98687 1.3402 5.98687H3.7402V11.9602C3.7402 12.3335 4.00686 12.6002 4.3802 12.6002C4.75353 12.6002 5.0202 12.3335 5.0202 11.9602V9.18687H7.7402C8.11353 9.18687 8.3802 8.92021 8.3802 8.54687C8.3802 8.17354 8.11353 7.90687 7.7402 7.90687H5.0202V5.93354H10.1935C10.5669 5.93354 10.8335 5.66687 10.8335 5.29354C10.8335 4.92021 10.5669 4.65354 10.1935 4.65354H5.0202V2.68021H12.8069C13.1802 2.68021 13.4469 2.41354 13.4469 2.04021C13.4469 1.66687 13.2335 1.40021 12.8602 1.40021Z" fill="currentColor"/>
                  </svg>
                  <span class="text-sm font-medium text-black">{{ balance.availableAmount }}</span>
                </div>
              </template>
              <template v-else>
                <span class="text-sm text-gray-600">without restrictions</span>
              </template>
            </div>

            <button class="w-6 h-6 border border-gray-300 bg-white rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" class="text-gray-600">
                <path d="M10 2C5.5888 2 2 5.58885 2 10C2 14.4112 5.5888 18 10 18C14.4112 18 18 14.4112 18 10C18 5.58885 14.4112 2 10 2ZM10 16.5455C6.39079 16.5455 3.45455 13.6092 3.45455 10C3.45455 6.39088 6.39079 3.45455 10 3.45455C13.6092 3.45455 16.5455 6.39088 16.5455 10C16.5455 13.6092 13.6092 16.5455 10 16.5455Z" fill="currentColor"/>
                <path d="M10 5.39453C9.46543 5.39453 9.03052 5.82973 9.03052 6.36466C9.03052 6.89911 9.46543 7.33393 10 7.33393C10.5346 7.33393 10.9695 6.89911 10.9695 6.36466C10.9695 5.82973 10.5346 5.39453 10 5.39453Z" fill="currentColor"/>
                <path d="M9.99998 8.78711C9.59833 8.78711 9.27271 9.11273 9.27271 9.51438V13.878C9.27271 14.2797 9.59833 14.6053 9.99998 14.6053C10.4016 14.6053 10.7273 14.2797 10.7273 13.878V9.51438C10.7273 9.11273 10.4016 8.78711 9.99998 8.78711Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State (when no balances from backend) -->
      <div v-else class="flex-1 flex items-center justify-center">
        <div class="text-center">
          <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 32 32" class="text-gray-400">
              <path d="M30.6666 7.38078V1.33334H7.1291V9.01145H1.33325V15.0589H7.1291V30.1076H13.894V22.7277H19.6153V16.6802H13.894V15.0589H25.1316V9.01145H13.894V7.38078H30.6666Z" fill="currentColor"/>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">No Balances Found</h3>
          <p class="text-gray-600 mb-4">Your balance data will appear here when available.</p>
        </div>
      </div>
    </main>

    <!-- Bottom Navigation -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import BottomNavigation from '../components/BottomNavigation.vue'

const router = useRouter()

// App state
const isLoading = ref(false)

// Data - Ready for backend integration
const totalBalance = ref(10196)
const totalWorth = ref(56000)
const balances = ref([]) // Will be populated from backend

// Flag classes for different countries
const flagClasses = {
  'DE': 'bg-gradient-to-b from-black via-red-600 to-yellow-400',
  'UAE': 'bg-gradient-to-r from-green-600 via-white to-red-600',
  'KZ': 'bg-blue-400',
  'PL': 'bg-red-500',
  'UA': 'bg-yellow-400 border-b-2 border-blue-500',
  'US': 'bg-red-600 bg-gradient-to-r from-red-600 via-white to-blue-600'
}

// Mock data for development (remove when connecting to backend)
const mockBalances = [
  {
    id: 'de',
    country: 'Forevers DE',
    code: 'DE',
    amount: 1000,
    usdRate: 4,
    priceChange: 0.17,
    currentValue: 4000,
    potentialWorth: 8000,
    availableAmount: 250
  },
  {
    id: 'uae',
    country: 'Forevers UAE',
    code: 'UAE',
    amount: 1000,
    usdRate: 9,
    priceChange: 0.17,
    currentValue: 4000,
    potentialWorth: 8000,
    availableAmount: null
  },
  {
    id: 'kz',
    country: 'Forevers KZ',
    code: 'KZ',
    amount: 1000,
    usdRate: 8,
    priceChange: -0.17,
    currentValue: 4000,
    potentialWorth: 8000,
    availableAmount: 250
  },
  {
    id: 'pl',
    country: 'Forevers PL',
    code: 'PL',
    amount: 1000,
    usdRate: 4,
    priceChange: -0.17,
    currentValue: 4000,
    potentialWorth: 8000,
    availableAmount: 250
  },
  {
    id: 'ua',
    country: 'Forevers UA',
    code: 'UA',
    amount: 1000,
    usdRate: 4,
    priceChange: -0.17,
    currentValue: 4000,
    potentialWorth: 8000,
    availableAmount: 250
  },
  {
    id: 'us',
    country: 'Forevers US',
    code: 'US',
    amount: 1000,
    usdRate: 4,
    priceChange: -0.17,
    currentValue: 4000,
    potentialWorth: 8000,
    availableAmount: 250
  }
]

// Backend integration functions
const fetchBalancesFromBackend = async () => {
  isLoading.value = true
  try {
    // TODO: Replace with actual API call to Python backend
    // const response = await fetch('/api/balances')
    // const data = await response.json()

    // For now, use mock data
    setTimeout(() => {
      balances.value = mockBalances
      isLoading.value = false
    }, 1000)

  } catch (error) {
    console.error('Failed to fetch balances:', error)
    isLoading.value = false
  }
}

const fetchTotalBalance = async () => {
  try {
    // TODO: Replace with actual API call to Python backend
    // const response = await fetch('/api/total-balance')
    // const data = await response.json()
    // totalBalance.value = data.balance
    // totalWorth.value = data.worth

    // For now, use mock data
    totalBalance.value = 10196
    totalWorth.value = 56000
  } catch (error) {
    console.error('Failed to fetch total balance:', error)
  }
}

// Methods
const handleRentOut = () => {
  router.push('/rent-out')
}

const handleAddBalance = (balanceId) => {
  console.log('Add balance for:', balanceId)
  // TODO: Implement add balance functionality with backend API
}

// Initialize
onMounted(async () => {
  // Fetch data from backend
  await Promise.all([
    fetchBalancesFromBackend(),
    fetchTotalBalance()
  ])
})
</script>

<style scoped>
/* Mobile first approach for Telegram mini app */
@media (max-width: 375px) {
  main {
    max-width: 100%;
    padding-left: 12px;
    padding-right: 12px;
  }

  .bg-purple-50 {
    padding: 16px;
  }

  .text-3xl {
    font-size: 24px;
  }
}

@media (min-width: 376px) and (max-width: 768px) {
  main {
    max-width: 420px;
  }

  .bg-purple-50 {
    padding: 20px;
  }
}

@media (min-width: 769px) {
  main {
    max-width: 480px;
  }
}

/* Ensure proper touch scrolling on iOS */
* {
  -webkit-tap-highlight-color: transparent;
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 0;
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
