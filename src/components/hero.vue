<template>
  <div class="grid grid-cols-12 gap-5 text-white mt-32 pt-3 pb-1">
    <div class="col-span-6">
      <h2 class="my-8">Elias is a web designer and front-end developer</h2>
      <p class="my-8">
        He crafts responsive websites where technologies meet creativity
      </p>
      <a class="border border-primary py-2 px-4 my-8" href="#">Contact ME ##</a>
    </div>
    <div class="col-span-6">
      <img src="@/assets/images/hero.png" />
      <div class="border border-gray py-2 px-4">
        <span class="border border-primary px-2"> </span>
        <span class="mx-2 text-gray">
          Currently working on
          <a
            class="underline underline-offset-4 text-white"
            href="https://elias-dev.ml"
            >Portfolio</a
          >
        </span>
      </div>
    </div>
  </div>
  <img
    class="bg-background p-1 rounded-full -mt-4 absolute left-2"
    src="@/assets/images/open_quote.png"
  />
  <div class="relative">
    <blockquote class="border border-gray text-2xl font-medium p-8">
      With great power comes great electricity bill
    </blockquote>
    <figcaption class="border border-gray absolute right-0 text-gray p-2">
      "Dr Who"
    </figcaption>
    <img
      class="bg-background p-1 rounded-full -mt-4 absolute right-2"
      src="@/assets/images/closing_quote.png"
    />
  </div>
</template>
<style scoped>
.watch {
  content: "";
}
</style>
