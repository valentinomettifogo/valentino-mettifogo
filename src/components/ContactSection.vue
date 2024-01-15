<script setup>
import EmailIcon from './icons/EmailIcon.vue';
import LinkedinIcon from './icons/LinkedinIcon.vue';
import GithubIcon from './icons/GithubIcon.vue';
</script>

<template>
  <div class="container px-4 py-5" id="contact-section">
    <h2 class="pb-2 border-bottom ps-5">Get in touch</h2>

    <div class="row mt-5 align-items-center">

      <div class="col-5">
        <img src="/images/mail.png" alt="Sending mail" class="img-fluid">
      </div>

      <div class="col-1"></div>

      <div class="col">
        <div class="my-4">
          <p>I'm not using social much but you can contact me in the following channel</p>
        </div>
        <div class="my-3">
          <a href="mailto:valentino.mettifogo@gmail.com" target="_blank">
            <EmailIcon height="48" width="48" /><span class="ms-3">valentino.mettifogo@gmail.com</span>
          </a>
        </div>
        <div class="my-3">
          <a href="http://linkedin.com/in/valentino-mettifogo/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon height="48" width="48" /><span class="ms-3">valentino-mettifogo</span>
          </a>
        </div>
        <div class="my-3">
          <a href="https://github.com/valentinomettifogo" target="_blank" rel="noopener noreferrer">
            <GithubIcon height="48" width="48" /><span class="ms-3">valentinomettifogo</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
a {
  color: inherit;
  text-decoration: inherit;
}
</style>
