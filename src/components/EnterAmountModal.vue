<template>
  <Transition
    name="modal"
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="opacity-0 backdrop-blur-0"
    enter-to-class="opacity-100 backdrop-blur-sm"
    leave-from-class="opacity-100 backdrop-blur-sm"
    leave-to-class="opacity-0 backdrop-blur-0"
  >
    <div
      v-if="isVisible"
      class="modal-overlay fixed inset-0 flex items-center justify-center z-50"
      @click="closeModal"
    >
      <!-- Blur Backdrop -->
      <div class="modal-backdrop absolute inset-0 bg-black bg-opacity-20"></div>

      <!-- Modal Content -->
      <div
        @click.stop
        class="modal-content relative bg-white rounded-[20px] shadow-xl"
        style="width: 311px; height: 238px;"
      >
        <!-- Header -->
        <div class="absolute left-1/2 top-3 transform -translate-x-1/2">
          <h2 class="text-lg font-semibold text-black leading-6">
            Enter Amount
          </h2>
        </div>

        <!-- Exchange Rate Section -->
        <div class="absolute left-14 top-12 w-52 h-11 relative">
          <!-- Tooltip trigger (hidden for now as per design) -->
          <div class="w-52 h-11 rounded-full border border-gray-200 bg-white relative">
            <div class="flex items-center gap-1 absolute left-4 top-2.5 w-44 h-6">
              <CountryFlag :country="selectedBalance?.country" class="w-6 h-6" />
              <div class="flex items-center">
                <span class="text-black text-sm font-medium leading-5">1 Forevers {{ selectedBalance?.country }}</span>
                <span class="text-gray-600 text-sm font-medium leading-normal">/</span>
                <span class="text-blue-700 text-sm font-medium leading-6">{{ selectedBalance?.usdRate }} USD</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Field -->
        <div class="absolute left-4 top-26 w-[283px] h-13">
          <div class="w-full h-13 rounded-full border border-gray-700 bg-white flex items-center gap-2 px-4">
            <!-- Forevers Icon Section -->
            <div class="flex items-center gap-0.5">
              <div class="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.0457 2.40039H7.50852C6.86852 2.40039 6.41138 2.85753 6.41138 3.49753V7.97753H2.29709C1.65709 8.06896 1.19995 8.52611 1.19995 9.16611C1.19995 9.80611 1.65709 10.2632 2.29709 10.2632H6.41138V20.5033C6.41138 21.1432 6.86852 21.6004 7.50852 21.6004C8.14852 21.6004 8.60567 21.1432 8.60567 20.5033V15.749H13.2685C13.9085 15.749 14.3657 15.2918 14.3657 14.6518C14.3657 14.0118 13.9085 13.5547 13.2685 13.5547H8.60567V10.1718H17.4742C18.1142 10.1718 18.5714 9.71468 18.5714 9.07468C18.5714 8.43468 18.1142 7.97753 17.4742 7.97753H8.60567V4.59468H21.9542C22.5942 4.59468 23.0514 4.13753 23.0514 3.49753C23.0514 2.85753 22.6857 2.40039 22.0457 2.40039Z" :fill="inputError ? '#FF1919' : '#4B4D50'"/>
                </svg>
              </div>
              <div class="flex flex-col">
                <span class="text-gray-600 text-xs font-medium leading-3.5">Forevers {{ selectedBalance?.country }}</span>
                <span :class="['text-base font-semibold leading-5', inputError ? 'text-red-500' : 'text-black']">
                  {{ inputValue || (inputError ? 'Enter' : '250') }}
                </span>
              </div>
            </div>

            <!-- Exchange Icon -->
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0">
              <g clip-path="url(#clip0_96_9960)">
                <path d="M8.00065 14.6667C4.31865 14.6667 1.33398 11.682 1.33398 8.00004C1.33398 4.31804 4.31865 1.33337 8.00065 1.33337C11.6827 1.33337 14.6673 4.31804 14.6673 8.00004C14.6673 11.682 11.6827 14.6667 8.00065 14.6667ZM8.00065 13.3334C9.41514 13.3334 10.7717 12.7715 11.7719 11.7713C12.7721 10.7711 13.334 9.41453 13.334 8.00004C13.334 6.58555 12.7721 5.229 11.7719 4.2288C10.7717 3.22861 9.41514 2.66671 8.00065 2.66671C6.58616 2.66671 5.22961 3.22861 4.22942 4.2288C3.22922 5.229 2.66732 6.58555 2.66732 8.00004C2.66732 9.41453 3.22922 10.7711 4.22942 11.7713C5.22961 12.7715 6.58616 13.3334 8.00065 13.3334ZM4.66732 8.66671L10.6673 8.66671V10H8.00065V12L4.66732 8.66671ZM8.00065 6.00004V4.00004L11.334 7.33337L5.33398 7.33337V6.00004H8.00065Z" fill="#7E7E7E"/>
              </g>
              <defs>
                <clipPath id="clip0_96_9960">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>

            <!-- Dollar Section -->
            <div class="flex items-center gap-0.5">
              <div class="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.8515 24C11.5488 24 11.2984 23.9056 11.1004 23.7167C10.9025 23.5278 10.8035 23.2889 10.8035 23V21.2C9.68559 21.0222 8.73071 20.6444 7.93886 20.0667C7.14702 19.4889 6.52984 18.7556 6.08734 17.8667C5.97089 17.6222 5.97089 17.3667 6.08734 17.1C6.20378 16.8333 6.40175 16.6444 6.68122 16.5333C6.93741 16.4222 7.19942 16.4222 7.46725 16.5333C7.73508 16.6444 7.93886 16.8222 8.0786 17.0667C8.49782 17.8222 9.04512 18.3889 9.72052 18.7667C10.3959 19.1444 11.1761 19.3333 12.0611 19.3333C13.179 19.3333 14.099 19.0667 14.821 18.5333C15.5429 18 15.9039 17.2667 15.9039 16.3333C15.9039 15.3556 15.5837 14.6 14.9432 14.0667C14.3028 13.5333 13.0975 12.9889 11.3275 12.4333C9.65065 11.9222 8.39883 11.2444 7.57205 10.4C6.74527 9.55556 6.33188 8.5 6.33188 7.23333C6.33188 6.01111 6.74527 4.98889 7.57205 4.16667C8.39883 3.34444 9.47598 2.87778 10.8035 2.76667V1C10.8035 0.711111 10.9025 0.472222 11.1004 0.283333C11.2984 0.0944446 11.5488 0 11.8515 0C12.1543 0 12.4047 0.0944446 12.6026 0.283333C12.8006 0.472222 12.8996 0.711111 12.8996 1V2.76667C13.738 2.87778 14.4891 3.12222 15.1528 3.5C15.8166 3.87778 16.3697 4.36667 16.8122 4.96667C16.9753 5.18889 17.0102 5.42778 16.917 5.68333C16.8239 5.93889 16.6376 6.12222 16.3581 6.23333C16.1019 6.34444 15.8341 6.35556 15.5546 6.26667C15.2751 6.17778 15.0422 6.01111 14.8559 5.76667C14.5298 5.36667 14.1281 5.07222 13.6507 4.88333C13.1732 4.69444 12.5968 4.6 11.9214 4.6C10.8501 4.6 10 4.83333 9.37118 5.3C8.74236 5.76667 8.42795 6.4 8.42795 7.2C8.42795 8.04444 8.77729 8.72778 9.47598 9.25C10.1747 9.77222 11.4672 10.3111 13.3537 10.8667C14.9374 11.3333 16.1077 12.0056 16.8646 12.8833C17.6215 13.7611 18 14.8667 18 16.2C18 17.6 17.5691 18.7278 16.7074 19.5833C15.8457 20.4389 14.5764 20.9889 12.8996 21.2333V23C12.8996 23.2889 12.8006 23.5278 12.6026 23.7167C12.4047 23.9056 12.1543 24 11.8515 24Z" fill="#4B4D50"/>
                </svg>
              </div>
              <div class="flex flex-col">
                <span class="text-gray-600 text-xs font-medium leading-3.5">Dollars</span>
                <span class="text-gray-600 text-base font-semibold leading-5">
                  {{ calculatedDollars }}
                </span>
              </div>
            </div>
          </div>

          <!-- Hidden input for capturing user input -->
          <input
            ref="inputField"
            v-model="inputValue"
            type="number"
            class="absolute inset-0 opacity-0 w-full h-full"
            :placeholder="`Enter ${selectedBalance?.country} amount`"
            @input="validateInput"
            @keydown.enter="handleAddToCart"
            @keydown.escape="closeModal"
          />
        </div>

        <!-- Error Message -->
        <div 
          v-if="inputError" 
          class="absolute left-4 top-44 w-72 h-20"
        >
          <div class="w-72 h-20 rounded-full border border-red-600 bg-red-500 shadow-lg flex items-center gap-3 px-3">
            <div class="w-10 h-10 flex items-center justify-center flex-shrink-0">
              <div class="w-10 h-10 rounded-full border border-white bg-gray-700 bg-opacity-25 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.7408 16.2967L11.1162 1.64545C10.6472 0.784823 9.35324 0.784859 8.88114 1.6455C8.88114 1.64545 0.256622 16.2967 0.256622 16.2967C-0.427786 17.3687 0.337271 19.0391 1.60051 18.9993C1.60046 18.9993 18.3969 18.9993 18.3969 18.9993C19.6579 19.0374 20.4321 17.3725 19.7408 16.2967ZM8.86009 15.8781C9.15379 14.4507 11.1404 14.6596 11.1618 16.1205C11.0791 17.9021 8.59938 17.6324 8.86009 15.8781ZM11.1618 12.4632C11.1221 14.0415 8.87825 14.0442 8.83553 12.4631V6.86705C8.87991 5.28892 11.119 5.28691 11.1618 6.86707C11.1618 6.86705 11.1618 12.4632 11.1618 12.4632Z" fill="#FAFAFA"/>
                </svg>
              </div>
            </div>
            <div class="flex flex-col justify-center flex-1">
              <div class="text-white text-base font-semibold leading-5 mb-1">
                {{ errorTitle }}
              </div>
              <div class="text-white text-sm font-medium leading-4">
                {{ errorMessage }}
              </div>
            </div>
          </div>
        </div>

        <!-- Buttons -->
        <div class="absolute left-3 top-48 flex items-center gap-3 w-72 h-11">
          <!-- Back Button -->
          <button
            @click="closeModal"
            class="w-22 h-11 rounded-full border border-gray-700 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <span class="text-gray-700 text-base font-medium">Back</span>
          </button>

          <!-- Add to Cart Button -->
          <button
            @click="handleAddToCart"
            :disabled="!inputValue || inputError"
            class="flex-1 h-11 rounded-full text-white text-xl font-bold transition-colors"
            :class="[
              !inputValue || inputError 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600'
            ]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import CountryFlag from './CountryFlag.vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  selectedBalance: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close', 'add-to-cart'])

const inputField = ref(null)
const inputValue = ref('')
const inputError = ref('')
const errorTitle = ref('')
const errorMessage = ref('')

const calculatedDollars = computed(() => {
  if (!inputValue.value || !props.selectedBalance?.usdRate) {
    return '1,000.00'
  }
  const amount = parseFloat(inputValue.value) * props.selectedBalance.usdRate
  return amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
})

const validateInput = () => {
  const value = inputValue.value
  
  // Clear previous errors
  inputError.value = ''
  errorTitle.value = ''
  errorMessage.value = ''
  
  if (!value) {
    inputError.value = 'empty'
    errorTitle.value = "Can't be empty"
    errorMessage.value = "Please, enter your amount"
    return false
  }
  
  // Check for invalid characters
  if (!/^\d+\.?\d*$/.test(value)) {
    inputError.value = 'invalid'
    errorTitle.value = "Can't be use"
    errorMessage.value = 'The "^" symbol is not allowed'
    return false
  }
  
  const numValue = parseFloat(value)
  
  // Check if amount is too high (example limit)
  if (numValue > 2000) {
    inputError.value = 'limit'
    errorTitle.value = "Can't be use"
    errorMessage.value = 'Please enter the amount according to your limit'
    return false
  }
  
  return true
}

const handleAddToCart = () => {
  if (validateInput()) {
    emit('add-to-cart', {
      amount: parseFloat(inputValue.value),
      balance: props.selectedBalance
    })
    closeModal()
  }
}

const closeModal = () => {
  inputValue.value = ''
  inputError.value = ''
  errorTitle.value = ''
  errorMessage.value = ''
  emit('close')
}

const handleKeyDown = (event) => {
  if (event.key === 'Escape') {
    closeModal()
  }
}

watch(() => props.isVisible, (isVisible) => {
  if (isVisible) {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    
    // Focus input field after modal is rendered
    setTimeout(() => {
      if (inputField.value) {
        inputField.value.focus()
      }
    }, 100)
  } else {
    document.removeEventListener('keydown', handleKeyDown)
    document.body.style.overflow = ''
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Modal styles */
.modal-backdrop {
  backdrop-filter: blur(9px);
}

/* Enhanced responsive modal sizing */
@media (max-width: 375px) {
  .modal-content {
    width: calc(100vw - 32px) !important;
    max-width: 311px;
  }
}

@media (min-width: 376px) and (max-width: 768px) {
  .modal-content {
    width: 311px !important;
  }
}

@media (min-width: 769px) {
  .modal-content {
    width: 350px !important;
    height: 250px !important;
  }
}

/* Ensure modal inputs are touch-friendly */
.modal-content input {
  min-height: 44px;
  border-radius: 22px;
  font-size: 16px;
  padding: 0 16px;
}

.modal-content input:focus {
  outline: none;
  border-color: #2019CE;
}

/* Remove input number arrows on mobile */
.modal-content input[type="number"] {
  -webkit-appearance: none;
  -moz-appearance: textfield;
}

.modal-content input[type="number"]::-webkit-outer-spin-button,
.modal-content input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Animation for modal - enhanced smooth animations */
.modal-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}

.modal-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

.modal-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

/* Smooth hover effects */
@media (hover: hover) {
  .modal-content button:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}

/* Ensure modal stays above everything */
.modal-overlay {
  z-index: 9999;
}

/* Typography */
.modal-content {
  font-family: 'Montserrat', sans-serif;
}
</style>
