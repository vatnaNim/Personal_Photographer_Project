<template>
  <div>
    <div class="w-10 sm:w-12 loader"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.loader {
  aspect-ratio: 1;
  background: #554236;
  display: grid;
  transform-origin: top right;
  animation: l5-0 4s infinite linear;
}
.loader::before,
.loader::after {
  content: "";
  grid-area: 1/1;
  background: #f77825;
  transform-origin: inherit;
  animation: inherit;
  animation-name: l5-1;
  animation-duration: 1s;
}
.loader::after {
  background: #60b99a;
  --s: 60deg;
}
@keyframes l5-0 {
  0%,
  5% {
    transform: rotate(0);
  }
  25%,
  30% {
    transform: rotate(90deg);
  }
  50%,
  55% {
    transform: rotate(180deg);
  }
  75%,
  80% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes l5-1 {
  50% {
    transform: rotate(var(--s, 30deg));
  }
  100% {
    transform: rotate(0);
  }
}
</style>
