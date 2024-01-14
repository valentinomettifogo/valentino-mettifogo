<script setup>
import HeroSection from '@/components/HeroSection.vue';
import WorkSection from '@/components/WorkSection.vue';
import ContactSection from '@/components/ContactSection.vue';
</script>

<template>
  <main>
   <div class="container px-4" data-bs-spy="scroll" data-bs-target="#navbar" tabindex="0">
      <HeroSection />
      <WorkSection />
    </div>
    <ContactSection />
  </main>
</template>
