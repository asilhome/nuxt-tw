<script setup>
const props = defineProps({
  color: String,
});

const textColorClassObject = {
  default: "text-gray-500 hover:text-gray-600",
  primary: "text-primary-500 hover:text-primary-600",
  secondary: "text-secondary-500 hover:text-secondary-600",
};

const classArray = computed(() => {
  return [
    textColorClassObject[props.color]
      ? textColorClassObject[props.color]
      : textColorClassObject["default"],
  ];
});
// const attrs = useAttrs()
// console.log(attrs.to)
// console.log("attrs.activeClass", attrs['active-class'])
</script>

<template>
  <!-- <NuxtLink :active-class="['bg-gray-100 text-green-500']"> -->
  <NuxtLink class="inline-flex items-center" :class="[classArray]">
    <slot />
    <!-- <span class="truncate"><slot /></span> -->
  </NuxtLink>
</template>
