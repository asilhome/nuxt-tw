<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <VBar class="items-center">
    <div class="text-xl text-gray-900">January 2023</div>
    <div class="flex divide-x gap-5">
      <select
        class="text-sm block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
      >
        <option>Monthly</option>
        <option>Yearly</option>
      </select>
      <div class="flex">
        <VButton variant="icon">
          <ChevronLeftIcon class="h-6 w-6" />
        </VButton>
        <VButton variant="icon">
          <ChevronRightIcon class="h-6 w-6" />
        </VButton>
      </div>
    </div>
  </VBar>
</template>
