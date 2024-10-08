<template>
  <div class="w-full h-full grid grid-rows-1 gap-4 md:grid-cols-2 mt-2 mb-16">
    <div
      class="w-full h-full flex flex-col justify-start md:justify-center items-start gap-8 md:gap-10"
    >
      <h2
        class="fs-1 font-semibold leading-[2.8rem] md:leading-[3.5rem]"
        v-html="title"
      />
      <p class="fs-6 sm:fs-5 2xl:fs-4 text-start">{{ bio }}</p>
      <NuxtLink :to="buttonLink">
        <UiButtonsToRight :buttonName="buttonName" :buttonColor="buttonColor" />
      </NuxtLink>
    </div>

    <div class="relative flex justify-center items-center w-full h-full">
      <img
        class="w-full md:w-[403px] h-full object-cover"
        :src="imageScr"
        alt="profile"
      />
      <div class="w-[150px] md:w-[160px] absolute md:left-12 animate-rotate">
        <img
          class="w-full h-[90%] lg:h-full object-cover"
          :src="logoProject"
          alt="Logo-Anamation"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  bio: String,
  buttonName: String,
  buttonColor: String,
  buttonLink: {
    type: String,
    required: false,
    default: "",
  },
  logoProject: {
    type: String,
    required: false,
    default: "",
  },
  imageScr: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style scoped>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-rotate {
  animation: rotate 10s linear infinite;
}
</style>
