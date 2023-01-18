<template>
  <div class=" t-4 md:pt-8 pb-2 bg-background fixed top-0 w-full z-[999]">
    <input
      class="before_check  block w-8 m-0 aspect-square md:hidden appearance-none absolute cursor-pointer right-2 top-8 z-[9999] after_check before_checked after_checked"
      type="checkbox"
      aria-label="Menu"
    />
    <div
      class="fixed hidden lg:flex items-center flex-col justify-center left-4 gap-2 top-0"
    >
      <span class="w-px h-[33vh] bg-gray block"></span>
      <div class="grid auto-cols-fr">
        <a
          href="https://discord.com/users/914240860101681163"
          class="w-8 aspect-square"
        >
          <img
            src="@/assets/icons/discord.svg"
            alt="discord"
            class="w-full aspect-square"
          />
        </a>
        <a href="https://github.com/EliasDevis" class="w-8 aspect-square">
          <img
            src="@/assets/icons/github.svg"
            alt="github"
            class="w-full aspect-square"
          />
        </a>
        <a href="mailto:elias@elias-dev.ml" class="w-8 aspect-square">
          <img
            src="@/assets/icons/email.svg"
            alt="email"
            class="w-full aspect-square"
          />
        </a>
      </div>
    </div>

    <div class="my-0 p-4 lg:p-0 mx-auto max-w-5xl relative">
      <div class="flex w-full justify-between align-center gap-4 relative">
        <a class="flex gap-2" href="/">
          <img
            class="w-4 aspect-square"
            src="@/assets/icons/logo.svg"
            alt="Elias logo"
          />
          <span class="font-bold">Sam</span>
        </a>
        <div class="checked:flex hidden ml-auto md:flex items-start gap-8 text-gray">
          <router-link
            to="/"
            class="before:content-['#'] before:text-primary active:text-white active:font-semibold  active:text-white hover:text-white"
            >home</router-link
          >

          <router-link
            to="/projects"
            class="before:content-['#'] before:text-primary active:text-white active:font-semibold active:text-white hover:text-white"
            >projects</router-link
          >

          <router-link
            to="/about-me"
            class="before:content-['#'] before:text-primary active:text-white active:font-semibold  active:text-white hover:text-white"
            >about-me</router-link

          >
        </div>
        <div class="group hidden md:flex relative text-gray">
          <span
            class="hover:text-white cursor-pointer uppercase after:content-['V'] after:inline-block after:font-medium after:ml-1 after:scale-y-[0.5] after:scale-x-100 "
            >en</span
          >
          <div
            class=" group-hover:flex hidden flex-col border border-gray absolute bg-background bottom-0 translate-y-full"
          >
            <div class="hover:text-white cursor-pointer uppercase p-2">ru</div>
            <div class="hover:text-white cursor-pointer uppercase p-2">ua</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {watchEffect} from "vue";
const {path} = useRoute()
const {currentRoute} = useRouter()
console.log(window.location.pathname)
console.log(path)
console.log(currentRoute)

</script>
<style scoped></style>
