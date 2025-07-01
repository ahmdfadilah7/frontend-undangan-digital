<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 relative overflow-hidden">
    <!-- Floating Decorative Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-10 left-10 text-6xl text-pink-300 animate-float opacity-60" style="animation-delay: 0s;">🌸</div>
      <div class="absolute top-20 right-20 text-5xl text-rose-300 animate-bounce-gentle opacity-70" style="animation-delay: 1s;">💕</div>
      <div class="absolute bottom-32 left-16 text-7xl text-pink-300 animate-float opacity-50" style="animation-delay: 2s;">🌹</div>
      <div class="absolute bottom-20 right-32 text-4xl text-rose-300 animate-bounce-gentle opacity-60" style="animation-delay: 3s;">🌺</div>
      <div class="absolute top-1/2 left-1/4 text-3xl text-pink-300 animate-float opacity-40" style="animation-delay: 4s;">🌷</div>
      <div class="absolute top-1/3 right-1/3 text-5xl text-rose-300 animate-bounce-gentle opacity-50" style="animation-delay: 5s;">💐</div>
    </div>

    <!-- Back Button -->
    <div class="absolute top-6 left-6 z-50">
      <button 
        @click="$router.go(-1)"
        class="bg-white/90 backdrop-blur-sm text-rose-600 hover:bg-white hover:text-rose-700 px-4 py-2 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span>Kembali</span>
      </button>
    </div>

    <!-- Demo Badge -->
    <div class="absolute top-6 right-6 z-50">
      <div class="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse shadow-lg">
        🎬 LIVE DEMO
      </div>
    </div>

    <!-- Cover Section -->
    <div v-if="showCover" class="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200">
      <div class="text-center animate-fade-in">
        <!-- Cover Animation -->
        <div class="relative mb-8">
          <div class="w-40 h-40 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto flex items-center justify-center shadow-2xl animate-float">
            <span class="text-8xl">💕</span>
          </div>
          <!-- Floating Hearts -->
          <div class="absolute -top-4 -left-4 text-4xl animate-bounce-gentle" style="animation-delay: 0.5s;">💖</div>
          <div class="absolute -top-2 -right-6 text-3xl animate-float" style="animation-delay: 1s;">💝</div>
          <div class="absolute -bottom-4 -left-6 text-3xl animate-bounce-gentle" style="animation-delay: 1.5s;">💗</div>
          <div class="absolute -bottom-2 -right-4 text-4xl animate-float" style="animation-delay: 2s;">💘</div>
        </div>

        <!-- Cover Title -->
        <h1 class="text-5xl md:text-6xl font-bold text-rose-900 mb-4 animate-slide-up" style="font-family: serif; animation-delay: 0.5s;">
          Sarah & John
        </h1>
        
        <!-- Cover Subtitle -->
        <p class="text-2xl text-rose-700 mb-8 animate-slide-up" style="animation-delay: 0.7s;">
          Menikah InsyaAllah
        </p>

        <!-- Cover Date -->
        <div class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-8 animate-slide-up" style="animation-delay: 0.9s;">
          <div class="text-3xl font-bold text-rose-900 mb-2">15 Juni 2024</div>
          <div class="text-lg text-rose-700">Sabtu, Pukul 08.00 WIB</div>
        </div>

        <!-- Open Invitation Button -->
        <button 
          @click="openInvitation"
          class="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 animate-slide-up"
          style="animation-delay: 1.1s;"
        >
          💌 Buka Undangan
        </button>

        <!-- Cover Footer -->
        <div class="mt-8 text-rose-600 text-sm animate-fade-in" style="animation-delay: 1.3s;">
          ✨ Tap untuk membuka undangan digital ✨
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div v-if="!showCover" class="container mx-auto px-4 py-12 relative z-10">
      <div class="max-w-md mx-auto">
        <!-- Header Section -->
        <div class="text-center mb-8 animate-fade-in">
          <div class="text-rose-700 text-sm font-medium tracking-widest uppercase mb-4 animate-slide-up" style="animation-delay: 0.2s;">
            The Wedding of
          </div>
          <div class="w-24 h-0.5 bg-rose-400 mx-auto mb-6"></div>
        </div>

        <!-- Main Card -->
        <div class="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden animate-slide-up" style="animation-delay: 0.4s;">
          <!-- Hero Section -->
          <div class="relative p-8 text-center">
            <!-- Couple Icon -->
            <div class="w-32 h-32 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl animate-float transform hover:scale-110 transition-transform duration-500">
              <span class="text-6xl">🌹</span>
            </div>
            
            <!-- Names -->
            <h1 class="text-4xl font-bold text-rose-900 mb-4 animate-slide-up" style="font-family: serif; animation-delay: 0.6s;">
              Sarah & Ahmad
            </h1>
            
            <!-- Divider -->
            <div class="w-20 h-1 bg-rose-400 mx-auto mb-6 animate-slide-up" style="animation-delay: 0.8s;"></div>
            
            <!-- Event Title -->
            <p class="text-xl text-rose-800 font-medium mb-8 animate-slide-up" style="animation-delay: 1s;">
              Menikah InsyaAllah
            </p>

            <!-- Event Details Card -->
            <div class="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up" style="animation-delay: 1.2s;">
              <div class="text-2xl font-bold text-rose-900 mb-3">
                Sabtu, 15 Juni 2024
              </div>
              <div class="text-lg text-rose-700 mb-2">
                Pukul 08.00 WIB
              </div>
              <div class="text-lg text-rose-700 mb-4">
                📍 Gedung Serba Guna Jakarta
              </div>
              
              <!-- Action Buttons -->
              <div class="flex gap-3 justify-center">
                <button 
                  @click="handleRSVP"
                  :class="[
                    'px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105',
                    rsvpConfirmed ? 'bg-green-500 text-white' : 'bg-rose-500 hover:bg-rose-600 text-white'
                  ]"
                >
                  {{ rsvpConfirmed ? '✅ RSVP Confirmed' : '📝 RSVP Sekarang' }}
                </button>
                <button 
                  @click="openLocation"
                  class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  📍 Lokasi
                </button>
              </div>
            </div>
          </div>

          <!-- Interactive Features Section -->
          <div class="px-8 pb-8">
            <!-- Music Player -->
            <div class="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 mb-6 animate-slide-up" style="animation-delay: 1.4s;">
              <h3 class="text-lg font-semibold text-rose-900 mb-4 text-center">🎵 Wedding Music</h3>
              <div class="flex items-center justify-center space-x-4">
                <button 
                  @click="toggleMusic"
                  class="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  {{ isPlaying ? '⏸️' : '▶️' }}
                </button>
                <div class="text-center">
                  <div class="text-sm font-medium text-rose-800">
                    {{ isPlaying ? 'Now Playing' : 'Click to Play' }}
                  </div>
                  <div class="text-xs text-rose-600">
                    {{ isPlaying ? 'Perfect - Ed Sheeran' : 'Wedding Song' }}
                  </div>
                </div>
              </div>
              
              <!-- Music Progress Bar (Demo) -->
              <div v-if="isPlaying" class="mt-4">
                <div class="w-full bg-rose-200 rounded-full h-2">
                  <div class="bg-rose-500 h-2 rounded-full animate-pulse" :style="`width: ${musicProgress}%`"></div>
                </div>
                <div class="flex justify-between text-xs text-rose-600 mt-1">
                  <span>{{ formatTime(currentTime) }}</span>
                  <span>3:52</span>
                </div>
              </div>
            </div>

            <!-- Guest Messages -->
            <div class="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 mb-6 animate-slide-up" style="animation-delay: 1.6s;">
              <h3 class="text-lg font-semibold text-rose-900 mb-4 text-center">💌 Pesan dari Tamu</h3>
              <div class="space-y-3 max-h-40 overflow-y-auto mb-4">
                <div v-for="message in guestMessages" :key="message.id" 
                     class="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div class="font-medium text-rose-800 text-sm">{{ message.name }}</div>
                  <div class="text-gray-700 text-sm">{{ message.message }}</div>
                  <div class="text-xs text-gray-500 mt-1">{{ message.time }}</div>
                </div>
              </div>
              <button 
                @click="addMessage"
                class="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              >
                ✍️ Tulis Pesan
              </button>
            </div>

            <!-- Photo Gallery Preview -->
            <div class="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 mb-6 animate-slide-up" style="animation-delay: 1.8s;">
              <h3 class="text-lg font-semibold text-rose-900 mb-4 text-center">📸 Gallery Foto</h3>
              <div class="grid grid-cols-3 gap-2">
                <div v-for="i in 6" :key="i" 
                     class="aspect-square bg-gradient-to-br from-rose-200 to-pink-300 rounded-lg flex items-center justify-center text-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                     @click="openGallery(i)">
                  {{ ['💑', '💍', '🌹', '💒', '🎂', '💐'][i-1] }}
                </div>
              </div>
            </div>

            <!-- Share Section -->
            <div class="text-center animate-slide-up" style="animation-delay: 2s;">
              <div class="text-rose-700 text-sm tracking-wide mb-4">
                With Love & Joy ❤️
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
        <div class="text-center mt-8 animate-fade-in" style="animation-delay: 2.2s;">
          <div class="text-rose-600 text-sm">
            ✨ Powered by UndanganKu ✨
          </div>
        </div>
      </div>
    </div>

    <!-- RSVP Modal -->
    <div v-if="showRSVPModal" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl max-w-md w-full p-6 animate-slide-up">
        <h3 class="text-2xl font-bold text-rose-900 mb-6 text-center">💌 RSVP Confirmation</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
            <input 
              v-model="rsvpForm.name"
              type="text" 
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              placeholder="Masukkan nama Anda"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Kehadiran</label>
            <select 
              v-model="rsvpForm.attendance"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
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
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            >
          </div>
          <div class="flex gap-3 pt-4">
            <button 
              @click="submitRSVP"
              class="flex-1 bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-semibold transition-colors"
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
const musicProgress = ref(0)
const currentTime = ref(0)
const showRSVPModal = ref(false)

const rsvpForm = ref({
  name: '',
  attendance: '',
  guests: 1
})

const guestMessages = ref([
  { id: 1, name: 'Budi & Sari', message: 'Selamat menempuh hidup baru! Semoga bahagia selalu 💕', time: '2 jam lalu' },
  { id: 2, name: 'Maya', message: 'Undangannya cantik banget! Ga sabar datang ke acara kalian 🌹', time: '5 jam lalu' },
  { id: 3, name: 'Keluarga Rahman', message: 'Barakallahu lakuma, semoga menjadi keluarga yang sakinah 🤲', time: '1 hari lalu' },
  { id: 4, name: 'Teman Kantor', message: 'Akhirnya Sarah menikah juga! Selamat ya 🎉', time: '2 hari lalu' }
])

let musicInterval: number | null = null

const openInvitation = () => {
  showCover.value = false
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
  alert('📍 Membuka Google Maps...\n\nGedung Serba Guna Jakarta\nJl. Sudirman No. 123, Jakarta Pusat\n\n(Demo - dalam versi asli akan membuka aplikasi maps)')
}

const toggleMusic = () => {
  isPlaying.value = !isPlaying.value
  
  if (isPlaying.value) {
    musicInterval = setInterval(() => {
      currentTime.value += 1
      musicProgress.value = (currentTime.value / 232) * 100 // 3:52 = 232 seconds
      
      if (musicProgress.value >= 100) {
        isPlaying.value = false
        currentTime.value = 0
        musicProgress.value = 0
        if (musicInterval) clearInterval(musicInterval)
      }
    }, 1000)
  } else {
    if (musicInterval) {
      clearInterval(musicInterval)
      musicInterval = null
    }
  }
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const addMessage = () => {
  const name = prompt('Masukkan nama Anda:')
  const message = prompt('Tulis pesan untuk pengantin:')
  
  if (name && message) {
    guestMessages.value.unshift({
      id: Date.now(),
      name: name,
      message: message,
      time: 'Baru saja'
    })
    alert('✅ Pesan berhasil ditambahkan! Terima kasih 💕')
  }
}

const openGallery = (index: number) => {
  alert(`📸 Membuka foto ${index}\n\n(Demo - dalam versi asli akan menampilkan galeri foto lengkap dengan slideshow)`)
}

const shareInvitation = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Undangan Pernikahan Sarah & Ahmad',
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
  alert('💾 Mengunduh undangan...\n\n(Demo - dalam versi asli akan mengunduh undangan dalam format PDF atau gambar)')
}

onUnmounted(() => {
  if (musicInterval) {
    clearInterval(musicInterval)
  }
})
</script>