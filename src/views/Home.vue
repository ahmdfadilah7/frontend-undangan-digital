<script setup lang="ts">
import { ref } from 'vue'
import Hero from '../components/Hero.vue'
import Features from '../components/Features.vue'
import TemplateShowcase from '../components/TemplateShowcase.vue'
import DemoTemplates from '../components/DemoTemplates.vue'
import Testimonials from '../components/Testimonials.vue'
import Pricing from '../components/Pricing.vue'
import CTA from '../components/CTA.vue'
</script>

<template>
  <div>
    <Hero />
    <Features />
    <TemplateShowcase />
    <DemoTemplates />
    <Testimonials />
    <Pricing />
    <CTA />
  </div>
</template>