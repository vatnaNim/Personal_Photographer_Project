<template>
  <div class="relative group" :class="`text-[${buttonColor}]`">
    <button class="flex items-center gap-4 pr-5 py-1 fs-6 sm:fs-5">
      {{ buttonName }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="23px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
      >
        <path
          d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
        />
      </svg>
    </button>
    <span
      :class="`bg-[${buttonColor}] absolute bottom-0 left-0 w-full h-[2.5px] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100`"
    ></span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  buttonName: {
    type: String,
    required: true,
    default: "",
  },
  buttonColor: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<style scoped></style>
