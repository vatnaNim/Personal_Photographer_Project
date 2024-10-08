<template>
  <div class="w-[90%] mx-auto">
    <div
      class="w-full h-screen flex flex-col justify-center items-center gap-4"
      v-if="isLoading"
    >
      <UiLoaderSpiningIcon />
      <span class="fs-3 font-medium">Loading...</span>
    </div>
    <div
      class="w-full h-auto flex flex-col-reverse justify-center items-center md:flex-row p-4 md:p-12 gap-10 md:gap-4"
      v-if="indexData"
      v-for="(value, index) in indexData[0].projectDb"
    >
      <div class="space-y-3 w-full text-center md:text-start">
        <h2 class="fs-2 font-semibold">{{ value.projectTitle }}</h2>
        <p
          class="2xl:text-4xl 2xl:leading-snug font-size-2 font-medium text-justify break-words hyphens-auto"
        >
          {{ value.definition }}
        </p>
      </div>
      <div class="flex justify-center items-center w-1/2">
        <img
          class="2xl:w-[275px] w-[198px] object-fill animate-rotate"
          :src="logoProfile"
          alt="project_logo"
        />
      </div>
    </div>
    <div class="w-full flex flex-col justify-center items-center gap-4 my-10">
      <div
        class="w-full"
        v-if="featureData"
        v-for="dbCard in showAllCards ? featureData : featureData.slice(0, 5)"
        :key="dbCard.FeatureId"
      >
        <UiCardsContainerCard
          :title="dbCard.title"
          :brandName="dbCard.brandName"
          :details="dbCard.details"
          rounting-link="/work"
          :buttonName="dbCard.buttonName"
          :containerImages="dbCard.conntainerImages"
          :mainBgColor="dbCard.mainBgColor"
        />
      </div>
      <div class="mt-6">
        <button
          @click="toggleShowAllCards"
          class="border font-size-2 px-6 md:px-12 py-1.5 sm:py-2 rounded-lg font-medium border-[#e34d73] text-[#e34d73] hover:bg-[#e34d73] hover:text-white duration-300"
        >
          {{ showAllCards ? "Show Less" : "View More" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { logoProfile } from "~/static/imageHandler";
import { onMounted, ref } from "vue";
import { useStore } from "~/store/getFetchingDb";

const showAllCards = ref<boolean>(false);

const toggleShowAllCards = (): void => {
  showAllCards.value = !showAllCards.value;
};

const { featureData, indexData, fetchAllData } = useStore();

onMounted(async () => {
  await fetchAllData();
});
const isLoading = ref<boolean>(true);
onMounted(async () => {
  await fetchAllData();
  isLoading.value = false;
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
