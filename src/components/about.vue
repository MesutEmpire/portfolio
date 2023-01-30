<template>
  <div class="block sm:flex sm:items-center gap-8 sm:justify-between mt-32">
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
          I’m a self-taught front-end developer based in Nairobi, Kenya. I can
          develop responsive websites from scratch and raise them into modern
          user-friendly web experiences.
        </p>
        <p class="text-slate-500 dark:text-gray">
          Transforming my creativity and knowledge into a websites has been my
          passion for over a year. I have been helping various clients to
          establish their presence online. I always strive to learn about the
          newest technologies and frameworks.
        </p>
      </div>
      <router-link to="/about-me" class="border border-primary py-2 px-4 my-8"
        >View all -&gt;</router-link
      >
    </div>
    <img src="@/assets/images/about.png" class="max-w-sm" alt="My image" />
  </div>
</template>
