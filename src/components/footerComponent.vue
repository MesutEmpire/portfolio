<template>
  <div class="px-4 md:px-0 pt-8 mb-4 border-t border-gray gap-28 w-full">
    <div class="container mx-auto my-0 lg:p-4">
      <div class="flex justify-between flex-wrap gap-8 mb-12">
        <div>
          <div class="flex gap-8">
            <div class="flex gap-8">
              <img
                src="@/assets/icons/logo.svg"
                alt="logo"
                class="w-4 aspect-square"
              />
              <div class="font-bold">Sam</div>
            </div>
            <a
              class="text-slate-500 dark:text-gray"
              :href="store.getContactData.email"
              target="_blank"
              >samwainaina01@gmail.com</a
            >
          </div>

          <p class="mt-4">
           Data Scientist and Fullstack developer based in Kenya.
          </p>
        </div>
        <div>
          <div class="font-medium text-2xl">Media</div>
          <div class="flex gap-2">
            <a :href="store.getContactData.figma" target="_blank" class="w-8 aspect-square">
              <img
                src="@/assets/icons/figma.svg"
                alt="figma"
                class="w-full aspect-square"
              />
            </a>
            <a :href="store.getContactData.github" target="_blank" class="w-8 aspect-square">
              <img
                src="@/assets/icons/github.svg"
                alt="github"
                class="w-full aspect-square"
              />
            </a>
            <a :href="store.getContactData.discord" target="_blank" class="w-8 aspect-square">
              <img
                src="@/assets/icons/discord.svg"
                alt="discord"
                class="w-full aspect-square"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="text-slate-500 dark:text-gray text-center">
        © Copyright {{new Date().getFullYear()}}. Made by Sam
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "@/stores/dataStore";
const store = useStore();
</script>
