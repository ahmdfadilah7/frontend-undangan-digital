<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-100 via-pink-200 to-purple-300 relative overflow-hidden">
    <!-- Floating Party Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-8 left-8 text-6xl text-purple-400 animate-bounce-gentle opacity-70" style="animation-delay: 0s;">🎈</div>
      <div class="absolute top-16 right-12 text-5xl text-pink-400 animate-float opacity-80" style="animation-delay: 1s;">🎉</div>
      <div class="absolute bottom-20 left-16 text-7xl text-purple-400 animate-bounce-gentle opacity-60" style="animation-delay: 2s;">🎁</div>
      <div class="absolute bottom-12 right-20 text-4xl text-pink-400 animate-float opacity-70" style="animation-delay: 3s;">🎂</div>
      <div class="absolute top-1/3 left-1/4 text-3xl text-purple-400 animate-bounce-gentle opacity-50" style="animation-delay: 4s;">🎊</div>
      <div class="absolute top-2/3 right-1/3 text-5xl text-pink-400 animate-float opacity-60" style="animation-delay: 5s;">🍰</div>
      <div class="absolute top-1/2 left-1/6 text-4xl text-purple-400 animate-bounce-gentle opacity-40" style="animation-delay: 6s;">🎪</div>
    </div>

    <!-- Rest of the template content -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showCover = ref(true)
const rsvpConfirmed = ref(false)
const isPlaying = ref(false)
const showRSVPModal = ref(false)
const highScore = ref(1250)
const gamesPlayed = ref(47)

const rsvpForm = ref({
  name: '',
  age: '',
  attendance: '',
  guests: 0
})

const birthdayWishes = ref([
  { id: 1, name: 'Sarah & Friends', message: 'Happy 25th Birthday Maya! Semoga panjang umur dan sehat selalu! 🎂✨', time: '30 menit lalu', age: '25th' },
  { id: 2, name: 'Keluarga Besar', message: 'Selamat ulang tahun sayang! Semoga semua impianmu tercapai 🎈💕', time: '1 jam lalu', age: '25th' },
  { id: 3, name: 'Teman Kantor', message: 'Happy birthday Maya! Party time! Siap-siap dance sampai pagi 🕺💃', time: '2 jam lalu', age: '25th' }
])

const openInvitation = () => {
  showCover.value = false
}

const handlePartyRSVP = () => {
  showRSVPModal.value = true
}

const closeRSVPModal = () => {
  showRSVPModal.value = false
  rsvpForm.value = { name: '', age: '', attendance: '', guests: 0 }
}

const submitPartyRSVP = () => {
  if (rsvpForm.value.name && rsvpForm.value.attendance) {
    rsvpConfirmed.value = true
    closeRSVPModal()
    alert(`🎉 Party RSVP berhasil!\n\nNama: ${rsvpForm.value.name}\nUmur: ${rsvpForm.value.age}\nKehadiran: ${rsvpForm.value.attendance}\nTeman yang ikut: ${rsvpForm.value.guests}\n\nSee you at the party! 🎂`)
  }
}

const startPartyGame = () => {
  alert('🎮 Starting Party Games!\n\n🎯 Choose your game:\n🧠 Birthday Trivia\n🃏 Memory Challenge\n🎲 Spin the Wheel\n📸 Photo Booth Fun\n\n(Demo - games akan tersedia di versi lengkap)')
}

const toggleMusic = () => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    alert('🎵 Playing Birthday Music!\n\n🎂 Happy Birthday Song\n🎉 Party Hits Playlist\n🎶 Dance Music Ready!\n\n(Demo audio)')
  }
}

const addBirthdayWish = () => {
  const name = prompt('Masukkan nama Anda:')
  const message = prompt('Tulis ucapan ulang tahun untuk Maya:')
  
  if (name && message) {
    birthdayWishes.value.unshift({
      id: Date.now(),
      name: name,
      message: message,
      time: 'Baru saja',
      age: '25th'
    })
    alert('🎂 Birthday wish berhasil dikirim! Maya pasti senang! ✨')
  }
}

const playGame = (gameType: string) => {
  const games = {
    trivia: '🧠 Birthday Trivia!\n\nQ: Kapan ulang tahun Maya?\nA: 10 Agustus\n\n+100 points! 🎉',
    memory: '🃏 Memory Game!\n\n🎂🎈🎁🎉\nRemember the sequence!\n\n+150 points! 🌟',
    spin: '🎯 Spin the Wheel!\n\n*spinning...*\n🎁 You won a party favor!\n\n+200 points! 🎊',
    photo: '📸 Photo Booth!\n\n*Click!* 📷\nAwesome party photo taken!\n\n+50 points! ✨'
  }
  
  gamesPlayed.value++
  const points = Math.floor(Math.random() * 200) + 50
  highScore.value += points
  
  alert(games[gameType] || 'Game not found!')
}

const shareInvitation = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Maya\'s 25th Birthday Party! 🎂',
      text: 'Join us for an amazing birthday celebration!',
      url: window.location.href
    })
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('🎈 Party invitation link copied!\n\nShare with your friends and let\'s party together! 🎉')
    })
  }
}

const downloadInvitation = () => {
  alert('🎁 Downloading Party Invitation...\n\n📄 Format: Fun Party Card\n🎨 Style: Colorful & Festive\n🎂 Includes: Party details & games\n\n(Demo download)')
}
</script>