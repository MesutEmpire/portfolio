<template>
  <div class="flex justify-between mt-32">
    <div>
      <h2 class="inline before:content-['#'] before:text-primary text-3xl">
        projects
      </h2>

      <img class="w-40 inline ml-3" src="@/assets/images/stroke.png" />
    </div>
    <div>
      <a
        class="underline underline-offset-4 text-white"
        href="https://elias-dev.ml"
        >view all ~~></a
      >
    </div>
  </div>
  <div class="grid grid-cols-3 gap-5 text-white mt-12 pt-3 pb-1">
    <div v-for="card in [1, 2, 3]">
      <div class="border border-gray">
        <img
          src="@/assets/images/portfolio.jpg"
          alt=""
          class="border-b border-gray aspect-video"
        />

        <ul class="flex flex-wrap p-2 border-b border-gray">
          <li>Flask</li>
          <li>Python</li>
          <li>SCSS</li>
        </ul>

        <div class="p-4">
          <div class="text-white text-2xl font-medium">ChertNodes</div>
          <div class="m-4">Minecraft servers hosting</div>
          <div class="flex gap-2">
            <a
              href="https://chernodes.ru"
              class="border border-primary py-2 px-4 my-8"
              >Live =&gt;</a
            >
            <a
              href="https://figma.com/community/file/1149829028455305659"
              class="border border-primary py-2 px-4 my-8"
              >Figma =&gt;</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
