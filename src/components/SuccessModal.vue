<template>
  <div 
    v-if="isVisible"
    class="success-modal fixed inset-0 z-50 flex items-center justify-center p-4"
    @click="handleBackdropClick"
  >
    <!-- Backdrop -->
    <div class="backdrop absolute inset-0 bg-black bg-opacity-50"></div>
    
    <!-- Modal Content -->
    <div class="modal-content bg-white rounded-2xl p-6 max-w-sm w-full relative z-10 mx-4">
      <!-- Success Icon -->
      <div class="success-icon w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="text-green-500">
          <path d="M26.6667 8L12 22.6667L5.33333 16" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      
      <!-- Title -->
      <h2 class="text-xl font-bold text-dbd-dark text-center mb-2">
        {{ title }}
      </h2>
      
      <!-- Message -->
      <p class="text-dbd-gray text-center mb-6">
        {{ message }}
      </p>
      
      <!-- Payment Details -->
      <div v-if="paymentDetails" class="payment-details bg-gray-50 rounded-lg p-4 mb-6">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm text-dbd-gray">Payment Method:</span>
          <span class="text-sm font-medium text-dbd-dark capitalize">{{ paymentDetails.paymentMethod }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-dbd-gray">Amount:</span>
          <span class="text-sm font-bold text-dbd-primary">${{ paymentDetails.amount.toLocaleString() }}</span>
        </div>
      </div>
      
      <!-- Action Button -->
      <button
        @click="handleConfirm"
        class="confirm-button w-full bg-dbd-primary text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition-colors"
      >
        {{ confirmText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// Props
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Payment Successful!'
  },
  message: {
    type: String,
    default: 'Your purchase has been completed successfully.'
  },
  paymentDetails: {
    type: Object,
    default: null
  },
  confirmText: {
    type: String,
    default: 'Continue'
  },
  autoClose: {
    type: Boolean,
    default: false
  },
  autoCloseDelay: {
    type: Number,
    default: 3000
  }
})

// Emits
const emit = defineEmits(['close', 'confirm'])

// Auto close functionality
let autoCloseTimer = null

const startAutoClose = () => {
  if (props.autoClose && props.isVisible) {
    autoCloseTimer = setTimeout(() => {
      handleConfirm()
    }, props.autoCloseDelay)
  }
}

const clearAutoClose = () => {
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer)
    autoCloseTimer = null
  }
}

// Methods
const handleBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    emit('close')
  }
}

const handleConfirm = () => {
  clearAutoClose()
  emit('confirm')
}

// Watch for visibility changes
watch(() => props.isVisible, (newVal) => {
  if (newVal) {
    startAutoClose()
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
  } else {
    clearAutoClose()
    // Restore body scroll when modal is closed
    document.body.style.overflow = ''
  }
})

// Cleanup on unmount
import { onUnmounted } from 'vue'
onUnmounted(() => {
  clearAutoClose()
  document.body.style.overflow = ''
})
</script>

<style scoped>
.success-modal {
  font-family: 'Montserrat', sans-serif;
  animation: fadeIn 0.3s ease-out;
}

.modal-content {
  animation: slideInUp 0.3s ease-out;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.backdrop {
  animation: fadeIn 0.3s ease-out;
}

.confirm-button {
  transition: all 0.2s ease;
}

.confirm-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(32, 25, 206, 0.3);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Mobile optimizations for Telegram WebApp */
@media (max-width: 375px) {
  .modal-content {
    margin: 16px;
    padding: 20px;
  }

  .success-icon {
    width: 56px;
    height: 56px;
  }

  .confirm-button {
    padding: 12px 24px;
    font-size: 16px;
  }

  h2 {
    font-size: 18px;
  }
}

@media (min-width: 376px) and (max-width: 430px) {
  .modal-content {
    margin: 20px;
  }
}
</style>
