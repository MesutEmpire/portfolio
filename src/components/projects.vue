<template>
  <section class="projects">
    <div class="flex justify-between items-center flex-wrap mb-12">
      <h2
        class="text-[32px] font-medium relative inline-block clear-both float-none before:content-['#'] before:text-primary stroke after:translate-x-3/4"
      >
        projects
      </h2>
      <router-link to="/projects"
        class="underline-offset-4 decoration-1 decoration-solid decoration-white"
        >View all ~~&gt;</router-link
      >
    </div>

    <div class="w-full grid gap-4 items-start mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <div v-for="project in store.getData" class="border border-gray">
        <img
          :src='project.url.img'
          alt=""
          class="border-b border-gray aspect-video"
        />

        <ul
          class="flex flex-wrap gap-y-2 gap-x-4 text-gray p-2 border-b border-gray"
        >
          <li v-for="technology in project.technologies">{{technology}}</li>
        </ul>

        <div class="p-4">
          <div class="text-[24px] font-medium">{{project.name}}</div>
          <div class="text-gray my-4 mx-0">{{project.description}}</div>
          <div class="flex gap-4">
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
  </section>
</template>
<script setup lang="ts">
import {useStore} from "@/stores/dataStore";
const store = useStore()
</script>
