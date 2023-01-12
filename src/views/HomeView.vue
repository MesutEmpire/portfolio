<template>
  <div class="bg-background text-white h-full grid grid-cols-12 gap-4">
    <div class="col-start-3 col-span-8">
      <div><navbar></navbar></div>
      <div><hero></hero></div>
      <div><projects></projects></div>
      <div><skills></skills></div>
      <div><about></about></div>
      <div><contacts></contacts></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import navbar from "@/components/navbar.vue";
import hero from "@/components/hero.vue";
import projects from "@/components/projects.vue";
import skills from "@/components/skills.vue";
import about from "@/components/about.vue";
import contacts from "@/components/contacts.vue";
</script>
