<template>
  <div class="w-full mx-auto">
    <div
      class="w-full h-screen flex flex-col justify-center items-center gap-4"
      v-if="isLoading"
    >
      <UiLoaderSpiningIcon />
      <span class="fs-3 font-medium">Loading...</span>
    </div>
    <div
      class="w-[90%] h-auto mx-auto flex flex-col-reverse md:flex-row gap-4 py-2 md:py-8 px-4 2xl:gap-6 2xl:py-10 2xl:px-6"
    >
      <div
        class="md:w-2/4 w-full h-full p-0 md:p-4 2xl:p-6"
        v-if="featureData && featureData.length > 0"
        v-for="feature in featureData.filter((props) => props.FeatureId === 2)"
        :key="feature.FeatureId"
      >
        <div class="w-full space-y-4">
          <span :style="`color:${feature.brandName.textColor};`">{{
            feature.brandName.text
          }}</span>
          <h2 class="fs-1 font-medium 2xl:text-4xl">{{ feature.title }}</h2>
          <p
            class="font-size-2 leading-relaxed md:text-justify text-left font-medium break-words hyphens-auto 2xl:fs-4"
          >
            {{ feature.details }}
          </p>
        </div>
      </div>
      <div
        class="md:w-2/4 w-full flex flex-col justify-center items-center md:items-end px-0 py-2 md:p-4 2xl:p-6"
        v-if="cardData && cardData.length > 0"
        v-for="card in cardData.filter((props) => props.cardId === 1)"
        :key="card.cardId"
      >
        <div
          class="flex flex-row md:flex-col gap-8 md:gap-3 2xl:gap-6 text-nowrap"
        >
          <span
            ><h5 class="font-semibold text-lg 2xl:text-2xl">Date</h5>
            {{ card.history }}</span
          >
          <span
            ><h5 class="font-semibold text-lg 2xl:text-2xl">client Name</h5>
            John Doe</span
          >
        </div>
      </div>
    </div>

    <div
      v-if="featureData && featureData.length > 0"
      v-for="feature in featureData.filter((props) => props.FeatureId === 2)"
      :key="feature.FeatureId"
      class="w-[95%] mx-auto flex flex-col bg-white 2xl:w-[85%]"
    >
      <div
        class="w-full h-[60vh] md:h-[75vh] lg:h-[80vh] my-8 overflow-hidden rounded-xl shadow-xl 2xl:h-[90vh] 2xl:my-12"
      >
        <img
          class="h-full w-full object-cover"
          :src="feature.conntainerImages[0].containerImageOne"
          alt="container-img(1)"
        />
      </div>

      <div
        class="w-[90%] md:w-[70%] lg:w-[50%] mx-auto p-3 md:p-8 space-y-4 text-start md:text-justify 2xl:w-[45%] 2xl:p-10 2xl:space-y-6"
      >
        <h3 class="fs-3 font-semibold 2xl:text-3xl">
          {{ feature.addingInformaton.title }}
        </h3>
        <p
          class="font-size-3 break-words hyphens-auto font-medium leading-relaxed 2xl:text-lg"
        >
          {{ feature.addingInformaton.definition }}
        </p>
      </div>
    </div>

    <div
      class="w-[95%] mx-auto my-8 2xl:w-[85%] 2xl:my-12"
      v-if="featureData && featureData.length > 0"
      v-for="feature in featureData.filter((props) => props.FeatureId === 2)"
      :key="feature.FeatureId"
    >
      <div
        class="w-full grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 2xl:gap-6"
      >
        <div class="pr-0 md:pr-4 lg:pr-12 2xl:pr-16">
          <img
            class="w-full h-[325px] md:h-full object-cover rounded-xl shadow-lg 2xl:h-[450px]"
            :src="feature.addingInformaton.other.scr"
            alt="Container-image(2)"
          />
        </div>
        <div>
          <img
            class="w-full h-[325px] md:h-full object-cover rounded-xl shadow-lg 2xl:h-[450px]"
            :src="feature.conntainerImages[1].containerImageTwo"
            alt="Container-image-(3)"
          />
        </div>
      </div>

      <div
        class="w-full flex justify-center items-center py-5 sm:py-12 2xl:py-16"
      >
        <p
          class="w-full md:w-[60%] px-6 font-size-3 font-medium leading-relaxed 2xl:text-lg 2xl:px-8"
        >
          {{ feature.addingInformaton.other.comm }}
        </p>
      </div>
    </div>

    <div class="w-[80%] mx-auto mb-16 2xl:w-[70%] 2xl:mb-20">
      <UiCardsClientCard
        v-if="clientData"
        v-for="(user, index) in clientData.filter((p) => p.clientId === 2)"
        :key="user.clientId"
        :user-name="user.clientName"
        :userCompeny="user.companyName"
        :userProfile="user.clientProfile"
        :texttimonial="user.testimonials"
        :feed-back="user.feedBack"
        :button-name="user.buttonName"
        rounting-link="/"
        :is-second="index === 0"
      />
    </div>

    <div class="w-[90%] mx-auto space-y-8 2xl:w-[85%]">
      <div
        class="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center 2xl:gap-6"
      >
        <h2 class="fs-2 font-semibold 2xl:text-3xl">Other projects</h2>
        <NuxtLink to="/blogs">
          <UiButtonsToRight
            class="fs-5 2xl:text-xl"
            buttonName="Explore"
            buttonColor="#e34d73"
          />
        </NuxtLink>
      </div>
      <div class="max-w-[90%] mx-auto 2xl:max-w-[85%]">
        <div class="grid grid-rows-1 sm:grid-cols-3 gap-4 my-5 2xl:gap-6">
          <UiCardsProjectCard
            v-for="item in cardData?.slice(4, 7)"
            :key="item.cardId"
            :card-scr="item.cardScr"
            :title="item.title"
            :rounting-link="item.rountingLink"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "~/store/getFetchingDb";

const { featureData, cardData, clientData, fetchAllData } = useStore();

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
