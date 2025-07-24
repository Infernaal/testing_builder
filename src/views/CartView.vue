<template>
  <div class="cart-view w-full max-w-md mx-auto bg-gray-100 min-h-screen flex flex-col font-montserrat">
    <!-- Content Container -->
    <div class="content-container bg-gray-100 flex-1 flex flex-col relative">
      <!-- Scrollable Cart Items Area -->
      <div class="flex-1 overflow-y-auto px-3.5 pt-4 pb-6" v-if="cartItemsCount > 0">
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
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-dbd-dark">
                  <path d="M17.2636 4H6.61925C6.15063 4 5.8159 4.28571 5.8159 4.68571V7.48571H2.80335C2.33473 7.54286 2 7.82857 2 8.22857C2 8.62857 2.33473 8.91429 2.80335 8.91429H5.8159V15.3143C5.8159 15.7143 6.15063 16 6.61925 16C7.08787 16 7.42259 15.7143 7.42259 15.3143V12.3429H10.8368C11.3054 12.3429 11.6402 12.0571 11.6402 11.6571C11.6402 11.2571 11.3054 10.9714 10.8368 10.9714H7.42259V8.85714H13.9163C14.3849 8.85714 14.7197 8.57143 14.7197 8.17143C14.7197 7.77143 14.3849 7.48571 13.9163 7.48571H7.42259V5.37143H17.1967C17.6653 5.37143 18 5.08571 18 4.68571C18 4.28571 17.7322 4 17.2636 4Z" fill="currentColor"/>
                </svg>
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
            <svg width="20" height="22" viewBox="0 0 18 20" class="text-gray-400">
              <path d="M8.99992 0C11.2937 6.01927e-05 13.1601 1.71665 13.1601 3.82617V4.95801H15.8886C16.2926 4.95801 16.6298 5.24124 16.6659 5.61133L17.9892 19.165C17.996 19.2031 17.9998 19.2424 17.9999 19.2822C17.9999 19.6786 17.6508 19.9999 17.2197 20H0.781174C0.562191 20 0.352885 19.9152 0.205002 19.7666C0.0571058 19.6179 -0.0167136 19.4186 0.00285324 19.2178L1.33195 5.61133C1.3681 5.24123 1.70529 4.95801 2.1093 4.95801H4.83977V3.82617C4.83977 1.71662 6.70624 0 8.99992 0ZM2.82317 6.39355L1.63469 18.5645H16.3632L15.1747 6.39355H13.1601V7.67676C13.1601 8.07321 12.81 8.39551 12.3788 8.39551C11.9478 8.3953 11.5986 8.07308 11.5986 7.67676V6.39355H6.40129V7.67676C6.40129 8.07314 6.05211 8.39539 5.62102 8.39551C5.18982 8.39551 4.83977 8.07321 4.83977 7.67676V6.39355H2.82317ZM8.99992 1.43555C7.56707 1.43555 6.40129 2.50827 6.40129 3.82617V4.95801H11.5986V3.82617C11.5986 2.50828 10.4329 1.43556 8.99992 1.43555Z" fill="currentColor"/>
            </svg>
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

      <!-- Payment Selection and Bottom Component (only when cart has items) -->
      <div v-if="cartItemsCount > 0" class="payment-section bg-gray-100 rounded-t-2xl">
        <!-- Loyalty Program and Bonus Selection -->
        <div class="selection-options p-4 space-y-3">
          <!-- Loyalty Program Option -->
          <div
            class="loyalty-option bg-purple-100 rounded-2xl border border-purple-200 p-4 cursor-pointer transition-all duration-300 transform"
            :class="{
              'ring-2 ring-dbd-primary scale-105 shadow-lg': selectedPaymentMethod === 'loyalty',
              'hover:scale-102': selectedPaymentMethod !== 'loyalty'
            }"
            @click="selectPaymentMethod('loyalty')"
          >
            <div class="flex items-center gap-3 mb-3">
              <div class="icon-wrapper w-10 h-10 bg-dbd-off-white rounded-full flex items-center justify-center shadow-sm">
                <svg width="21" height="21" viewBox="0 0 22 22" fill="none" class="text-dbd-primary">
                  <g clip-path="url(#clip0_loyalty)">
                    <path d="M10.8717 21.4348C10.6085 21.4348 10.3908 21.3526 10.2186 21.1884C10.0465 21.0241 9.9604 20.8164 9.9604 20.5652V19C8.98831 18.8454 8.15798 18.5169 7.46942 18.0145C6.78085 17.512 6.24418 16.8744 5.85939 16.1014C5.75813 15.8889 5.75813 15.6666 5.85939 15.4348C5.96065 15.2029 6.13279 15.0386 6.37581 14.942C6.59859 14.8454 6.82642 14.8454 7.05932 14.942C7.29221 15.0386 7.46942 15.1932 7.59093 15.4058C7.95546 16.0628 8.43138 16.5555 9.01869 16.884C9.60599 17.2125 10.2844 17.3768 11.054 17.3768C12.0261 17.3768 12.826 17.1449 13.4538 16.6811C14.0817 16.2174 14.3956 15.5797 14.3956 14.7681C14.3956 13.9178 14.1171 13.2608 13.5602 12.7971C13.0032 12.3333 11.9552 11.8599 10.4161 11.3768C8.95793 10.9323 7.86939 10.343 7.15045 9.60866C6.43151 8.87436 6.07204 7.95649 6.07204 6.85504C6.07204 5.79224 6.43151 4.90335 7.15045 4.18837C7.86939 3.4734 8.80604 3.0676 9.9604 2.97098V1.43475C9.9604 1.18354 10.0465 0.975814 10.2186 0.811562C10.3908 0.647311 10.6085 0.565186 10.8717 0.565186C11.135 0.565186 11.3527 0.647311 11.5249 0.811562C11.697 0.975814 11.7831 1.18354 11.7831 1.43475V2.97098C12.5121 3.0676 13.1653 3.28016 13.7424 3.60866C14.3196 3.93717 14.8006 4.36229 15.1854 4.88403C15.3271 5.07726 15.3575 5.28499 15.2765 5.50721C15.1955 5.72944 15.0335 5.88886 14.7905 5.98548C14.5677 6.08209 14.3348 6.09176 14.0918 6.01446C13.8488 5.93717 13.6462 5.79224 13.4842 5.57968C13.2007 5.23185 12.8514 4.97581 12.4362 4.81156C12.021 4.64731 11.5198 4.56519 10.9325 4.56519C10.0009 4.56519 9.26171 4.76808 8.71491 5.17388C8.16811 5.57968 7.89471 6.1304 7.89471 6.82606C7.89471 7.56035 8.19848 8.15456 8.80604 8.60866C9.4136 9.06277 10.5376 9.53137 12.178 10.0145C13.5551 10.4203 14.5728 11.0048 15.231 11.7681C15.8891 12.5314 16.2182 13.4927 16.2182 14.6521C16.2182 15.8695 15.8436 16.8502 15.0943 17.5942C14.3449 18.3381 13.2412 18.8164 11.7831 19.029V20.5652C11.7831 20.8164 11.697 21.0241 11.5249 21.1884C11.3527 21.3526 11.135 21.4348 10.8717 21.4348Z" fill="currentColor"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_loyalty">
                      <rect width="20.8696" height="20.8696" fill="white" transform="translate(0.565674 0.565186)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span class="text-base font-medium text-dbd-dark">Loyalty program</span>
            </div>

            <div class="amount-display bg-dbd-off-white rounded-2xl border border-dbd-primary/20 p-4">
              <div class="flex flex-col">
                <span class="text-2xl font-bold text-dbd-primary mb-2">${{ loyaltyBalance.toLocaleString() }}</span>
                <span class="text-sm font-medium text-dbd-gray">Forevers Rent %</span>
              </div>
            </div>
          </div>

          <!-- Bonus Option -->
          <div
            class="bonus-option bg-green-100 rounded-2xl border transition-all duration-300 transform p-4 cursor-pointer relative"
            :class="{
              'border-green-400 ring-2 ring-green-400 scale-105 shadow-lg': selectedPaymentMethod === 'bonus',
              'border-green-300 hover:scale-102': selectedPaymentMethod !== 'bonus'
            }"
            @click="selectPaymentMethod('bonus')"
          >
            <div class="flex items-center gap-3 mb-3">
              <div class="icon-wrapper w-10 h-10 bg-dbd-off-white rounded-full flex items-center justify-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-dbd-primary">
                  <path d="M19.8567 6.28571H17.4567C17.751 6.05915 17.9909 5.76969 18.159 5.43849C18.327 5.10729 18.419 4.74272 18.4281 4.37143C18.4151 3.74162 18.1572 3.14167 17.7091 2.69891C17.261 2.25615 16.658 2.00544 16.0281 2C14.3709 2 12.9138 3.04286 11.8709 4.92143C10.8281 3.04286 9.37094 2 7.7138 2C7.08388 2.00544 6.48088 2.25615 6.03279 2.69891C5.58469 3.14167 5.32678 3.74162 5.3138 4.37143C5.32289 4.74272 5.41483 5.10729 5.5829 5.43849C5.75098 5.76969 5.99093 6.05915 6.28523 6.28571H4.14237C3.57405 6.28571 3.029 6.51148 2.62714 6.91334C2.22528 7.31521 1.99951 7.86025 1.99951 8.42857V9.85714C2.00075 10.2992 2.13871 10.7301 2.39447 11.0908C2.65022 11.4514 3.01126 11.7241 3.42808 11.8714V19.8571C3.42808 20.4255 3.65385 20.9705 4.05571 21.3724C4.45758 21.7742 5.00262 22 5.57094 22H18.4281C18.9964 22 19.5414 21.7742 19.9433 21.3724C20.3452 20.9705 20.5709 20.4255 20.5709 19.8571V11.8714C20.9878 11.7241 21.3488 11.4514 21.6046 11.0908C21.8603 10.7301 21.9983 10.2992 21.9995 9.85714V8.42857C21.9995 7.86025 21.7737 7.31521 21.3719 6.91334C20.97 6.51148 20.425 6.28571 19.8567 6.28571ZM13.4281 10.5714H10.5709V7.71429H13.4281V10.5714ZM16.0281 3.42857C16.2787 3.43533 16.5177 3.536 16.6976 3.71063C16.8775 3.88526 16.9853 4.1211 16.9995 4.37143C16.9995 4.78571 16.6709 5.18571 16.0852 5.50714C15.0548 5.98085 13.9336 6.22458 12.7995 6.22143C13.3495 5.06429 14.3995 3.42857 16.0281 3.42857ZM7.7138 3.42857C9.34237 3.42857 10.3924 5.06429 10.9352 6.28571C9.80327 6.29036 8.68409 6.04653 7.65665 5.57143C7.0638 5.25 6.74237 4.85714 6.74237 4.43571C6.74039 4.17414 6.84099 3.92221 7.02259 3.73393C7.20418 3.54566 7.45232 3.43604 7.7138 3.42857ZM3.42808 8.42857C3.42808 8.23913 3.50334 8.05745 3.63729 7.9235C3.77125 7.78954 3.95293 7.71429 4.14237 7.71429H9.14237V10.5714H4.14237C3.95293 10.5714 3.77125 10.4962 3.63729 10.3622C3.50334 10.2283 3.42808 10.0466 3.42808 9.85714V8.42857ZM4.85665 19.8571V12H9.85665V20.5714H5.57094C5.3815 20.5714 5.19982 20.4962 5.06586 20.3622C4.93191 20.2283 4.85665 20.0466 4.85665 19.8571ZM11.2852 20.5714V12H12.7138V20.5714H11.2852ZM19.1424 19.8571C19.1424 20.0466 19.0671 20.2283 18.9332 20.3622C18.7992 20.4962 18.6175 20.5714 18.4281 20.5714H14.1424V12H19.1424V19.8571ZM20.5709 9.85714C20.5709 10.0466 20.4957 10.2283 20.3617 10.3622C20.2278 10.4962 20.0461 10.5714 19.8567 10.5714H14.8567V7.71429H19.8567C20.0461 7.71429 20.2278 7.78954 20.3617 7.9235C20.4957 8.05745 20.5709 8.23913 20.5709 8.42857V9.85714Z" fill="currentColor"/>
                </svg>
              </div>
              <span class="text-base font-medium text-dbd-dark">Bonus</span>
            </div>

            <div class="amount-display bg-dbd-off-white rounded-2xl border border-dbd-primary/20 p-4">
              <div class="flex flex-col">
                <span class="text-2xl font-bold text-dbd-primary mb-2">${{ bonusBalance.toLocaleString() }}</span>
                <span class="text-sm font-medium text-dbd-gray">Reward</span>
              </div>
            </div>

            <!-- Checkmark for selected bonus (shown in design) -->
            <div
              v-if="selectedPaymentMethod === 'bonus'"
              class="absolute top-3 right-3 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center animate-bounce"
            >
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none" class="text-white">
                <path d="M8.80292 1.37645C8.42688 1.17397 8.00745 1.56447 7.76157 1.79588C7.19753 2.34548 6.72025 2.98186 6.18509 3.56039C5.5921 4.19677 5.0425 4.83315 4.43505 5.45509C4.08793 5.8022 3.71189 6.17825 3.48048 6.61214C2.9598 6.10591 2.51145 5.55631 1.93292 5.10797C1.51349 4.78978 0.819255 4.55837 0.833719 5.32492C0.862645 6.3229 1.7449 7.39318 2.39574 8.07292C2.67054 8.36218 3.03212 8.66591 3.45155 8.68037C3.95776 8.7093 4.47843 8.10185 4.78216 7.76919C5.31732 7.19067 5.75122 6.5398 6.24294 5.94684C6.87932 5.16583 7.53016 4.39925 8.15208 3.60378C8.54258 3.11203 9.77195 1.8971 8.80292 1.37645ZM1.47007 5.26707C1.45561 5.26707 1.44115 5.26707 1.41222 5.28151C1.35437 5.26707 1.31098 5.25258 1.25313 5.22365C1.29652 5.19473 1.36883 5.20919 1.47007 5.26707Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Payment Bottom Component -->
        <PaymentBottomComponent
          :total-amount="cartTotal"
          :selected-payment-method="selectedPaymentMethod"
          :loyalty-balance="loyaltyBalance"
          :bonus-balance="bonusBalance"
          :user-balance="userBalance"
          @back="handleBack"
          @purchase="handlePurchase"
        />
      </div>
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
import PaymentBottomComponent from '../components/PaymentBottomComponent.vue'
import SuccessModal from '../components/SuccessModal.vue'
import { useCart } from '../composables/useCart.js'

const router = useRouter()

// Cart functionality
const { cartItems, cartItemsCount, cartTotal, removeFromCart, clearCart } = useCart()

// Mock balances - replace with real data from store/API
const loyaltyBalance = ref(8900)
const bonusBalance = ref(56200)
const userBalance = ref(75000)

// Payment method selection
const selectedPaymentMethod = ref('')

// Modal state
const showSuccessModal = ref(false)
const lastPurchaseDetails = ref(null)

// Methods
const handleBack = () => {
  router.go(-1)
}

const handlePurchase = (paymentData) => {
  // Handle the purchase logic
  console.log('Purchase data:', paymentData)

  // Store purchase details for modal
  lastPurchaseDetails.value = paymentData

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

/* Clean layout without fixed positioning */

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
  }

  /* Bottom section for mobile */
  .px-3\\.5 {
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
  }

  /* Bottom section padding */
  .px-3\\.5 {
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
}

/* Support for safe areas on iOS - handled by BottomNavigation */

/* Ensure smooth scrolling on mobile */
.scrollable-content {
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}
</style>
