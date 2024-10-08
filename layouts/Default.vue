<template>
  <div class="poppins-regular w-full">
    <NavBar />
    <slot />
    <Footer v-if="$route.name !== 'contact'" />
    <FormFooter v-else />
  </div>
</template>

<script setup lang="ts">
import Footer from "~/components/Footer.vue";
import FormFooter from "../components/formFooter.vue";
</script>
