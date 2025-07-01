<script setup lang="ts">
const features = [
  {
    icon: '🎨',
    title: 'Desain Kustom',
    description: 'Template yang dapat disesuaikan dengan tema dan warna favoritmu'
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Tampil sempurna di semua perangkat, dari ponsel hingga desktop'
  },
  {
    icon: '⚡',
    title: 'Loading Cepat',
    description: 'Optimasi performa untuk pengalaman pengguna yang lancar'
  },
  {
    icon: '🔗',
    title: 'Mudah Dibagikan',
    description: 'Satu link untuk semua tamu, bisa dibagikan via WhatsApp, email, atau media sosial'
  },
  {
    icon: '💰',
    title: 'Hemat Biaya',
    description: 'Lebih ekonomis dibanding undangan cetak tradisional'
  },
  {
    icon: '🌱',
    title: 'Ramah Lingkungan',
    description: 'Tanpa kertas, ikut menjaga kelestarian lingkungan'
  }
]
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center space-y-4 mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Mengapa Memilih <span class="gradient-text">Hachie Wedding</span>?
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Kami menyediakan solusi undangan digital terlengkap dengan fitur-fitur unggulan yang memudahkan acara spesialmu
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="card p-8 text-center group"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {{ feature.icon }}
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>