<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-200 to-blue-300 relative overflow-hidden">
    <!-- Professional Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-10 left-10 text-6xl text-blue-300 animate-float opacity-60" style="animation-delay: 0s;">📊</div>
      <div class="absolute top-20 right-20 text-5xl text-indigo-300 animate-bounce-gentle opacity-70" style="animation-delay: 1s;">💼</div>
      <div class="absolute bottom-32 left-16 text-7xl text-blue-300 animate-float opacity-50" style="animation-delay: 2s;">🤝</div>
      <div class="absolute bottom-20 right-32 text-4xl text-indigo-300 animate-bounce-gentle opacity-60" style="animation-delay: 3s;">🏢</div>
      <div class="absolute top-1/2 left-1/4 text-3xl text-blue-300 animate-float opacity-40" style="animation-delay: 4s;">📈</div>
      <div class="absolute top-1/3 right-1/3 text-5xl text-indigo-300 animate-bounce-gentle opacity-50" style="animation-delay: 5s;">🎯</div>
    </div>

    <!-- Back Button -->
    <div class="absolute top-6 left-6 z-50">
      <button 
        @click="$router.go(-1)"
        class="bg-white/90 backdrop-blur-sm text-blue-600 hover:bg-white hover:text-blue-700 px-4 py-2 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span>Kembali</span>
      </button>
    </div>

    <!-- Demo Badge -->
    <div class="absolute top-6 right-6 z-50">
      <div class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse shadow-lg">
        💼 CORPORATE DEMO
      </div>
    </div>

    <!-- Rest of template content... -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Script content...
</script>