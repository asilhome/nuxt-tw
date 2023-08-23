<script setup>
const route = useRoute();

console.log(route.params);
</script>

<template>
  <div>
    <VContainer sm>
      <VCard class="divide-y divide-gray-200 border border-gray-200">
        <VContent class="space-y-2">
          <div class="grid grid-cols-4 sm:grid-cols-6">
            <div class="col-span-2">
              <label class="block text-sm font-medium text-gray-700"
                >Date</label
              >
              <input
                type="text"
                class="mt-1 text-sm block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-6 gap-y-2 gap-x-4">
            <div class="col-span-3">
              <label class="block text-sm font-medium text-gray-700"
                >Account</label
              >
              <select
                class="mt-1 text-sm block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option>Account 1</option>
                <option>Account 2</option>
                <option>Account 3</option>
              </select>
            </div>
            <div class="col-span-3">
              <label class="block text-sm font-medium text-gray-700"
                >Category</label
              >
              <select
                class="mt-1 text-sm block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              >
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-4 sm:grid-cols-6">
            <div class="col-span-2">
              <label class="block text-sm font-medium text-gray-700"
                >Amount</label
              >
              <input
                type="text"
                class="mt-1 text-sm rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Note</label>
            <textarea
              rows="3"
              class="mt-1 text-sm w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            ></textarea>
          </div>
        </VContent>
        <VBar>
          <VButton type="button" outlined>Cancel</VButton>
          <VButton type="submit" color="primary" class="ml-3 text-white"
            >Save</VButton
          >
        </VBar>
      </VCard>
    </VContainer>
  </div>
</template>
