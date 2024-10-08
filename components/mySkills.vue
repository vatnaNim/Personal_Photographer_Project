<template>
  <div class="w-full grid grid-rows-1 md:grid-cols-3 gap-10 lg:gap-24">
    <ul v-for="(column, index) in mySkill" :key="index" class="space-y-10">
      <li
        v-for="(skill, idex) in column"
        :key="idex"
        class="relative group border-b-4 rounded-sm pb-1 font-size-3 2xl:fs-4 font-medium"
      >
        <NuxtLink :to="skill.rountingLink">{{ skill.text }}</NuxtLink>
        <span
          class="absolute -bottom-1 left-0 w-full h-[5px] rounder-sm bg-[#ff9900] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"
        ></span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const mySkill = [
  [
    { text: "Photography", rountingLink: "/" },
    { text: "Brand Identity", rountingLink: "/" },
  ],
  [
    { text: "Graphics Design", rountingLink: "/" },
    { text: "Copy Writing", rountingLink: "/" },
  ],
  [
    { text: "Creativity", rountingLink: "/" },
    { text: "Team Working", rountingLink: "/" },
  ],
];
</script>

<style scoped></style>
