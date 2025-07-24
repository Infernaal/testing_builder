import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Telegram WebApp initialization
if (window.Telegram && window.Telegram.WebApp) {
  const tg = window.Telegram.WebApp

  // Initialize the WebApp
  tg.ready()

  // Expand to full height
  tg.expand()

  // Set theme colors
  tg.setHeaderColor('#120B81')
  tg.setBackgroundColor('#FAFAFA')

  // Enable closing confirmation
  tg.enableClosingConfirmation()

  // Set viewport settings for better mobile experience
  document.documentElement.style.setProperty('--tg-viewport-height', tg.viewportHeight + 'px')
  document.documentElement.style.setProperty('--tg-viewport-stable-height', tg.viewportStableHeight + 'px')

  // Handle viewport changes
  tg.onEvent('viewportChanged', () => {
    document.documentElement.style.setProperty('--tg-viewport-height', tg.viewportHeight + 'px')
    document.documentElement.style.setProperty('--tg-viewport-stable-height', tg.viewportStableHeight + 'px')
  })

  // Handle theme changes
  tg.onEvent('themeChanged', () => {
    // Update CSS variables based on theme
    const themeParams = tg.themeParams
    if (themeParams.bg_color) {
      document.documentElement.style.setProperty('--tg-bg-color', themeParams.bg_color)
    }
    if (themeParams.text_color) {
      document.documentElement.style.setProperty('--tg-text-color', themeParams.text_color)
    }
  })
}

const app = createApp(App)

app.use(router)

app.mount('#app')
