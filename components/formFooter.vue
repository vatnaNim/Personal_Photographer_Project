<template>
  <div
    class="w-full flex flex-col items-center gap-0 py-7 md:py-12 bg-[#1D2128] text-[#ffffff]"
  >
    <div
      class="w-[90%] flex flex-col-reverse sm:flex-row justify-center items-start sm:items-center gap-5 sm:gap-0"
    >
      <div class="w-2/4 flex border-0 lg:border-r-2 border-gray-400">
        <div
          class="w-full m-auto grid grid-rows-1 md:grid-cols-2 gap-4 md:gap-12"
        >
          <NuxtLink :to="social.link" v-for="social in socialDb">
            <button
              class="group flex items-center p-2 transition duration-300 ease-in-out"
            >
              <img
                class="w-6 h-6 transition duration-300 ease-in-out group-hover:filter group-hover:brightness-50 group-hover:invert"
                :src="social.icon"
                alt="scr_icon"
              />
              <span
                class="ml-2 text-md tracking-wider transition duration-300 ease-in-out group-hover:text-gray-500"
                >{{ social.buttonName }}</span
              >
            </button>
          </NuxtLink>
        </div>
      </div>
      <div
        class="w-2/4 flex flex-col justify-center items-start sm:items-center gap-4"
      >
        <div class="grid grid-rows-2 gap-1 w-2/4" v-for="mail in mailDb">
          <span class="text-sm">{{ mail.label }}</span>
          <span class="text-lg tracking-wide">{{ mail.value }}</span>
        </div>
      </div>
    </div>

    <span class="mt-4 sm:mt-16 font-size-1 text-gray-400">{{ privacyDb }}</span>
  </div>
</template>

<script setup lang="ts">
import {
  dribbleIcons,
  EnvelopIcons,
  linkInLogo,
  instagramIcons,
} from "~/static/icons";

const socialDb = [
  {
    icon: instagramIcons,
    buttonName: "instagram",
    link: "",
  },
  {
    icon: linkInLogo,
    buttonName: "Linkedin",
    link: "",
  },
  {
    icon: dribbleIcons,
    buttonName: "Dribble",
    link: "",
  },
  {
    icon: EnvelopIcons,
    buttonName: "My email",
    link: "",
  },
];

const mailDb = [
  {
    label: "Email",
    value: "vatnagz@gmail.com",
  },
  {
    label: "Skype",
    value: "live:vatna.com",
  },
];
const privacyDb = "•© 2022 Brand, Inc.PrivacyTermsTerms••";
</script>
