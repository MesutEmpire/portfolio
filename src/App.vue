<template>
  <div
    class="min-h-screen leading-normal overflow-x-hidden flex gap-28 flex-col text-white bg-background"
  >
    <navbar></navbar>
    <RouterView />
    <footer-component></footer-component>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/navbar.vue";
import FooterComponent from "@/components/footerComponent.vue";
</script>
<style scoped></style>
