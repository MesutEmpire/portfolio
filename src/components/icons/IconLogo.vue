<template>
    <svg width="25" height="25" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z" :fill="store.getLogoColor" />
    </svg>
</template>
<script setup lang="ts">
import {useStore} from "@/stores/dataStore";
import {watchEffect} from "vue";
const store = useStore();

watchEffect(() => {
  return store.getLogoColor
})
</script>


