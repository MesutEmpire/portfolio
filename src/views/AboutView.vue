<template>
  <div
    class="max-w-full md:max-w-5xl p-4 lg:p-0 my-0 mx-auto relative mt-28 flex shrink grow basis-0 flex-col items-center gap-20"
  >
    <Path name="Who am i"/>
    <About margin="mt-0" displayButton="false"/>
    <Skills :class="'mb-8 sm:mb-32'" />
    <Facts/>
  </div>
</template>
<script setup lang="ts">
import Path from "@/components/path.vue";
import About from "@/components/about.vue";
import Skills from "@/components/skills.vue";
import Facts from "@/components/facts.vue";
</script>
