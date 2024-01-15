<script setup>
import HeroSection from '@/components/HeroSection.vue';
import WorkSection from '@/components/WorkSection.vue';
import AboutmeSection from '@/components/AboutmeSection.vue';
import ContactSection from '@/components/ContactSection.vue';
</script>

<template>
  <main>
   <div class="container px-4" data-bs-spy="scroll" data-bs-target="#navbar" tabindex="0">
      <HeroSection />
      <AboutmeSection />
      <WorkSection />
    </div>
    <ContactSection />
  </main>
</template>
