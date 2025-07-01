<template>
  <div class="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-100 to-amber-200 relative overflow-hidden">
    <!-- Luxury Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-12 left-12 text-7xl text-amber-300 animate-bounce-gentle opacity-60" style="animation-delay: 0s;">✨</div>
      <div class="absolute top-16 right-16 text-6xl text-yellow-300 animate-float opacity-70" style="animation-delay: 1.5s;">💎</div>
      <div class="absolute bottom-24 left-20 text-8xl text-amber-300 animate-bounce-gentle opacity-50" style="animation-delay: 3s;">👑</div>
      <div class="absolute bottom-16 right-24 text-5xl text-yellow-300 animate-float opacity-60" style="animation-delay: 4.5s;">⭐</div>
      <div class="absolute top-1/3 left-1/3 text-4xl text-amber-300 animate-bounce-gentle opacity-40" style="animation-delay: 2s;">🏆</div>
      <div class="absolute top-2/3 right-1/4 text-6xl text-yellow-300 animate-float opacity-50" style="animation-delay: 6s;">💰</div>
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
      <div class="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse shadow-lg">
        👑 LUXURY DEMO
      </div>
    </div>

    <!-- Luxury Cover Section -->
    <div v-if="showCover" class="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-100 to-amber-200">
      <div class="text-center animate-fade-in">
        <!-- Luxury Cover Animation -->
        <div class="relative mb-8">
          <div class="w-48 h-48 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto flex items-center justify-center shadow-2xl animate-float">
            <span class="text-9xl">👑</span>
          </div>
          <!-- Floating Luxury Elements -->
          <div class="absolute -top-6 -left-8 text-5xl animate-bounce-gentle" style="animation-delay: 0.5s;">✨</div>
          <div class="absolute -top-4 -right-10 text-4xl animate-float" style="animation-delay: 1s;">💎</div>
          <div class="absolute -bottom-6 -left-10 text-4xl animate-bounce-gentle" style="animation-delay: 1.5s;">🏆</div>
          <div class="absolute -bottom-4 -right-8 text-5xl animate-float" style="animation-delay: 2s;">⭐</div>
        </div>

        <!-- Luxury Cover Title -->
        <div class="mb-6 animate-slide-up" style="animation-delay: 0.5s;">
          <div class="text-amber-700 text-lg font-medium tracking-widest uppercase mb-2">Royal Wedding</div>
          <h1 class="text-6xl md:text-7xl font-bold text-amber-900 mb-2" style="font-family: serif;">
            Putri & Budi
          </h1>
          <div class="w-32 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto"></div>
        </div>
        
        <!-- Luxury Cover Subtitle -->
        <p class="text-3xl text-amber-800 mb-8 animate-slide-up" style="animation-delay: 0.7s;">
          Wedding Celebration
        </p>

        <!-- Luxury Cover Date -->
        <div class="bg-gradient-to-r from-white/95 to-amber-50/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-8 animate-slide-up border border-amber-200" style="animation-delay: 0.9s;">
          <div class="text-4xl font-bold text-amber-900 mb-3">20 Juli 2024</div>
          <div class="text-xl text-amber-700 mb-2">Minggu, Pukul 10.00 WIB</div>
          <div class="text-lg text-amber-600">🏨 Hotel Grand Ballroom</div>
        </div>

        <!-- VIP Open Invitation Button -->
        <button 
          @click="openInvitation"
          class="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-16 py-5 rounded-full text-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 animate-slide-up"
          style="animation-delay: 1.1s;"
        >
          👑 Open VIP Invitation
        </button>

        <!-- Luxury Cover Footer -->
        <div class="mt-8 text-amber-600 text-sm animate-fade-in" style="animation-delay: 1.3s;">
          ✨ Experience Luxury Digital Invitation ✨
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div v-if="!showCover" class="container mx-auto px-4 py-12 relative z-10">
      <div class="max-w-md mx-auto">
        <!-- Header Section -->
        <div class="text-center mb-8 animate-fade-in">
          <div class="text-amber-800 text-sm font-medium tracking-widest uppercase mb-4 animate-slide-up" style="animation-delay: 0.2s;">
            Royal Wedding
          </div>
          <div class="w-24 h-0.5 bg-amber-500 mx-auto mb-6"></div>
        </div>

        <!-- Main Card -->
        <div class="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden animate-slide-up border border-amber-200" style="animation-delay: 0.4s;">
          <!-- Hero Section -->
          <div class="relative p-8 text-center">
            <!-- Video Background Simulation -->
            <div class="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-yellow-100/50 animate-pulse"></div>
            
            <!-- Couple Icon -->
            <div class="relative w-32 h-32 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl animate-float transform hover:scale-110 transition-transform duration-500">
              <span class="text-6xl">👑</span>
              <div class="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <span class="text-sm">✨</span>
              </div>
            </div>
            
            <!-- Names -->
            <h1 class="text-4xl font-bold text-amber-900 mb-4 animate-slide-up" style="font-family: serif; animation-delay: 0.6s;">
              Putri & Budi
            </h1>
            
            <!-- Divider -->
            <div class="w-20 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-6 animate-slide-up" style="animation-delay: 0.8s;"></div>
            
            <!-- Event Title -->
            <p class="text-xl text-amber-800 font-medium mb-8 animate-slide-up" style="animation-delay: 1s;">
              Wedding Celebration
            </p>

            <!-- Event Details Card -->
            <div class="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up border border-amber-200" style="animation-delay: 1.2s;">
              <div class="text-2xl font-bold text-amber-900 mb-3">
                Minggu, 20 Juli 2024
              </div>
              <div class="text-lg text-amber-700 mb-2">
                Pukul 10.00 WIB
              </div>
              <div class="text-lg text-amber-700 mb-4">
                🏨 Hotel Grand Ballroom
              </div>
              
              <!-- VIP Features -->
              <div class="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl p-4 mb-4 border border-yellow-300">
                <div class="text-sm font-semibold text-amber-800 mb-2">🌟 VIP Features:</div>
                <div class="grid grid-cols-2 gap-2 text-xs">
                  <div class="flex items-center space-x-1">
                    <span>📹</span>
                    <span>Live Streaming</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <span>🎁</span>
                    <span>Gift Registry</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <span>🍾</span>
                    <span>Premium Menu</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <span>📸</span>
                    <span>Photo Booth</span>
                  </div>
                </div>
              </div>
              
              <!-- Action Buttons -->
              <div class="flex gap-3 justify-center">
                <button 
                  @click="handleVIPRSVP"
                  :class="[
                    'px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105',
                    rsvpConfirmed ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white'
                  ]"
                >
                  {{ rsvpConfirmed ? '✅ VIP Confirmed' : '👑 VIP RSVP' }}
                </button>
                <button 
                  @click="watchLiveStream"
                  class="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  📺 Live
                </button>
              </div>
            </div>
          </div>

          <!-- Premium Features Section -->
          <div class="px-8 pb-8">
            <!-- Premium Music Player -->
            <div class="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 mb-6 animate-slide-up border border-amber-200" style="animation-delay: 1.4s;">
              <h3 class="text-lg font-semibold text-amber-900 mb-4 text-center">🎼 Premium Orchestra</h3>
              <div class="flex items-center justify-center space-x-4 mb-4">
                <button 
                  @click="toggleMusic"
                  class="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  {{ isPlaying ? '⏸️' : '▶️' }}
                </button>
                <div class="text-center">
                  <div class="text-sm font-medium text-amber-800">
                    {{ isPlaying ? 'Now Playing' : 'Premium Audio' }}
                  </div>
                  <div class="text-xs text-amber-600">
                    {{ isPlaying ? 'Canon in D - Pachelbel' : 'Classical Wedding Music' }}
                  </div>
                </div>
              </div>
              
              <!-- Premium Audio Visualizer -->
              <div v-if="isPlaying" class="flex justify-center space-x-1 mb-4">
                <div v-for="i in 8" :key="i" 
                     class="w-1 bg-amber-500 rounded-full animate-pulse"
                     :style="`height: ${Math.random() * 20 + 10}px; animation-delay: ${i * 0.1}s`">
                </div>
              </div>
              
              <!-- Music Controls -->
              <div class="flex justify-center space-x-4">
                <button class="text-amber-600 hover:text-amber-700 transition-colors">⏮️</button>
                <button class="text-amber-600 hover:text-amber-700 transition-colors">🔀</button>
                <button class="text-amber-600 hover:text-amber-700 transition-colors">🔁</button>
                <button class="text-amber-600 hover:text-amber-700 transition-colors">⏭️</button>
              </div>
            </div>

            <!-- Gift Registry -->
            <div class="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 mb-6 animate-slide-up border border-yellow-200" style="animation-delay: 1.6s;">
              <h3 class="text-lg font-semibold text-amber-900 mb-4 text-center">🎁 Gift Registry</h3>
              <div class="space-y-3">
                <div class="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-amber-100">
                  <div class="flex justify-between items-center">
                    <div>
                      <div class="font-medium text-amber-800">Honeymoon Fund</div>
                      <div class="text-sm text-amber-600">Bali Romantic Getaway</div>
                    </div>
                    <div class="text-right">
                      <div class="text-lg font-bold text-amber-700">75%</div>
                      <div class="w-16 h-2 bg-amber-200 rounded-full">
                        <div class="w-3/4 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-amber-100">
                  <div class="flex justify-between items-center">
                    <div>
                      <div class="font-medium text-amber-800">Home Appliances</div>
                      <div class="text-sm text-amber-600">Kitchen & Living Room</div>
                    </div>
                    <div class="text-right">
                      <div class="text-lg font-bold text-amber-700">45%</div>
                      <div class="w-16 h-2 bg-amber-200 rounded-full">
                        <div class="w-2/5 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                @click="contributeGift"
                class="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 mt-4"
              >
                💝 Contribute Gift
              </button>
            </div>

            <!-- VIP Guest Book -->
            <div class="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 mb-6 animate-slide-up border border-amber-200" style="animation-delay: 1.8s;">
              <h3 class="text-lg font-semibold text-amber-900 mb-4 text-center">📖 VIP Guest Book</h3>
              <div class="space-y-3 max-h-40 overflow-y-auto mb-4">
                <div v-for="message in vipMessages" :key="message.id" 
                     class="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300 border border-amber-100">
                  <div class="flex items-center space-x-2 mb-1">
                    <span class="text-xs">👑</span>
                    <div class="font-medium text-amber-800 text-sm">{{ message.name }}</div>
                    <span class="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">{{ message.status }}</span>
                  </div>
                  <div class="text-gray-700 text-sm">{{ message.message }}</div>
                  <div class="text-xs text-gray-500 mt-1">{{ message.time }}</div>
                </div>
              </div>
              <button 
                @click="addVIPMessage"
                class="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              >
                ✍️ Sign VIP Book
              </button>
            </div>

            <!-- Share Section -->
            <div class="text-center animate-slide-up" style="animation-delay: 2s;">
              <div class="text-amber-700 text-sm tracking-wide mb-4">
                A Golden Beginning ✨
              </div>
              <div class="flex justify-center space-x-4">
                <button 
                  @click="shareInvitation"
                  class="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>👑</span>
                  <span>Share VIP</span>
                </button>
                <button 
                  @click="downloadInvitation"
                  class="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>💎</span>
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="text-center mt-8 animate-fade-in" style="animation-delay: 2.2s;">
          <div class="text-amber-600 text-sm">
            👑 Luxury by UndanganKu 👑
          </div>
        </div>
      </div>
    </div>

    <!-- VIP RSVP Modal -->
    <div v-if="showRSVPModal" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl max-w-md w-full p-6 animate-slide-up border-2 border-amber-200">
        <h3 class="text-2xl font-bold text-amber-900 mb-6 text-center">👑 VIP RSVP</h3>
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
            <label class="block text-sm font-medium text-gray-700 mb-2">Status VIP</label>
            <select 
              v-model="rsvpForm.vipStatus"
              class="w-full px-4 py-3 border border-amber-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">Pilih status</option>
              <option value="family">👨‍👩‍👧‍👦 Family VIP</option>
              <option value="friend">👥 Friend VIP</option>
              <option value="colleague">💼 Business VIP</option>
            </select>
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
            <label class="block text-sm font-medium text-gray-700 mb-2">Jumlah Tamu VIP</label>
            <input 
              v-model="rsvpForm.guests"
              type="number" 
              min="1"
              max="10"
              class="w-full px-4 py-3 border border-amber-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
          </div>
          <div class="flex gap-3 pt-4">
            <button 
              @click="submitVIPRSVP"
              class="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-3 rounded-xl font-semibold transition-colors"
              :disabled="!rsvpForm.name || !rsvpForm.attendance"
            >
              Confirm VIP RSVP
            </button>
            <button 
              @click="closeRSVPModal"
              class="px-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl font-semibold transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showCover = ref(true)
const rsvpConfirmed = ref(false)
const isPlaying = ref(false)
const showRSVPModal = ref(false)

const rsvpForm = ref({
  name: '',
  vipStatus: '',
  attendance: '',
  guests: 1
})

const vipMessages = ref([
  { id: 1, name: 'Keluarga Wijaya', message: 'Selamat untuk pernikahan yang mewah ini! Semoga bahagia selamanya 👑', time: '1 jam lalu', status: 'Family VIP' },
  { id: 2, name: 'CEO PT. Maju', message: 'Congratulations on your royal wedding! Wishing you both endless happiness 💎', time: '3 jam lalu', status: 'Business VIP' },
  { id: 3, name: 'Sahabat Kuliah', message: 'Akhirnya kalian menikah juga! Acara yang sangat elegan 🌟', time: '6 jam lalu', status: 'Friend VIP' }
])

const openInvitation = () => {
  showCover.value = false
}

const handleVIPRSVP = () => {
  showRSVPModal.value = true
}

const closeRSVPModal = () => {
  showRSVPModal.value = false
  rsvpForm.value = { name: '', vipStatus: '', attendance: '', guests: 1 }
}

const submitVIPRSVP = () => {
  if (rsvpForm.value.name && rsvpForm.value.attendance) {
    rsvpConfirmed.value = true
    closeRSVPModal()
    alert(`👑 VIP RSVP berhasil dikonfirmasi!\n\nNama: ${rsvpForm.value.name}\nStatus: ${rsvpForm.value.vipStatus}\nKehadiran: ${rsvpForm.value.attendance}\nJumlah Tamu: ${rsvpForm.value.guests}\n\nTerima kasih atas konfirmasi VIP Anda! ✨`)
  }
}

const watchLiveStream = () => {
  alert('📺 Menghubungkan ke Live Stream...\n\n🔴 LIVE: Royal Wedding Ceremony\n👥 2,847 viewers watching\n\n(Demo - dalam versi asli akan membuka streaming langsung acara)')
}

const toggleMusic = () => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    alert('🎼 Memulai Premium Orchestra...\n\n♪ Canon in D - Pachelbel\n🎻 Live Classical Performance\n\n(Demo audio premium)')
  }
}

const contributeGift = () => {
  alert('🎁 Gift Registry\n\nPilih kontribusi:\n💰 Honeymoon Fund - Rp 500K\n🏠 Home Appliances - Rp 300K\n💍 Jewelry Fund - Rp 1M\n\n(Demo - dalam versi asli akan terhubung ke payment gateway)')
}

const addVIPMessage = () => {
  const name = prompt('Masukkan nama VIP Anda:')
  const message = prompt('Tulis pesan VIP untuk pengantin:')
  
  if (name && message) {
    vipMessages.value.unshift({
      id: Date.now(),
      name: name,
      message: message,
      time: 'Baru saja',
      status: 'VIP Guest'
    })
    alert('✅ Pesan VIP berhasil ditambahkan! 👑')
  }
}

const shareInvitation = () => {
  if (navigator.share) {
    navigator.share({
      title: 'VIP Wedding Invitation - Putri & Budi',
      text: 'You are cordially invited to our royal wedding celebration',
      url: window.location.href
    })
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('👑 VIP invitation link copied!\n\nShare this exclusive invitation with your VIP contacts.')
    })
  }
}

const downloadInvitation = () => {
  alert('💎 Downloading VIP Invitation...\n\n📄 Format: Premium PDF\n🎨 Quality: Ultra HD\n💌 Includes: Digital envelope\n\n(Demo - premium download feature)')
}
</script>