<template>
  <NuxtLink :to="rountingLink">
    <div
      class="w-full h-[70vh] sm:h-[50vh] md:h-[60vh] flex flex-col overflow-hidden"
    >
      <div
        class="h-full flex justify-center items-end overflow-hidden rounded-xl"
      >
        <img
          class="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          :src="cardScr"
          alt="card_scr"
        />
      </div>
      <div class="px-1 lg:px-2 py-4">
        <span
          class="font-size-2 font-medium line-clamp-none sm:line-clamp-2 text-start"
          >{{ title }}</span
        >
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  cardScr: String,
  title: String,
  rountingLink: String,
});
</script>

<style scoped></style>
