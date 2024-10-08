<template>
  <div
    class="w-full md:max-w-96 h-44 sm:h-[337px] rounded-xl flex flex-row sm:flex-col overflow-hidden shadow-xl border"
  >
    <div
      class="h-full sm:h-[70%] w-full flex justify-center items-center overflow-hidden md:shrink-0 bg-black"
    >
      <NuxtLink :to="rountingLink" class="w-full h-full">
        <img
          class="w-full h-full object-cover transition-transform duration-300 sm:scale-105 md:hover:scale-105"
          :src="image"
          alt="Card_image"
        />
      </NuxtLink>
    </div>
    <div class="w-full h-[60%] sm:h-[30%] px-4 sm:px-6 py-4">
      <span class="font-bold font-size-1 mb-2 line-clamp-none sm:line-clamp-2">
        {{ title }}
      </span>
      <p class="text-gray-600 text-sm">{{ history }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: String,
  id: Number,
  title: String,
  history: String,
  rountingLink: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style scoped></style>
