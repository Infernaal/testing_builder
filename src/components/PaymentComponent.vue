<template>
  <div class="payment-component bg-gray-100 rounded-t-2xl p-4 space-y-4">
    <!-- Selection Options -->
    <div class="selection-options space-y-3">
      <!-- Loyalty Program Option -->
      <div 
        class="loyalty-option bg-purple-100 rounded-2xl border border-purple-200 p-4 cursor-pointer transition-all duration-200"
        :class="{ 'ring-2 ring-dbd-primary': selectedOption === 'loyalty' }"
        @click="selectOption('loyalty')"
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
            <span class="text-2xl font-bold text-dbd-primary mb-2">$8,900</span>
            <span class="text-sm font-medium text-dbd-gray">Forevers Rent %</span>
          </div>
        </div>
      </div>

      <!-- Bonus Option -->
      <div 
        class="bonus-option bg-green-100 rounded-2xl border transition-all duration-200 p-4 cursor-pointer relative"
        :class="{ 
          'border-green-400 ring-2 ring-green-400': selectedOption === 'bonus',
          'border-green-300': selectedOption !== 'bonus'
        }"
        @click="selectOption('bonus')"
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
            <span class="text-2xl font-bold text-dbd-primary mb-2">$56,200</span>
            <span class="text-sm font-medium text-dbd-gray">Reward</span>
          </div>
        </div>

        <!-- Checkmark for selected bonus -->
        <div 
          v-if="selectedOption === 'bonus'" 
          class="absolute top-3 right-3 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
        >
          <svg width="8" height="8" viewBox="0 0 10 10" fill="none" class="text-white">
            <path d="M8.80292 1.37645C8.42688 1.17397 8.00745 1.56447 7.76157 1.79588C7.19753 2.34548 6.72025 2.98186 6.18509 3.56039C5.5921 4.19677 5.0425 4.83315 4.43505 5.45509C4.08793 5.8022 3.71189 6.17825 3.48048 6.61214C2.9598 6.10591 2.51145 5.55631 1.93292 5.10797C1.51349 4.78978 0.819255 4.55837 0.833719 5.32492C0.862645 6.3229 1.7449 7.39318 2.39574 8.07292C2.67054 8.36218 3.03212 8.66591 3.45155 8.68037C3.95776 8.7093 4.47843 8.10185 4.78216 7.76919C5.31732 7.19067 5.75122 6.5398 6.24294 5.94684C6.87932 5.16583 7.53016 4.39925 8.15208 3.60378C8.54258 3.11203 9.77195 1.8971 8.80292 1.37645ZM1.47007 5.26707C1.45561 5.26707 1.44115 5.26707 1.41222 5.28151C1.35437 5.26707 1.31098 5.25258 1.25313 5.22365C1.29652 5.19473 1.36883 5.20919 1.47007 5.26707Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Terms and Conditions Checkbox -->
    <div class="terms-section flex items-start gap-3">
      <button 
        @click="toggleTermsAccepted"
        class="terms-checkbox w-6 h-6 border-2 rounded flex items-center justify-center transition-all duration-200 flex-shrink-0 mt-0.5"
        :class="{ 
          'border-dbd-primary bg-dbd-primary': termsAccepted,
          'border-gray-400 bg-white': !termsAccepted
        }"
      >
        <svg v-if="termsAccepted" width="12" height="12" viewBox="0 0 12 12" fill="none" class="text-white">
          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="terms-text">
        <span class="text-sm text-dbd-gray">I agree with </span>
        <a href="#" class="text-sm text-dbd-primary underline">Terms & Conditions</a>
      </div>
    </div>

    <!-- Total Section -->
    <div class="total-section flex items-center justify-center gap-1 pt-4 border-t border-gray-200">
      <span class="text-dbd-dark font-semibold text-xl">Total to pay:</span>
      <span class="text-dbd-primary font-semibold text-xl">${{ totalAmount.toLocaleString() }}</span>
    </div>

    <!-- Error Message -->
    <div v-if="errorMessage" class="error-message bg-red-50 border border-red-200 rounded-lg p-3">
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
    <div class="action-buttons flex items-center gap-3 pt-2">
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
const selectedOption = ref('')
const termsAccepted = ref(false)
const errorMessage = ref('')

// Computed properties
const canPurchase = computed(() => {
  return selectedOption.value && termsAccepted.value && !errorMessage.value
})

// Methods
const selectOption = (option) => {
  selectedOption.value = option
  validatePurchase()
}

const toggleTermsAccepted = () => {
  termsAccepted.value = !termsAccepted.value
  validatePurchase()
}

const validatePurchase = () => {
  errorMessage.value = ''
  
  if (!selectedOption.value) {
    return
  }

  const availableBalance = selectedOption.value === 'loyalty' 
    ? props.loyaltyBalance 
    : props.bonusBalance

  if (availableBalance < props.totalAmount) {
    errorMessage.value = `Insufficient ${selectedOption.value === 'loyalty' ? 'loyalty program' : 'bonus'} balance. Available: $${availableBalance.toLocaleString()}`
    return
  }

  // Additional validation for user's main balance if needed
  if (props.userBalance < props.totalAmount && selectedOption.value === 'loyalty') {
    errorMessage.value = `Insufficient funds in your account. Available: $${props.userBalance.toLocaleString()}`
    return
  }
}

const handlePurchase = () => {
  if (!canPurchase.value) {
    return
  }

  emit('purchase', {
    paymentMethod: selectedOption.value,
    amount: props.totalAmount,
    termsAccepted: termsAccepted.value
  })
}

// Watch for changes to re-validate
watch([selectedOption, termsAccepted], () => {
  validatePurchase()
})
</script>

<style scoped>
.payment-component {
  font-family: 'Montserrat', sans-serif;
}

.loyalty-option,
.bonus-option {
  transition: all 0.2s ease;
}

.loyalty-option:hover,
.bonus-option:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
  .payment-component {
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

  .amount-display span:first-child {
    font-size: 20px;
  }
}

@media (min-width: 376px) and (max-width: 430px) {
  .payment-component {
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
  .payment-component {
    max-width: 420px;
    margin: 0 auto;
  }
}
</style>
