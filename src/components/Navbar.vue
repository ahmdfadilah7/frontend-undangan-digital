<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <RouterLink to="/" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">HW</span>
            </div>
            <span class="text-xl font-bold gradient-text">Hachie Wedding</span>
          </RouterLink>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink to="/" class="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            Beranda
          </RouterLink>
          <RouterLink to="/templates" class="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            Template
          </RouterLink>
          <RouterLink to="/about" class="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            Tentang
          </RouterLink>
          <RouterLink to="/contact" class="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            Kontak
          </RouterLink>
          <button class="btn-primary">
            Pesan Sekarang
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600">
            <Bars3Icon v-if="!isOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
        <RouterLink to="/" @click="toggleMenu" class="block text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium">
          Beranda
        </RouterLink>
        <RouterLink to="/templates" @click="toggleMenu" class="block text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium">
          Template
        </RouterLink>
        <RouterLink to="/about" @click="toggleMenu" class="block text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium">
          Tentang
        </RouterLink>
        <RouterLink to="/contact" @click="toggleMenu" class="block text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium">
          Kontak
        </RouterLink>
        <div class="px-3 py-2">
          <button class="btn-primary w-full">
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>