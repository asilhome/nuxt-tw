<template>
  <div class="py-5">
    <section>
      <VContainer>
        <VCard class="border rounded-lg shadow-md">
          <table class="min-w-full divide-y table-fixed">
            <thead class="bg-gray-200">
              <tr>
                <th class="px-5 py-2 text-left text-gray-500">Date</th>
                <th class="px-5 py-2 text-left">Transaction</th>
                <th class="px-5 py-2 text-right">Income</th>
                <th class="px-5 py-2 text-right">Spent</th>
                <th class="px-5 py-2 text-right">Balance</th>
                <th class="px-5 py-2"></th>
              </tr>
            </thead>
            <tbody class="divide-y">
              <tr>
                <th colspan="6" class="px-5 py-2 text-left bg-gray-100">
                  February
                </th>
              </tr>
              <template v-for="i in 4">
                <tr>
                  <td class="px-5">2023-01-01</td>
                  <td class="px-5">
                    <p>McD</p>
                    <p>Meal</p>
                  </td>
                  <td class="px-5 text-right">9,999.99</td>
                  <td class="px-5 text-right">9,999.99</td>
                  <td class="px-5 text-right">9,999.99</td>
                  <td class="px-5 text-center">Edit</td>
                </tr>
              </template>
              <tr>
                <th colspan="6" class="px-5 py-2 text-left bg-gray-100">
                  January
                </th>
              </tr>
              <!-- <tr class="bg-gray-50"> -->
              <tr>
                <td class="px-5 py-5">2023-01-01</td>
                <td class="px-5 py-5">Meal</td>
                <td class="px-5 py-5 text-right">9,999.99</td>
                <td class="px-5 py-5 text-right">9,999.99</td>
                <td class="px-5 py-5 text-right">9,999.99</td>
                <td class="px-5 py-5 text-center">Edit</td>
              </tr>
            </tbody>
          </table>
        </VCard>
      </VContainer>
    </section>
  </div>
</template>
