<template>
  <div class="w-[90%] h-auto lg:h-[100vh] mx-auto">
    <div
      class="w-full h-screen flex flex-col justify-center items-center gap-4"
      v-if="isLoading"
    >
      <UiLoaderSpiningIcon />
      <span class="fs-3 font-medium">Loading...</span>
    </div>
    <div
      v-if="indexData"
      v-for="(contactDb, index) in indexData[0].contactDb"
      :key="index"
      class="w-full h-full flex flex-col-reverse lg:flex-row my-5 gap-4"
    >
      <form
        class="w-full lg:w-2/4 py-0 sm:py-8 p-0 lg:pl-4 h-full flex flex-col justify-start 2xl:justify-center gap-5"
        @submit.prevent="handleSubmit"
      >
        <h2
          class="fs-2 font-semibold 2xl:text-3xl leading-0 2xl:leading-[4rem]"
          v-html="contactDb.title"
        ></h2>

        <div class="flex flex-col gap-1">
          <label class="font-semibold tracking-wide text-base" for="email">
            {{ contactDb.email.text }}
          </label>
          <input
            class="px-3 sm:px-5 py-2 sm:py-3 2xl:px-6 2xl:py-5 rounded-md border-[#9595a0] border focus:outline-none focus:ring-1 focus:ring-[#ff9900] focus:border-transparent text-[#ff9900] placeholder-[#Bcc1ca] text-[calc(1rem + 0.3vw)] font-extralight tracking-wider"
            type="email"
            v-model="email"
            id="email"
            :placeholder="contactDb.email.phValue"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label class="font-semibold tracking-wide text-base" for="message">
            {{ contactDb.message.text }}
          </label>
          <textarea
            id="message"
            v-model="message"
            rows="5"
            :placeholder="contactDb.message.phMessage"
            class="mt-1 w-full px-3 sm:px-4 2xl:px-6 py-4 2xl:py-8 border border-[#9595a0] rounded-md focus:outline-none focus:ring-1 focus:ring-[#ff9900] focus:border-transparent text-[#ff9900] placeholder-[#Bcc1ca] text-[calc(1rem + 0.3vw)] font-extralight tracking-wider"
          ></textarea>
        </div>

        <UiButtonsSubmit
          class="text-[calc(1rem + 0.3vw)]"
          button-name="Submit"
        />
      </form>

      <div
        class="w-full lg:w-2/4 h-96 sm:h-screen relative flex justify-center lg:justify-end items-start"
      >
        <img
          class="absolute w-28 md:w-36 top-[40%] lg:left-12 animate-rotate"
          :src="contactLogo"
          alt="contact_logo"
        />
        <div class="w-full lg:w-[80%] h-full flex">
          <img
            class="rounded-2xl lg:rounded-[300px_300px_0_0] object-cover w-full h-full"
            :src="contactDb.bgScr"
            alt="contact_Image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "~/store/getFetchingDb";
import { contactLogo } from "~/static/imageHandler";

const { indexData, fetchAllData } = useStore();

onMounted(async () => {
  await fetchAllData();
});

const isLoading = ref<boolean>(true);
onMounted(async () => {
  await fetchAllData();
  isLoading.value = false;
});

const email = ref("");
const message = ref("");

const handleSubmit = () => {
  console.log({
    email: email.value,
    message: message.value,
  });
};
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
