<template>
  <div class="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
    <!-- Germany Flag -->
    <div v-if="country === 'DE'" class="w-full h-full relative">
      <div class="absolute top-0 left-0 w-full h-1/3 bg-black"></div>
      <div class="absolute top-1/3 left-0 w-full h-1/3 bg-red-600"></div>
      <div class="absolute top-2/3 left-0 w-full h-1/3 bg-yellow-400"></div>
    </div>
    
    <!-- UAE Flag -->
    <div v-else-if="country === 'UAE'" class="w-full h-full relative">
      <div class="absolute top-0 left-0 w-full h-1/3 bg-green-600"></div>
      <div class="absolute top-1/3 left-0 w-full h-1/3 bg-white"></div>
      <div class="absolute top-2/3 left-0 w-full h-1/3 bg-black"></div>
      <div class="absolute top-0 left-0 w-1/4 h-full bg-red-600"></div>
    </div>
    
    <!-- Kazakhstan Flag -->
    <div v-else-if="country === 'KZ'" class="w-full h-full bg-blue-400 flex items-center justify-center">
      <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
    </div>
    
    <!-- Poland Flag -->
    <div v-else-if="country === 'PL'" class="w-full h-full relative">
      <div class="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
      <div class="absolute top-1/2 left-0 w-full h-1/2 bg-red-600"></div>
    </div>
    
    <!-- Ukraine Flag -->
    <div v-else-if="country === 'UA'" class="w-full h-full relative">
      <div class="absolute top-0 left-0 w-full h-1/2 bg-blue-500"></div>
      <div class="absolute top-1/2 left-0 w-full h-1/2 bg-yellow-400"></div>
    </div>
    
    <!-- USA Flag -->
    <div v-else-if="country === 'US'" class="w-full h-full relative bg-red-600">
      <div class="absolute top-0 left-0 w-2/5 h-3/5 bg-blue-700 flex items-center justify-center">
        <div class="w-1 h-1 bg-white rounded-full"></div>
      </div>
      <div class="absolute top-0 left-2/5 w-3/5 h-full flex flex-col">
        <div class="h-1/6 bg-red-600"></div>
        <div class="h-1/6 bg-white"></div>
        <div class="h-1/6 bg-red-600"></div>
        <div class="h-1/6 bg-white"></div>
        <div class="h-1/6 bg-red-600"></div>
        <div class="h-1/6 bg-white"></div>
      </div>
    </div>
    
    <!-- Default -->
    <div v-else class="w-full h-full bg-gray-300 flex items-center justify-center">
      <span class="text-xs text-gray-600">{{ country }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  country: {
    type: String,
    required: true
  }
})
</script>
