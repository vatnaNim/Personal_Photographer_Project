<template>
  <div>
    <button
      class="bg-[#E34d73] flex justify-center items-center gap-2 px-6 sm:px-6 py-2 sm:py-2.5 font-size-2 text-white rounded-md hover:bg-pink-600 duration-300"
    >
      {{ buttonName }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        class="w-6 h-6"
      >
        <path
          d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  buttonName: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style scoped></style>
