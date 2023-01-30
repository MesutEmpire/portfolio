<template>
  <div class="flex items-center gap-8 justify-between mt-32">
    <div>
      <div>
        <h2
          class="inline before:content-['#'] before:text-primary text-3xl stroke after:translate-x-[10rem]"
        >
          contact
        </h2>
      </div>
      <div class="flex flex-col mt-10 mb-8 gap 4">
        <p class="text-slate-500 dark:text-gray">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
      </div>
    </div>
    <div class="border border-gray p-4">
      <h3 class="font-semibold">Message me here</h3>
      <div class="mt-4">
        <a
          class="flex items-center text-slate-500 dark:text-gray mt-2 gap-2"
          href="https://discord.com/users/914240860101681163"
        >
          <img src="@/assets/icons/discord.svg" alt="" />
          <div class="md:inline-block align-baseline hidden">Mesut_Empire</div>
        </a>

        <a
          class="flex items-center text-slate-500 dark:text-gray mt-2 gap-2"
          :href="store.getContactData.email"
        >
          <img src="@/assets/icons/email.svg" alt="" />
          <div class="md:inline-block align-baseline hidden">sam@dev.io</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "@/stores/dataStore";
const store = useStore();
</script>
