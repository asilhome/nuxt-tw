<script setup>
definePageMeta({ layout: "custom" });

const formattedYear = useDateFormat(useNow(), "YYYY");

const photo = usePhoto();
// console.log("photo.items", photo.items);
const photos = computed(() => photo.items);

const assets = import.meta.glob("/assets/img/*.*", { eager: true });

function getImgUrl(src) {
  return assets[src] ? assets[src].default : "";
}
</script>

<template>
  <div>
    <section>
      <VContainer sm>
        <div class="rounded-lg shadow">
          <div class="p-6">
            <div class="sm:flex sm:items-center sm:justify-between">
              <div class="sm:flex sm:space-x-5">
                <div class="flex-shrink-0">
                  <img
                    class="mx-auto h-20 w-20 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1383796888206417923/QEsfVC_2_400x400.jpg"
                    alt=""
                  />
                  <!-- <img class="mx-auto h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> -->
                </div>
                <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                  <!-- <p class="text-sm font-medium text-gray-600">Welcome back,</p> -->
                  <p class="text-xl font-bold text-gray-900 sm:text-2xl">
                    Asil
                  </p>
                  <p class="text-sm font-medium text-gray-600">Programmer</p>
                </div>
              </div>
              <!-- <div class="mt-5 flex justify-center sm:mt-0">
                <a href="#" class="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">View profile</a>
              </div> -->
            </div>
          </div>
          <div
            class="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x"
          >
            <div class="py-5 text-center text-sm font-medium">
              <!-- <span class="text-gray-900">12</span> -->
              <!-- <span class="text-gray-600">1970 - {{ formattedYear }}</span> -->
              <span class="text-gray-600">February, 1970</span>
            </div>

            <div class="py-5 text-center text-sm font-medium">
              <!-- <span class="text-gray-900">4</span> -->
              <span class="text-gray-600">Freelance</span>
            </div>

            <div class="py-5 text-center text-sm font-medium">
              <!-- <span class="text-gray-900">2</span> -->
              <span class="text-gray-600">Kuala Lumpur</span>
            </div>
          </div>
        </div>
      </VContainer>

      <!--
        col: 3, w/h: 96
        col: 5, w/h: 56
      -->
      <VContainer>
        <Grid class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center my-5">
          <template v-for="item in photos">
            <!-- <div class="flex justify-center w-56 h-56"> -->
            <div class="flex justify-center w-96 h-96">
              <img
                class="object-contain"
                :src="getImgUrl(item.src)"
                :alt="item.src"
              />
            </div>
          </template>
        </Grid>
      </VContainer>
    </section>

    <p class="whitespace-pre">makan
        sama
        semeja
    </p>
  </div>
</template>
