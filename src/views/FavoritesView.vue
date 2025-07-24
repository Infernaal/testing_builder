<template>
  <div class="h-screen bg-gray-100 flex flex-col font-sans overflow-hidden">
    <!-- Main Content -->
    <main class="flex-1 w-full max-w-md mx-auto px-3.5 pt-4 pb-2 flex flex-col">
      <!-- Total Balance Card -->
      <div class="bg-purple-50 border border-purple-200 rounded-2xl p-3 mb-2 flex-shrink-0">
        <div class="flex items-start justify-between mb-4">
          <h2 class="text-2xl font-semibold text-black leading-7">
            Forevers<br>Balance
          </h2>

          <div class="flex flex-col items-end gap-2">
            <div class="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" class="text-blue-700">
                <path d="M30.667 7.381V1.333H7.129V9.011H1.333V15.059H7.129V30.108H13.894V22.728H19.615V16.680H13.894V15.059H25.132V9.011H13.894V7.381H30.667Z" fill="currentColor"/>
              </svg>
              <span class="text-3xl font-bold text-blue-700">{{ totalBalance.toLocaleString() }}</span>
            </div>
            <p class="text-lg text-gray-600 font-medium">Worth ${{ totalWorth.toLocaleString() }}</p>
          </div>
        </div>

        <button
          @click="handleRentOut"
          class="w-full bg-gradient-to-r from-blue-700 to-purple-600 text-white font-bold py-3 px-12 rounded-full hover:from-blue-800 hover:to-purple-700 transition-all duration-200 text-sm"
        >
          Rent Out Forevers
        </button>
      </div>

      <!-- Scroll Content -->
      <div class="flex-1 overflow-y-auto pt-2 space-y-2" v-if="balances.length > 0">
        <div
          v-for="balance in balances"
          :key="balance.id"
          class="bg-white border border-purple-200 rounded-2xl p-3 relative min-h-[216px] flex flex-col justify-between"
        >
          <!-- Country Header -->
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                <div :class="flagClasses[balance.code]" class="w-full h-full"></div>
              </div>
              <span class="text-gray-700 font-medium text-base">{{ balance.country }} Balance</span>
            </div>

            <button
              @click="openEnterAmountModal(balance)"
              class="w-16 h-11 border border-blue-700 bg-purple-50 rounded-full flex items-center justify-center hover:bg-purple-100 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" class="text-blue-700">
                <path d="M18 13H6C5.4 13 5 12.6 5 12C5 11.4 5.4 11 6 11H18C18.6 11 19 11.4 19 12C19 12.6 18.6 13 18 13Z" fill="currentColor"/>
                <path d="M12 19C11.4 19 11 18.6 11 18V6C11 5.4 11.4 5 12 5C12.6 5 13 5.4 13 6V18C13 18.6 12.6 19 12 19Z" fill="currentColor"/>
              </svg>
            </button>
          </div>

          <!-- Token Info -->
          <div class="flex items-center gap-1 mb-3 flex-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" class="text-blue-700">
              <path d="M23 5.536V1H5.347V6.759H1V11.294H5.347V22.581H10.421V17.046H14.712V12.510H10.421V11.294H18.849V6.759H10.421V5.536H23Z" fill="currentColor"/>
            </svg>
            <span class="text-lg font-semibold text-blue-700">{{ balance.amount.toLocaleString() }}</span>
            <span class="w-1 h-1 bg-gray-400 rounded-full"></span>
            <div class="flex items-center gap-0.5 text-sm text-gray-600 font-medium">
              <span>1</span>
              <svg width="16" height="16" viewBox="0 0 16 16" class="text-gray-600">
                <path d="M15.2636 2H4.61925C4.15063 2 3.8159 2.28571 3.8159 2.68571V5.48571H0.803347C0.334728 5.54286 0 5.82857 0 6.22857C0 6.62857 0.334728 6.91429 0.803347 6.91429H3.8159V13.3143C3.8159 13.7143 4.15063 14 4.61925 14C5.08787 14 5.42259 13.7143 5.42259 13.3143V10.3429H8.83682C9.30544 10.3429 9.64017 10.0571 9.64017 9.65714C9.64017 9.25714 9.30544 8.97143 8.83682 8.97143H5.42259V6.85714H11.9163C12.3849 6.85714 12.7197 6.57143 12.7197 6.17143C12.7197 5.77143 12.3849 5.48571 11.9163 5.48571H5.42259V3.37143H15.1967C15.6653 3.37143 16 3.08571 16 2.68571C16 2.28571 15.7322 2 15.2636 2Z" fill="currentColor"/>
              </svg>
              <span>{{ balance.code }}/{{ balance.usdRate }} USD</span>
            </div>

            <div
              :class="[
                'px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1 ml-1',
                balance.priceChange > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              ]"
            >
              <svg
                :class="[
                  'w-2 h-2 transform',
                  balance.priceChange > 0 ? '-rotate-45' : 'rotate-45'
                ]"
                viewBox="0 0 10 13"
                fill="none"
              >
                <path
                  d="M0.720539 4.9362L4.6673 1.01033M4.6673 1.01033L8.58641 4.92944M4.6673 1.01033L4.65686 12.3136"
                  :stroke="balance.priceChange > 0 ? '#07B80E' : '#FF1919'"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="font-semibold">{{ balance.priceChange > 0 ? '+' : '' }}{{ balance.priceChange.toFixed(2) }}%</span>
            </div>
          </div>

          <!-- Values Section -->
          <div class="bg-purple-50 rounded-xl p-3 mb-3">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-gray-600 font-medium">Current value</span>
              <span class="text-base font-semibold text-gray-700">${{ balance.currentValue.toLocaleString() }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600 font-medium">Potential worth</span>
              <span class="text-base font-semibold text-gray-700">${{ balance.potentialWorth.toLocaleString() }}</span>
            </div>
          </div>

          <!-- Available Section -->
          <div class="bg-green-100 rounded-xl p-3 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-sm text-gray-600 font-medium">Available</span>
              <template v-if="balance.availableAmount">
                <span class="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                <div class="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 14 14" class="text-black">
                    <path d="M12.86 1.4H4.38C4.007 1.4 3.74 1.667 3.74 2.04V4.654H1.34C0.967 4.707 0.7 4.974 0.7 5.347C0.7 5.72 0.967 5.987 1.34 5.987H3.74V11.96C3.74 12.334 4.007 12.6 4.38 12.6C4.754 12.6 5.02 12.334 5.02 11.96V9.187H7.74C8.114 9.187 8.38 8.92 8.38 8.547C8.38 8.174 8.114 7.907 7.74 7.907H5.02V5.934H10.194C10.567 5.934 10.834 5.667 10.834 5.294C10.834 4.92 10.567 4.654 10.194 4.654H5.02V2.68H12.807C13.18 2.68 13.447 2.414 13.447 2.04C13.447 1.667 13.234 1.4 12.86 1.4Z" fill="currentColor"/>
                  </svg>
                  <span class="text-sm font-medium text-black">{{ balance.availableAmount }}</span>
                </div>
              </template>
              <template v-else>
                <span class="text-sm text-gray-600 font-medium">without restrictions</span>
              </template>
            </div>

            <button class="w-6 h-6 border border-gray-300 bg-white rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" class="text-gray-600">
                <path d="M10 2C5.5888 2 2 5.58885 2 10C2 14.4112 5.5888 18 10 18C14.4112 18 18 14.4112 18 10C18 5.58885 14.4112 2 10 2ZM10 16.5455C6.39079 16.5455 3.45455 13.6092 3.45455 10C3.45455 6.39088 6.39079 3.45455 10 3.45455C13.6092 3.45455 16.5455 6.39088 16.5455 10C16.5455 13.6092 13.6092 16.5455 10 16.5455Z" fill="currentColor"/>
                <path d="M10 5.39453C9.46543 5.39453 9.03052 5.82973 9.03052 6.36466C9.03052 6.89911 9.46543 7.33393 10 7.33393C10.5346 7.33393 10.9695 6.89911 10.9695 6.36466C10.9695 5.82973 10.5346 5.39453 10 5.39453Z" fill="currentColor"/>
                <path d="M9.99998 8.78711C9.59833 8.78711 9.27271 9.11273 9.27271 9.51438V13.878C9.27271 14.2797 9.59833 14.6053 9.99998 14.6053C10.4016 14.6053 10.7273 14.2797 10.7273 13.878V9.51438C10.7273 9.11273 10.4016 8.78711 9.99998 8.78711Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State (when no balances from backend) -->
      <div v-else class="flex-1 flex items-center justify-center">
        <div class="text-center">
          <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 32 32" class="text-gray-400">
              <path d="M30.667 7.381V1.333H7.129V9.011H1.333V15.059H7.129V30.108H13.894V22.728H19.615V16.680H13.894V15.059H25.132V9.011H13.894V7.381H30.667Z" fill="currentColor"/>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">No Balances Found</h3>
          <p class="text-gray-600 mb-4">Your balance data will appear here when available.</p>
        </div>
      </div>
    </main>

    <!-- Bottom Navigation -->
    <BottomNavigation />

    <!-- Enter Amount Modal -->
    <Transition
      name="modal"
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="showEnterAmountModal"
        class="modal-overlay fixed inset-0 flex items-center justify-center"
        @click="closeEnterAmountModal"
      >
      <!-- Blur Backdrop -->
      <div class="modal-backdrop absolute inset-0 bg-black bg-opacity-20"></div>

      <!-- Modal Content -->
      <div
        @click.stop
        class="modal-content relative bg-white rounded-[20px] p-6 shadow-xl"
      >
        <!-- Title -->
        <h2 class="text-lg font-semibold text-black text-center mb-3">
          Enter Amount
        </h2>

        <!-- Exchange Rate Display -->
        <div class="mb-4">
          <button class="w-full h-11 border border-gray-200 bg-white rounded-full px-4 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                <div :class="flagClasses[selectedBalance?.code || 'DE']" class="w-full h-full"></div>
              </div>
              <span class="text-sm text-black font-medium">
                1 Forevers {{ selectedBalance?.code || 'DE' }}
              </span>
              <span class="text-sm text-gray-600">/</span>
              <span class="text-sm text-blue-700 font-medium">
                {{ selectedBalance?.usdRate || 4 }} USD
              </span>
            </div>
          </button>
        </div>

        <!-- Input Fields -->
        <div class="relative mb-6">
        <div :class="[
          'bg-white rounded-full p-2 flex items-center gap-2 min-h-[52px] transition-colors',
          inputError ? 'border-2 border-red-500' : 'border border-gray-700',
          isInputFocused && !inputError ? 'border-2 border-blue-700' : ''
        ]">
          <!-- Forevers Input -->
          <div class="flex items-center gap-2">
            <div :class="[
              'w-9 h-9 rounded-full flex items-center justify-center transition-colors',
              isInputFocused && !inputError ? 'bg-blue-50' : 'bg-purple-50'
            ]">
              <svg width="24" height="24" viewBox="0 0 24 24" :class="[
                'transition-colors',
                inputError ? 'text-red-500' : (isInputFocused ? 'text-blue-700' : 'text-black')
              ]">
                <path d="M22.046 2.4H7.509C6.869 2.4 6.411 2.858 6.411 3.498V7.978H2.297C1.657 8.069 1.2 8.526 1.2 9.166C1.2 9.806 1.657 10.263 2.297 10.263H6.411V20.503C6.411 21.143 6.869 21.6 7.509 21.6C8.149 21.6 8.606 21.143 8.606 20.503V15.749H13.269C13.909 15.749 14.366 15.292 14.366 14.652C14.366 14.012 13.909 13.555 13.269 13.555H8.606V10.172H17.474C18.114 10.172 18.571 9.715 18.571 9.075C18.571 8.435 18.114 7.978 17.474 7.978H8.606V4.595H21.954C22.594 4.595 23.051 4.138 23.051 3.498C23.051 2.858 22.686 2.4 22.046 2.4Z" fill="currentColor"/>
              </svg>
            </div>
            <div class="flex flex-col">
              <div class="flex items-center gap-2">
                <span class="text-xs text-gray-600 font-medium">Forevers {{ selectedBalance?.code || 'DE' }}</span>
                <span v-if="selectedBalance?.availableAmount" class="text-xs text-green-600 font-medium">
                  (max: {{ selectedBalance.availableAmount }})
                </span>
              </div>
              <input
                ref="amountInput"
                v-model="foreversAmount"
                type="text"
                :class="[
                  'text-base font-semibold bg-transparent border-none outline-none w-16',
                  inputError ? 'text-red-500' : 'text-black'
                ]"
                placeholder="250"
                @input="handleInputChange($event)"
                @focus="handleInputFocus"
                @blur="handleInputBlur"
              />
            </div>
          </div>

          <!-- Exchange Icon -->
          <svg width="16" height="16" viewBox="0 0 16 16" class="text-gray-400 flex-shrink-0">
            <g clip-path="url(#clip0_41_9960)">
              <path d="M8.00065 14.6667C4.31865 14.6667 1.33398 11.682 1.33398 8.00004C1.33398 4.31804 4.31865 1.33337 8.00065 1.33337C11.6827 1.33337 14.6673 4.31804 14.6673 8.00004C14.6673 11.682 11.6827 14.6667 8.00065 14.6667ZM8.00065 13.3334C9.41514 13.3334 10.7717 12.7715 11.7719 11.7713C12.7721 10.7711 13.334 9.41453 13.334 8.00004C13.334 6.58555 12.7721 5.229 11.7719 4.2288C10.7717 3.22861 9.41514 2.66671 8.00065 2.66671C6.58616 2.66671 5.22961 3.22861 4.22942 4.2288C3.22922 5.229 2.66732 6.58555 2.66732 8.00004C2.66732 9.41453 3.22922 10.7711 4.22942 11.7713C5.22961 12.7715 6.58616 13.3334 8.00065 13.3334ZM4.66732 8.66671L10.6673 8.66671V10H8.00065V12L4.66732 8.66671ZM8.00065 6.00004V4.00004L11.334 7.33337L5.33398 7.33337V6.00004H8.00065Z" fill="currentColor"/>
            </g>
            <defs>
              <clipPath id="clip0_41_9960">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>

          <!-- Dollars Input -->
          <div class="flex items-center gap-2">
            <div class="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" class="text-gray-600">
                <path d="M11.852 24C11.549 24 11.298 23.906 11.1 23.717C10.903 23.528 10.804 23.289 10.804 23V21.2C9.686 21.022 8.731 20.644 7.939 20.067C7.147 19.489 6.53 18.756 6.087 17.867C5.971 17.622 5.971 17.367 6.087 17.1C6.204 16.833 6.402 16.644 6.681 16.533C6.937 16.422 7.199 16.422 7.467 16.533C7.735 16.644 7.939 16.822 8.079 17.067C8.498 17.822 9.045 18.389 9.721 18.767C10.396 19.144 11.176 19.333 12.061 19.333C13.179 19.333 14.099 19.067 14.821 18.533C15.543 18 15.904 17.267 15.904 16.333C15.904 15.356 15.584 14.6 14.943 14.067C14.303 13.533 13.098 12.989 11.328 12.433C9.651 11.922 8.399 11.244 7.572 10.4C6.745 9.556 6.332 8.5 6.332 7.233C6.332 6.011 6.745 4.989 7.572 4.167C8.399 3.344 9.476 2.878 10.804 2.767V1C10.804 0.711 10.903 0.472 11.1 0.283C11.298 0.094 11.549 0 11.852 0C12.154 0 12.405 0.094 12.603 0.283C12.801 0.472 12.9 0.711 12.9 1V2.767C13.738 2.878 14.489 3.122 15.153 3.5C15.817 3.878 16.37 4.367 16.812 4.967C16.975 5.189 17.01 5.428 16.917 5.683C16.824 5.939 16.638 6.122 16.358 6.233C16.102 6.344 15.834 6.356 15.555 6.267C15.275 6.178 15.042 6.011 14.856 5.767C14.53 5.367 14.128 5.072 13.651 4.883C13.173 4.694 12.597 4.6 11.921 4.6C10.85 4.6 10 4.833 9.371 5.3C8.742 5.767 8.428 6.4 8.428 7.2C8.428 8.044 8.777 8.728 9.476 9.25C10.175 9.772 11.467 10.311 13.354 10.867C14.937 11.333 16.108 12.006 16.865 12.883C17.622 13.761 18 14.867 18 16.2C18 17.6 17.569 18.728 16.707 19.583C15.846 20.439 14.576 20.989 12.9 21.233V23C12.9 23.289 12.801 23.528 12.603 23.717C12.405 23.906 12.154 24 11.852 24Z" fill="currentColor"/>
              </svg>
            </div>
            <div class="flex flex-col">
              <span class="text-xs text-gray-600 font-medium">Dollars</span>
              <span class="text-base font-semibold text-gray-700">
                {{ dollarsAmount.toLocaleString() }}
              </span>
            </div>
          </div>
        </div>

        <!-- Error Tooltip -->
        <Transition
          name="error-tooltip"
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="opacity-0 transform -translate-y-2 scale-95"
          enter-to-class="opacity-100 transform translate-y-0 scale-100"
          leave-from-class="opacity-100 transform translate-y-0 scale-100"
          leave-to-class="opacity-0 transform -translate-y-1 scale-98"
        >
          <div v-if="inputError" class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-10">
            <!-- Tooltip Container -->
            <div class="relative">
              <!-- Triangle Pointer -->
              <div class="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 border border-red-600 rotate-45"></div>

              <!-- Tooltip Content -->
              <div class="bg-red-500 border border-red-600 rounded-full px-4 py-3 shadow-lg" style="filter: drop-shadow(4px 8px 12px rgba(255, 25, 25, 0.12)); min-width: 283px;">
                <!-- Warning Icon -->
                <div class="absolute left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 20 20" class="text-white">
                    <path d="M19.7408 16.2967L11.1162 1.64545C10.6472 0.784823 9.35324 0.784859 8.88114 1.6455C8.88114 1.64545 0.256622 16.2967 0.256622 16.2967C-0.427786 17.3687 0.337271 19.0391 1.60051 18.9993C1.60046 18.9993 18.3969 18.9993 18.3969 18.9993C19.6579 19.0374 20.4321 17.3725 19.7408 16.2967ZM8.86009 15.8781C9.15379 14.4507 11.1404 14.6596 11.1618 16.1205C11.0791 17.9021 8.59938 17.6324 8.86009 15.8781ZM11.1618 12.4632C11.1221 14.0415 8.87825 14.0442 8.83553 12.4631V6.86705C8.87991 5.28892 11.119 5.28691 11.1618 6.86707C11.1618 6.86705 11.1618 12.4632 11.1618 12.4632Z" fill="currentColor"/>
                  </svg>
                </div>

                <!-- Error Content -->
                <div class="ml-14 text-white">
                  <div class="font-semibold text-base mb-1">
                    {{ getErrorTitle() }}
                  </div>
                  <div class="text-sm font-medium">
                    {{ getErrorMessage() }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
        </div>



        <!-- Action Buttons -->
        <div class="flex gap-3">
          <button
            @click="closeEnterAmountModal"
            class="flex-1 h-11 border border-gray-700 bg-white rounded-full text-gray-700 text-base font-medium hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            @click="handleAddToCart"
            class="flex-1 h-11 bg-gradient-to-r from-blue-700 to-purple-600 text-white rounded-full text-lg font-bold hover:from-blue-800 hover:to-purple-700 transition-all duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import BottomNavigation from '../components/BottomNavigation.vue'

const router = useRouter()

// App state
const isLoading = ref(false)
const showEnterAmountModal = ref(false)
const selectedBalance = ref(null)
const foreversAmount = ref(250)
const amountInput = ref(null)
const inputError = ref('')
const isInputFocused = ref(false)
let validationTimeout = null
const dollarsAmount = computed(() => {
  if (!selectedBalance.value) return 1000
  return foreversAmount.value * selectedBalance.value.usdRate
})

// Data - Ready for backend integration
const totalBalance = ref(10196)
const totalWorth = ref(56000)
const balances = ref([]) // Will be populated from backend

// Flag classes for different countries
const flagClasses = {
  'DE': 'bg-gradient-to-b from-black via-red-600 to-yellow-400',
  'UAE': 'bg-gradient-to-r from-green-600 via-white to-red-600',
  'KZ': 'bg-blue-400',
  'PL': 'bg-red-500',
  'UA': 'bg-yellow-400 border-b-2 border-blue-500',
  'US': 'bg-red-600 bg-gradient-to-r from-red-600 via-white to-blue-600'
}

// Mock data for development (remove when connecting to backend)
const mockBalances = [
  {
    id: 'de',
    country: 'Forevers DE',
    code: 'DE',
    amount: 1000,
    usdRate: 4,
    priceChange: 0.17,
    currentValue: 4000,
    potentialWorth: 8000,
    availableAmount: 250
  },
  {
    id: 'uae',
    country: 'Forevers UAE',
    code: 'UAE',
    amount: 1000,
    usdRate: 9,
    priceChange: 0.17,
    currentValue: 4000,
    potentialWorth: 8000,
    availableAmount: null
  },
  {
    id: 'kz',
    country: 'Forevers KZ',
    code: 'KZ',
    amount: 1000,
    usdRate: 8,
    priceChange: -0.17,
    currentValue: 4000,
    potentialWorth: 8000,
    availableAmount: 250
  },
  {
    id: 'pl',
    country: 'Forevers PL',
    code: 'PL',
    amount: 1000,
    usdRate: 4,
    priceChange: -0.17,
    currentValue: 4000,
    potentialWorth: 8000,
    availableAmount: 250
  },
  {
    id: 'ua',
    country: 'Forevers UA',
    code: 'UA',
    amount: 1000,
    usdRate: 4,
    priceChange: -0.17,
    currentValue: 4000,
    potentialWorth: 8000,
    availableAmount: 250
  },
  {
    id: 'us',
    country: 'Forevers US',
    code: 'US',
    amount: 1000,
    usdRate: 4,
    priceChange: -0.17,
    currentValue: 4000,
    potentialWorth: 8000,
    availableAmount: 250
  }
]

// Backend integration functions
const fetchBalancesFromBackend = async () => {
  isLoading.value = true
  try {
    // TODO: Replace with actual API call to Python backend
    // const response = await fetch('/api/balances')
    // const data = await response.json()

    // For now, use mock data
    setTimeout(() => {
      balances.value = mockBalances
      isLoading.value = false
    }, 1000)

  } catch (error) {
    console.error('Failed to fetch balances:', error)
    isLoading.value = false
  }
}

const fetchTotalBalance = async () => {
  try {
    // TODO: Replace with actual API call to Python backend
    // const response = await fetch('/api/total-balance')
    // const data = await response.json()
    // totalBalance.value = data.balance
    // totalWorth.value = data.worth

    // For now, use mock data
    totalBalance.value = 10196
    totalWorth.value = 56000
  } catch (error) {
    console.error('Failed to fetch total balance:', error)
  }
}

// Methods
const handleRentOut = () => {
  router.push('/rent-out')
}

const openEnterAmountModal = (balance) => {
  selectedBalance.value = balance
  foreversAmount.value = 250 // Default amount
  inputError.value = '' // Clear any previous errors
  showEnterAmountModal.value = true

  // Add keyboard listener for escape key
  document.addEventListener('keydown', handleKeydown)

  // Focus input field after modal is rendered
  setTimeout(() => {
    if (amountInput.value) {
      amountInput.value.focus()
      amountInput.value.select() // Select all text for easy replacement
    }
  }, 300) // Wait for transition to complete
}

const closeEnterAmountModal = () => {
  showEnterAmountModal.value = false
  selectedBalance.value = null
  foreversAmount.value = 250
  inputError.value = ''
  isInputFocused.value = false

  // Clear validation timeout
  if (validationTimeout) {
    clearTimeout(validationTimeout)
    validationTimeout = null
  }

  // Remove keyboard listener
  document.removeEventListener('keydown', handleKeydown)
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeEnterAmountModal()
  } else if (event.key === 'Enter') {
    handleAddToCart()
  }
}

const handleInputFocus = () => {
  isInputFocused.value = true
}

const handleInputBlur = () => {
  isInputFocused.value = false
  validateInput()
}

const handleInputChange = (event) => {
  // Filter out non-numeric characters in real-time
  const value = event.target.value
  const numericValue = value.replace(/[^0-9]/g, '')

  // Update the input value to only contain numbers
  if (value !== numericValue) {
    event.target.value = numericValue
    foreversAmount.value = numericValue
  }

  // Clear error when user starts typing
  if (inputError.value) {
    inputError.value = ''
  }

  // Clear previous timeout
  if (validationTimeout) {
    clearTimeout(validationTimeout)
  }

  // Validate input with debounce (only if user stops typing)
  validationTimeout = setTimeout(() => {
    if (numericValue) { // Only validate if there's content
      validateInput()
    }
  }, 800)
}

const getErrorTitle = () => {
  switch (inputError.value) {
    case 'empty':
      return "Can't be empty"
    case 'invalid':
      return "Can't be use"
    case 'limit':
      return "Can't be use"
    default:
      return "Error"
  }
}

const getErrorMessage = () => {
  switch (inputError.value) {
    case 'empty':
      return "Please, enter your amount"
    case 'invalid':
      return "Only numbers are allowed"
    case 'limit':
      return `Please enter the amount according to your limit (max: ${selectedBalance.value?.availableAmount})`
    default:
      return "Please check your input"
  }
}

const validateInput = () => {
  // Clear previous errors
  inputError.value = ''

  // Convert to string to check for text
  const inputValue = String(foreversAmount.value).trim()

  // Check for empty value
  if (!inputValue || inputValue === '' || inputValue === '0') {
    inputError.value = 'empty'
    return false
  }

  // Check for non-numeric characters (including decimal points, special characters)
  if (!/^[0-9]+$/.test(inputValue)) {
    inputError.value = 'invalid'
    return false
  }

  // Convert to number for further validation
  const numValue = Number(inputValue)

  // Check if conversion to number is valid
  if (isNaN(numValue) || !isFinite(numValue)) {
    inputError.value = 'invalid'
    return false
  }

  // Check minimum value
  if (numValue < 1) {
    inputError.value = 'invalid'
    return false
  }

  // Check maximum value (available amount)
  if (selectedBalance.value?.availableAmount && numValue > selectedBalance.value.availableAmount) {
    inputError.value = 'limit'
    return false
  }

  // Update the reactive value with the validated number
  foreversAmount.value = numValue

  return true
}

const handleAddToCart = async () => {
  // Validate input before proceeding
  if (!validateInput()) {
    console.error('Invalid input')
    return
  }

  if (!selectedBalance.value || foreversAmount.value <= 0) {
    console.error('Invalid input')
    return
  }

  console.log('Adding to cart:', {
    balance: selectedBalance.value,
    foreversAmount: foreversAmount.value,
    dollarsAmount: dollarsAmount.value
  })

  try {
    // TODO: Implement add to cart functionality with backend API
    // const payload = {
    //   balanceId: selectedBalance.value.id,
    //   amount: foreversAmount.value,
    //   totalCost: dollarsAmount.value,
    //   countryCode: selectedBalance.value.code
    // }
    // await addToCart(payload)

    // Show success feedback
    // You could add a toast notification here
    console.log('Successfully added to cart!')

    closeEnterAmountModal()

    // Optionally navigate to cart or show success state
    // router.push('/cart')
  } catch (error) {
    console.error('Failed to add to cart:', error)
    // Handle error (show error message to user)
  }
}

// Initialize
onMounted(async () => {
  // Fetch data from backend
  await Promise.all([
    fetchBalancesFromBackend(),
    fetchTotalBalance()
  ])
})

// Cleanup
onBeforeUnmount(() => {
  // Remove any remaining keyboard listeners
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Mobile first approach for Telegram mini app */
@media (max-width: 375px) {
  main {
    max-width: 100%;
    padding-left: 14px;
    padding-right: 14px;
  }
}

@media (min-width: 376px) and (max-width: 768px) {
  main {
    max-width: 420px;
  }
}

@media (min-width: 769px) {
  main {
    max-width: 480px;
  }
}

/* Ensure proper touch scrolling on iOS */
* {
  -webkit-tap-highlight-color: transparent;
}

/* Hide scrollbar completely */
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: transparent;
}

/* Hide scrollbar in Firefox */
.overflow-y-auto {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* Smooth scroll behavior */
.overflow-y-auto {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}



/* Optimize font sizes for mobile */
@media (max-width: 375px) {
  .text-xl {
    font-size: 20px;
    line-height: 24px;
  }

  .text-2xl {
    font-size: 26px;
    line-height: 30px;
  }

  .text-3xl {
    font-size: 34px;
    line-height: 40px;
  }

  .text-lg {
    font-size: 18px;
    line-height: 22px;
  }

  .text-base {
    font-size: 16px;
    line-height: 18px;
  }

  .text-sm {
    font-size: 14px;
    line-height: 20px;
  }

  .text-xs {
    font-size: 12px;
    line-height: 16px;
  }
}

/* Ensure consistent heights for balance cards */
.min-h-\[216px\] {
  min-height: 216px;
}

/* Make sure content properly fits */
main {
  height: calc(100vh - 89px); /* Subtract bottom navigation height */
}

/* Modal styles */
.modal-backdrop {
  backdrop-filter: blur(9px);
}

/* Enhanced responsive modal sizing */
@media (max-width: 375px) {
  .modal-content {
    width: calc(100vw - 32px);
    max-width: 311px;
    margin: 0 16px;
  }
}

@media (min-width: 376px) and (max-width: 768px) {
  .modal-content {
    width: 311px;
    margin: 0 auto;
  }
}

@media (min-width: 769px) {
  .modal-content {
    width: 350px;
    margin: 0 auto;
  }
}

/* Ensure modal inputs are touch-friendly */
.modal-content input {
  min-height: 20px;
  padding: 2px 0;
  background: transparent;
  border: none;
  outline: none;
}

.modal-content input:focus {
  outline: none;
  background: transparent;
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
  transform: scale(0.95) translateY(-10px);
}

/* Button hover states for touch devices */
@media (hover: hover) {
  .modal-content button:hover {
    transform: translateY(-1px);
  }
}

/* Ensure modal stays above everything */
.modal-overlay {
  z-index: 9999;
}

/* Error tooltip animations */
.error-tooltip-enter-active,
.error-tooltip-leave-active {
  transition: all 0.3s ease-out;
}

.error-tooltip-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

.error-tooltip-leave-to {
  opacity: 0;
  transform: translateY(-5px) scale(0.98);
}

/* Input field states */
.input-focused {
  border-color: #2019CE !important;
  box-shadow: 0 0 0 2px rgba(32, 25, 206, 0.1);
}

.input-error {
  border-color: #FF1919 !important;
  box-shadow: 0 0 0 2px rgba(255, 25, 25, 0.1);
}


</style>
