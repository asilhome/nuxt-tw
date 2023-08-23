<script setup>
const { incomes, expenses } = useHelper();
</script>

<template>
  <div class="py-5 space-y-6">
    <section>
      <VContainer>
        <VBar>
          <div>
            <h1 class="text-2xl text-gray-900">Categories</h1>
          </div>
          <div>
            <VButton
              type="button"
              text
              class="text-gray-600 hover:text-gray-900"
              >New Category</VButton
            >
          </div>
        </VBar>
      </VContainer>
    </section>

    <section>
      <VContainer>
        <CalendarBar />
      </VContainer>
    </section>

    <section>
      <VContainer>
        <VContent>
          <Grid class="gap-5 grid-cols-1 lg:grid-cols-3">
            <NuxtLink to="#">
              <AccountType :item="{ title: 'Income' }" />
            </NuxtLink>
            <NuxtLink to="#">
              <AccountType :item="{ title: 'Expenses' }" />
            </NuxtLink>
            <NuxtLink to="#">
              <AccountType :item="{ title: 'Net Income' }" />
            </NuxtLink>
          </Grid>
        </VContent>
      </VContainer>
    </section>

    <section>
      <VContainer>
        <!-- <VContent> -->
        <VCard class="border rounded-xl divide-y">
          <VBar>
            <div>
              <h2 class="text-lg text-gray-900">Income</h2>
            </div>
            <div class="text-right">
              <p class="text-gray-500">9,999</p>
              <p class="text-lg text-gray-900">99,999</p>
            </div>
          </VBar>
          <div>
            <ul class="divide-y">
              <li v-for="item in incomes">
                <NuxtLink
                  :to="`/accounts/${item.id}/transactions`"
                  class="block hover:bg-gray-50"
                >
                  <AccountItem :item="item" />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </VCard>
        <!-- </VContent> -->
      </VContainer>
    </section>

    <section>
      <VContainer>
        <VCard class="border rounded-xl divide-y">
          <VBar>
            <div>
              <h2 class="text-lg text-gray-900">Spent</h2>
            </div>
            <div class="text-right">
              <p class="text-gray-500">9,999</p>
              <p class="text-lg text-gray-900">99,999</p>
            </div>
          </VBar>
          <div>
            <ul class="divide-y">
              <li v-for="item in expenses">
                <NuxtLink
                  v-if="!item.accounts"
                  :to="`/accounts/${item.id}/transactions`"
                  class="block hover:bg-gray-50"
                >
                  <AccountItem :item="item" />
                </NuxtLink>
                <ul v-else class="ml-5 divide-y">
                  <li v-for="subAccount in item.accounts">
                    <NuxtLink
                      :to="`/accounts/${subAccount.id}/transactions`"
                      class="block hover:bg-gray-50"
                    >
                      <AccountItem :item="subAccount" />
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </VCard>
      </VContainer>
    </section>
  </div>
</template>
