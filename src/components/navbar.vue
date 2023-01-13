<template>
  <div class="m-0 lg:container lg:p-4">
    <div class="flex w-full justify-between align-center gap-4 relative">
      <a class="flex gap-2" href="/">
        <img
          class="w-4 aspect-square"
          src="@/assets/icons/logo.svg"
          alt="Elias logo"
        />
        <span class="font-bold">Elias</span>
      </a>
      <div class="ml-auto flex items-start gap-8 text-gray">
        <a
          href="/"
          class="before:content-['#'] before:text-primary active:text-white active:font-semibold"
          >home</a
        >

        <a
          href="/projects"
          class="before:content-['#'] before:text-primary active:text-white active:font-semibold"
          >projects</a
        >

        <a
          href="/about-me"
          class="before:content-['#'] before:text-primary active:text-white active:font-semibold"
          >about-me</a
        >
      </div>
      <div class="relative text-gray">
        <span
          class="cursor-pointer uppercase after:content-['v'] after:lowercase after:inline-block after:font-medium after:ml-1 after:scale-100"
          >en</span
        >
        <div
          class="hidden flex-col border border-gray absolute bg-background bottom-0 translate-y-full"
        >
          <div class="cursor-pointer uppercase p-2">ru</div>
          <div class="cursor-pointer uppercase p-2">ua</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
