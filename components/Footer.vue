<template>
  <div class="w-full md:h-[70vh] h-auto bg-[#1D2128] m-auto text-white">
    <div
      class="max-w-[90%] w-full py-10 h-full mx-auto grid grid-row-2 md:grid-cols-2 gap-12 md:gap-4"
    >
      <div class="flex flex-col justify-between gap-8">
        <h2 class="fs-2 font-semibold" v-html="footerData.title"></h2>
        <div class="md:space-y-4 space-y-10">
          <div class="flex gap-6">
            <ul v-for="(icon, index) in footerData.socialMedia">
              <li>
                <NuxtLink :to="icon.iconLink"
                  ><img
                    class="w-6 hover:filter hover:brightness-50 hover:invert"
                    :src="icon.icon"
                    alt="Footer_icons"
                /></NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex gap-4 font-size-2">
            <ul class="flex flex-col lg:flex-row gap-4">
              <li
                class="relative group"
                v-for="(list, index) in footerData.footerList"
                :key="index"
              >
                <NuxtLink :to="list.serviceTermsLink" class="relative z-10">
                  {{ list.serviceTerms }}
                </NuxtLink>
                <span
                  class="absolute bottom-0 left-0 w-full h-[2px] bg-current scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100"
                ></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <form
        class="space-y-6 flex flex-col justify-start 2xl:justify-center"
        @submit.prevent="handleSubmit"
      >
        <div class="relative">
          <input
            type="text"
            id="Email"
            v-model="email"
            placeholder="Your email address"
            class="form-control w-full px-4 2xl:py-6 pt-3 pb-3 pr-10 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-[#ff9900] focus:border-transparent bg-[#1D2128] text-[#ff9900] placeholder-[#Bcc1ca] font-size-1 font-extralight tracking-wider"
            required
          />
          <label
            for="Email"
            class="form-label absolute 2xl:-top-4 -top-2 left-2 bg-[#1D2128] px-1 text-white font-semibold2 2xl:text-2xl text-sm"
          >
            Email
          </label>
        </div>

        <div class="relative">
          <label
            for="message"
            class="form-label absolute 2xl:text-2xl text-sm 2xl:-top-3 -top-2 left-2 bg-[#1D2128] px-1 text-white font-semibold"
          >
            Input your message
          </label>
          <textarea
            v-model="message"
            id="message"
            rows="5"
            placeholder="Describe your project"
            required
            class="mt-1 w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-[#ff9900] focus:border-transparent bg-[#1D2128] text-[#ff9900] placeholder-[#Bcc1ca] font-size-1 font-extralight tracking-wider"
          ></textarea>
        </div>

        <UiButtonsSubmitNoIcon button-name="Submit" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  dribbleIcons,
  EnvelopIcons,
  linkInLogo,
  instagramIcons,
} from "~/static/icons";

const footerData = {
  title: "Say hello and let's <br/> work together !",
  socialMedia: [
    {
      icon: instagramIcons,
      iconLink: "",
    },
    {
      icon: dribbleIcons,
      iconLink: "",
    },
    {
      icon: linkInLogo,
      iconLink: "",
    },
    {
      icon: EnvelopIcons,
      iconLink: "",
    },
  ],
  footerList: [
    {
      serviceTerms: "© 2022 Brand, Inc.",
      serviceTermsLink: "",
    },
    {
      serviceTerms: "• Privacy",
      serviceTermsLink: "",
    },
    {
      serviceTerms: "• Terms",
      serviceTermsLink: "",
    },
    {
      serviceTerms: "• Sitemap",
      serviceTermsLink: "",
    },
  ],
};

const email = ref("");
const message = ref("");

const handleSubmit = () => {
  console.log({
    email: email.value,
    message: message.value,
  });
};
</script>
