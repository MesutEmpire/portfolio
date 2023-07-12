<template>
  <div class="self-start block w-full">
    <h1
      class="text-[32px] font-semibold before:content-['/'] before:text-primary"
    >
      {{ finalPath }}
    </h1>
    <p class="text-slate-500 dark:text-gray mt-4">{{name}}</p>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
const {name} = defineProps(['name'])

const { path } = useRoute();
const removeFirstSlash = path.replace("/", "");
const finalPath = path.replace("/", "");
</script>
