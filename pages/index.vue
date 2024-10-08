<template>
  <div class="w-[90%] h-auto mx-auto">
    <div
      class="w-full h-screen flex flex-col justify-center items-center gap-4"
      v-if="isLoading"
    >
      <UiLoaderSpiningIcon />
      <span class="fs-3 font-medium">Loading...</span>
    </div>
    <div>
      <HeroSection
        v-if="indexData"
        v-for="(section, index) in indexData[0]?.heroSection"
        :key="index"
        :title="section.title"
        :button-color="section.buttonColor"
        :bio="section.bio"
        :button-name="section.buttonName"
        :logo-project="logoProfile"
        :image-scr="homeProfile"
        button-link="/aBoutMe"
      />

      <div class="flex flex-col gap-8 items-center mt-28 mb-12">
        <UiCardsContainerCard
          v-if="featureData"
          v-for="dbCard in featureData.slice(0, 2)"
          :title="dbCard.title"
          :brandName="dbCard.brandName"
          :details="dbCard.details"
          rounting-link="/Project"
          :buttonName="dbCard.buttonName"
          :containerImages="dbCard.conntainerImages"
          :mainBgColor="dbCard.mainBgColor"
        />
        <NuxtLink to="/project">
          <button
            class="border px-6 2xl:px-12 2xl:py-4 py-1 border-[#ff003d] text-[#ff003d] rounded-md hover:bg-[#ff003d] hover:text-white duration-300 2xl:fs-5 text-[calc(0.8rem_+_0.1vw)]"
          >
            Browse All Projects
          </button>
        </NuxtLink>
      </div>

      <div class="w-full flex flex-col gap-12 p-4 sm:p-8">
        <h2 class="text-[calc(1.8rem_+_1.2vw)] font-semibold">My Skill</h2>
        <MySkills />
      </div>

      <div class="w-full flex flex-col gap-4 py-4 px-0 md:px-8">
        <UiCardsClientCard
          v-if="clientData"
          v-for="(user, index) in clientData.filter(
            (props) => props.clientId === 1
          )"
          :key="user.clientId"
          :user-name="user.clientName"
          :userCompeny="user.companyName"
          :userProfile="user.clientProfile"
          :texttimonial="user.testimonials"
          :feed-back="user.feedBack"
          :button-name="user.buttonName"
          rounting-link="/"
          :is-second="index === 1"
        />
      </div>

      <div class="w-full my-10">
        <h2 class="text-[calc(1.8rem_+_1.2vw)] font-semibold">Blogs</h2>
        <div
          class="grid grid-rows-1 md:grid-cols-3 gap-4 sm:px-2 md:px-4 lg:px-8 pt-8"
        >
          <UiCardsFeatureCard
            v-if="cardData"
            v-for="cardValue in cardData.slice(0, 3)"
            :card-scr="cardValue.cardScr"
            :card-name="cardValue.title"
            :calendar="cardValue.history"
            rounting-link="/blogs"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useStore } from "~/store/getFetchingDb";
import { homeProfile, logoProfile } from "~/static/imageHandler";

const { featureData, cardData, clientData, indexData, fetchAllData } =
  useStore();
const isLoading = ref<boolean>(true);
onMounted(async () => {
  await fetchAllData();
  isLoading.value = false;
});
</script>

<style scoped></style>
