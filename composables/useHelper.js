import accountData from "./accountData";
import accountGroupData from "./accountGroupData";

export default function useHelper() {
  const assets = computed(() =>
    accountData.items.filter((item) => item.accountType === "asset")
  );

  const liabilities = computed(() =>
    accountData.items.filter((item) => item.accountType === "liability")
  );

  const incomes = computed(() =>
    accountGroupData.items.filter((item) => item.accountType === "income")
  );

  const expenses = computed(() =>
    accountGroupData.items.filter((item) => item.accountType === "expense")
  );

  function findAccountById(id) {
    return accountData.items.find((item) => item.id == id);
  };

  return { assets, liabilities, incomes, expenses, findAccountById };
}
