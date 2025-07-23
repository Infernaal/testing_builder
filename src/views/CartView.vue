<template>
  <div class="cart-view w-full max-w-sm mx-auto bg-white min-h-screen relative">
    <!-- Content Container -->
    <div class="content-container bg-white px-4 pb-28 flex items-center justify-center min-h-screen">
      
      <!-- Cart Section -->
      <div class="cart-section">
        <div class="cart-card bg-gray-50 rounded-2xl p-6">
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-dbd-gray rounded-lg flex items-center justify-center mb-4">
              <svg width="20" height="22" viewBox="0 0 18 20" class="text-white">
                <path d="M8.99992 0C11.2937 6.01927e-05 13.1601 1.71665 13.1601 3.82617V4.95801H15.8886C16.2926 4.95801 16.6298 5.24124 16.6659 5.61133L17.9892 19.165C17.996 19.2031 17.9998 19.2424 17.9999 19.2822C17.9999 19.6786 17.6508 19.9999 17.2197 20H0.781174C0.562191 20 0.352885 19.9152 0.205002 19.7666C0.0571058 19.6179 -0.0167136 19.4186 0.00285324 19.2178L1.33195 5.61133C1.3681 5.24123 1.70529 4.95801 2.1093 4.95801H4.83977V3.82617C4.83977 1.71662 6.70624 0 8.99992 0ZM2.82317 6.39355L1.63469 18.5645H16.3632L15.1747 6.39355H13.1601V7.67676C13.1601 8.07321 12.81 8.39551 12.3788 8.39551C11.9478 8.3953 11.5986 8.07308 11.5986 7.67676V6.39355H6.40129V7.67676C6.40129 8.07314 6.05211 8.39539 5.62102 8.39551C5.18982 8.39551 4.83977 8.07321 4.83977 7.67676V6.39355H2.82317ZM8.99992 1.43555C7.56707 1.43555 6.40129 2.50827 6.40129 3.82617V4.95801H11.5986V3.82617C11.5986 2.50828 10.4329 1.43556 8.99992 1.43555Z" fill="currentColor"/>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-dbd-dark mb-2">Cart</h2>
            <p class="text-dbd-gray">Coming soon...</p>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom Navigation Component - Fixed -->
    <div class="fixed bottom-0 left-0 right-0 z-50">
      <BottomNavigation />
    </div>
  </div>
</template>

<script>
import BottomNavigation from '../components/BottomNavigation.vue'

export default {
  name: 'CartView',
  components: {
    BottomNavigation
  }
}
</script>

<style scoped>
.cart-view {
  font-family: 'Montserrat', sans-serif;
}

/* Mobile first approach for Telegram mini app */
@media (max-width: 430px) {
  .cart-view {
    max-width: 100%;
  }
}

@media (min-width: 431px) and (max-width: 768px) {
  .cart-view {
    max-width: 400px;
  }
}
</style>
