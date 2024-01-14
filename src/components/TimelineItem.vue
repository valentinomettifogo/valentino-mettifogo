<script setup>
defineProps({ data: Object })
</script>

<template>
  <div class="card w-75 my-2">
    <div class="card-body">
      <h5 class="card-title bg-primary rounded p-2 text-white mb-3">{{ data.title }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ data.date }}</h6>
      <p class="card-text">{{ data.body }}</p>
    </div>
  </div>
</template>
