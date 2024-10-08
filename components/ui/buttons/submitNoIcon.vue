<template>
  <div>
    <button
      class="py-1.5 md:py-2 px-5 md:px-10 rounded-md bg-[#e34d73] hover:bg-pink-800 duration-300 font-size-2 tracking-wide"
    >
      {{ buttonName }}
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
