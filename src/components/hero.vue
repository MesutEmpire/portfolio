<template>
  <section class="flex flex-wrap gap-8 items-center justify-between">
    <div class="grow shrink basis-0">
      <h1 class="text-[32px] font-semibold min-w-[300px]">
        Sam is a <span class="text-primary font-bold">data scientist</span> and <span class="text-primary font-bold">full-stack</span> developer
      </h1>
      <div class="text-slate-500 dark:text-gray mt-8 mb-8">
        He is a passionate problem solver, blending data science expertise and full-stack development skills to create innovative and impactful solutions.
      </div>
      <RouterLink
        class="button_default"
        to="/about-me"
        >Contact ME ##</RouterLink
      >
    </div>
    <div class="relative flex flex-col grow shrink basis-0">
      <img
        src="@/assets/images/logo-outline.svg"
        alt=""
        class="absolute w-[30vmin] top-[10%] z-[1] aspect-square"
      />
      <img
        src="@/assets/images/hero-original.png"
        alt="Sam"
        class="relative z-[2] border-b border-primary"
      />
      <div
        class="p-2 border border-gray text-slate-500 dark:text-gray mx-auto my-0 inline-flex justify-center items-center relative top-[-1px] z-[5] gap-2 font-medium before:content-[''] before:inline-block before:aspect-square before:dark:bg-background before:border before:border-primary before:w-4"
      >
        Currently working on
        <a
          :href="store.getContactData.dev"
          class="text-black dark:text-white underline decoration-2 underline-offset-4 hover:text-primary dark:hover:text-primary
"
        >
          Portfolio</a
        >
      </div>
      <IconHero></IconHero>
    </div>
  </section>
</template>
<script setup lang="ts">
import IconHero from "@/components/icons/IconHero.vue";
import {useStore} from "@/stores/dataStore";
const store = useStore();
</script>

<style scoped></style>
