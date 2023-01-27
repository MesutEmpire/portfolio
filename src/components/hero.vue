<template>

  <section class="flex flex-wrap gap-8 items-center justify-between">
    <div class="grow shrink basis-0">
      <h1 class="text-[32px] font-semibold min-w-[300px]">Sam is a <span>web designer</span> and <span>front-end</span> developer</h1>
      <div class="text-gray mt-8 mb-8">He crafts responsive websites where technologies meet creativity</div>
      <RouterLink class="inline-block py-2 px-4 border border-primary font-medium" to="/about-me">Contact ME ##</RouterLink>
    </div>
    <div class="relative flex flex-col grow shrink basis-0">
      <img src="@/assets/images/logo-outline.svg" alt="" class="absolute w-[30vmin] top-[10%] z-[1] aspect-square " >
      <img src="@/assets/images/hero-original.png" alt="Elias" class="relative z-[2] border-b border-primary">
      <div class="p-2 border border-gray text-gray mx-auto my-0 inline-flex justify-center items-center relative top-[-1px] z-[5] gap-2 font-medium before:content-[''] before:inline-block before:aspect-square before:bg-background before:border before:border-primary before:w-4">
        Currently working on
        <a href="https://elias-dev.ml" class="text-white underline-offset-4"> Portfolio</a></div>
      <IconHero></IconHero>
    </div>

  </section>
</template>
<script setup lang="ts">
import IconHero from "@/components/icons/IconHero.vue";
</script>

<style scoped>

</style>
