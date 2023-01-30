<template>
  <section>
    <h2
      class="text-3xl font-medium relative inline-block floats-none clear-both before:content-['#'] before:text-primary after:stroke"
    >
      fun-facts
    </h2>
    <div class="flex flex-wrap items-start">
      <ul class="mt-12 flex gap-4 items-start flex-wrap">
        <li
          v-for="fact in store.getFactsData"
          class="p-2 text-slate-500 dark:text-gray border border-gray"
        >
          {{ fact }}
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useStore } from "@/stores/dataStore";
const store = useStore();
</script>
