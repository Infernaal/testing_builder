<template>
  <div class="start-view max-w-md mx-auto bg-white min-h-screen flex items-center justify-center">
    <div class="content-container text-center px-6">
      <!-- Logo Section -->
      <div class="logo-section mb-8">
        <div class="w-24 h-24 bg-dbd-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg class="w-12 h-12" viewBox="0 0 32 32" fill="none">
            <path d="M30.6666 7.38081V1.33337H7.1291V9.01148H1.33325V15.0589H7.1291V30.1076H13.894V22.7277H19.6153V16.6803H13.894V15.0589H25.1316V9.01148H13.894V7.38081H30.6666Z" fill="white"/>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-dbd-dark mb-2">
          <span class="text-dbd-orange">DBD Capital</span><br>
          <span class="text-dbd-primary">Forevers Bot</span>
        </h1>
        <p class="text-dbd-gray text-lg">Welcome to the future of finance</p>
      </div>

      <!-- Action Section -->
      <div class="action-section">
        <button 
          @click="navigateToHome"
          class="w-full bg-dbd-primary text-white font-semibold py-4 px-6 rounded-2xl text-lg hover:bg-blue-700 transition-colors mb-4"
        >
          Get Started
        </button>
        <p class="text-sm text-dbd-gray">Start your Forevers journey</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartView',
  methods: {
    navigateToHome() {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.start-view {
  font-family: 'Montserrat', sans-serif;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(32, 25, 206, 0.3);
}
</style>
