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
                        <a class="nav-link" href="#aboutme-section">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#work-section">My Experience</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact-section">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/valentinomettifogo/valentino-mettifogo" target="_blank">This repository</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>