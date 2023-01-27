<template>
  <div>
    <h2
      class="text-3xl font-medium relative inline-block floats-none clear-both before:content-['#'] before:text-primary after:stroke"
    >
      decent
    </h2>
    <div
      class="w-full grid gap-4 items-start mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
    >
      <div v-for="project in store.getdecentProjectsData"  class="border border-gray">
        <img
          :src='project.url.img'
          alt=""
          class="border-b aspect-video"
        />

        <ul
          class="flex flex-wrap gap-y-2 gap-x-4 text-gray p-2 border-b border-gray"
        >
          <li v-for="tech in project.technologies">{{ tech }}</li>
        </ul>

        <div class="p-4">
          <div class="text-2xl font-medium">{{ project.name }}</div>
          <div class="text-color my-4 mx-0">{{ project.description }}</div>
          <div class="flex gap-2">
            <a :href='project.url.live' class="button_default">Live =&gt;</a
            ><a
              :href='project.url.figma'
              class="button_default"
              >Figma =&gt;</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useStore} from "@/stores/dataStore";
const store = useStore()
</script>
