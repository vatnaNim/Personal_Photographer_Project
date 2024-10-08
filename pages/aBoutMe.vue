<template>
  <div class="w-[90%] mx-auto">
    <div
      class="w-full h-screen flex flex-col justify-center items-center gap-4"
      v-if="isLoading"
    >
      <UiLoaderSpiningIcon />
      <span class="fs-3 font-medium">Loading...</span>
    </div>
    <HeroSection
      v-if="indexData"
      v-for="(section, index) in indexData[0].heroSection"
      :key="index"
      :title="section.title"
      :button-color="section.buttonColor"
      :bio="section.bio"
      :button-name="section.buttonName"
      :logo-project="logoProfile"
      :image-scr="homeProfile"
      button-link="/aBoutMe"
    />
    <div
      class="w-full grid grid-rows-1 lg:grid-cols-2 gap-0 lg:gap-6 my-20"
      v-for="work in workData"
      :key="work.id"
    >
      <div class="py-8 space-y-4 text-[#323842]">
        <h2 class="fs-2 font-semibold 2xl:fs-1">
          {{ work.title }}
        </h2>
        <p class="font-size-3 2xl:fs-4">
          {{ work.definition }}
        </p>
      </div>
      <div class="flex flex-col gap-2 w-full">
        <div v-for="exp in work.experiences" :key="exp.expId">
          <UiCardsWorkCard
            :exp-id="exp.expId"
            :company-name="exp.companyName"
            :scr="exp.scr"
            :position="exp.title"
            :history="exp.Timeless"
            :details="exp.definition"
          />
        </div>
      </div>
    </div>

    <div class="w-full" v-for="hobby in workData">
      <div class="w-full grid grid-rows-1 lg:grid-cols-2 gap-6 my-6">
        <div class="w-full pt-6 flex flex-col gap-3">
          <h2 class="fs-2 font-semibold 2xl:fs-2">
            {{ hobby.hobbyDb[0].title }}
          </h2>
          <div class="flex h-full gap-6 w-full">
            <div
              class="h-full w-1/2 lg:w-auto overflow-hidden flex justify-center items-center"
            >
              <img
                class="h-full w-full object-cover bg-no-repeat bg-center rounded-lg transition-transform duration-300 hover:scale-105"
                :src="hobby.hobbyDb[0].scr1"
                alt="hobby_image1"
              />
            </div>

            <div
              class="h-full w-1/2 lg:w-auto overflow-hidden flex justify-center items-center rounded-lg"
            >
              <img
                class="h-full w-full object-cover bg-no-repeat bg-center rounded-lg transition-transform duration-300 hover:scale-105"
                :src="hobby.hobbyDb[0].scr2"
                alt="hobby_image2"
              />
            </div>
          </div>
        </div>
        <div class="w-full h-auto flex flex-col gap-3">
          <p
            class="font-size-2 text-start sm:text-justify text-[#323842] 2xl:fs-4"
          >
            {{ hobby.hobbyDb[0].definition }}
          </p>
          <div class="w-full space-y-6">
            <div
              class="w-full h-64 md:h-80 lg:h-96 overflow-hidden flex justify-center items-center rounded-lg shadow-lg"
            >
              <img
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                :src="hobby.hobbyDb[0].scr3"
                alt="hobby_image3"
              />
            </div>
            <div
              class="w-full h-64 md:h-80 lg:h-96 overflow-hidden flex justify-center items-center rounded-lg shadow-lg"
            >
              <img
                class="w-full h-full object-cover bg-no-repeat bg-center transition-transform duration-300 hover:scale-105"
                :src="hobby.hobbyDb[0].scr4"
                alt="hobby_image4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { homeProfile, logoProfile } from "~/static/imageHandler";
import { onMounted } from "vue";
import { useStore } from "~/store/getFetchingDb";

const { indexData, fetchAllData, workData } = useStore();

onMounted(async () => {
  await fetchAllData();
});

const isLoading = ref<boolean>(true);
onMounted(async () => {
  await fetchAllData();
  isLoading.value = false;
});
</script>

<style scoped></style>
