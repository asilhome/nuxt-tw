<script setup>
const props = defineProps({
  lg: Boolean,
  sm: Boolean,
});

const maxWidthClassObject = {
  lg: "max-w-7xl",
  sm: "max-w-3xl",
};

const classArray = computed(() => [
  props.sm ? maxWidthClassObject["sm"] : maxWidthClassObject["lg"],
]);
</script>

<template>
  <div class="mx-auto" :class="[classArray]">
    <!-- <div class="mx-auto px-4 sm:px-6 lg:px-8" :class="[classArray]"> -->
    <!-- <div class="container mx-auto" :class="[classArray]"> -->
    <slot />
  </div>
</template>
