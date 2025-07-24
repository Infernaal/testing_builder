<template>
  <div class="payment-bottom-component bg-gray-100 px-4 py-4">
    <!-- Terms and Conditions Checkbox -->
    <div class="terms-section flex items-start gap-2 mb-4">
      <button 
        @click="toggleTermsAccepted"
        class="terms-checkbox w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200 flex-shrink-0 mt-0.5"
        :class="{ 
          'border-green-500 bg-green-500': termsAccepted,
          'border-gray-400 bg-white': !termsAccepted
        }"
      >
        <svg v-if="termsAccepted" width="10" height="10" viewBox="0 0 10 10" fill="none" class="text-white">
          <path d="M8.80292 1.37645C8.42688 1.17397 8.00745 1.56447 7.76157 1.79588C7.19753 2.34548 6.72025 2.98186 6.18509 3.56039C5.5921 4.19677 5.0425 4.83315 4.43505 5.45509C4.08793 5.8022 3.71189 6.17825 3.48048 6.61214C2.9598 6.10591 2.51145 5.55631 1.93292 5.10797C1.51349 4.78978 0.819255 4.55837 0.833719 5.32492C0.862645 6.3229 1.7449 7.39318 2.39574 8.07292C2.67054 8.36218 3.03212 8.66591 3.45155 8.68037C3.95776 8.7093 4.47843 8.10185 4.78216 7.76919C5.31732 7.19067 5.75122 6.5398 6.24294 5.94684C6.87932 5.16583 7.53016 4.39925 8.15208 3.60378C8.54258 3.11203 9.77195 1.8971 8.80292 1.37645ZM1.47007 5.26707C1.45561 5.26707 1.44115 5.26707 1.41222 5.28151C1.35437 5.26707 1.31098 5.25258 1.25313 5.22365C1.29652 5.19473 1.36883 5.20919 1.47007 5.26707Z" fill="white"/>
        </svg>
      </button>
      <div class="terms-text">
        <span class="text-sm text-dbd-gray">I agree with </span>
        <a href="#" class="text-sm text-dbd-primary underline">Terms & Conditions</a>
      </div>
    </div>

    <!-- Total Section -->
    <div class="total-section flex items-center justify-center gap-1 mb-4">
      <span class="text-dbd-dark font-semibold text-xl">Total to pay:</span>
      <span class="text-dbd-primary font-semibold text-xl">${{ totalAmount.toLocaleString() }}</span>
    </div>

    <!-- Error Message -->
    <div v-if="errorMessage" class="error-message bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
      <div class="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="text-red-500 flex-shrink-0">
          <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" stroke-width="1.5"/>
          <path d="M10 6V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M10 14H10.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span class="text-sm font-medium text-red-700">{{ errorMessage }}</span>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="action-buttons flex items-center gap-3">
      <!-- Back Button -->
      <button
        @click="$emit('back')"
        class="back-button flex items-center justify-center gap-2 h-12 px-5 bg-dbd-off-white border border-dbd-gray rounded-full flex-shrink-0 min-w-24 transition-all duration-200 hover:bg-gray-100"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="text-dbd-gray">
          <path d="M18.2208 9.22071L3.66019 9.22071L7.13456 5.74611C7.43894 5.44192 7.43894 4.94845 7.13456 4.6443C6.83019 4.33992 6.33672 4.33992 6.03279 4.6443L1.22828 9.4489C0.923906 9.7531 0.923906 10.2466 1.22828 10.5507L6.03279 15.3555C6.18494 15.5078 6.38433 15.5838 6.58368 15.5838C6.78303 15.5838 6.98242 15.5078 7.13456 15.3555C7.43894 15.0513 7.43894 14.5579 7.13456 14.2538L3.66019 10.779L18.2208 10.779C18.6511 10.779 19 10.4301 19 9.99983C19 9.56955 18.6511 9.22071 18.2208 9.22071Z" fill="currentColor"/>
        </svg>
        <span class="text-dbd-gray font-medium text-base">Back</span>
      </button>

      <!-- Buy Forevers Button -->
      <button
        @click="handlePurchase"
        :disabled="!canPurchase"
        class="buy-button flex items-center justify-center h-12 px-8 rounded-full text-white font-bold text-lg flex-1 transition-all duration-200"
        :class="{
          'bg-gradient-to-r from-dbd-primary to-blue-500 hover:from-blue-600 hover:to-blue-600 hover:shadow-lg': canPurchase,
          'bg-gray-300 cursor-not-allowed': !canPurchase
        }"
      >
        <span :class="{ 'text-gray-500': !canPurchase, 'text-white': canPurchase }">
          Buy Forevers
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// Props
const props = defineProps({
  totalAmount: {
    type: Number,
    default: 26106
  },
  selectedPaymentMethod: {
    type: String,
    default: ''
  },
  loyaltyBalance: {
    type: Number,
    default: 8900
  },
  bonusBalance: {
    type: Number,
    default: 56200
  },
  userBalance: {
    type: Number,
    default: 50000
  }
})

// Emits
const emit = defineEmits(['back', 'purchase'])

// Reactive state
const termsAccepted = ref(false)
const errorMessage = ref('')

// Computed properties
const canPurchase = computed(() => {
  return props.selectedPaymentMethod && termsAccepted.value && !errorMessage.value
})

// Methods
const toggleTermsAccepted = () => {
  termsAccepted.value = !termsAccepted.value
  validatePurchase()
}

const validatePurchase = () => {
  errorMessage.value = ''
  
  if (!props.selectedPaymentMethod) {
    return
  }

  const availableBalance = props.selectedPaymentMethod === 'loyalty' 
    ? props.loyaltyBalance 
    : props.bonusBalance

  if (availableBalance < props.totalAmount) {
    errorMessage.value = `Insufficient ${props.selectedPaymentMethod === 'loyalty' ? 'loyalty program' : 'bonus'} balance. Available: $${availableBalance.toLocaleString()}`
    return
  }

  // Additional validation for user's main balance if needed
  if (props.userBalance < props.totalAmount && props.selectedPaymentMethod === 'loyalty') {
    errorMessage.value = `Insufficient funds in your account. Available: $${props.userBalance.toLocaleString()}`
    return
  }
}

const handlePurchase = () => {
  if (!canPurchase.value) {
    return
  }

  emit('purchase', {
    paymentMethod: props.selectedPaymentMethod,
    amount: props.totalAmount,
    termsAccepted: termsAccepted.value
  })
}

// Watch for changes to re-validate
watch([() => props.selectedPaymentMethod, termsAccepted], () => {
  validatePurchase()
})
</script>

<style scoped>
.payment-bottom-component {
  font-family: 'Montserrat', sans-serif;
}

.back-button:hover {
  transform: translateY(-1px);
}

.buy-button:hover:not(:disabled) {
  transform: translateY(-1px);
}

.terms-checkbox {
  transition: all 0.2s ease;
}

.error-message {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile optimizations for Telegram WebApp */
@media (max-width: 375px) {
  .payment-bottom-component {
    padding: 12px;
  }

  .action-buttons .back-button {
    min-width: 80px;
    padding-left: 12px;
    padding-right: 12px;
    height: 44px;
  }

  .action-buttons .buy-button {
    height: 44px;
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .total-section span {
    font-size: 18px;
  }
}

@media (min-width: 376px) and (max-width: 430px) {
  .payment-bottom-component {
    padding: 14px;
  }

  .action-buttons .back-button {
    height: 48px;
  }

  .action-buttons .buy-button {
    height: 48px;
  }
}

/* Tablets and larger */
@media (min-width: 431px) and (max-width: 768px) {
  .payment-bottom-component {
    max-width: 420px;
    margin: 0 auto;
  }
}
</style>
