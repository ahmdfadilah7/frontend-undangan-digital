<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 relative overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-10 left-10 text-6xl text-amber-300 animate-float opacity-40" style="animation-delay: 0s;">🌸</div>
      <div class="absolute top-20 right-20 text-5xl text-yellow-300 animate-bounce-gentle opacity-50" style="animation-delay: 1.5s;">✨</div>
      <div class="absolute bottom-32 left-16 text-7xl text-amber-300 animate-float opacity-30" style="animation-delay: 3s;">🌹</div>
      <div class="absolute bottom-20 right-32 text-4xl text-yellow-300 animate-bounce-gentle opacity-40" style="animation-delay: 4.5s;">💐</div>
    </div>

    <!-- Back Button -->
    <div class="absolute top-6 left-6 z-50">
      <button 
        @click="$router.go(-1)"
        class="bg-white/90 backdrop-blur-sm text-amber-600 hover:bg-white hover:text-amber-700 px-4 py-2 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span>Kembali</span>
      </button>
    </div>

    <!-- Demo Badge -->
    <div class="absolute top-6 right-6 z-50">
      <div class="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse shadow-lg">
        💒 ELEGANT DEMO
      </div>
    </div>

    <!-- Cover Section -->
    <div v-if="showCover" class="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100">
      <div class="text-center animate-fade-in max-w-md mx-auto px-4">
        <!-- Cover Photo -->
        <div class="relative mb-8">
          <div class="w-80 h-96 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-3xl mx-auto shadow-2xl overflow-hidden relative">
            <!-- Simulated couple photo -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center text-white">
                <div class="text-8xl mb-4">👰🤵</div>
                <div class="text-2xl font-bold">Couple Photo</div>
              </div>
            </div>
            <!-- Decorative border -->
            <div class="absolute inset-2 border-2 border-white/30 rounded-2xl"></div>
          </div>
          
          <!-- Floating ornaments -->
          <div class="absolute -top-4 -left-4 text-4xl animate-bounce-gentle" style="animation-delay: 0.5s;">🌸</div>
          <div class="absolute -top-2 -right-6 text-3xl animate-float" style="animation-delay: 1s;">✨</div>
          <div class="absolute -bottom-4 -left-6 text-3xl animate-bounce-gentle" style="animation-delay: 1.5s;">🌹</div>
          <div class="absolute -bottom-2 -right-4 text-4xl animate-float" style="animation-delay: 2s;">💐</div>
        </div>

        <!-- Cover Title -->
        <div class="mb-6 animate-slide-up" style="animation-delay: 0.5s;">
          <div class="text-amber-700 text-sm font-medium tracking-widest uppercase mb-2">The Wedding of</div>
          <h1 class="text-5xl md:text-6xl font-bold text-amber-900 mb-2" style="font-family: serif;">
            Sari & Joko
          </h1>
          <div class="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto"></div>
        </div>

        <!-- Cover Date -->
        <div class="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-8 animate-slide-up border border-amber-200" style="animation-delay: 0.7s;">
          <div class="text-3xl font-bold text-amber-900 mb-2">15 Desember 2024</div>
          <div class="text-lg text-amber-700">Minggu, Pukul 09.00 WIB</div>
        </div>

        <!-- Open Invitation Button -->
        <button 
          @click="openInvitation"
          class="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 animate-slide-up"
          style="animation-delay: 0.9s;"
        >
          💌 Buka Undangan
        </button>

        <!-- Cover Footer -->
        <div class="mt-8 text-amber-600 text-sm animate-fade-in" style="animation-delay: 1.1s;">
          ✨ Tap untuk membuka undangan digital ✨
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div v-if="!showCover" class="container mx-auto px-4 py-8 relative z-10">
      <div class="max-w-md mx-auto">
        
        <!-- Header Section with Ornament -->
        <div class="text-center mb-8 animate-fade-in">
          <div class="text-6xl mb-4">🌸</div>
          <div class="text-amber-700 text-sm font-medium tracking-widest uppercase mb-4">
            We Invited You To Celebrate Our Wedding Day
          </div>
          <div class="w-24 h-0.5 bg-amber-500 mx-auto"></div>
        </div>

        <!-- Main Wedding Card -->
        <div class="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden animate-slide-up border border-amber-200" style="animation-delay: 0.2s;">
          
          <!-- Couple Names Section -->
          <div class="relative p-8 text-center bg-gradient-to-br from-amber-50 to-yellow-50">
            <!-- Decorative ornament -->
            <div class="text-4xl mb-4">🌸</div>
            
            <h1 class="text-4xl font-bold text-amber-900 mb-6" style="font-family: serif;">
              Sari & Joko
            </h1>
            
            <div class="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
            
            <p class="text-xl text-amber-800 font-medium mb-6">
              Menikah InsyaAllah
            </p>

            <!-- Couple Photos -->
            <div class="flex justify-center space-x-8 mb-6">
              <!-- Bride -->
              <div class="text-center">
                <div class="w-24 h-24 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <span class="text-3xl">👰</span>
                </div>
                <div class="text-sm font-semibold text-amber-800">Sari</div>
                <div class="text-xs text-amber-600">Putri dari Bpk. Sutrisno & Ibu Siti</div>
              </div>
              
              <!-- Groom -->
              <div class="text-center">
                <div class="w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <span class="text-3xl">🤵</span>
                </div>
                <div class="text-sm font-semibold text-amber-800">Joko</div>
                <div class="text-xs text-amber-600">Putra dari Bpk. Bambang & Ibu Rina</div>
              </div>
            </div>
          </div>

          <!-- Event Details Section -->
          <div class="p-8">
            <!-- Countdown Timer -->
            <div class="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 mb-6 text-center border border-amber-200">
              <h3 class="text-lg font-semibold text-amber-900 mb-4">⏰ Menuju Hari Bahagia</h3>
              <div class="grid grid-cols-4 gap-2 text-center">
                <div class="bg-white rounded-lg p-3 shadow-sm">
                  <div class="text-2xl font-bold text-amber-600">{{ countdown.days }}</div>
                  <div class="text-xs text-amber-700">Hari</div>
                </div>
                <div class="bg-white rounded-lg p-3 shadow-sm">
                  <div class="text-2xl font-bold text-amber-600">{{ countdown.hours }}</div>
                  <div class="text-xs text-amber-700">Jam</div>
                </div>
                <div class="bg-white rounded-lg p-3 shadow-sm">
                  <div class="text-2xl font-bold text-amber-600">{{ countdown.minutes }}</div>
                  <div class="text-xs text-amber-700">Menit</div>
                </div>
                <div class="bg-white rounded-lg p-3 shadow-sm">
                  <div class="text-2xl font-bold text-amber-600">{{ countdown.seconds }}</div>
                  <div class="text-xs text-amber-700">Detik</div>
                </div>
              </div>
            </div>

            <!-- Wedding Events -->
            <div class="space-y-6 mb-6">
              <!-- Akad Nikah -->
              <div class="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
                <div class="text-center">
                  <div class="text-3xl mb-3">💒</div>
                  <h3 class="text-xl font-bold text-amber-900 mb-3">Akad Nikah</h3>
                  <div class="space-y-2 text-amber-800">
                    <div class="font-semibold">Minggu, 15 Desember 2024</div>
                    <div>Pukul 09.00 WIB</div>
                    <div>📍 Masjid Al-Ikhlas</div>
                    <div class="text-sm">Jl. Merdeka No. 123, Jakarta Pusat</div>
                  </div>
                </div>
              </div>

              <!-- Resepsi -->
              <div class="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-amber-200">
                <div class="text-center">
                  <div class="text-3xl mb-3">🎉</div>
                  <h3 class="text-xl font-bold text-amber-900 mb-3">Resepsi</h3>
                  <div class="space-y-2 text-amber-800">
                    <div class="font-semibold">Minggu, 15 Desember 2024</div>
                    <div>Pukul 11.00 - 14.00 WIB</div>
                    <div>📍 Gedung Serbaguna Melati</div>
                    <div class="text-sm">Jl. Sudirman No. 456, Jakarta Selatan</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-3 mb-6">
              <button 
                @click="handleRSVP"
                :class="[
                  'flex-1 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105',
                  rsvpConfirmed ? 'bg-green-500 text-white' : 'bg-amber-500 hover:bg-amber-600 text-white'
                ]"
              >
                {{ rsvpConfirmed ? '✅ RSVP Confirmed' : '📝 RSVP' }}
              </button>
              <button 
                @click="openLocation"
                class="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                📍 Lokasi
              </button>
            </div>

            <!-- Music Player -->
            <div class="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 mb-6 border border-amber-200">
              <h3 class="text-lg font-semibold text-amber-900 mb-4 text-center">🎵 Wedding Music</h3>
              <div class="flex items-center justify-center space-x-4">
                <button 
                  @click="toggleMusic"
                  class="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  {{ isPlaying ? '⏸️' : '▶️' }}
                </button>
                <div class="text-center">
                  <div class="text-sm font-medium text-amber-800">
                    {{ isPlaying ? 'Now Playing' : 'Click to Play' }}
                  </div>
                  <div class="text-xs text-amber-600">
                    {{ isPlaying ? 'A Thousand Years - Christina Perri' : 'Wedding Song' }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Guest Messages -->
            <div class="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 mb-6 border border-amber-200">
              <h3 class="text-lg font-semibold text-amber-900 mb-4 text-center">💌 Pesan & Doa</h3>
              <div class="space-y-3 max-h-40 overflow-y-auto mb-4">
                <div v-for="message in guestMessages" :key="message.id" 
                     class="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div class="font-medium text-amber-800 text-sm">{{ message.name }}</div>
                  <div class="text-gray-700 text-sm">{{ message.message }}</div>
                  <div class="text-xs text-gray-500 mt-1">{{ message.time }}</div>
                </div>
              </div>
              <button 
                @click="addMessage"
                class="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              >
                ✍️ Tulis Pesan & Doa
              </button>
            </div>

            <!-- Location Map -->
            <div class="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 mb-6 border border-amber-200">
              <h3 class="text-lg font-semibold text-amber-900 mb-4 text-center">🗺️ Lokasi Acara</h3>
              <div class="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
                <div class="text-center text-gray-600">
                  <div class="text-4xl mb-2">🗺️</div>
                  <div class="text-sm">Google Maps</div>
                  <div class="text-xs">Tap untuk membuka peta</div>
                </div>
              </div>
              <button 
                @click="openMaps"
                class="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              >
                📍 Buka di Google Maps
              </button>
            </div>

            <!-- Share Section -->
            <div class="text-center">
              <div class="text-amber-700 text-sm tracking-wide mb-4">
                Dengan Doa Restu Anda, Kami Mengucapkan Terima Kasih ❤️
              </div>
              <div class="flex justify-center space-x-4">
                <button 
                  @click="shareInvitation"
                  class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>📤</span>
                  <span>Share</span>
                </button>
                <button 
                  @click="downloadInvitation"
                  class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>💾</span>
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="text-center mt-8 animate-fade-in">
          <div class="text-amber-600 text-sm">
            ✨ Powered by UndanganKu ✨
          </div>
        </div>
      </div>
    </div>

    <!-- RSVP Modal -->
    <div v-if="showRSVPModal" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl max-w-md w-full p-6 animate-slide-up border-2 border-amber-200">
        <h3 class="text-2xl font-bold text-amber-900 mb-6 text-center">💌 Konfirmasi Kehadiran</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
            <input 
              v-model="rsvpForm.name"
              type="text" 
              class="w-full px-4 py-3 border border-amber-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Masukkan nama Anda"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Kehadiran</label>
            <select 
              v-model="rsvpForm.attendance"
              class="w-full px-4 py-3 border border-amber-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">Pilih kehadiran</option>
              <option value="hadir">✅ Hadir</option>
              <option value="tidak_hadir">❌ Tidak Hadir</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Jumlah Tamu</label>
            <input 
              v-model="rsvpForm.guests"
              type="number" 
              min="1"
              max="5"
              class="w-full px-4 py-3 border border-amber-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
          </div>
          <div class="flex gap-3 pt-4">
            <button 
              @click="submitRSVP"
              class="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-semibold transition-colors"
              :disabled="!rsvpForm.name || !rsvpForm.attendance"
            >
              Konfirmasi RSVP
            </button>
            <button 
              @click="closeRSVPModal"
              class="px-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl font-semibold transition-colors"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showCover = ref(true)
const rsvpConfirmed = ref(false)
const isPlaying = ref(false)
const showRSVPModal = ref(false)

const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

const rsvpForm = ref({
  name: '',
  attendance: '',
  guests: 1
})

const guestMessages = ref([
  { id: 1, name: 'Keluarga Besar', message: 'Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah 🤲', time: '2 jam lalu' },
  { id: 2, name: 'Teman Kuliah', message: 'Barakallahu lakuma wa baraka alaikuma! Semoga bahagia selalu 💕', time: '5 jam lalu' },
  { id: 3, name: 'Rekan Kerja', message: 'Selamat ya! Undangannya cantik banget, ga sabar datang ke acara kalian 🌹', time: '1 hari lalu' },
  { id: 4, name: 'Tetangga', message: 'Alhamdulillah, akhirnya Sari menikah juga. Semoga langgeng sampai kakek nenek 👴👵', time: '2 hari lalu' }
])

let countdownInterval: number | null = null

const openInvitation = () => {
  showCover.value = false
  startCountdown()
}

const startCountdown = () => {
  const weddingDate = new Date('2024-12-15T09:00:00').getTime()
  
  countdownInterval = setInterval(() => {
    const now = new Date().getTime()
    const distance = weddingDate - now
    
    if (distance > 0) {
      countdown.value.days = Math.floor(distance / (1000 * 60 * 60 * 24))
      countdown.value.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      countdown.value.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      countdown.value.seconds = Math.floor((distance % (1000 * 60)) / 1000)
    } else {
      countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
      if (countdownInterval) clearInterval(countdownInterval)
    }
  }, 1000)
}

const handleRSVP = () => {
  showRSVPModal.value = true
}

const closeRSVPModal = () => {
  showRSVPModal.value = false
  rsvpForm.value = { name: '', attendance: '', guests: 1 }
}

const submitRSVP = () => {
  if (rsvpForm.value.name && rsvpForm.value.attendance) {
    rsvpConfirmed.value = true
    closeRSVPModal()
    alert(`✅ RSVP berhasil dikonfirmasi!\n\nNama: ${rsvpForm.value.name}\nKehadiran: ${rsvpForm.value.attendance}\nJumlah Tamu: ${rsvpForm.value.guests}\n\nTerima kasih! 💕`)
  }
}

const openLocation = () => {
  alert('📍 Membuka Google Maps...\n\nLokasi Akad: Masjid Al-Ikhlas\nLokasi Resepsi: Gedung Serbaguna Melati\n\n(Demo - dalam versi asli akan membuka aplikasi maps)')
}

const openMaps = () => {
  alert('🗺️ Membuka Google Maps...\n\nMenampilkan rute ke lokasi acara\n📍 Masjid Al-Ikhlas & Gedung Serbaguna Melati\n\n(Demo - akan membuka Google Maps)')
}

const toggleMusic = () => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    alert('🎵 Memulai musik pernikahan...\n\n♪ A Thousand Years - Christina Perri\n🎶 Romantic Wedding Songs\n\n(Demo audio)')
  }
}

const addMessage = () => {
  const name = prompt('Masukkan nama Anda:')
  const message = prompt('Tulis pesan & doa untuk pengantin:')
  
  if (name && message) {
    guestMessages.value.unshift({
      id: Date.now(),
      name: name,
      message: message,
      time: 'Baru saja'
    })
    alert('✅ Pesan & doa berhasil dikirim! Terima kasih 💕')
  }
}

const shareInvitation = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Undangan Pernikahan Sari & Joko',
      text: 'Kami mengundang Anda untuk hadir di pernikahan kami',
      url: window.location.href
    })
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('🔗 Link undangan berhasil disalin!\n\nAnda dapat membagikannya melalui WhatsApp, Instagram, atau media sosial lainnya.')
    })
  }
}

const downloadInvitation = () => {
  alert('💾 Mengunduh undangan...\n\n📄 Format: PDF Elegant\n🎨 Kualitas: High Resolution\n💌 Includes: All wedding details\n\n(Demo download)')
}

onMounted(() => {
  // Initialize countdown if cover is not shown
  if (!showCover.value) {
    startCountdown()
  }
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>