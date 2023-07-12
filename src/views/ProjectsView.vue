<template>
  <div
    class="max-w-5xl p-4 lg:p-0 my-0 mx-auto relative mt-28 flex shrink grow basis-0 flex-col items-center gap-28"
  >
   <Path name="All of my projects"/>
    <DecentProjects/>
  </div>
</template>
<script setup lang="ts">
import DecentProjects from "@/components/decentProjects.vue";
import Path from "@/components/path.vue";
</script>
