<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  event_type: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  alert('Pesan Anda telah dikirim! Kami akan segera menghubungi Anda.')
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <section class="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Hubungi Kami
        </h1>
        <p class="text-xl text-white/90">
          Siap membantu mewujudkan undangan digital impianmu. Mari diskusikan kebutuhanmu!
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="card p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name"
                  v-model="form.name"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  v-model="form.email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Nomor WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone"
                  v-model="form.phone"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
              </div>

              <div>
                <label for="event_type" class="block text-sm font-medium text-gray-700 mb-2">Jenis Acara</label>
                <select 
                  id="event_type"
                  v-model="form.event_type"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Pilih Jenis Acara</option>
                  <option value="pernikahan">Pernikahan</option>
                  <option value="ulang_tahun">Ulang Tahun</option>
                  <option value="khitanan">Khitanan</option>
                  <option value="acara_perusahaan">Acara Perusahaan</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                <textarea 
                  id="message"
                  v-model="form.message"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Ceritakan tentang acara Anda dan kebutuhan undangan digital..."
                ></textarea>
              </div>

              <button type="submit" class="btn-primary w-full text-lg py-4">
                Kirim Pesan
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <!-- Contact Details -->
            <div class="card p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Info Kontak</h2>
              
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span class="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p class="text-gray-600">+62 812-3456-7890</p>
                    <p class="text-sm text-gray-500">Tersedia 24/7 untuk konsultasi</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <span class="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                    <p class="text-gray-600">info@undanganku.com</p>
                    <p class="text-sm text-gray-500">Respons dalam 2-4 jam</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                    <span class="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Alamat</h3>
                    <p class="text-gray-600">Jakarta Selatan, Indonesia</p>
                    <p class="text-sm text-gray-500">Melayani seluruh Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- FAQ -->
            <div class="card p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">FAQ Singkat</h2>
              
              <div class="space-y-4">
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Berapa lama proses pembuatan?</h3>
                  <p class="text-gray-600 text-sm">1-3 hari kerja tergantung kompleksitas desain</p>
                </div>

                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Apakah bisa revisi?</h3>
                  <p class="text-gray-600 text-sm">Ya, sesuai paket yang dipilih (2x-unlimited revisi)</p>
                </div>

                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">Bagaimana cara pembayaran?</h3>
                  <p class="text-gray-600 text-sm">Transfer bank, e-wallet, atau cicilan 0%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Butuh Konsultasi Langsung?
        </h2>
        <p class="text-xl text-white/90 mb-8">
          Tim ahli kami siap membantu Anda memilih template dan paket yang tepat
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/628123456789" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Chat WhatsApp
          </a>
          <a href="tel:+628123456789" class="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
            Telepon Sekarang
          </a>
        </div>
      </div>
    </section>
  </div>
</template>