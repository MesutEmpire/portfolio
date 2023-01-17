<template>
  <div class="max-w-5xl p-4 lg:p-0 my-0 mx-auto relative mt-28 flex shrink grow basis-0 flex-col items-center gap-28">
<Path></Path>
<decent-projects></decent-projects>
<small-projects></small-projects>
  </div>
</template>
<script setup lang="ts">
import DecentProjects from "@/components/decentProjects.vue";
import SmallProjects from "@/components/smallProjects.vue";
import Path from "@/components/path.vue";
</script>
