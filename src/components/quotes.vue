<template>
  <figure
    class="border border-gray relative m-0 before:content-[''] before:absolute before:text-gray before:text-[64px] before:font-bold before:bg-gradient-to-r before:from-gray before:to-gray before:bg-no-repeat before:bg-[length:100%_40%]"
  >
    <blockquote class="p-8 text-2xl font-medium dark:bg-background">
     {{store.getQuotesData.quote}}
    </blockquote>
    <figcaption
      class="absolute text-slate-500 dark:text-gray border border-gray p-2 right-[-1px] text-base before:content-['- ']"
    >
      {{store.getQuotesData.quotedBy}}
    </figcaption>
  </figure>
</template>
<script setup lang="ts">
import { useStore } from "@/stores/dataStore";
const store = useStore();
</script>
