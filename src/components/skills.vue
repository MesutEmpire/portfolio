<template>
  <div class="w-full">
    <h2
      class="text-3xl font-medium relative inline-block float-none clear-both before:content-['#'] before:text-primary stroke after:translate-x-3/4"
    >
      skills
    </h2>
    <div class="flex gap-8 flex-wrap">
      <div
        class="hidden sm:flex grow shrink basis-0 relative min-w-min min-h-min"
      >
        <img
          src="@/assets/images/logo-outline.svg"
          alt=""
          class="absolute left-44 top-28 w-24"
        />
        <IconSkill></IconSkill>
      </div>
      <div class="flex flex-wrap sm:block gap-4 columns-auto md:columns-2">
        <div
          v-for="skill in store.getSkillData"
          class="w-full break-inside-avoid mb-4 grow shrink basis-0 border border-gray min-w-min max-w-[230px]"
        >
          <div class="font-semibold p-2 border border-gray">
            {{ skill.category }}
          </div>
          <ul
            class="p-2 flex flex-wrap gap-2 items-start justify-start text-slate-500 dark:text-gray"
          >
            <li v-for="tech in skill.technologies">{{ tech }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconSkill from "./icons/IconSkill.vue";
import { useStore } from "@/stores/dataStore";
const store = useStore();
</script>
