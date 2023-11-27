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
      <div v-for="project in store.getProjectsData" class="group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:line-clamp-none z-999">
        <div v-if="project.level === 'decent'" class="border border-gray">
          <img  v-if="project.url.img !== ''" :src="project.url.img" alt="" class="border-b aspect-video" />

          <ul
            class="flex flex-wrap gap-y-2 gap-x-4 text-slate-500 dark:text-gray p-2 border-b border-gray"
          >
            <li v-for="tech in project.technologies">{{ tech }}</li>
          </ul>

          <div class="p-4">
            <div class="text-2xl font-medium">{{ project.name }}</div>
            <div class="text-color my-4 mx-0 line-clamp-2 group-hover:line-clamp-none">{{ project.description }}</div>
            <div class="flex gap-2">
              <a v-if="project.url.live !== ''" :href="project.url.live"  target="_blank" class="button_default">Live =&gt;</a
              ><a :href="project.url.github" target="_blank" class="button_default"
                >Github =&gt;</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h2
      class="text-3xl font-medium relative inline-block floats-none clear-both before:content-['#'] before:text-primary after:stroke"
    >
      small
    </h2>
    <div
      class="w-full grid gap-4 items-start mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
    >
      <div v-for="project in store.getProjectsData">
        <div v-if="project.level === 'small'" class="border border-gray">
          <img
            v-if="project.url.img !== ''"
            :src="project.url.img"
            alt=""
            class="border-b aspect-video"
          />

          <ul
            class="flex flex-wrap gap-y-2 gap-x-4 text-slate-500 dark:text-gray p-2 border-b border-gray"
          >
            <li v-for="tech in project.technologies">{{ tech }}</li>
          </ul>

          <div class="p-4">
            <div class="text-2xl font-medium">{{ project.name }}</div>
            <div class="text-color my-4 mx-0">{{ project.description }}</div>
            <div class="flex gap-2">
              <a :href="project.url.github" class="button_default"
                >Github =&gt;</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "@/stores/dataStore";
const store = useStore();
</script>
