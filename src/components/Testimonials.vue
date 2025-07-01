<script setup lang="ts">
const testimonials = [
  {
    name: 'Sarah & Ahmad',
    event: 'Pernikahan',
    content: 'UndanganKu membantu kami membuat undangan pernikahan yang sangat indah dan mudah dibagikan. Semua tamu sangat terkesan!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    name: 'Budi Santoso',
    event: 'Ulang Tahun Anak',
    content: 'Prosesnya cepat dan hasilnya memuaskan. Anak saya sangat senang dengan undangan digital untuk pesta ulang tahunnya.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    name: 'PT. Maju Bersama',
    event: 'Acara Perusahaan',
    content: 'Pelayanan profesional dan hasil yang berkualitas tinggi. Sangat cocok untuk acara perusahaan kami.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
]
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center space-y-4 mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Apa Kata <span class="gradient-text">Klien Kami</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Kepuasan klien adalah prioritas utama kami. Lihat testimoni dari mereka yang telah mempercayai layanan kami
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="card p-8"
        >
          <div class="flex items-center mb-4">
            <img 
              :src="testimonial.avatar" 
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover mr-4"
            >
            <div>
              <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
              <p class="text-sm text-gray-600">{{ testimonial.event }}</p>
            </div>
          </div>
          
          <div class="flex mb-4">
            <span v-for="i in testimonial.rating" :key="i" class="text-yellow-400">⭐</span>
          </div>
          
          <p class="text-gray-600 leading-relaxed">{{ testimonial.content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>