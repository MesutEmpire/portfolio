<template>
  <div class="min-h-screen leading-normal overflow-x-hidden flex gap-28 flex-col text-white bg-background">
    <RouterView />
  </div>

</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
<style scoped>
</style>
