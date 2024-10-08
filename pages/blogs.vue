<template>
  <div class="w-[90%] mx-auto space-y-4 md:space-y-10 px-2 sm:px-5">
    <div
      class="w-full h-screen flex flex-col justify-center items-center gap-4"
      v-if="isLoading"
    >
      <UiLoaderSpiningIcon />
      <span class="fs-3 font-medium">Loading...</span>
    </div>
    <div
      v-if="cardData && cardData.length > 0"
      v-for="blog in cardData"
      :key="blog.cardId"
    >
      <div
        v-if="blog.cardId === 17"
        class="flex flex-col-reverse md:flex-row gap-4"
      >
        <div class="space-y-3 text-justify w-full md:w-2/4 h-full">
          <h2 class="fs-1 font-semibold">{{ blog.title }}</h2>
          <p class="font-size-2 break-words hyphens-auto font-medium">
            {{ blog.definition }}
          </p>
        </div>
        <div class="flex justify-center items-center w-full md:w-2/4">
          <div class="sm:w-[198px] sm:h-[198px] h-[130px] w-[130px]">
            <img
              class="w-full h-full object-fill animate-rotate"
              :src="blog.cardScr"
              alt="image_logo"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full h-auto lg:h-[70vh]"
      v-for="cardSpan in cardData?.filter((props) => props.cardId === 1)"
      :key="cardSpan.cardId"
    >
      <div
        class="w-full h-full grid grid-rows-1 lg:grid-cols-[60%_40%] bg-[#f4f4f4] rounded-xl overflow-hidden"
      >
        <div class="m-auto w-full h-full">
          <img
            class="w-full h-full object-fill"
            :src="cardSpan.cardScr"
            alt="heroSection_image"
          />
        </div>
        <div class="w-full h-full flex flex-col px-4 py-2 sm:p-5 lg:p-12 gap-3">
          <h3
            class="font-semibold text-lg sm:text-[calc(30px_+_0.3vw)] leading-6 sm:leading-[calc(1.8vw_+_2rem)]"
          >
            {{ cardSpan.title }}
          </h3>
          <span class="text-sm">{{ cardSpan.history }}</span>
        </div>
      </div>
    </div>

    <div
      class="w-full h-auto grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 lg:gap-x-6 lg:gap-y-8"
    >
      <UiCardsSleekViewCard
        class="mx-auto"
        v-for="sleekView in cardData?.slice(7, 16)"
        :key="sleekView.cardId"
        :image="sleekView.cardScr"
        :history="sleekView.history"
        :title="sleekView.title"
        rounting-link="/contact"
      />
    </div>

    <div class="h-16 md:h-20 flex justify-center items-center">
      <NuxtLink to="/contact">
        <button
          class="flex items-center gap-1 fs-5 border border-[#ff003d] py-0.5 sm:py-1 px-8 sm:px-12 text-[#ff003d] hover:bg-[#ff003d] hover:text-white duration-300 rounded-md font-size-2"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            class="w-5 h-5 fill-current"
          >
            <path
              d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"
            />
          </svg>
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "~/store/getFetchingDb";

const { cardData, fetchAllData } = useStore();

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
