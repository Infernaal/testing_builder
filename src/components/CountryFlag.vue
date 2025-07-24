<template>
  <div class="country-flag w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#F0F0F0"/>
      
      <!-- US Flag -->
      <template v-if="country === 'us' || country === 'US'">
        <path d="M15.3438 16.0025H31.0573C31.0573 14.6433 30.8761 13.3266 30.5385 12.0741H15.3438V16.0025Z" fill="#D80027"/>
        <path d="M15.3438 8.14179H28.847C27.9252 6.63756 26.7466 5.30797 25.3723 4.21338H15.3438V8.14179Z" fill="#D80027"/>
        <path d="M16.0038 31.06C19.5478 31.06 22.8053 29.8351 25.3776 27.7864H6.62988C9.20224 29.8351 12.4597 31.06 16.0038 31.06Z" fill="#D80027"/>
        <path d="M3.15241 23.855H28.8496C29.5896 22.6475 30.1636 21.3275 30.5411 19.9266H1.46094C1.83841 21.3275 2.41235 22.6475 3.15241 23.855Z" fill="#D80027"/>
        <path d="M7.91596 3.29305H9.28825L8.01178 4.22041L8.49937 5.72094L7.22296 4.79358L5.94655 5.72094L6.36772 4.42464C5.24384 5.36082 4.25878 6.45764 3.44702 7.67976H3.88672L3.07419 8.27005C2.94761 8.48123 2.82619 8.69576 2.70984 8.91346L3.09784 10.1076L2.37396 9.5817C2.19402 9.96294 2.02943 10.3528 1.88149 10.7507L2.30896 12.0665H3.88672L2.61025 12.9938L3.09784 14.4943L1.82143 13.567L1.05684 14.1225C0.980312 14.7377 0.94043 15.3643 0.94043 16.0002H15.9993C15.9993 7.68352 15.9993 6.70305 15.9993 0.941406C13.0244 0.941406 10.2513 1.80435 7.91596 3.29305Z" fill="#0052B4"/>
      </template>
      
      <!-- Russian Flag -->
      <template v-else-if="country === 'ru' || country === 'RU'">
        <path d="M16 32C24.8366 32 32 24.8366 32 16H0C0 24.8366 7.16344 32 16 32Z" fill="#D80027"/>
        <path d="M16 0C7.16344 0 0 7.16344 0 16H32C32 7.16344 24.8366 0 16 0Z" fill="#0052B4"/>
      </template>
      
      <!-- German Flag -->
      <template v-else-if="country === 'de' || country === 'DE'">
        <circle cx="16" cy="16" r="16" fill="#000"/>
        <path d="M16 0C10.85 0 6.36 2.92 3.76 7.33H28.24C25.64 2.92 21.15 0 16 0Z" fill="#000"/>
        <path d="M16 32C21.15 32 25.64 29.08 28.24 24.67H3.76C6.36 29.08 10.85 32 16 32Z" fill="#FFDA44"/>
        <path d="M3.76 7.33C1.46 10.45 0 14.08 0 16S1.46 21.55 3.76 24.67H28.24C30.54 21.55 32 17.92 32 16S30.54 10.45 28.24 7.33H3.76Z" fill="#D80027"/>
      </template>
      
      <!-- French Flag -->
      <template v-else-if="country === 'fr' || country === 'FR'">
        <path d="M16 0C7.16344 0 0 7.16344 0 16S7.16344 32 16 32" fill="#0052B4"/>
        <path d="M16 0V32C24.8366 32 32 24.8366 32 16S24.8366 0 16 0Z" fill="#D80027"/>
      </template>
      
      <!-- Spanish Flag -->
      <template v-else-if="country === 'es' || country === 'ES'">
        <circle cx="16" cy="16" r="16" fill="#FFDA44"/>
        <path d="M16 0C10.85 0 6.36 2.92 3.76 7.33H28.24C25.64 2.92 21.15 0 16 0Z" fill="#D80027"/>
        <path d="M16 32C21.15 32 25.64 29.08 28.24 24.67H3.76C6.36 29.08 10.85 32 16 32Z" fill="#D80027"/>
      </template>
      
      <!-- Italian Flag -->
      <template v-else-if="country === 'it' || country === 'IT'">
        <path d="M16 0C9.77 0 4.42 3.89 1.56 9.33V22.67C4.42 28.11 9.77 32 16 32V0Z" fill="#6DA544"/>
        <path d="M30.44 9.33C27.58 3.89 22.23 0 16 0V32C22.23 32 27.58 28.11 30.44 22.67V9.33Z" fill="#D80027"/>
      </template>
      
      <!-- Default UAE/KZ/PL/UA flags -->
      <template v-else>
        <path d="M15.3438 16.0025H31.0573C31.0573 14.6433 30.8761 13.3266 30.5385 12.0741H15.3438V16.0025Z" fill="#D80027"/>
        <path d="M15.3438 8.14179H28.847C27.9252 6.63756 26.7466 5.30797 25.3723 4.21338H15.3438V8.14179Z" fill="#D80027"/>
      </template>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  country: {
    type: String,
    default: 'us',
    validator: (value) => ['us', 'ru', 'de', 'fr', 'es', 'it', 'uae', 'kz', 'pl', 'ua', 'US', 'RU', 'DE', 'FR', 'ES', 'IT', 'UAE', 'KZ', 'PL', 'UA'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
})
</script>

<style scoped>
.country-flag.small {
  @apply w-6 h-6;
}

.country-flag.large {
  @apply w-10 h-10;
}
</style>
