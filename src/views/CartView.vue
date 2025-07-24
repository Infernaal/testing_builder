<template>
  <div class="cart-view w-full max-w-md mx-auto bg-white min-h-screen">
    <!-- Header -->
    <div class="bg-white px-4 py-4 border-b border-gray-100">
      <h1 class="text-xl font-bold text-gray-900">Cart</h1>
      <p v-if="cartItemsCount > 0" class="text-sm text-gray-600">{{ cartItemsCount }} item{{ cartItemsCount > 1 ? 's' : '' }}</p>
    </div>

    <!-- Content Container -->
    <div class="content-container bg-gray-50 px-4 pb-24" style="min-height: calc(100vh - 150px);">

      <!-- Cart Items -->
      <div v-if="cartItemsCount > 0" class="space-y-4 py-4">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
        >
          <div class="flex items-center justify-between">
            <div class="flex-1">
              <h3 class="font-semibold text-gray-900">{{ item.country }}</h3>
              <div class="flex items-center gap-2 mt-1">
                <svg width="16" height="16" viewBox="0 0 20 20" class="text-blue-600">
                  <path d="M19.0791 0C19.6648 0 19.9999 0.476058 20 1.14258C20 1.80914 19.5817 2.28598 18.9961 2.28613H6.77832V5.80957H14.8955C15.4812 5.80963 15.8993 6.28565 15.8994 6.95215C15.8994 7.61877 15.4812 8.09564 14.8955 8.0957H6.77832V11.6191H11.0459C11.6316 11.6191 12.0497 12.0951 12.0498 12.7617C12.0498 13.4284 11.6317 13.9043 11.0459 13.9043H6.77832V18.8574C6.7782 19.5238 6.35992 19.9998 5.77441 20C5.18872 20 4.76965 19.5239 4.76953 18.8574V8.19043H1.00391C0.418346 8.19028 9.72129e-05 7.71429 0 7.04785C0 6.38129 0.418278 5.90491 1.00391 5.80957H4.76953V1.14258C4.76965 0.476058 5.18872 0 5.77441 0H19.0791Z" fill="currentColor"/>
                </svg>
                <span class="text-blue-600 font-semibold">{{ item.foreversAmount.toLocaleString() }}</span>
                <span class="text-gray-500">{{ item.code }}</span>
              </div>
            </div>
            <div class="text-right">
              <div class="text-lg font-bold text-gray-900">${{ item.totalCost.toLocaleString() }}</div>
              <div class="text-sm text-gray-500">{{ item.usdRate }} USD each</div>
            </div>
            <button
              @click="removeFromCart(item.id)"
              class="ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- Total -->
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mt-6">
          <div class="flex justify-between items-center">
            <span class="text-lg font-semibold text-gray-900">Total</span>
            <span class="text-xl font-bold text-blue-600">${{ cartTotal.toLocaleString() }}</span>
          </div>
        </div>

        <!-- Actions -->
        <div class="space-y-3 mt-6">
          <button
            class="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors"
          >
            Proceed to Checkout
          </button>
          <button
            @click="clearCart"
            class="w-full bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-full hover:bg-gray-200 transition-colors"
          >
            Clear Cart
          </button>
        </div>
      </div>

      <!-- Empty Cart -->
      <div v-else class="flex items-center justify-center h-full py-20">
        <div class="text-center">
          <div class="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <svg width="20" height="22" viewBox="0 0 18 20" class="text-gray-400">
              <path d="M8.99992 0C11.2937 6.01927e-05 13.1601 1.71665 13.1601 3.82617V4.95801H15.8886C16.2926 4.95801 16.6298 5.24124 16.6659 5.61133L17.9892 19.165C17.996 19.2031 17.9998 19.2424 17.9999 19.2822C17.9999 19.6786 17.6508 19.9999 17.2197 20H0.781174C0.562191 20 0.352885 19.9152 0.205002 19.7666C0.0571058 19.6179 -0.0167136 19.4186 0.00285324 19.2178L1.33195 5.61133C1.3681 5.24123 1.70529 4.95801 2.1093 4.95801H4.83977V3.82617C4.83977 1.71662 6.70624 0 8.99992 0ZM2.82317 6.39355L1.63469 18.5645H16.3632L15.1747 6.39355H13.1601V7.67676C13.1601 8.07321 12.81 8.39551 12.3788 8.39551C11.9478 8.3953 11.5986 8.07308 11.5986 7.67676V6.39355H6.40129V7.67676C6.40129 8.07314 6.05211 8.39539 5.62102 8.39551C5.18982 8.39551 4.83977 8.07321 4.83977 7.67676V6.39355H2.82317ZM8.99992 1.43555C7.56707 1.43555 6.40129 2.50827 6.40129 3.82617V4.95801H11.5986V3.82617C11.5986 2.50828 10.4329 1.43556 8.99992 1.43555Z" fill="currentColor"/>
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
          <p class="text-gray-500 mb-6">Add some Forevers to get started!</p>
          <button
            @click="$router.push('/favorites')"
            class="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors"
          >
            Browse Forevers
          </button>
        </div>
      </div>

    </div>

    <!-- Bottom Navigation Component -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BottomNavigation from '../components/BottomNavigation.vue'
import { useCart } from '../composables/useCart.js'

// Cart functionality
const { cartItems, cartItemsCount, cartTotal, removeFromCart, clearCart } = useCart()
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
