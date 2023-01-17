<template>
  <div
    class=" max-w-full md:max-w-5xl p-4 lg:p-0 my-0 mx-auto relative mt-28 flex shrink grow basis-0 flex-col items-center gap-28"
  >
    <hero></hero>
    <quotes></quotes>
    <projects></projects>
    <skills></skills>
    <about></about>
    <contacts></contacts>
  </div>
</template>
<script setup lang="ts">
import Hero from "@/components/hero.vue";
import Projects from "@/components/projects.vue";
import Skills from "@/components/skills.vue";
import About from "@/components/about.vue";
import Contacts from "@/components/contacts.vue";
import Quotes from "@/components/quotes.vue";
</script>
