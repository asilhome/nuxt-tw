<script setup>
defineProps({
  item: Object,
});
</script>

<template>
  <VCard class="border rounded-lg hover:border-primary-500">
    <VBar>
      <div>
        <p class="text-xs text-gray-500">{{ item ? item.title : "" }}</p>
        <h2 class="text-xl text-gray-900">99,999</h2>
      </div>
    </VBar>
  </VCard>
</template>
