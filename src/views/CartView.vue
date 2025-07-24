<template>
  <div class="cart-view w-full max-w-md mx-auto bg-gray-100 min-h-screen flex flex-col font-montserrat">
    <!-- Content Container -->
    <div class="content-container bg-gray-100 flex-1 flex flex-col relative">
      <!-- Scrollable Cart Items Area -->
      <div class="flex-1 overflow-y-auto px-3.5 pt-4 pb-56" v-if="cartItemsCount > 0">
        <div class="space-y-2">
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="bg-white rounded-2xl p-3 border border-dbd-primary/20 relative cart-item"
          >
            <!-- Country Flag and Code Header -->
            <div class="flex items-center gap-1 mb-3 h-6">
              <CountryFlag :country="item.code" class="w-6 h-6" />
              <div class="flex items-center gap-1">
                <!-- F Icon -->
                <IconSvg name="forevers" :size="20" color="dark" :hover-effect="false" />
                <span class="text-dbd-dark font-semibold text-lg leading-6">{{ item.code }}</span>
              </div>
            </div>

            <!-- Amount and Price Section -->
            <div class="flex items-center gap-3 mb-3">
              <div class="flex-1">
                <div class="text-dbd-gray text-base font-medium leading-6 mb-1">Amount</div>
                <div class="text-dbd-dark font-semibold text-lg leading-6">{{ item.foreversAmount.toLocaleString() }}</div>
              </div>
              
              <!-- Vertical Divider -->
              <div class="w-px h-14 bg-gray-300"></div>
              
              <div class="flex-1">
                <div class="text-dbd-gray text-base font-medium leading-6 mb-0.5">Price</div>
                <div class="text-dbd-gray text-base font-medium leading-6">
                  <span>1Forevers {{ item.code }}</span>
                  <span class="text-dbd-dark font-semibold"> = ${{ item.usdRate.toFixed(2) }}</span>
                </div>
              </div>
            </div>

            <!-- Purchase Amount -->
            <div class="flex items-center gap-1">
              <span class="text-dbd-gray text-base font-medium leading-6">Purchase to pay:</span>
              <span class="text-dbd-primary font-semibold text-lg leading-6">${{ (item.foreversAmount * item.usdRate).toLocaleString() }}</span>
            </div>

            <!-- Remove Button -->
            <button
              @click="removeFromCart(item.id)"
              class="absolute top-3 right-3 w-10 h-10 flex items-center justify-center"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.25 3.5H14.75V2.75C14.75 1.5095 13.7405 0.5 12.5 0.5H9.5C8.2595 0.5 7.25 1.5095 7.25 2.75V3.5H2.75C1.92275 3.5 1.25 4.17275 1.25 5V5.75C1.25 6.164 1.586 6.5 2 6.5H20C20.414 6.5 20.75 6.164 20.75 5.75V5C20.75 4.17275 20.0772 3.5 19.25 3.5ZM8.75 2.75C8.75 2.33675 9.08675 2 9.5 2H12.5C12.9132 2 13.25 2.33675 13.25 2.75V3.5H8.75V2.75Z" fill="#FF1919"/>
                <path d="M3.5 8V19.25C3.5 20.4905 4.5095 21.5 5.75 21.5H16.25C17.4905 21.5 18.5 20.4905 18.5 19.25V8H3.5ZM13.7803 15.7197C14.0735 16.013 14.0735 16.487 13.7803 16.7803C13.487 17.0735 13.013 17.0735 12.7197 16.7803L11 15.0605L9.28025 16.7803C8.987 17.0735 8.513 17.0735 8.21975 16.7803C7.9265 16.487 7.9265 16.013 8.21975 15.7197L9.9395 14L8.21975 12.2803C7.9265 11.987 7.9265 11.513 8.21975 11.2197C8.513 10.9265 8.987 10.9265 9.28025 11.2197L11 12.9395L12.7197 11.2197C13.013 10.9265 13.487 10.9265 13.7803 11.2197C14.0735 11.513 14.0735 11.987 13.7803 12.2803L12.0605 14L13.7803 15.7197Z" fill="#FF1919"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Empty Cart (takes full space when empty) -->
      <div v-else class="flex-1 flex items-center justify-center px-3.5 pt-4">
        <div class="text-center">
          <div class="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <IconSvg name="shopping-cart" :size="32" color="muted" :hover-effect="false" />
          </div>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
          <p class="text-gray-500 mb-6">Add some Forevers to get started!</p>
          <button
            @click="$router.push('/favorites')"
            class="bg-dbd-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors"
          >
            Browse Forevers
          </button>
        </div>
      </div>


    </div>

    <!-- Fixed Cart Bottom Component (only when cart has items) -->
    <div v-if="cartItemsCount > 0" class="fixed-bottom-section">
      <CartBottomComponent
        :total-amount="cartTotal"
        @back="handleBack"
        @purchase="handlePurchase"
      />
    </div>

    <!-- Success Modal -->
    <SuccessModal
      :is-visible="showSuccessModal"
      :title="'Purchase Successful!'"
      :message="'Your Forevers have been purchased successfully.'"
      :payment-details="lastPurchaseDetails"
      :confirm-text="'Continue'"
      @close="closeSuccessModal"
      @confirm="closeSuccessModal"
    />

    <!-- Bottom Navigation Component -->
    <BottomNavigation />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import BottomNavigation from '../components/BottomNavigation.vue'
import CountryFlag from '../components/CountryFlag.vue'
import CartBottomComponent from '../components/CartBottomComponent.vue'
import SuccessModal from '../components/SuccessModal.vue'
import { useCart } from '../composables/useCart.js'

const router = useRouter()

// Cart functionality
const { cartItems, cartItemsCount, cartTotal, removeFromCart, clearCart } = useCart()

// Modal state
const showSuccessModal = ref(false)
const lastPurchaseDetails = ref(null)

// Methods
const handleBack = () => {
  router.go(-1)
}

const handlePurchase = () => {
  // Handle the purchase logic
  console.log('Purchase initiated, total amount:', cartTotal.value)

  // Store purchase details for modal
  lastPurchaseDetails.value = {
    paymentMethod: 'cart',
    amount: cartTotal.value,
    termsAccepted: true
  }

  // Show success modal
  showSuccessModal.value = true

  // Clear cart after successful purchase
  clearCart()
}

const closeSuccessModal = () => {
  showSuccessModal.value = false
  lastPurchaseDetails.value = null

  // Navigate to wallet after modal closes
  router.push('/wallet')
}
</script>

<style scoped>
.cart-view {
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  height: 100dvh; /* Dynamic viewport height for mobile */
}

.content-container {
  min-height: 0; /* Allow flex child to shrink */
}

.scrollable-content {
  /* Hide scrollbar for all browsers */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.scrollable-content::-webkit-scrollbar {
  display: none; /* WebKit browsers */
}

.cart-item {
  position: relative;
  transition: all 0.2s ease;
}

.cart-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* Fixed bottom section styling */
.fixed-bottom-section {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  max-width: 375px;
  margin: 0 auto;
}

.fixed-bottom-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #F0F0F0;
  z-index: -1;
}

.fixed-bottom-section > div {
  background: #F0F0F0;
  border-top: 1px solid rgba(32, 25, 206, 0.1);
  padding-bottom: 105px; /* Increased space for BottomNavigation */
}

.back-button {
  height: 52px;
  min-width: 119px;
}

.buy-button {
  height: 52px;
  background: linear-gradient(90deg, #2019CE 0%, #473FFF 100%);
  transition: all 0.2s ease;
}

.buy-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(32, 25, 206, 0.3);
}

/* Mobile optimizations for Telegram mini app */
@media (max-width: 375px) {
  .cart-view {
    max-width: 100%;
  }

  .overflow-y-auto {
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 220px; /* Space for fixed bottom */
  }

  .fixed-bottom-section {
    max-width: 100%;
  }

  /* Bottom section for mobile */
  .px-3-5 {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .cart-item {
    padding: 12px;
  }

  /* Mobile button optimizations */
  .h-12 {
    height: 44px !important;
  }

  .min-w-24 {
    min-width: 90px !important;
    padding-left: 12px !important;
    padding-right: 12px !important;
  }

  .flex-1 {
    font-size: 16px !important;
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  /* Smaller text for mobile */
  .text-xl {
    font-size: 18px;
    line-height: 22px;
  }

  .text-lg {
    font-size: 16px;
    line-height: 20px;
  }
}

@media (min-width: 376px) and (max-width: 430px) {
  .cart-view {
    max-width: 100%;
  }

  .overflow-y-auto {
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 220px; /* Space for fixed bottom */
  }

  .fixed-bottom-section {
    max-width: 430px;
  }

  /* Bottom section padding */
  .px-3-5 {
    padding-left: 14px !important;
    padding-right: 14px !important;
  }

  .cart-item {
    padding: 12px;
  }
}

/* Tablets and larger phones */
@media (min-width: 431px) and (max-width: 768px) {
  .cart-view {
    max-width: 420px;
  }

  .overflow-y-auto {
    padding-bottom: 220px; /* Space for fixed bottom */
  }

  .fixed-bottom-section {
    max-width: 420px;
  }

  .h-12 {
    height: 52px !important;
  }

  .min-w-24 {
    min-width: 120px !important;
  }

  .text-lg {
    font-size: 18px !important;
  }
}

/* Desktop and large tablets */
@media (min-width: 769px) {
  .cart-view {
    max-width: 480px;
  }

  .overflow-y-auto {
    padding-bottom: 220px; /* Space for fixed bottom */
  }

  .fixed-bottom-section {
    max-width: 480px;
  }
}

/* Support for safe areas on iOS - handled by BottomNavigation */

/* Ensure smooth scrolling on mobile */
.scrollable-content {
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}
</style>
