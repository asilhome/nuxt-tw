<script setup>
let apiData = ref(null);
async function callApi() {
  const { data } = await useFetch("https://restcountries.com/v3.1/all");
//   apiData.value++;
  apiData.value = data;
  console.log("API called");
}
</script>

<template>
  <div>
    <button @click="callApi">Call API</button>
    {{ apiData }}
  </div>
</template>
