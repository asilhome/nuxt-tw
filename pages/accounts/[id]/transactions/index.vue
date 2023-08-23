<script setup>
import { ChevronRightIcon } from "@heroicons/vue/24/solid";

const { findAccountById } = useHelper();

const route = useRoute();

// console.log(route.params.id)
const account = findAccountById(route.params.id);

const journal = useJournal();
// console.log(journals)
const journals = computed(() => journal.items);
</script>

<template>
  <div class="py-5 space-y-6">
    <section>
      <VContainer>
        <VBar class="items-center">
          <div>
            <h1 class="text-2xl text-gray-900">{{ account.title }}</h1>
          </div>
          <div>
            <VLink to="/home" color="primary" class="space-x-2">
              <span class="mb-1 text-lg">Info</span>
              <!-- <span class="mb-1 font-semibold">Info</span> -->
              <ChevronRightIcon class="h-6 w-6" />
            </VLink>
            <!-- <VButton
              type="button"
              text
              class="text-gray-600 hover:text-gray-900"
              >Edit</VButton
            > -->
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
        <!-- <VContent> -->
        <Grid class="gap-5 grid-cols-1 lg:grid-cols-3">
          <NuxtLink to="#">
            <AccountType
              :item="
                account.accountType === 'asset' ||
                account.accountType === 'liability'
                  ? { title: 'Deposit' }
                  : { title: 'Income' }
              "
            />
          </NuxtLink>
          <NuxtLink to="#">
            <AccountType
              :item="
                account.accountType === 'asset' ||
                account.accountType === 'liability'
                  ? { title: 'Withdrawal' }
                  : { title: 'Expenses' }
              "
            />
          </NuxtLink>
          <NuxtLink to="#">
            <AccountType
              :item="
                account.accountType === 'asset' ||
                account.accountType === 'liability'
                  ? { title: 'Balance' }
                  : { title: 'Total' }
              "
            />
          </NuxtLink>
        </Grid>
        <!-- </VContent> -->
      </VContainer>
    </section>

    <section>
      <VContainer>
        <VCard class="border rounded-lg">
          <table class="min-w-full divide-y table-fixed">
            <thead>
              <tr>
                <th class="px-5 py-2 w-1/12 text-left text-gray-500">Date</th>
                <th class="px-5 py-2 text-left"></th>
                <!-- <th class="px-5 py-2 text-left">Transaction</th> -->
                <th class="px-5 py-2 w-2/12 text-right">Income</th>
                <th class="px-5 py-2 w-2/12 text-right">Spent</th>
                <th class="px-5 py-2 w-2/12 text-right">Balance</th>
                <th class="px-5 py-2 w-1/12"></th>
              </tr>
            </thead>
            <tbody v-for="item in journals" class="divide-y">
              <tr>
                <th colspan="6" class="px-5 py-2 text-left bg-gray-50">
                  {{ item.journalDate }}
                </th>
              </tr>
              <template
                v-if="item.transactions"
                v-for="transaction in item.transactions"
              >
                <tr class="hover:bg-gray-100">
                  <td class="px-5">2023-01-01</td>
                  <td class="px-5">
                    <p>McD</p>
                    <p>Meal</p>
                  </td>
                  <td class="px-5 text-right">9,999.99</td>
                  <td class="px-5 text-right">9,999.99</td>
                  <td class="px-5 text-right">9,999.99</td>
                  <td class="px-5 text-center">
                    <NuxtLink to="/transactions/1"> Edit </NuxtLink>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </VCard>
      </VContainer>
    </section>
  </div>
</template>
