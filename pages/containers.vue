<template>
  <div class="space-y-5">
    <VContainer sm class="py-5 text-center bg-orange-200">
      small
    </VContainer>
    <div class="mx-auto max-w-5xl">
      <div class="bg-gray-200 text-center">mx-auto max-w-5xl</div>
    </div>
    <VContainer>
      <div class="py-5 text-center bg-green-200">default</div>
    </VContainer>
    <VContainer lg>
      <div class="py-5 text-center bg-green-200">large</div>
    </VContainer>
    <div class="container mx-auto">
      <div class="bg-gray-200 text-center">container mx-auto</div>
    </div>
    <div class="bg-gray-200 sm:bg-orange-200 md:bg-red-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-purple-200 text-center">responsive</div>
  </div>
</template>
