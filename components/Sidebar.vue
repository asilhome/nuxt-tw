<script setup>
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const props = defineProps({
  modelValue: Boolean,
  right: Boolean,
  temporary: Boolean,
});
const emit = defineEmits(["update:modelValue"]);

const state = reactive({
  classes: null,
  overlay: {
    classes: "hidden",
  },
});

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller("md");

onMounted(() => {
  if (props.temporary) {
    state.classes = "hidden";
    emit("update:modelValue", true);
  }
});

watch(
  () => props.modelValue,
  (hidden) => {
    if (hidden) {
      state.classes = "hidden";
      state.overlay.classes = "hidden";
    } else {
      if (isMobile.value || props.temporary) {
        if (props.right) state.classes = "fixed z-10 right-0";
        else state.classes = "fixed z-10";

        state.overlay.classes = "-z-10";
      } else state.classes = null;
    }
  }
);

watchEffect(() => {
  if (isMobile.value) {
    state.classes = "hidden";
    emit("update:modelValue", true);
  } else {
    if (!props.temporary) {
      state.classes = null;
      state.overlay.classes = "hidden";
      emit("update:modelValue", false);
    }
  }
});

function closeOverlay() {
  if (!props.modelValue) {
    state.classes = "hidden";
    state.overlay.classes = "hidden";
    emit("update:modelValue", true);
  }
}
</script>

<template>
  <ClientOnly>
    <aside :class="state.classes">
      <div
        class="fixed inset-0 bg-gray-200 bg-opacity-75 transition-opacity"
        :class="state.overlay.classes"
        @click="closeOverlay()"
      ></div>
      <div class="flex flex-col h-screen">
        <slot />
      </div>
    </aside>
  </ClientOnly>
</template>
