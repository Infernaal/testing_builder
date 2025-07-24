<template>
  <!-- Fullscreen Profile Overlay -->
  <Transition
    name="profile-overlay"
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="opacity-0 transform translate-y-full"
    enter-to-class="opacity-100 transform translate-y-0"
    leave-from-class="opacity-100 transform translate-y-0"
    leave-to-class="opacity-0 transform translate-y-full"
  >
    <div
      v-if="isVisible"
      class="fixed inset-0 z-50 bg-gradient-to-br from-[#120B81] via-[#1A1086] to-[#09074E] overflow-hidden"
    >
      <!-- Profile Header Section -->
      <div class="w-full px-4 pt-12 pb-6">
        <div class="bg-[#605F87]/24 border border-[#D8D8D8] backdrop-blur-sm rounded-[50px_20px_20px_50px] p-4">
          <div class="flex items-center gap-4">
            <!-- Large Avatar -->
            <div class="relative flex-shrink-0">
              <div class="w-20 h-20 rounded-full border border-[#7E73D6] overflow-hidden">
                <img 
                  :src="profileData.avatar" 
                  :alt="profileData.name"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <!-- User Info -->
            <div class="flex-1 min-w-0">
              <!-- Silver Badge -->
              <div class="flex items-center gap-2 mb-2">
                <div class="flex items-center gap-2 px-4 py-1 bg-[#6E6BA9]/90 border border-[#2019CE] rounded-3xl backdrop-blur-sm">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0004 26.2497C7.24592 26.2497 1.75073 20.7545 1.75073 14.0001C1.75073 7.24564 7.24592 1.75085 14.0004 1.75085C20.7548 1.75085 26.25 7.24564 26.25 14.0001C26.25 20.7545 20.7544 26.2497 14.0004 26.2497Z" fill="white"/>
                    <path d="M20.2071 5.37145C20.73 5.37145 21.2468 5.39833 21.7567 5.4472C19.7049 3.58479 16.9828 2.44812 14 2.44812C7.63041 2.44812 2.448 7.63013 2.448 14.0001C2.448 16.2735 3.11102 18.3941 4.24973 20.1832C4.86143 11.9015 11.769 5.37145 20.2071 5.37145Z" fill="#E0E0E0"/>
                    <path d="M14.0006 25.5519C20.3702 25.5519 25.5526 20.3699 25.5526 13.9999C25.5526 10.6131 24.0873 7.56229 21.7577 5.44697C21.2478 5.39809 20.731 5.37122 20.2081 5.37122C11.7704 5.37122 4.86244 11.9017 4.25073 20.1829C6.30211 23.4072 9.90475 25.5519 14.0006 25.5519Z" fill="#B5B5B5"/>
                    <path d="M14.0004 23.1368C19.0464 23.1368 23.1369 19.0463 23.1369 14.0003C23.1369 8.95433 19.0464 4.86377 14.0004 4.86377C8.95445 4.86377 4.86389 8.95433 4.86389 14.0003C4.86389 19.0463 8.95445 23.1368 14.0004 23.1368Z" fill="#9E9E9E"/>
                    <path d="M19.4965 12.7667L15.6984 12.2148L14.0001 8.77307L12.3014 12.2148L8.50366 12.7667L11.2519 15.4452L10.6031 19.2279L14.0001 17.4421L17.397 19.2279L16.7483 15.4452L19.4965 12.7667Z" fill="#F6F6F6"/>
                    <path d="M19.4971 12.7667L15.699 12.2144L14.0007 8.77307V17.4421L17.3977 19.2279L16.7489 15.4452L19.4971 12.7667Z" fill="#E0E0E0"/>
                  </svg>
                  <span class="text-[#FAFAFA] text-sm font-medium">Silver</span>
                </div>
              </div>
              <h1 class="text-white text-xl font-bold leading-tight">{{ profileData.name }}</h1>
            </div>
            
            <!-- Right Arrow Button -->
            <button 
              @click="$emit('close')"
              class="w-11 h-11 bg-[#EFEEFF] border border-[#2019CE] rounded-full flex items-center justify-center flex-shrink-0"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.2155 11.2862L8.2216 2.29534C7.82696 1.90169 7.18757 1.90169 6.79192 2.29534C6.39728 2.68898 6.39728 3.32838 6.79192 3.72203L15.0724 11.9996L6.79292 20.2771C6.39827 20.6707 6.39827 21.3101 6.79292 21.7048C7.18756 22.0984 7.82795 22.0984 8.2226 21.7048L17.2165 12.7139C17.6051 12.3244 17.6051 11.6749 17.2155 11.2862Z" fill="#B7B7B7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Menu Items Section -->
      <div class="flex-1 px-6 space-y-3 overflow-y-auto" style="height: calc(100vh - 320px);">
        <!-- Calculator -->
        <div @click="handleMenuClick('calculator')" class="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl cursor-pointer transition-all">
          <div class="w-10 h-10 bg-[#404040]/24 border border-white rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 2C3.4 2 3 2.4 3 3V21C3 21.6 3.4 22 4 22H20C20.6 22 21 21.6 21 21V3C21 2.4 20.6 2 20 2H4ZM4 4H20V20H4V4ZM6 6V8H8V6H6ZM10 6V8H12V6H10ZM14 6V8H18V6H14ZM6 10V12H8V10H6ZM10 10V12H12V10H10ZM14 10V12H16V10H14ZM18 10V14H16V16H18V18H16V16H14V18H12V16H10V18H8V16H6V14H8V12H6V10H8V12H10V10H12V12H14V10H16V12H18V10ZM6 14V16H8V14H6ZM10 14V16H12V14H10Z" fill="white"/>
            </svg>
          </div>
          <span class="text-white font-bold text-base">Calculator</span>
        </div>

        <!-- Ambassador -->
        <div @click="handleMenuClick('ambassador')" class="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl cursor-pointer transition-all">
          <div class="w-10 h-10 bg-[#404040]/24 border border-white rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5A3.5 3.5 0 0 1 15.5 12A3.5 3.5 0 0 1 12 15.5M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12S19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.51 2.42L9.13 5.07C8.52 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.72 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12S4.53 12.66 4.57 12.98L2.46 14.63C2.27 14.78 2.21 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.34 8.52 18.68 9.13 18.93L9.51 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.94L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98Z" fill="white"/>
            </svg>
          </div>
          <span class="text-white font-bold text-base">Ambassador</span>
        </div>

        <!-- Verification with Badge -->
        <div @click="handleMenuClick('verification')" class="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl cursor-pointer transition-all">
          <div class="w-10 h-10 bg-[#404040]/24 border border-white rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.4 7 14.8 8.6 14.8 10V11H15.5C16.1 11 16.5 11.4 16.5 12V17C16.5 17.6 16.1 18 15.5 18H8.5C7.9 18 7.5 17.6 7.5 17V12C7.5 11.4 7.9 11 8.5 11H9.2V10C9.2 8.6 10.6 7 12 7ZM12 8.2C11.2 8.2 10.4 8.8 10.4 10V11H13.6V10C13.6 8.8 12.8 8.2 12 8.2Z" fill="white"/>
            </svg>
          </div>
          <span class="text-white font-bold text-base flex-1">Verification</span>
          <!-- Red X Badge -->
          <div class="w-6 h-6 bg-[#FFF0F3] border-[0.667px] border-[#FF1919] rounded-[19.333px] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9228 7.16821C14.7585 6.94745 14.6305 6.70193 14.5436 6.4409C14.5201 6.18054 14.5379 5.91813 14.5962 5.66333C14.7477 5.12283 14.7046 4.54628 14.4744 4.0341C14.1456 3.57863 13.6671 3.25299 13.1226 3.11407C12.8728 3.03698 12.6365 2.92116 12.4226 2.77084C12.2398 2.5653 12.0911 2.33194 11.9819 2.07958C11.7892 1.56689 11.4246 1.13678 10.9502 0.862631C10.4256 0.692048 9.8579 0.709823 9.34519 0.912887C9.08843 0.99967 8.81951 1.04525 8.54844 1.04795C8.28733 0.989378 8.03727 0.889426 7.80776 0.751882C7.34444 0.444166 6.78837 0.307359 6.23518 0.364993C5.72041 0.534107 5.28002 0.875815 4.98858 1.33226C4.82575 1.56079 4.62746 1.76187 4.40119 1.92794C4.14391 2.04102 3.87014 2.11219 3.5903 2.13875C3.04904 2.16266 2.53279 2.37289 2.12909 2.73379C1.80194 3.18287 1.64241 3.73224 1.67814 4.28669C1.68201 4.55398 1.64344 4.82018 1.56385 5.07536C1.42625 5.30891 1.25231 5.51905 1.04854 5.6979C0.616901 6.04079 0.317739 6.52274 0.202076 7.06155C0.203417 7.60886 0.394039 8.13897 0.741655 8.56208C0.905939 8.78283 1.03392 9.02836 1.12078 9.28939C1.14429 9.54974 1.12656 9.81216 1.06823 10.067C0.916691 10.6074 0.959774 11.184 1.18997 11.6962C1.51892 12.1515 1.99733 12.4771 2.54179 12.6162C2.79166 12.6933 3.02788 12.8091 3.24182 12.9594C3.42458 13.165 3.57336 13.3983 3.68254 13.6507C3.87516 14.1634 4.23981 14.5935 4.71426 14.8676C4.77988 14.8969 4.84771 14.9209 4.91712 14.9394C5.38717 15.022 5.87062 14.9799 6.31921 14.8174C6.57597 14.7306 6.84489 14.685 7.11596 14.6823C7.37691 14.7414 7.62688 14.8413 7.85663 14.9784C8.32008 15.2858 8.87605 15.4226 9.42921 15.3653C9.94398 15.1962 10.3844 14.8545 10.6758 14.398C10.8386 14.1695 11.0369 13.9684 11.2632 13.8023C11.5205 13.6892 11.7943 13.6181 12.0741 13.5915C12.6154 13.5676 13.1316 13.3574 13.5353 12.9965C13.8625 12.5474 14.022 11.998 13.9863 11.4436C13.9824 11.1763 14.021 10.9101 14.1005 10.6549C14.2381 10.4214 14.4121 10.2112 14.6158 10.0324C15.0475 9.6895 15.3466 9.20755 15.4623 8.66874C15.461 8.12143 15.2704 7.59133 14.9228 7.16821Z" fill="#FF1919"/>
              <path d="M15.1261 9.67421L9.56268 15.2377C9.28451 15.5158 8.91361 15.5158 8.63544 15.2377C8.35726 14.9595 8.35726 14.5886 8.63544 14.3104L14.1989 8.74697C14.4771 8.46879 14.848 8.46879 15.1261 8.74697C15.4043 9.02514 15.4043 9.39604 15.1261 9.67421Z" fill="white"/>
              <path d="M15.1262 15.2377C14.848 15.5158 14.4771 15.5158 14.199 15.2377L8.6355 9.67419C8.35732 9.39602 8.35732 9.02512 8.6355 8.74695C8.91367 8.46878 9.28457 8.46878 9.56274 8.74695L15.1262 14.3104C15.4044 14.5886 15.4044 14.9595 15.1262 15.2377Z" fill="white"/>
            </svg>
          </div>
        </div>

        <!-- Security -->
        <div @click="handleMenuClick('security')" class="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl cursor-pointer transition-all">
          <div class="w-10 h-10 bg-[#404040]/24 border border-white rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.4 7 14.8 8.6 14.8 10V11H15.5C16.1 11 16.5 11.4 16.5 12V17C16.5 17.6 16.1 18 15.5 18H8.5C7.9 18 7.5 17.6 7.5 17V12C7.5 11.4 7.9 11 8.5 11H9.2V10C9.2 8.6 10.6 7 12 7ZM12 8.2C11.2 8.2 10.4 8.8 10.4 10V11H13.6V10C13.6 8.8 12.8 8.2 12 8.2Z" fill="white"/>
            </svg>
          </div>
          <span class="text-white font-bold text-base">Security</span>
        </div>

        <!-- Settings -->
        <div @click="handleMenuClick('settings')" class="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl cursor-pointer transition-all">
          <div class="w-10 h-10 bg-[#404040]/24 border border-white rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5A3.5 3.5 0 0 1 15.5 12A3.5 3.5 0 0 1 12 15.5M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12S19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.51 2.42L9.13 5.07C8.52 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.72 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12S4.53 12.66 4.57 12.98L2.46 14.63C2.27 14.78 2.21 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.34 8.52 18.68 9.13 18.93L9.51 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.94L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98Z" fill="white"/>
            </svg>
          </div>
          <span class="text-white font-bold text-base">Settings</span>
        </div>

        <!-- Support -->
        <div @click="handleMenuClick('support')" class="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl cursor-pointer transition-all">
          <div class="w-10 h-10 bg-[#404040]/24 border border-white rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 8L13.5 7.5C13.1 7.4 12.6 7.4 12.2 7.5L10.7 8L5 7V9L10.7 10L12 10.3L13.3 10L19 9H21ZM12 8C11.7 8 11.5 8.1 11.3 8.3L6.7 12.9C6.5 13.1 6.5 13.4 6.7 13.6L7.4 14.3C7.6 14.5 7.9 14.5 8.1 14.3L12 10.4L15.9 14.3C16.1 14.5 16.4 14.5 16.6 14.3L17.3 13.6C17.5 13.4 17.5 13.1 17.3 12.9L12.7 8.3C12.5 8.1 12.3 8 12 8Z" fill="white"/>
            </svg>
          </div>
          <span class="text-white font-bold text-base">Support</span>
        </div>

        <!-- Help -->
        <div @click="handleMenuClick('help')" class="flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl cursor-pointer transition-all">
          <div class="w-10 h-10 bg-[#404040]/24 border border-white rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4S20 7.59 20 12S16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8S14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z" fill="white"/>
            </svg>
          </div>
          <span class="text-white font-bold text-base">Help</span>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="absolute bottom-20 left-0 right-0 p-4 space-y-3">
        <!-- Start Block - Upgrade Section -->
        <div class="bg-[#F1E7FF] border border-[#DCCCF1] rounded-2xl p-4 relative overflow-hidden">
          <!-- Star Icon -->
          <div class="absolute left-2 top-3.5">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15.06" fill="#8C4CD1"/>
              <path d="M28.998 8.39055C26.1133 12.4471 21.365 15.0918 16.0003 15.0918C10.6356 15.0918 5.88739 12.4471 3.00269 8.39055C5.61916 3.9341 10.4615 0.941162 16.0003 0.941162C21.5392 0.941162 26.3815 3.9341 28.998 8.39055Z" fill="#9C68E1"/>
              <path d="M15.9997 5.11792V15.4117L19.3443 11.8949L15.9997 5.11792Z" fill="#FF9F00"/>
              <path d="M15.9996 5.11792V15.4117L12.655 11.8949L15.9996 5.11792Z" fill="#FED110"/>
              <path d="M26.8232 12.982L19.3443 11.8953L15.9997 15.412L26.8232 12.982Z" fill="#FED110"/>
              <path d="M26.8232 12.9825L21.4115 18.2577L15.9997 15.4126L26.8232 12.9825Z" fill="#FF9F00"/>
              <path d="M5.17645 12.982L12.6553 11.8953L16 15.412L5.17645 12.982Z" fill="#FF9F00"/>
              <path d="M5.17645 12.9825L10.5882 18.2577L16 15.4126L5.17645 12.9825Z" fill="#FED110"/>
              <path d="M15.9997 15.4124L21.4115 18.2575L22.689 25.7061L15.9997 15.4124Z" fill="#FED110"/>
              <path d="M22.689 25.7061L15.9997 22.1894V15.4124L22.689 25.7061Z" fill="#FF9F00"/>
              <path d="M15.9996 15.4124L10.5878 18.2575L9.31024 25.7061L15.9996 15.4124Z" fill="#FF9F00"/>
              <path d="M9.31024 25.7061L15.9996 22.1894V15.4124L9.31024 25.7061Z" fill="#FED110"/>
              <ellipse opacity="0.3" cx="16.0003" cy="27.5882" rx="8.88235" ry="0.545" fill="#20273A"/>
            </svg>
          </div>
          
          <!-- Background gradient -->
          <div class="absolute left-0 top-0 w-36 h-full bg-gradient-to-r from-[#8C4CD1]/40 to-transparent rounded-l-2xl"></div>
          
          <div class="flex items-center justify-between relative z-10">
            <div class="ml-10">
              <div class="text-[#02070E] font-bold text-lg">Start</div>
              <div class="text-sm text-[#4B4D50]">
                buy <span class="font-bold text-[#8C4CD1]">123</span> more Forevers to upgrade
              </div>
            </div>
            <button @click="handleUpgrade" class="px-6 py-2.5 bg-gradient-to-r from-[#2019CE] to-[#473FFF] text-white font-bold rounded-full text-sm hover:shadow-lg transition-all duration-200 flex-shrink-0">
              Upgrade
            </button>
          </div>
        </div>
        
        <!-- Language and ID Section -->
        <div class="flex items-center justify-between gap-3">
          <!-- User ID с копированием -->
          <div class="flex items-center bg-white/30 border border-white/40 rounded-full backdrop-blur-sm">
            <div class="px-3 py-2">
              <span class="text-[#B7B7B7] text-sm">ID: </span>
              <span class="text-white text-sm font-medium">{{ profileData.id }}</span>
            </div>
            <button @click="copyUserId" class="w-6 h-6 bg-white rounded-r-full border border-[#D8D8D8] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="text-gray-700">
                <path d="M18.2806 1.19995H8.98336C8.42322 1.19995 7.88603 1.43348 7.48995 1.84917C7.09387 2.26486 6.87136 2.82866 6.87136 3.41653V4.26906H5.81536C5.2278 4.26906 4.66431 4.51402 4.24885 4.95006C3.83338 5.3861 3.59998 5.97749 3.59998 6.59414V20.4749C3.59998 21.0915 3.83338 21.6829 4.24885 22.119C4.66431 22.555 5.2278 22.8 5.81536 22.8H14.9132C15.5008 22.8 16.0643 22.555 16.4797 22.119C16.8952 21.6829 17.1286 21.0915 17.1286 20.4749V19.6998H18.2806C18.8363 19.6999 19.3699 19.4709 19.7663 19.0621C20.1627 18.6533 20.3903 18.0975 20.4 17.5143V3.41653C20.398 2.82794 20.1739 2.26417 19.7766 1.8487C19.3794 1.43323 18.8414 1.19995 18.2806 1.19995Z" fill="currentColor"/>
              </svg>
            </button>
          </div>

          <!-- Language Selector с флагом -->
          <button 
            @click="toggleLanguageSelector"
            class="flex items-center gap-2 px-3 py-2 bg-white/20 border border-white/24 rounded-full backdrop-blur-sm transition-all hover:bg-white/30"
          >
            <div class="w-8 h-8 rounded-full overflow-hidden">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#F0F0F0"/>
                <path d="M15.3438 16.0025H31.0573C31.0573 14.6433 30.8761 13.3266 30.5385 12.0741H15.3438V16.0025Z" fill="#D80027"/>
                <path d="M15.3438 8.14179H28.847C27.9252 6.63756 26.7466 5.30797 25.3723 4.21338H15.3438V8.14179Z" fill="#D80027"/>
                <path d="M16.0038 31.06C19.5478 31.06 22.8053 29.8351 25.3776 27.7864H6.62988C9.20224 29.8351 12.4597 31.06 16.0038 31.06Z" fill="#D80027"/>
                <path d="M3.15241 23.855H28.8496C29.5896 22.6475 30.1636 21.3275 30.5411 19.9266H1.46094C1.83841 21.3275 2.41235 22.6475 3.15241 23.855Z" fill="#D80027"/>
                <path d="M7.91596 3.29305H9.28825L8.01178 4.22041L8.49937 5.72094L7.22296 4.79358L5.94655 5.72094L6.36772 4.42464C5.24384 5.36082 4.25878 6.45764 3.44702 7.67976H3.88672L3.07419 8.27005C2.94761 8.48123 2.82619 8.69576 2.70984 8.91346L3.09784 10.1076L2.37396 9.5817C2.19402 9.96294 2.02943 10.3528 1.88149 10.7507L2.30896 12.0665H3.88672L2.61025 12.9938L3.09784 14.4943L1.82143 13.567L1.05684 14.1225C0.980312 14.7377 0.94043 15.3643 0.94043 16.0002H15.9993C15.9993 7.68352 15.9993 6.70305 15.9993 0.941406C13.0244 0.941406 10.2513 1.80435 7.91596 3.29305ZM8.49937 14.4943L7.22296 13.567L5.94655 14.4943L6.43414 12.9938L5.15767 12.0665H6.73543L7.22296 10.5659L7.71049 12.0665H9.28825L8.01178 12.9938L8.49937 14.4943ZM8.01178 8.60711L8.49937 10.1076L7.22296 9.18029L5.94655 10.1076L6.43414 8.60711L5.15767 7.67976H6.73543L7.22296 6.17923L7.71049 7.67976H9.28825L8.01178 8.60711ZM13.9009 14.4943L12.6245 13.567L11.3481 14.4943L11.8357 12.9938L10.5592 12.0665H12.137L12.6245 10.5659L13.112 12.0665H14.6898L13.4133 12.9938L13.9009 14.4943ZM13.4133 8.60711L13.9009 10.1076L12.6245 9.18029L11.3481 10.1076L11.8357 8.60711L10.5592 7.67976H12.137L12.6245 6.17923L13.112 7.67976H14.6898L13.4133 8.60711ZM13.4133 4.22041L13.9009 5.72094L12.6245 4.79358L11.3481 5.72094L11.8357 4.22041L10.5592 3.29305H12.137L12.6245 1.79252L13.112 3.29305H14.6898L13.4133 4.22041Z" fill="#0052B4"/>
              </svg>
            </div>
            <span class="text-[#FAFAFA] text-sm font-medium">ENG</span>
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" class="text-white/70">
              <circle opacity="0.2" cx="10" cy="10" r="10" fill="white"/>
              <path d="M5.71387 8.57146L9.99958 12.8572L14.2853 8.57146" stroke="white" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'

// Props
defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

// Emits
defineEmits(['close'])

// Profile data
const profileData = ref({
  name: 'Jason Williams',
  id: '515745',
  avatar: 'https://cdn.builder.io/api/v1/image/assets%2Fcd0d81f444984dacbac377cc9f78a1aa%2F572074b5aefa4337aec163bd9a21aec3?format=webp&width=800'
})

// Methods
const handleMenuClick = (section) => {
  console.log(`Navigate to ${section}`)
  // TODO: Add navigation logic
}

const handleUpgrade = () => {
  console.log('Upgrade clicked')
  // TODO: Add upgrade logic
}

const copyUserId = async () => {
  try {
    await navigator.clipboard.writeText(profileData.value.id)
    console.log('User ID copied to clipboard')
    // TODO: Show success notification
  } catch (err) {
    console.error('Failed to copy user ID:', err)
  }
}

const toggleLanguageSelector = () => {
  console.log('Language selector clicked')
  // TODO: Add language selection logic
}
</script>

<style scoped>
/* Backdrop blur support */
@supports (backdrop-filter: blur(10px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
}

/* Ensure smooth scrolling */
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.overflow-y-auto::-webkit-scrollbar {
  display: none;
}

/* Animations */
.profile-overlay-enter-active,
.profile-overlay-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.profile-overlay-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.profile-overlay-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

/* Touch-friendly improvements */
button {
  min-height: 44px;
  min-width: 44px;
}

/* Hover effects */
button:hover {
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
  opacity: 0.8;
}

/* Prevent text selection on mobile */
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Allow text selection for specific elements */
span, h1 {
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}
</style>
