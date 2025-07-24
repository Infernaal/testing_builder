import { ref, computed } from 'vue'

// Global cart state with sample data for testing
const cartItems = ref([
  {
    id: 'test-de-1',
    balanceId: 'de-001',
    country: 'Germany',
    code: 'DE',
    foreversAmount: 2274,
    usdRate: 4.00,
    totalCost: 9096.00,
    addedAt: new Date().toISOString()
  },
  {
    id: 'test-uae-1',
    balanceId: 'uae-001',
    country: 'United Arab Emirates',
    code: 'UAE',
    foreversAmount: 1890,
    usdRate: 9.00,
    totalCost: 17010.00,
    addedAt: new Date().toISOString()
  }
])
const isAddingToCart = ref(false)

export function useCart() {
  // Computed properties
  const cartItemsCount = computed(() => cartItems.value.length)
  const cartTotal = computed(() => {
    return cartItems.value.reduce((total, item) => total + (item.foreversAmount * item.usdRate), 0)
  })

  // Methods
  const addToCart = async (item) => {
    isAddingToCart.value = true
    
    try {
      // Create cart item
      const cartItem = {
        id: `${item.balance.id}-${Date.now()}`,
        balanceId: item.balance.id,
        country: item.balance.country,
        code: item.balance.code,
        foreversAmount: item.foreversAmount,
        usdRate: item.balance.usdRate,
        totalCost: item.foreversAmount * item.balance.usdRate,
        addedAt: new Date().toISOString()
      }

      // Add to cart
      cartItems.value.push(cartItem)

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      return true
    } catch (error) {
      console.error('Failed to add to cart:', error)
      return false
    } finally {
      isAddingToCart.value = false
    }
  }

  const removeFromCart = (itemId) => {
    const index = cartItems.value.findIndex(item => item.id === itemId)
    if (index > -1) {
      cartItems.value.splice(index, 1)
    }
  }

  const clearCart = () => {
    cartItems.value = []
  }

  const getCartItems = () => {
    return [...cartItems.value]
  }

  return {
    // State
    cartItems,
    isAddingToCart,

    // Computed
    cartItemsCount,
    cartTotal,

    // Methods
    addToCart,
    removeFromCart,
    clearCart,
    getCartItems
  }
}
