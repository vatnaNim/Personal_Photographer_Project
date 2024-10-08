<!-- components/DropdownMenu.vue -->
<template>
  <div
    v-show="isOpen"
    class="fixed top-0 left-0 w-full h-full z-[9999] overflow-hidden"
    :class="{
      'opacity-0 translate-x-full': !isOpen,
      'opacity-100 translate-x-0': isOpen,
    }"
    @transitionend="onTransitionEnd"
  >
    <div
      class="w-full h-full flex transition-transform duration-[3000ms] ease-in-out"
    >
      <div
        class="w-1/4 h-full backdrop-blur-sm cursor-pointer"
        @click="$emit('close')"
      ></div>

      <div class="w-3/4 h-full bg-white p-4 space-y-8">
        <div class="flex justify-end">
          <button
            @click="$emit('close')"
            class="px-2.5 py-2.5 rounded-full text-black hover:text-[#FF9900] hover:bg-gray-300 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
              />
            </svg>
          </button>
        </div>

        <ul class="flex flex-col gap-2">
          <li
            v-for="list in navBarLists"
            :key="list.listName"
            class="fs-5 font-semibold p-2"
          >
            <NuxtLink
              :to="list.listLink"
              activeClass="text-[#FF9900]"
              class="hover:text-[#FF9900] duration-300"
            >
              {{ list.listName }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from "vue";

const props = defineProps<{
  isOpen: boolean;
  navBarLists: Array<{ listName: string; listLink: string }>;
}>();

const isVisible = ref(props.isOpen);

watch(
  () => props.isOpen,
  (val) => {
    isVisible.value = val;
    document.body.style.overflow = val ? "hidden" : "auto";
  }
);

onBeforeUnmount(() => {
  document.body.style.overflow = "auto";
});

const onTransitionEnd = () => {
  if (!props.isOpen) {
    isVisible.value = false;
  }
};
</script>

<style scoped>
.fixed {
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 3s ease-in-out, transform 3s ease-in-out;
}
.opacity-100 {
  opacity: 1;
}
.translate-x-0 {
  transform: translateX(0);
}
</style>
