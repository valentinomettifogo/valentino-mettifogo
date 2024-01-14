<script setup>
import TimelineItem from './TimelineItem.vue';

//data
import timeline from '@/data/timeline.json'

</script>

<template>
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet nostrum doloremque est dolore, unde harum
        illo expedita pariatur saepe. Nostrum ipsa voluptates dolorem deserunt cupiditate consequatur ab reprehenderit
        in.
    </p>
    <TimelineItem v-for="item in timeline" :data="item" :key="item.id" />
</template>