<template>
  <div class="flex flex-col lg:flex-row gap-4 border-b-2 py-8 border-gray-300">
    <div class="flex sm:justify-start items-start justify-center">
      <img
        class="w-16 h-auto sm:w-20 lg:w-32 xl:w-20 min-w-[80px]"
        :src="imageSrc"
        alt="logo-card"
      />
    </div>
    <div
      class="space-y-3 2xl:fs-4 font-size-3 text-[#323842] sm:text-start text-center"
    >
      <span>{{ companyName }} - ({{ history }})</span>
      <h4 class="font-semibold">{{ position }}</h4>
      <p class="text-base 2xl:fs-4 leading-0 2xl:leading-snug">{{ details }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { brandLogo1, brandLogo2, brandLogo3 } from "~/static/imageHandler.js";

const props = defineProps({
  expId: {
    type: Number,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  scr: {
    type: String,
    required: false,
    default: "",
  },
  position: {
    type: String,
    required: true,
  },
  history: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

const defaultImages = [brandLogo1, brandLogo2, brandLogo3];
const imageSrc = computed(() => {
  return (
    props.scr ||
    defaultImages[props.expId % defaultImages.length] ||
    defaultImages[0]
  );
});
</script>

<style scoped></style>
