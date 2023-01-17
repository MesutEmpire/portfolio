<template>
  <div class="self-start block w-full">
    <h1 class="text-[32px] font-semibold before:content-['/'] before:text-primary">{{ finalPath }}</h1>
    <p class="text-gray mt-4">All of my projects</p>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'

const {path} = useRoute()
const removeFirstSlash = path.replace('/','')
const finalPath = path.replace('/','')

</script>
