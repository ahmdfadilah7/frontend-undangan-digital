<script setup lang="ts">
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar v-if="!route.meta.hideNavbar" />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer v-if="!route.meta.hideFooter" />
  </div>
</template>

<style scoped>
</style>