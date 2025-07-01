<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <section class="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-32 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div class="absolute -bottom-40 -left-32 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style="animation-delay: 2s"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8 animate-slide-up">
          <div class="space-y-4">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Undangan Digital
              <span class="gradient-text">Impianmu</span>
            </h1>
            <p class="text-xl text-gray-600 leading-relaxed">
              Ciptakan undangan digital yang memukau untuk momen spesialmu. Hemat waktu, ramah lingkungan, dan mudah dibagikan ke seluruh dunia.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <button class="btn-primary text-lg px-8 py-4">
              Lihat Template
            </button>
            <button class="border-2 border-gray-300 hover:border-primary-500 text-gray-700 hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
              Konsultasi Gratis
            </button>
          </div>

          <div class="flex items-center space-x-6 text-sm text-gray-500">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Gratis Revisi</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Proses Cepat</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Kualitas Premium</span>
            </div>
          </div>
        </div>

        <div class="relative animate-fade-in">
          <div class="relative z-10">
            <!-- Mock phone with invitation preview -->
            <div class="w-80 h-96 mx-auto bg-white rounded-3xl shadow-2xl p-4 transform rotate-6 hover:rotate-3 transition-transform duration-500">
              <div class="w-full h-full bg-gradient-to-b from-pink-100 to-purple-100 rounded-2xl overflow-hidden relative">
                <div class="p-6 text-center">
                  <div class="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span class="text-white text-2xl">💕</span>
                  </div>
                  <h3 class="text-lg font-bold text-gray-800 mb-2">Sarah & John</h3>
                  <p class="text-sm text-gray-600 mb-4">Menikah InsyaAllah</p>
                  <div class="bg-white/80 rounded-lg p-4 text-xs">
                    <p class="font-semibold">Sabtu, 15 Juni 2024</p>
                    <p>Pukul 08.00 WIB</p>
                    <p>Gedung Serba Guna</p>
                  </div>
                </div>
                <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-200 to-transparent"></div>
              </div>
            </div>
            
            <!-- Floating elements -->
            <div class="absolute -top-4 -left-4 w-8 h-8 bg-accent-400 rounded-full animate-bounce-gentle"></div>
            <div class="absolute -bottom-4 -right-4 w-6 h-6 bg-primary-400 rounded-full animate-bounce-gentle" style="animation-delay: 1s"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>