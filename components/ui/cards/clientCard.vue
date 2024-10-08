<template>
  <div
    class="w-full h-full lg:h-96 2xl:h-[600px] grid grid-rows-1 lg:grid-cols-2 rounded-2xl bg-[#EDFFD8]"
  >
    <div class="flex justify-center items-end pt-8 overflow-hidden relative">
      <div
        :style="isSecond ? { backgroundColor: 'white' } : {}"
        class="w-96 h-96 2xl:w-[500px] 2xl:h-[600px] flex justify-center rounded-xl rotate-45 absolute -bottom-36 2xl:-bottom-44"
      ></div>
      <img
        class="w-[250px] h-[250px] 2xl:w-[350px] 2xl:h-[350px] rotate-0"
        :src="userProfile"
        alt="users-profile"
      />
    </div>
    <div class="w-full p-5 md:p-12 space-y-4 2xl:p-16">
      <h3 class="text-[#e34d73] fs-3 font-semibold 2xl:text-4xl">
        {{ texttimonial }}
      </h3>
      <p class="font-size-3 font-semibold 2xl:text-2xl">
        {{ feedBack }}
      </p>
      <p class="text-sm 2xl:text-lg">{{ userName }} - {{ userCompeny }}</p>
      <button
        :style="isSecond ? { display: 'none' } : {}"
        class="flex text-[calc(0.80rem_+_0.15vw)] 2xl:text-xl gap-1 items-center text-[#ff003d] border font-semibold border-[#ff003d] rounded-md px-4 py-1.5 hover:bg-[#ff003d] hover:text-white duration-300"
      >
        {{ buttonName?.text }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="22px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path
            d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: String,
  userName: String,
  userCompeny: String,
  feedBack: String,
  userProfile: String,
  buttonName: Object as () => {
    text: string;
    style: string;
  },
  rountingLink: {
    type: String,
    required: false,
    default: "/",
  },
  texttimonial: String,
  isSecond: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped></style>
