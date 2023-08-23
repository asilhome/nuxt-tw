<script setup>
useHead({
  title: "Accounts",
});

const { assets, liabilities } = useHelper();
</script>

<template>
  <div class="space-y-6 py-5">
    <section>
      <VContainer>
        <VBar>
          <div>
            <h1 class="text-2xl text-gray-900">Accounts</h1>
          </div>
          <div>
            <VButton
              type="button"
              text
              class="text-gray-600 hover:text-gray-900"
              >New Account</VButton
            >
          </div>
        </VBar>

        <VContent>
          <Grid class="gap-5 grid-cols-1 lg:grid-cols-3">
            <NuxtLink to="#">
              <AccountType :item="{ title: 'Assets' }" />
            </NuxtLink>
            <NuxtLink to="#">
              <AccountType :item="{ title: 'Liabilities' }" />
            </NuxtLink>
            <NuxtLink to="#">
              <AccountType :item="{ title: 'Net Worth' }" />
            </NuxtLink>
          </Grid>
        </VContent>
      </VContainer>
    </section>

    <section>
      <VContainer>
        <VCard>
          <VBar>
            <h2 class="text-xl text-gray-900">Assets</h2>
          </VBar>
          <VContent>
            <Grid class="gap-5 grid-cols-1 lg:grid-cols-3">
              <template v-for="item in assets">
                <NuxtLink :to="`/accounts/${item.id}/transactions`">
                  <AccountBalance :item="item" />
                </NuxtLink>
              </template>
            </Grid>
          </VContent>
        </VCard>
      </VContainer>
    </section>

    <section>
      <VContainer>
        <!-- <VCard class="border rounded-xl shadow-md divide-y"> -->
        <VCard>
          <VBar>
            <h2 class="text-xl text-gray-900">Liabilities</h2>
          </VBar>
          <VContent>
            <Grid class="gap-5 grid-cols-1 lg:grid-cols-3">
              <template v-for="item in liabilities">
                <NuxtLink :to="`/accounts/${item.id}/transactions`">
                  <AccountBalance :item="item" />
                </NuxtLink>
              </template>
            </Grid>
          </VContent>
        </VCard>
      </VContainer>
    </section>
  </div>
</template>
