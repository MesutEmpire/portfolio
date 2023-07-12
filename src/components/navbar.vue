<template>
  <div
    class="t-4 md:pt-8 pb-2 bg-white dark:bg-background fixed top-0 w-full z-[999]"
  >
    <input
      v-model="showNavbar"
      class="before_check block w-8 mt-2 pt-2 aspect-square md:hidden appearance-none absolute cursor-pointer right-2 top-8 z-[9999] after_check before_checked after_checked"
      type="checkbox"
      aria-label="Menu"
    />
    <div
      class="fixed lg:flex items-center flex-col justify-center left-4 gap-2 top-0"
      :class="{
        'flex -translate-y-[100%] -translate-x-[50%] z-[9999] left-[50%] mytop text-[24px]':
          showNavbar,
        hidden: !showNavbar,
      }"
    >
      <span
        class="w-px h-[33vh] bg-gray"
        :class="{ hidden: showNavbar, block: !showNavbar }"
      ></span>
      <div
        class="auto-cols-fr"
        :class="{ 'flex gap-4': showNavbar, grid: !showNavbar }"
      >
        <a
          :href="store.getContactData.discord"
          class="aspect-square"
          :class="{ 'w-12': showNavbar, 'w-8': !showNavbar }"
        >
          <img
            src="@/assets/icons/discord.svg"
            alt="discord"
            class="w-full aspect-square"
          />
        </a>
        <a
          :href="store.getContactData.github"
          class="w-8 aspect-square"
          :class="{ 'w-12': showNavbar, 'w-8': !showNavbar }"
        >
          <img
            src="@/assets/icons/github.svg"
            alt="github"
            class="w-full aspect-square"
          />
        </a>
        <a
          :href="store.getContactData.email"
          class="aspect-square"
          :class="{ 'w-12': showNavbar, 'w-8': !showNavbar }"
        >
          <img
            src="@/assets/icons/email.svg"
            alt="email"
            class="w-full aspect-square"
          />
        </a>
        <a :href="store.getContactData.linkedin" class=" p-1">
          <img
            src="@/assets/icons/linkedin.svg"
            alt="linkedin"
            class="w-full aspect-square "
          />
        </a>
      </div>
    </div>

    <div
      class="my-0 p-4 lg:p-0 mx-auto max-w-5xl relative"
      :class="{ 'w-full h-[100vh]': showNavbar }"
    >
      <div
        class="flex w-full justify-between align-center gap-4 relative"
        :class="{ 'items-start': showNavbar }"
      >
        <router-link class="flex gap-2" to="/">
<!--          <img-->
<!--            class="w-4 aspect-square"-->
<!--            src="@/assets/icons/logo.svg"-->
<!--            alt="Elias logo"-->
<!--          />-->
          <IconLogo />
          <span class="font-bold">Sam</span>
        </router-link>
        <div
          class="ml-auto md:flex items-start gap-8 text-slate-500 dark:text-gray"
          :class="{
            'flex absolute flex-col -bottom-8 translate-y-[100%] text-[24px]':
              showNavbar,
            hidden: !showNavbar,
          }"
        >
          <router-link
            to="/"
            class="before:content-['#'] before:text-primary active:text-black active:font-semibold hover:text-black dark:hover:text-white"
            @click="showNavbar = false"
            >home</router-link
          >

          <router-link
            to="/projects"
            class="before:content-['#'] before:text-primary active:text-black active:font-semibold hover:text-black dark:hover:text-white"
            @click="showNavbar = false"
            >projects</router-link
          >

          <router-link
            to="/about-me"
            class="before:content-['#'] before:text-primary active:text-black active:font-semibold hover:text-black dark:hover:text-white"
            @click="showNavbar = false"
            >about-me</router-link
          >
        </div>
        <div
          class="group md:flex relative text-slate-500 dark:text-gray"
          :class="{
            'flex absolute -bottom-4 translate-y-[100%] text-[24px] right-0':
              showNavbar,
            hidden: !showNavbar,
          }"
        >
          <span
            class="hover:text-black dark:hover:text-white cursor-pointer uppercase after:content-['V'] after:inline-block after:font-medium after:ml-1 after:scale-y-[0.5] after:scale-x-100"
            >en</span
          >
          <div
            class="group-hover:flex hidden flex-col border border-gray absolute dark:bg-background bottom-0 translate-y-full"
          >
            <div
              class="hover:text-black dark:hover:text-white cursor-pointer uppercase p-2"
            >
              ru
            </div>
            <div
              class="hover:text-black dark:hover:text-white cursor-pointer uppercase p-2"
            >
              ua
            </div>
          </div>
        </div>

        <div>
          <button
            type="button"
            @click="store.toggleMode()"
            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
          >
            <IconDarkMode
              :class="{ hidden: store.getMode === 'dark' }"
            ></IconDarkMode>
            <IconLightMode
              :class="{ hidden: store.getMode === 'light' }"
            ></IconLightMode>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, watchEffect } from "vue";
import { useStore } from "@/stores/dataStore";
import IconDarkMode from "@/components/icons/IconDarkMode.vue";
import IconLightMode from "@/components/icons/IconLightMode.vue";
import IconLogo from "@/components/icons/IconLogo.vue";
const store = useStore();
const { path } = useRoute();
const showNavbar = ref();
</script>
<style scoped>
.mytop {
  top: calc(100% - 16px);
}
</style>
