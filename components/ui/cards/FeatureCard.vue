<template>
  <NuxtLink :to="rountingLink">
    <div
      class="w-full 2xl:max-w-full md:max-w-96 h-[35vh] md:h-[50vh] lg:h-[65vh] 2xl:h-[80vh] flex flex-row md:flex-col gap-4 overflow-hidden"
    >
      <div
        class="h-[35vh] md:h-[50vh] lg:h-[65vh] 2xl:h-[80vh] w-full flex justify-center overflow-hidden rounded-xl"
      >
        <img
          class="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          :src="cardScr"
          alt="Card-image"
        />
      </div>
      <div
        class="w-full p-0 lg:p-4 2xl:p-6 py-0 lg:py-2 2xl:py-4 flex flex-col justify-center gap-3"
      >
        <p
          class="font-size-3 2xl:text-4xl font-medium line-clamp-none md:line-clamp-2 leading-6 2xl:leading-8"
        >
          {{ cardName }}
        </p>
        <span class="font-medium text-sm 2xl:text-xl">
          {{ calendar }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const cardProps = defineProps({
  cardScr: {
    type: String,
    required: false,
  },
  cardName: { type: String, required: true },
  calendar: { type: String, required: true },
  rountingLink: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style scoped></style>
