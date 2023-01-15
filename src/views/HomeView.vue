<template>
<navbar></navbar>
  <div class="max-w-5xl p-4 lg:p-0 my-0 mx-auto relative mt-28 flex shrink grow basis-0 flex-col items-center gap-28">
    <hero></hero>
    <quotes></quotes>
    <projects></projects>
    <skills></skills>
    <about></about>
    <contacts></contacts>
  </div>
  <footer-component></footer-component>
<!--      <div><navbar></navbar></div>-->
<!--      <div><hero></hero></div>-->
<!--      <div><projects></projects></div>-->
<!--      <div><skills></skills></div>-->
<!--      <div><about></about></div>-->
<!--      <div><contacts></contacts></div>-->
<!--      <div><footerComponent></footerComponent></div>-->

</template>
<script setup lang="ts">
import navbar from "@/components/navbar.vue";
import Hero from "@/components/hero.vue";
import Projects from "@/components/projects.vue";
import Skills from "@/components/skills.vue";
import About from "@/components/about.vue";
import Contacts from "@/components/contacts.vue";
import footerComponent from "@/components/footerComponent.vue";
import Navbar from "@/components/navbar.vue";
import FooterComponent from "@/components/footerComponent.vue";
import Quotes from "@/components/quotes.vue";
</script>
