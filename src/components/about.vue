<template>
  <div class="block sm:flex sm:items-center gap-8 sm:justify-between" :class="margin">
    <div>
      <div>
        <h2
          class="inline before:content-['#'] before:text-primary text-3xl stroke after:translate-x-[8rem]"
        >
          about
        </h2>
      </div>

      <div class="flex flex-col mt-10 mb-8 gap 4">
        <p class="text-slate-500 dark:text-gray">
          My name is Samuel Wainaina, and I am a second-year computer science student at Jomo Kenyatta University of Agriculture and Technology, based in Nairobi, Kenya. Alongside my studies, I am an enthusiastic learner in the field of data science, specifically focusing on artificial intelligence (AI) and machine learning (ML).
        </p>
        <p class="text-slate-500 dark:text-gray">
          I have a strong passion for developing responsive websites from scratch, creating modern and user-friendly web experiences. With a keen interest in AI and ML, I continuously explore their applications to enhance my understanding and leverage data-driven approaches. By combining my skills in web development and my enthusiasm for data science, I aim to contribute innovative solutions that merge technology and creativity.
        </p>
      </div>
      <router-link v-if="displayButton === 'true'" to="/about-me" class="border border-primary py-2 px-4 my-8"
        >View all -&gt;</router-link>
    </div>
    <img src="@/assets/images/about.png" class="max-w-sm" alt="My image" />
  </div>
</template>
<script setup lang="ts">
const {margin,displayButton} = defineProps(['margin', 'displayButton'])
</script>