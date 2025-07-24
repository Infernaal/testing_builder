<template>
  <svg 
    :width="size" 
    :height="size" 
    :viewBox="viewBox"
    :class="[
      'icon-svg transition-all duration-200',
      colorClass,
      hoverEffect && 'hover:scale-110 hover:brightness-110'
    ]"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Forevers Token Icon -->
    <g v-if="name === 'forevers'">
      <path 
        d="M22.046 2.4H7.509C6.869 2.4 6.411 2.858 6.411 3.498V7.978H2.297C1.657 8.069 1.2 8.526 1.2 9.166C1.2 9.806 1.657 10.263 2.297 10.263H6.411V20.503C6.411 21.143 6.869 21.6 7.509 21.6C8.149 21.6 8.606 21.143 8.606 20.503V15.749H13.269C13.909 15.749 14.366 15.292 14.366 14.652C14.366 14.012 13.909 13.555 13.269 13.555H8.606V10.172H17.474C18.114 10.172 18.571 9.715 18.571 9.075C18.571 8.435 18.114 7.978 17.474 7.978H8.606V4.595H21.954C22.594 4.595 23.051 4.138 23.051 3.498C23.051 2.858 22.686 2.4 22.046 2.4Z" 
        :fill="fillColor || 'currentColor'"
        :stroke="strokeColor"
        :stroke-width="strokeWidth"
      />
    </g>

    <!-- Plus Icon -->
    <g v-else-if="name === 'plus'">
      <path 
        d="M12 5V19M5 12H19" 
        :stroke="strokeColor || fillColor || 'currentColor'" 
        :stroke-width="strokeWidth || 2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </g>

    <!-- Minus Icon -->
    <g v-else-if="name === 'minus'">
      <path 
        d="M5 12H19" 
        :stroke="strokeColor || fillColor || 'currentColor'" 
        :stroke-width="strokeWidth || 2" 
        stroke-linecap="round"
      />
    </g>

    <!-- Info Icon -->
    <g v-else-if="name === 'info'">
      <circle 
        cx="12" cy="12" r="10" 
        :stroke="strokeColor || fillColor || 'currentColor'" 
        :stroke-width="strokeWidth || 2"
      />
      <path 
        d="M12 16V12M12 8H12.01" 
        :stroke="strokeColor || fillColor || 'currentColor'" 
        :stroke-width="strokeWidth || 2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </g>

    <!-- Exchange Icon -->
    <g v-else-if="name === 'exchange'">
      <path 
        d="M16 3L21 8L16 13M8 21L3 16L8 11M21 8H7M3 16H17" 
        :stroke="strokeColor || fillColor || 'currentColor'" 
        :stroke-width="strokeWidth || 2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </g>

    <!-- Arrow Up Icon -->
    <g v-else-if="name === 'arrow-up'">
      <path 
        d="M7 14L12 9L17 14" 
        :stroke="strokeColor || fillColor || 'currentColor'" 
        :stroke-width="strokeWidth || 2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </g>

    <!-- Arrow Down Icon -->
    <g v-else-if="name === 'arrow-down'">
      <path 
        d="M7 10L12 15L17 10" 
        :stroke="strokeColor || fillColor || 'currentColor'" 
        :stroke-width="strokeWidth || 2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </g>

    <!-- Check Icon -->
    <g v-else-if="name === 'check'">
      <path 
        d="M9 12L11 14L15 10" 
        :stroke="strokeColor || fillColor || 'currentColor'" 
        :stroke-width="strokeWidth || 2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </g>

    <!-- X/Close Icon -->
    <g v-else-if="name === 'x' || name === 'close'">
      <path 
        d="M18 6L6 18M6 6L18 18" 
        :stroke="strokeColor || fillColor || 'currentColor'" 
        :stroke-width="strokeWidth || 2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </g>

    <!-- Dollar Icon -->
    <g v-else-if="name === 'dollar'">
      <path 
        d="M12 1V23M17 5H9.5A3.5 3.5 0 0 0 9.5 12H14.5A3.5 3.5 0 0 1 14.5 19H6" 
        :stroke="strokeColor || fillColor || 'currentColor'" 
        :stroke-width="strokeWidth || 2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </g>

    <!-- Warning Icon -->
    <g v-else-if="name === 'warning'">
      <path 
        d="M12 9V13M12 17H12.01M10.29 3.86L1.82 18A2 2 0 0 0 3.55 21H20.45A2 2 0 0 0 22.18 18L13.71 3.86A2 2 0 0 0 10.29 3.86Z" 
        :fill="fillColor || 'currentColor'"
        :stroke="strokeColor"
        :stroke-width="strokeWidth"
      />
    </g>

    <!-- Shopping Cart Icon -->
    <g v-else-if="name === 'shopping-cart'">
      <path 
        d="M9 22A1 1 0 1 1 9 22A1 1 0 0 1 9 22ZM20 22A1 1 0 1 1 20 22A1 1 0 0 1 20 22ZM1 1H5L7.68 14.39A2 2 0 0 0 9.75 16H19.25A2 2 0 0 0 21.32 14.39L23 6H6" 
        :stroke="strokeColor || fillColor || 'currentColor'" 
        :stroke-width="strokeWidth || 2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </g>

    <!-- Trash Icon -->
    <g v-else-if="name === 'trash'">
      <path 
        d="M3 6H5H21M19 6V20A2 2 0 0 1 17 22H7A2 2 0 0 1 5 20V6M8 6V4A2 2 0 0 1 10 2H14A2 2 0 0 1 16 4V6M10 11V17M14 11V17" 
        :stroke="strokeColor || fillColor || 'currentColor'" 
        :stroke-width="strokeWidth || 2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </g>

    <!-- Copy Icon -->
    <g v-else-if="name === 'copy'">
      <rect 
        x="9" y="9" width="13" height="13" rx="2" ry="2" 
        :stroke="strokeColor || fillColor || 'currentColor'" 
        :stroke-width="strokeWidth || 2"
      />
      <path 
        d="M5 15H4A2 2 0 0 1 2 13V4A2 2 0 0 1 4 2H13A2 2 0 0 1 15 4V5" 
        :stroke="strokeColor || fillColor || 'currentColor'" 
        :stroke-width="strokeWidth || 2"
      />
    </g>

    <!-- Star Icon -->
    <g v-else-if="name === 'star'">
      <path 
        d="M12 2L15.09 8.26L22 9L17 13.74L18.18 20.42L12 17.27L5.82 20.42L7 13.74L2 9L8.91 8.26L12 2Z" 
        :fill="fillColor || 'currentColor'"
        :stroke="strokeColor"
        :stroke-width="strokeWidth"
      />
    </g>

    <!-- Default fallback -->
    <g v-else>
      <circle 
        cx="12" cy="12" r="3" 
        :fill="fillColor || 'currentColor'"
      />
    </g>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: 20
  },
  color: {
    type: String,
    default: 'current'
  },
  fillColor: {
    type: String,
    default: null
  },
  strokeColor: {
    type: String,
    default: null
  },
  strokeWidth: {
    type: [String, Number],
    default: null
  },
  hoverEffect: {
    type: Boolean,
    default: true
  }
})

const viewBox = computed(() => {
  const s = typeof props.size === 'number' ? props.size : parseInt(props.size)
  return `0 0 ${s} ${s}`
})

const colorClass = computed(() => {
  switch (props.color) {
    case 'primary': return 'text-dbd-primary'
    case 'secondary': return 'text-dbd-gray'
    case 'success': return 'text-green-600'
    case 'error': return 'text-red-500'
    case 'warning': return 'text-yellow-500'
    case 'info': return 'text-blue-500'
    case 'dark': return 'text-dbd-dark'
    case 'light': return 'text-gray-300'
    case 'muted': return 'text-gray-400'
    default: return 'text-current'
  }
})
</script>

<style scoped>
.icon-svg {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

.icon-svg:hover {
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
}

/* Smooth color transitions */
.icon-svg path,
.icon-svg circle,
.icon-svg rect {
  transition: all 0.2s ease;
}

/* Add subtle glow for primary color */
.text-dbd-primary {
  filter: drop-shadow(0 0 4px rgba(32, 25, 206, 0.3));
}

.text-green-600 {
  filter: drop-shadow(0 0 4px rgba(22, 163, 74, 0.3));
}

.text-red-500 {
  filter: drop-shadow(0 0 4px rgba(239, 68, 68, 0.3));
}
</style>
