<script setup lang="ts">
const packages = [
  {
    name: 'Basic',
    price: '99K',
    popular: false,
    features: [
      '1 Desain Template',
      'Revisi 2x',
      'Link Sharing',
      'Support via WhatsApp',
      'Valid 6 Bulan'
    ]
  },
  {
    name: 'Premium',
    price: '199K',
    popular: true,
    features: [
      'Desain Custom',
      'Revisi 5x',
      'Link Sharing',
      'RSVP Online',
      'Gallery Photo',
      'Music Background',
      'Support Priority',
      'Valid 1 Tahun'
    ]
  },
  {
    name: 'Enterprise',
    price: '399K',
    popular: false,
    features: [
      'Unlimited Revisi',
      'Multiple Design',
      'RSVP Advanced',
      'Analytics Dashboard',
      'Custom Domain',
      'Video Background',
      'Live Chat Support',
      'Valid Selamanya'
    ]
  }
]
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center space-y-4 mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Paket <span class="gradient-text">Harga</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Pilih paket yang sesuai dengan kebutuhan dan budget acara spesialmu
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(pkg, index) in packages"
          :key="index"
          :class="[
            'card p-8 relative',
            pkg.popular ? 'ring-2 ring-primary-500 transform scale-105' : ''
          ]"
        >
          <!-- Popular Badge -->
          <div v-if="pkg.popular" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Paling Populer
            </span>
          </div>

          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ pkg.name }}</h3>
            <div class="mb-4">
              <span class="text-4xl font-bold text-primary-600">{{ pkg.price }}</span>
              <span class="text-gray-600">/paket</span>
            </div>
          </div>

          <ul class="space-y-4 mb-8">
            <li v-for="(feature, featureIndex) in pkg.features" :key="featureIndex" class="flex items-center">
              <div class="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span class="text-green-600 text-xs">✓</span>
              </div>
              <span class="text-gray-600">{{ feature }}</span>
            </li>
          </ul>

          <button :class="pkg.popular ? 'btn-primary w-full' : 'btn-secondary w-full'">
            Pilih Paket
          </button>
        </div>
      </div>

    </div>
  </section>
</template>