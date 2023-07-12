<template>
  <div
    class="min-h-screen leading-normal overflow-x-hidden flex gap-28 flex-col dark:text-white text-black dark:bg-background font-Comfortaa"
  >
    <Navbar/>
    <RouterView />
    <FooterComponent/>
  </div>
</template>
<script setup lang="ts">
import {RouterView } from "vue-router";
import Navbar from "@/components/navbar.vue";
import FooterComponent from "@/components/footerComponent.vue";
import { useStore } from "@/stores/dataStore";
const store = useStore();
store.setMode();
</script>
<style scoped></style>
