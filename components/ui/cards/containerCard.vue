<template>
  <div
    :style="{ backgroundColor: mainBgColor }"
    class="w-full h-auto grid lg:grid-cols-2 grid-row-1 px-4 2xl:px-12 sm:px-8 2xl:py-12 py-5 gap-4 rounded-xl"
  >
    <div class="w-full flex flex-col justify-center items-start gap-4">
      <span
        class="text-sm 2xl:text-2xl"
        :style="{ color: brandName.textColor }"
        >{{ brandName.text }}</span
      >
      <span class="2xl:text-4xl fs-3 font-semibold">{{ title }}</span>
      <p class="2xl:text-3xl font-size-2 2xl:leading-normal font-medium">
        {{ details }}
      </p>
      <NuxtLink :to="rountingLink">
        <UiButtonsToLeft
          :buttonName="buttonName?.text"
          :buttonColor="buttonName?.textColor"
        />
      </NuxtLink>
    </div>

    <div class="max-w-full h-full">
      <div
        class="flex flex-col sm:flex-row justify-center items-center py-2 sm:items-end gap-4"
      >
        <div
          v-for="(imageGroup, index) in containerImages"
          :key="index"
          class="flex flex-col sm:flex-row justify-center items-center sm:gap-4"
        >
          <img
            v-if="imageGroup.containerImageOne"
            :src="imageGroup.containerImageOne"
            class="w-[300px] h-[400px] object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            alt="Image_One"
          />
          <img
            v-if="imageGroup.containerImageTwo"
            :src="imageGroup.containerImageTwo"
            class="w-[300px] h-[400px] object-cover rounded-lg mb-0 sm:mb-[5rem] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            alt="Image_Two"
          />
          <img
            v-if="imageGroup.containerImageThree"
            :src="imageGroup.containerImageThree"
            class="w-[300px] h-[400px] object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            alt="Image_Three"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  brandName: {
    type: Object as () => {
      text: string;
      textColor: string;
    },
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  rountingLink: {
    type: String,
    required: false,
    default: "",
  },
  buttonName: {
    type: Object as () => {
      text: string;
      textColor: string;
    },
  },
  containerImages: {
    type: Array as () => Array<{
      containerImageOne?: string;
      containerImageTwo?: string;
      containerImageThree?: string;
    }>,
    required: true,
  },
  mainBgColor: {
    type: String,
    required: true,
    default: "",
  },
});
</script>
