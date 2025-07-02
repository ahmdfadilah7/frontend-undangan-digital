<template>
  <!-- Header -->
  <section class="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
        Template Undangan Digital
      </h1>
      <p class="text-xl text-white/90">
        Pilih template undangan digital yang sempurna untuk momen spesial Anda
      </p>
      <p>Test</p>
      <p>Test 2 </p>
      <p>Test 3</p>
      <p>Test 4</p>
    </div>
  </section>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Demo Categories -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="category in demoCategories" 
          :key="category.id"
          @click="activeDemoCategory = category.id"
          :class="[
            'px-6 py-3 rounded-full font-medium transition-all duration-300',
            activeDemoCategory === category.id 
              ? 'bg-primary-500 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
          ]"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Demo Templates Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <div
          v-for="demo in filteredDemos"
          :key="demo.id"
          class="card overflow-hidden group"
        >
          <!-- Demo Preview -->
          <div class="relative">
            <!-- Live Demo Frame -->
            <div :class="['relative overflow-hidden', demo.bgClass]">
              <div class="p-6 h-full flex flex-col justify-between relative">
                <!-- Animated Background Elements -->
                <div v-if="demo.animations" class="absolute inset-0">
                  <div 
                    v-for="(anim, index) in demo.animations" 
                    :key="index"
                    :class="['absolute text-4xl opacity-20', anim.class]"
                    :style="anim.style"
                  >
                    {{ anim.content }}
                  </div>
                </div>

                <!-- Header with Animation -->
                <div class="text-center relative z-10 animate-fade-in">
                  <div :class="['text-sm font-medium tracking-widest uppercase mb-4', demo.textColor]">
                    {{ demo.headerText }}
                  </div>
                </div>

                <!-- Main Content with Hover Effects -->
                <div class="text-center relative z-10 flex-grow flex flex-col justify-center">
                  <div 
                    :class="['w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-12', demo.iconBg]"
                  >
                    <span class="text-3xl">{{ demo.icon }}</span>
                  </div>
                  
                  <h3 :class="['text-2xl font-bold mb-3 transition-colors duration-300', demo.nameColor]" style="font-family: serif;">
                    {{ demo.sampleNames }}
                  </h3>
                  
                  <div :class="['w-16 h-0.5 mx-auto mb-4 transition-all duration-500 hover:w-24', demo.dividerColor]"></div>
                  
                  <p :class="['text-lg mb-6 font-medium', demo.textColor]">
                    {{ demo.sampleEvent }}
                  </p>

                  <!-- Interactive Event Details -->
                  <div 
                    :class="['rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer', demo.cardBg]"
                    @click="showEventDetails(demo)"
                  >
                    <div :class="['text-lg font-bold mb-2', demo.dateColor]">
                      {{ demo.sampleDate }}
                    </div>
                    <div :class="['text-sm mb-1', demo.textColor]">
                      {{ demo.sampleTime }}
                    </div>
                    <div :class="['text-sm', demo.textColor]">
                      {{ demo.sampleVenue }}
                    </div>
                  </div>
                </div>

                <!-- Interactive Footer -->
                <div class="text-center relative z-10">
                  <div :class="['text-xs tracking-wide mb-2', demo.textColor]">
                    {{ demo.footerText }}
                  </div>
                  <!-- Demo Action Buttons -->
                  <div class="flex gap-2 justify-center">
                    <button 
                      @click="playMusic(demo)"
                      :class="['w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all duration-300 hover:scale-110', demo.iconBg]"
                      :title="musicPlaying === demo.id ? 'Pause Music' : 'Play Music'"
                    >
                      {{ musicPlaying === demo.id ? '⏸️' : '🎵' }}
                    </button>
                    <button 
                      @click="toggleRSVP(demo)"
                      :class="['w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all duration-300 hover:scale-110', demo.iconBg]"
                      title="RSVP"
                    >
                      {{ rsvpStatus[demo.id] ? '✅' : '📝' }}
                    </button>
                    <button 
                      @click="shareDemo(demo)"
                      :class="['w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all duration-300 hover:scale-110', demo.iconBg]"
                      title="Share"
                    >
                      📤
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Demo Badge -->
            <div class="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
              LIVE DEMO
            </div>
          </div>

          <!-- Demo Info -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-xl font-bold text-gray-900">{{ demo.name }}</h3>
              <div class="flex items-center space-x-1">
                <span class="text-yellow-400">⭐</span>
                <span class="text-sm text-gray-600">{{ demo.rating }}</span>
              </div>
            </div>
            
            <p class="text-gray-600 mb-4">{{ demo.description }}</p>
            
            <!-- Interactive Features -->
            <div class="space-y-3 mb-4">
              <div class="text-sm font-medium text-gray-700">Fitur Interaktif:</div>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="feature in demo.interactiveFeatures" 
                  :key="feature"
                  class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs flex items-center"
                >
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  {{ feature }}
                </span>
              </div>
            </div>

            <!-- Demo Actions -->
            <div class="flex gap-2">
              <button 
                @click="openFullDemo(demo)"
                class="btn-primary flex-1 text-sm py-2"
              >
                Demo Penuh
              </button>
              <button 
                @click="customizeDemo(demo)"
                class="border-2 border-primary-500 text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                Kustomisasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- RSVP Modal -->
    <div 
      v-if="showRSVPModal" 
      class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      @click="closeRSVPModal"
    >
      <div class="bg-white rounded-lg max-w-md w-full p-6" @click.stop>
        <h3 class="text-xl font-bold mb-4">RSVP Demo</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nama</label>
            <input 
              v-model="rsvpForm.name"
              type="text" 
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Masukkan nama Anda"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Kehadiran</label>
            <select 
              v-model="rsvpForm.attendance"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Pilih kehadiran</option>
              <option value="hadir">Hadir</option>
              <option value="tidak_hadir">Tidak Hadir</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah Tamu</label>
            <input 
              v-model="rsvpForm.guests"
              type="number" 
              min="1"
              max="5"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
          </div>
          <div class="flex gap-3">
            <button 
              @click="submitRSVP"
              class="btn-primary flex-1"
              :disabled="!rsvpForm.name || !rsvpForm.attendance"
            >
              Konfirmasi RSVP
            </button>
            <button 
              @click="closeRSVPModal"
              class="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeDemoCategory = ref('wedding')
const showRSVPModal = ref(false)
const selectedDemo = ref(null)
const musicPlaying = ref(null)
const rsvpStatus = ref({})

const rsvpForm = ref({
  name: '',
  attendance: '',
  guests: 1
})

const demoStats = ref({
  totalViews: '12.5K',
  activeUsers: '47',
  completedRSVP: '892',
  sharedCount: '1.2K'
})

const demoCategories = [
  { id: 'wedding', name: 'Pernikahan' },
  { id: 'birthday', name: 'Ulang Tahun' },
  { id: 'corporate', name: 'Perusahaan' }
]

const demoTemplates = [
  {
    id: 1,
    name: 'Romantic Rose Demo',
    category: 'wedding',
    description: 'Demo interaktif template pernikahan dengan musik dan RSVP',
    rating: '4.9',
    route: 'DemoRomanticRose',
    bgClass: 'bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300',
    iconBg: 'bg-gradient-to-r from-pink-500 to-rose-600',
    icon: '🌹',
    headerText: 'The Wedding of',
    footerText: 'With Love & Joy',
    sampleNames: 'Sarah & John',
    sampleEvent: 'Menikah InsyaAllah',
    sampleDate: 'Sabtu, 15 Juni 2024',
    sampleTime: 'Pukul 08.00 WIB',
    sampleVenue: 'Gedung Serba Guna Jakarta',
    textColor: 'text-rose-800',
    nameColor: 'text-rose-900',
    dateColor: 'text-rose-900',
    dividerColor: 'bg-rose-500',
    cardBg: 'bg-white/90',
    interactiveFeatures: ['Music Player', 'RSVP Form', 'Guest Messages', 'Photo Gallery', 'Share Button'],
    animations: [
      { class: 'animate-float', content: '🌸', style: 'top: 10%; left: 10%; animation-delay: 0s;' },
      { class: 'animate-bounce-gentle', content: '💕', style: 'top: 20%; right: 15%; animation-delay: 1s;' },
      { class: 'animate-float', content: '🌹', style: 'bottom: 20%; left: 20%; animation-delay: 2s;' }
    ]
  },
  {
    id: 2,
    name: 'Golden Luxury Demo',
    category: 'wedding',
    description: 'Demo template mewah dengan video background dan fitur premium',
    rating: '4.8',
    route: 'DemoGoldenLuxury',
    bgClass: 'bg-gradient-to-br from-yellow-100 via-amber-200 to-yellow-300',
    iconBg: 'bg-gradient-to-r from-yellow-500 to-amber-600',
    icon: '👑',
    headerText: 'Royal Wedding',
    footerText: 'A Golden Beginning',
    sampleNames: 'Putri & Budi',
    sampleEvent: 'Wedding Celebration',
    sampleDate: 'Minggu, 20 Juli 2024',
    sampleTime: 'Pukul 10.00 WIB',
    sampleVenue: 'Hotel Grand Ballroom',
    textColor: 'text-amber-900',
    nameColor: 'text-amber-900',
    dateColor: 'text-amber-900',
    dividerColor: 'bg-amber-600',
    cardBg: 'bg-white/95',
    interactiveFeatures: ['Video Background', 'Live Streaming', 'VIP RSVP', 'Gift Registry', 'Premium Music'],
    animations: [
      { class: 'animate-bounce-gentle', content: '✨', style: 'top: 15%; left: 15%; animation-delay: 0s;' },
      { class: 'animate-float', content: '💎', style: 'top: 10%; right: 10%; animation-delay: 1.5s;' },
      { class: 'animate-bounce-gentle', content: '👑', style: 'bottom: 15%; right: 20%; animation-delay: 3s;' }
    ]
  },
  {
    id: 3,
    name: 'Elegant Wedding Demo',
    category: 'wedding',
    description: 'Demo template elegant dengan countdown timer dan peta lokasi',
    rating: '4.9',
    route: 'DemoElegantWedding',
    bgClass: 'bg-gradient-to-br from-amber-50 via-yellow-100 to-amber-200',
    iconBg: 'bg-gradient-to-r from-amber-500 to-yellow-600',
    icon: '🌸',
    headerText: 'The Wedding of',
    footerText: 'With Love & Blessing',
    sampleNames: 'Sari & Joko',
    sampleEvent: 'Menikah InsyaAllah',
    sampleDate: 'Minggu, 15 Desember 2024',
    sampleTime: 'Pukul 09.00 WIB',
    sampleVenue: 'Masjid Al-Ikhlas',
    textColor: 'text-amber-800',
    nameColor: 'text-amber-900',
    dateColor: 'text-amber-900',
    dividerColor: 'bg-amber-500',
    cardBg: 'bg-white/90',
    interactiveFeatures: ['Countdown Timer', 'Location Map', 'Dual Events', 'Guest Messages', 'Music Player'],
    animations: [
      { class: 'animate-float', content: '🌸', style: 'top: 10%; left: 10%; animation-delay: 0s;' },
      { class: 'animate-bounce-gentle', content: '✨', style: 'top: 20%; right: 15%; animation-delay: 1s;' },
      { class: 'animate-float', content: '🌹', style: 'bottom: 20%; left: 20%; animation-delay: 2s;' }
    ]
  },
  {
    id: 4,
    name: 'Birthday Party Demo',
    category: 'birthday',
    description: 'Demo template ulang tahun dengan animasi balon dan konfetti',
    rating: '4.7',
    route: 'DemoBirthdayParty',
    bgClass: 'bg-gradient-to-br from-purple-100 via-pink-200 to-purple-300',
    iconBg: 'bg-gradient-to-r from-purple-500 to-pink-600',
    icon: '🎂',
    headerText: 'Birthday Celebration',
    footerText: 'Let\'s Celebrate Together!',
    sampleNames: 'Happy 25th Birthday',
    sampleEvent: 'Maya\'s Birthday Party',
    sampleDate: 'Sabtu, 10 Agustus 2024',
    sampleTime: 'Pukul 19.00 WIB',
    sampleVenue: 'Cafe Cozy Corner',
    textColor: 'text-purple-800',
    nameColor: 'text-purple-900',
    dateColor: 'text-purple-900',
    dividerColor: 'bg-purple-500',
    cardBg: 'bg-white/90',
    interactiveFeatures: ['Balloon Animation', 'Confetti Effect', 'Birthday Song', 'Wish Messages', 'Photo Booth'],
    animations: [
      { class: 'animate-bounce-gentle', content: '🎈', style: 'top: 5%; left: 10%; animation-delay: 0s;' },
      { class: 'animate-float', content: '🎉', style: 'top: 15%; right: 15%; animation-delay: 1s;' },
      { class: 'animate-bounce-gentle', content: '🎁', style: 'bottom: 10%; left: 15%; animation-delay: 2s;' }
    ]
  },
  {
    id: 5,
    name: 'Corporate Event Demo',
    category: 'corporate',
    description: 'Demo template acara perusahaan dengan agenda dan networking',
    rating: '4.6',
    route: 'DemoCorporateEvent',
    bgClass: 'bg-gradient-to-br from-blue-100 via-indigo-200 to-blue-300',
    iconBg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
    icon: '🏢',
    headerText: 'Corporate Event',
    footerText: 'Building Success Together',
    sampleNames: 'Annual Meeting 2024',
    sampleEvent: 'PT. Maju Bersama',
    sampleDate: 'Jumat, 30 Agustus 2024',
    sampleTime: 'Pukul 09.00 WIB',
    sampleVenue: 'Jakarta Convention Center',
    textColor: 'text-blue-800',
    nameColor: 'text-blue-900',
    dateColor: 'text-blue-900',
    dividerColor: 'bg-blue-500',
    cardBg: 'bg-white/95',
    interactiveFeatures: ['Agenda Schedule', 'Speaker Profiles', 'Networking Hub', 'Live Q&A', 'Digital Badge'],
    animations: [
      { class: 'animate-float', content: '📊', style: 'top: 10%; left: 10%; animation-delay: 0s;' },
      { class: 'animate-bounce-gentle', content: '💼', style: 'top: 20%; right: 10%; animation-delay: 1s;' },
      { class: 'animate-float', content: '🤝', style: 'bottom: 15%; right: 15%; animation-delay: 2s;' }
    ]
  }
]

const filteredDemos = computed(() => {
  return demoTemplates.filter(demo => demo.category === activeDemoCategory.value)
})

const openFullDemo = (demo) => {
  // Navigate to the specific demo page
  router.push({ name: demo.route })
}

const customizeDemo = (demo) => {
  alert(`Fitur kustomisasi untuk template "${demo.name}" akan segera tersedia! Hubungi tim kami untuk bantuan.`)
}

const playMusic = (demo) => {
  if (musicPlaying.value === demo.id) {
    musicPlaying.value = null
  } else {
    musicPlaying.value = demo.id
    // Simulate music playing
    setTimeout(() => {
      if (musicPlaying.value === demo.id) {
        alert('🎵 Demo musik sedang diputar! (Fitur simulasi)')
      }
    }, 500)
  }
}

const toggleRSVP = (demo) => {
  if (rsvpStatus.value[demo.id]) {
    rsvpStatus.value[demo.id] = false
    alert('RSVP dibatalkan untuk demo ini')
  } else {
    selectedDemo.value = demo
    showRSVPModal.value = true
  }
}

const shareDemo = (demo) => {
  if (navigator.share) {
    navigator.share({
      title: `Demo ${demo.name}`,
      text: `Lihat demo interaktif template undangan digital: ${demo.name}`,
      url: window.location.href
    })
  } else {
    // Fallback for browsers that don't support Web Share API
    const url = window.location.href
    navigator.clipboard.writeText(url).then(() => {
      alert('Link demo berhasil disalin ke clipboard!')
    })
  }
}

const showEventDetails = (demo) => {
  alert(`📅 Detail Acara:\n\n${demo.sampleEvent}\n${demo.sampleDate}\n${demo.sampleTime}\n📍 ${demo.sampleVenue}\n\n(Demo interaktif - klik tombol lain untuk fitur lainnya!)`)
}

const closeRSVPModal = () => {
  showRSVPModal.value = false
  rsvpForm.value = { name: '', attendance: '', guests: 1 }
}

const submitRSVP = () => {
  if (selectedDemo.value && rsvpForm.value.name && rsvpForm.value.attendance) {
    rsvpStatus.value[selectedDemo.value.id] = true
    alert(`✅ RSVP berhasil!\n\nNama: ${rsvpForm.value.name}\nKehadiran: ${rsvpForm.value.attendance}\nJumlah Tamu: ${rsvpForm.value.guests}\n\n(Demo berhasil - dalam versi asli data akan tersimpan)`)
    closeRSVPModal()
    
    // Update demo stats
    demoStats.value.completedRSVP = (parseInt(demoStats.value.completedRSVP) + 1).toString()
  }
}

// Simulate real-time stats updates
onMounted(() => {
  setInterval(() => {
    // Randomly update stats to simulate real-time activity
    if (Math.random() > 0.7) {
      const currentViews = parseFloat(demoStats.value.totalViews.replace('K', '')) * 1000
      demoStats.value.totalViews = ((currentViews + Math.floor(Math.random() * 10)) / 1000).toFixed(1) + 'K'
    }
    
    if (Math.random() > 0.8) {
      const currentUsers = parseInt(demoStats.value.activeUsers)
      demoStats.value.activeUsers = (currentUsers + Math.floor(Math.random() * 3) - 1).toString()
    }
  }, 5000)
})
</script>