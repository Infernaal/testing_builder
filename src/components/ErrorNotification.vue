<template>
  <Transition
    name="error-notification"
    enter-active-class="transition-all duration-500 ease-out"
    leave-active-class="transition-all duration-300 ease-in"
    enter-from-class="opacity-0 transform translate-y-4 scale-95"
    enter-to-class="opacity-100 transform translate-y-0 scale-100"
    leave-from-class="opacity-100 transform translate-y-0 scale-100"
    leave-to-class="opacity-0 transform translate-y-2 scale-98"
  >
    <div
      v-if="isVisible"
      @click="$emit('close')"
      class="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 error-notification px-4 sm:px-0 cursor-pointer"
    >
      <!-- Triangular pointer -->
      <div class="w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-red-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full z-10"></div>

      <div class="bg-red-500 text-white px-4 sm:px-6 py-3 rounded-full shadow-lg flex items-center gap-2 sm:gap-3 border border-red-600 min-w-[257px] justify-center max-w-sm mx-auto hover:bg-red-600 transition-colors"
           style="filter: drop-shadow(4px 8px 12px rgba(255, 25, 25, 0.13));">
        <!-- Error Icon -->
        <div class="w-5 h-5 sm:w-6 sm:h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
          <svg class="w-3 h-3 sm:w-4 sm:h-4 text-white" viewBox="0 0 16 16">
            <path d="M8 1.5A6.5 6.5 0 1 0 14.5 8A6.508 6.508 0 0 0 8 1.5ZM5.5 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5Z" fill="currentColor"/>
          </svg>
        </div>

        <!-- Error Message -->
        <span class="font-semibold text-sm sm:text-base">{{ message }}</span>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: 'Something went wrong'
  }
})

defineEmits(['close'])
</script>

<style scoped>
/* Error notification responsive positioning */
@media (max-width: 375px) {
  .error-notification {
    bottom: 100px !important;
    left: 16px !important;
    right: 16px !important;
    transform: none !important;
    min-width: auto !important;
  }

  .error-notification > div:not(.w-0) {
    min-width: auto !important;
    width: 100%;
  }

  /* Hide pointer on very small screens */
  .error-notification > div.w-0 {
    display: none;
  }
}

@media (min-width: 376px) and (max-width: 768px) {
  .error-notification {
    bottom: 110px !important;
  }
}

/* Telegram mini app optimizations */
@media (max-width: 480px) {
  .error-notification {
    position: fixed;
    z-index: 1000;
    bottom: calc(100px + env(safe-area-inset-bottom, 8px)) !important;
  }

  .error-notification-mobile {
    bottom: calc(89px + env(safe-area-inset-bottom, 8px)) !important;
  }

  /* Adjust pointer for mobile */
  .error-notification > div.w-0 {
    border-l-width: 6px;
    border-r-width: 6px;
    border-t-width: 8px;
  }
}

/* Telegram WebApp specific styles */
@media (max-height: 600px) {
  .error-notification {
    bottom: 80px !important;
  }
}

/* Touch-friendly for Telegram */
.error-notification > div:not(.w-0) {
  min-height: 44px;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

/* Safe area support for notifications */
@supports (padding: max(0px)) {
  .error-notification {
    bottom: max(96px, calc(96px + env(safe-area-inset-bottom)));
  }
}

/* Error notification animations */
.error-notification-enter-active,
.error-notification-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.error-notification-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

.error-notification-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
</style>
