<script setup>
const props = defineProps({
  variant: String,
  outlined: Boolean,
  text: Boolean,
  plain: Boolean,
  color: String,
});

const variantClassObject = {
  default: "px-4 py-2",
  rounded: "rounded-md px-4 py-2",
  pill: "rounded-full px-3.5 py-2",
  icon: "rounded-full p-2 border",
};

const outlinedClassObject = {
  default: "border-transparent",
  // outlined: "border",
  outlined: "border border-gray-300",
};

const outlinedInvertedClassObject = {
  default: "border border-gray-300",
  primary: "border border-primary-500",
};

const invertedColorClassObject = {
  default: "bg-gray-50 hover:bg-gray-100",
  primary:
    "text-primary-500 bg-primary-50 hover:bg-primary-100 focus:ring-primary-500",
  secondary:
    "text-secondary-500 bg-secondary-50 hover:bg-secondary-100 focus:ring-secondary-500",
};

const plainColorClassObject = {
  default: "text-gray-400 hover:text-gray-500",
  primary: "text-primary-400 hover:text-primary-500 focus:ring-primary-500",
  secondary:
    "text-secondary-400 hover:text-secondary-500 focus:ring-secondary-500",
};

const colorClassObject = {
  default: "text-gray-400 hover:text-gray-500",
  primary:
    "text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500",
  secondary:
    "text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500",
};

/**
 * https://stackoverflow.com/questions/71818458/why-wont-tailwind-find-my-dynamic-class
 */
const classArray = computed(() => {
  return [
    variantClassObject[props.variant]
      ? variantClassObject[props.variant]
      : variantClassObject["default"],
    props.outlined
      ? outlinedInvertedClassObject[props.color]
        ? outlinedInvertedClassObject[props.color]
        : outlinedInvertedClassObject["default"]
      : outlinedClassObject["default"],
    props.text
      ? invertedColorClassObject[props.color]
        ? invertedColorClassObject[props.color]
        : invertedColorClassObject["default"]
      : props.plain
      ? plainColorClassObject[props.color]
        ? plainColorClassObject[props.color]
        : plainColorClassObject["default"]
      : colorClassObject[props.color]
      ? colorClassObject[props.color]
      : colorClassObject["default"],
  ];
});
</script>

<template>
  <button
    class="inline-flex justify-center focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="[classArray]"
  >
    <slot />
  </button>
</template>
