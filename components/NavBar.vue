<template>
  <div class="w-full relative">
    <div
      class="w-[90%] h-[10vh] mx-auto flex flex-wrap justify-between items-center"
    >
      <NuxtLink to="/">
        <h1 class="fs-1 font-semibold">Nim Vatna</h1>
      </NuxtLink>

      <button
        @click="isMenuOpen = !isMenuOpen"
        class="text-black duration-300 hover:text-[#ff9900] relative group px-3 py-2 md:hidden flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="currentColor"
          class="w-7 h-7"
        >
          <path
            d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
          />
        </svg>
        <span
          class="bg-[#ff9900] absolute bottom-0 left-0 w-full h-[2.5px] scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100"
        ></span>
      </button>

      <div class="md:flex hidden lg:gap-10 gap-5">
        <ul
          v-for="list in navBarLists"
          class="2xl:fs-3 fs-5"
          :key="list.listName"
        >
          <li class="hover:text-gray-700 duration-300">
            <NuxtLink :to="list.listLink" active-class="text-[#FF9900]">{{
              list.listName
            }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <DropDown
      :isOpen="isMenuOpen"
      @close="isMenuOpen = false"
      :navBarLists="navBarLists"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface InavBarList {
  listName: string;
  listLink: string;
}

const navBarLists: InavBarList[] = [
  { listName: "Home", listLink: "/" },
  { listName: "Project", listLink: "/project" },
  { listName: "Work", listLink: "/work" },
  { listName: "About me", listLink: "/AboutMe" },
  { listName: "Blog", listLink: "/blogs" },
  { listName: "Contact", listLink: "/Contact" },
];

const isMenuOpen = ref(false);
</script>
