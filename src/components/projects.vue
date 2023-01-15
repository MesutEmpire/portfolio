<template>
  <section class="projects">
    <div class="flex justify-between items-center flex-wrap mb-12">
      <h2
        class="text-[32px] font-medium relative inline-block clear-both float-none before:content-['#'] before:text-primary stroke after:translate-x-3/4"
      >
        projects
      </h2>
      <a
        class="underline-offset-4 decoration-1 decoration-solid decoration-white"
        href="/projects"
        >View all ~~&gt;</a
      >
    </div>

    <div class="w-full grid gap-4 items-start mt-12 md:grid-cols-3">
      <div class="border border-gray">
        <img
          src="@/assets/images/portfolio.jpg"
          alt=""
          class="border-b border-gray aspect-video"
        />

        <ul
          class="flex flex-wrap gap-y-2 gap-x-4 text-gray p-2 border-b border-gray"
        >
          <li>Flask</li>
          <li>Python</li>
          <li>SCSS</li>
        </ul>

        <div class="p-4">
          <div class="text-[24px] font-medium">ChertNodes</div>
          <div class="text-gray my-4 mx-0">Minecraft servers hosting</div>
          <div class="flex gap-4">
            <a href="https://chernodes.ru" class="button_default">Live =&gt;</a
            ><a
              href="https://figma.com/community/file/1149829028455305659"
              class="button_default"
              >Figma =&gt;</a
            >
          </div>
        </div>
      </div>

      <div class="border border-gray">
        <img
          src="@/assets/images/portfolio.jpg"
          alt=""
          class="border-b border-gray aspect-video"
        />

        <ul
          class="flex flex-wrap gap-y-2 gap-x-4 text-gray p-2 border-b border-gray"
        >
          <li>Express</li>
          <li>Node.js</li>
          <li>React</li>
          <li>RTK</li>
          <li>Discord.js</li>
        </ul>

        <div class="p-4">
          <div class="text-[24px] font-medium">ProtectX web</div>
          <div class="text-gray my-4 mx-0">Discord anti-crash bot</div>
          <div class="flex gap-4">
            <a href="https://isecurity-protectx.tk" class="button_default"
              >Live =&gt;</a
            ><a
              href="https://figma.com/community/file/1168662007492356291"
              class="button_default"
              >Figma =&gt;</a
            >
          </div>
        </div>
      </div>

      <div class="border border-gray">
        <img
          src="@/assets/images/portfolio.jpg"
          alt=""
          class="border-b border-gray aspect-video"
        />

        <ul
          class="flex flex-wrap gap-y-2 gap-x-4 text-gray p-2 border-b border-gray"
        >
          <li>Express</li>
          <li>Node.js</li>
          <li>EJS</li>
        </ul>

        <div class="p-4">
          <div class="text-[24px] font-medium">Kahoot Answers</div>
          <div class="text-gray my-4 mx-0">Get answers from kahoot quiz</div>
          <div class="flex gap-4">
            <a href="https://khanswers.vercel.app" class="button_default"
              >Live =&gt;</a
            ><a
              href="https://github.com/EliasDevis/kahoot-answers"
              class="button_default"
              >Github =&gt;</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
