<template>
  <div class="sm:flex items-center gap-8 sm:justify-between mt-32">
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
          Thank you for visiting my website. If you have freelance opportunities or have any other requests or questions, please feel free to reach out to me using the contact information provided below. I would be delighted to discuss potential collaborations or answer any inquiries you may have. I appreciate your interest and look forward to connecting with you soon.
        </p>
      </div>
    </div>
    <div class="border border-gray p-4 w-full">
      <h3 class="font-semibold">Message me here</h3>
      <div class="mt-4">
        <a
          class="flex items-center text-slate-500 dark:text-gray mt-2 gap-2"
         :href="store.getContactData.discord"
        >
          <img src="@/assets/icons/discord.svg" alt="Discord" />
          <div class="md:inline-block align-baseline">Mesut_Empire</div>
        </a>

        <a
          class="flex items-center text-slate-500 dark:text-gray mt-2 gap-2"
          :href="store.getContactData.email"
        >
          <img src="@/assets/icons/email.svg" alt="Email" />
          <div class="md:inline-block align-baseline">MesutEmpire</div>
        </a>
        <a :href="store.getContactData.linkedin"  class="flex items-center text-slate-500 dark:text-gray mt-2 pl-1.5 gap-2">
          <img
              src="@/assets/icons/linkedin.svg"
              alt="linkedin"
          />
          <div class="md:inline-block align-baseline">Samuel Wainaina</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "@/stores/dataStore";
const store = useStore();
</script>
