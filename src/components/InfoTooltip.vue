<template>
  <Transition
    name="tooltip"
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="isVisible"
      class="fixed inset-0 z-50 flex items-center justify-center px-9"
      @click="closeTooltip"
    >
      <!-- Blur backdrop -->
      <div class="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>
      
      <!-- Tooltip content -->
      <div
        @click.stop
        class="relative bg-white rounded-3xl p-3 shadow-xl border border-gray-100"
        style="width: 300px; height: 154px;"
      >
        <!-- Close button -->
        <button
          @click="closeTooltip"
          class="absolute top-1 right-1 w-11 h-11 flex items-center justify-center"
        >
          <div class="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center">
            <div class="relative w-5 h-5">
              <div class="absolute w-4 h-0.5 bg-black rounded-full transform rotate-45 top-2"></div>
              <div class="absolute w-4 h-0.5 bg-black rounded-full transform -rotate-45 top-2 left-0.5"></div>
            </div>
          </div>
        </button>

        <!-- Title -->
        <h3 class="text-lg font-semibold text-white mb-6 pt-2 px-1">
          {{ title }}
        </h3>

        <!-- Description -->
        <p class="text-sm text-white leading-6 px-1 pr-8">
          {{ description }}
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Forevers Balance'
  },
  description: {
    type: String,
    default: 'Dubadu Forevers ads you own. You invest and own your own advertising billboard on dubadu.com, and we rent it out.'
  }
})

const emit = defineEmits(['close'])

const closeTooltip = () => {
  emit('close')
}

const handleKeyDown = (event) => {
  if (event.key === 'Escape' && props.isVisible) {
    closeTooltip()
  }
}

// Watch for visibility changes to add/remove event listeners
watch(() => props.isVisible, (isVisible) => {
  if (isVisible) {
    document.addEventListener('keydown', handleKeyDown)
    // Prevent body scroll when tooltip is open
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleKeyDown)
    // Restore body scroll
    document.body.style.overflow = ''
  }
})

// Cleanup on unmount
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Custom styling to match Figma design */
.bg-white {
  background: linear-gradient(94deg, #120B81 33.64%, #09074E 76.52%);
  backdrop-filter: blur(32px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Backdrop blur effect */
.backdrop-blur-sm {
  backdrop-filter: blur(9px);
}

/* Tooltip animations */
.tooltip-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tooltip-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}

.tooltip-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

.tooltip-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

/* Ensure text is readable on gradient background */
h3, p {
  position: relative;
  z-index: 1;
}

/* Mobile optimizations */
@media (max-width: 375px) {
  .max-w-sm {
    max-width: calc(100vw - 72px);
  }
  
  .text-lg {
    font-size: 16px;
    line-height: 20px;
  }
  
  .text-sm {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
