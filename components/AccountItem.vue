<script setup>
defineProps({
  item: Object,
});
</script>

<template>
  <VCard>
    <VBar>
      <div>
        <p class="text-gray-500">9,999</p>
        <p class="text-gray-900">
          {{ item ? item.title : "" }}
        </p>
      </div>
      <div class="text-right">
        <p class="text-gray-500">9,999</p>
        <p class="text-gray-900">99,999</p>
      </div>
    </VBar>
  </VCard>
</template>
