<template>
  <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
  <!-- <a class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md"> -->
  <NuxtLink class="flex items-center px-3 py-2 text-sm font-medium rounded-md">
    <span class="truncate"><slot /></span>
  </NuxtLink>
</template>

<style scoped>
/* .nuxt-link-active { */
/* .router-link-active {
  @apply bg-gray-100 text-gray-900;
} */
</style>
