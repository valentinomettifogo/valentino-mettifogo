<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-md shadow-sm" id="navbar">
        <div class="container-sm">
            <RouterLink class="navbar-brand" to="/">Valentino Mettifogo</RouterLink>
            <!-- Toggle button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarText">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#work-section">Work</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact-section">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>