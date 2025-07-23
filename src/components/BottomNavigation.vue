<template>
  <div class="bottom-navigation fixed bottom-0 left-0 right-0 bg-white shadow-lg">
    <div class="max-w-md mx-auto">
      <div class="flex justify-center items-center h-20 rounded-t-2xl bg-white">
        <div class="flex items-center justify-around w-full px-2">
          <!-- Profile Item -->
          <div class="nav-item flex flex-col items-center relative">
            <div class="icon-container relative">
              <!-- Avatar with dropdown arrow -->
              <div class="w-13 h-13 relative">
                <div class="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 border border-purple-300 mx-auto"></div>
                <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-dbd-off-white border border-gray-200 rounded-full flex items-center justify-center">
                  <svg width="6" height="4" viewBox="0 0 6 4" fill="none">
                    <path d="M1 1L3 3L5 1" stroke="#4D4F53" stroke-width="0.8" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <span class="text-xs text-dbd-gray mt-1">Profile</span>
          </div>

          <!-- Wallet Item (Active) -->
          <div class="nav-item flex flex-col items-center relative">
            <div class="icon-container relative">
              <div class="w-8 h-8 bg-dbd-primary rounded-lg flex items-center justify-center">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                  <path d="M15.3369 0C16.7553 0 17.9215 1.10571 18.0293 2.50488C19.1647 2.82612 19.9999 3.87598 20 5.11914V15.2842C19.9998 16.7817 18.7879 18 17.2988 18H2.70117C1.21206 18 0.0002339 16.7817 0 15.2842V2.71582C0.000233829 1.21827 1.21206 0 2.70117 0H15.3369ZM2.70117 3.67188C1.90768 3.67188 1.2618 4.32114 1.26172 5.11914V15.2842C1.26195 16.082 1.90778 16.7314 2.70117 16.7314H17.2988C18.0922 16.7314 18.738 16.082 18.7383 15.2842V13.1484H14.7158C13.1219 13.1484 11.8244 11.8443 11.8242 10.2412C11.8242 8.63803 13.1217 7.33301 14.7158 7.33301H18.7383V5.11914C18.7382 4.32114 18.0923 3.67188 17.2988 3.67188H2.70117ZM14.7158 8.60254C13.8174 8.60254 13.0859 9.33767 13.0859 10.2412C13.0861 11.1446 13.8175 11.8799 14.7158 11.8799H18.7383V8.60254H14.7158ZM15.9404 9.6748C16.3756 9.6748 16.7283 9.99219 16.7285 10.3838C16.7285 10.7755 16.3757 11.0938 15.9404 11.0938C15.5052 11.0937 15.1523 10.7755 15.1523 10.3838C15.1526 9.99222 15.5053 9.67484 15.9404 9.6748ZM2.70117 1.26855C1.90778 1.26855 1.26195 1.91796 1.26172 2.71582V2.82227C1.67869 2.5571 2.17244 2.40332 2.70117 2.40332H16.7422C16.5994 1.75535 16.0235 1.26855 15.3369 1.26855H2.70117Z" fill="white"/>
                </svg>
              </div>
            </div>
            <span class="text-xs text-dbd-primary font-semibold mt-1">Wallet</span>
          </div>

          <!-- Favorites Item -->
          <div class="nav-item flex flex-col items-center">
            <div class="icon-container">
              <div class="w-6 h-6 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M19.0791 0C19.6648 0 19.9999 0.476058 20 1.14258C20 1.80914 19.5817 2.28598 18.9961 2.28613H6.77832V5.80957H14.8955C15.4812 5.80963 15.8993 6.28565 15.8994 6.95215C15.8994 7.61877 15.4812 8.09564 14.8955 8.0957H6.77832V11.6191H11.0459C11.6316 11.6191 12.0497 12.0951 12.0498 12.7617C12.0498 13.4284 11.6317 13.9043 11.0459 13.9043H6.77832V18.8574C6.7782 19.5238 6.35992 19.9998 5.77441 20C5.18872 20 4.76965 19.5239 4.76953 18.8574V8.19043H1.00391C0.418346 8.19028 9.72129e-05 7.71429 0 7.04785C0 6.38129 0.418278 5.90491 1.00391 5.80957H4.76953V1.14258C4.76965 0.476058 5.18872 0 5.77441 0H19.0791Z" fill="#4B4D50"/>
                </svg>
              </div>
            </div>
            <span class="text-xs text-dbd-gray mt-1">Favorites</span>
          </div>

          <!-- Cart Item -->
          <div class="nav-item flex flex-col items-center">
            <div class="icon-container">
              <div class="w-6 h-6 flex items-center justify-center">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                  <path d="M8.99992 0C11.2937 6.01927e-05 13.1601 1.71665 13.1601 3.82617V4.95801H15.8886C16.2926 4.95801 16.6298 5.24124 16.6659 5.61133L17.9892 19.165C17.996 19.2031 17.9998 19.2424 17.9999 19.2822C17.9999 19.6786 17.6508 19.9999 17.2197 20H0.781174C0.562191 20 0.352885 19.9152 0.205002 19.7666C0.0571058 19.6179 -0.0167136 19.4186 0.00285324 19.2178L1.33195 5.61133C1.3681 5.24123 1.70529 4.95801 2.1093 4.95801H4.83977V3.82617C4.83977 1.71662 6.70624 0 8.99992 0ZM2.82317 6.39355L1.63469 18.5645H16.3632L15.1747 6.39355H13.1601V7.67676C13.1601 8.07321 12.81 8.39551 12.3788 8.39551C11.9478 8.3953 11.5986 8.07308 11.5986 7.67676V6.39355H6.40129V7.67676C6.40129 8.07314 6.05211 8.39539 5.62102 8.39551C5.18982 8.39551 4.83977 8.07321 4.83977 7.67676V6.39355H2.82317ZM8.99992 1.43555C7.56707 1.43555 6.40129 2.50827 6.40129 3.82617V4.95801H11.5986V3.82617C11.5986 2.50828 10.4329 1.43556 8.99992 1.43555Z" fill="#4D4F53"/>
                </svg>
              </div>
            </div>
            <span class="text-xs text-dbd-gray mt-1">Cart</span>
          </div>

          <!-- Holders Item -->
          <div class="nav-item flex flex-col items-center">
            <div class="icon-container">
              <div class="w-6 h-6 flex items-center justify-center">
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                  <path d="M8.44238 12.1094C9.31973 12.1094 10.1776 12.2621 10.9922 12.5625C11.4039 12.7144 11.6127 13.1645 11.458 13.5684C11.3032 13.9722 10.8432 14.1763 10.4316 14.0244C9.79694 13.7904 9.12755 13.6719 8.44238 13.6719H7.24805C4.12994 13.6719 1.59277 16.1602 1.59277 19.2188C1.59277 19.6501 1.23657 19.9998 0.796875 20C0.35699 20 0 19.6502 0 19.2188C0 15.2986 3.25161 12.1094 7.24805 12.1094H8.44238ZM15.5312 10.3125C15.971 10.3126 16.3271 10.6624 16.3271 11.0938V11.6953C16.63 11.7604 16.9748 11.86 17.3701 12.0107C17.78 12.1671 17.9834 12.6195 17.8242 13.0215C17.6648 13.4236 17.2029 13.6232 16.793 13.4668C16.0335 13.1771 15.5576 13.1377 15.1924 13.1377C14.8301 13.1377 14.5352 13.4301 14.5352 13.7891C14.5352 14.1663 14.955 14.4405 15.5332 14.4404C16.8933 14.4404 17.9998 15.4329 18 16.6533C18 17.2476 17.7543 17.8071 17.3086 18.2285C17.0281 18.4937 16.6913 18.6817 16.3271 18.7822V19.2188C16.3271 19.6501 15.971 19.9999 15.5312 20C15.0914 20 14.7344 19.6502 14.7344 19.2188V18.7588C14.3074 18.6775 13.8264 18.5489 13.3652 18.3691C12.9565 18.2098 12.7564 17.7555 12.9189 17.3545C13.0814 16.9537 13.5445 16.758 13.9531 16.917C14.6767 17.1991 15.4104 17.3046 15.7031 17.3047C16.0779 17.3047 16.4072 17.0001 16.4072 16.6533C16.407 16.3005 16.0068 16.0029 15.5332 16.0029C14.0562 16.0029 12.9424 15.051 12.9424 13.7891C12.9424 12.7229 13.7127 11.8309 14.7344 11.6221V11.0938C14.7344 10.6623 15.0914 10.3125 15.5312 10.3125ZM7.76562 0C10.7299 7.33854e-05 13.1416 2.36571 13.1416 5.27344C13.1416 8.18117 10.7299 10.5468 7.76562 10.5469C4.80124 10.5469 2.38965 8.18121 2.38965 5.27344C2.38965 2.36566 4.80124 0 7.76562 0ZM7.76562 1.5625C5.67958 1.5625 3.98242 3.22723 3.98242 5.27344C3.98242 7.31965 5.67958 8.98438 7.76562 8.98438C9.85161 8.9843 11.5488 7.3196 11.5488 5.27344C11.5488 3.22727 9.85161 1.56257 7.76562 1.5625Z" fill="#4B4D50"/>
                </svg>
              </div>
            </div>
            <span class="text-xs text-dbd-gray mt-1">Holders</span>
          </div>
        </div>
      </div>
      
      <!-- Home Indicator for iOS -->
      <div class="home-indicator flex justify-center py-2">
        <div class="w-32 h-1 bg-dbd-dark rounded-full opacity-60"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomNavigation'
}
</script>

<style scoped>
.bottom-navigation {
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.04);
  z-index: 50;
}

.nav-item {
  flex: 1;
  min-width: 62px;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
}

@media (max-width: 640px) {
  .nav-item span {
    font-size: 11px;
  }
  
  .icon-container {
    height: 28px;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .nav-item {
    min-width: 80px;
  }
  
  .icon-container {
    height: 36px;
  }
}
</style>
