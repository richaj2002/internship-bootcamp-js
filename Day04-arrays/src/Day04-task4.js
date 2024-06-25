import Expenses from "./data/Expenses.js";

console.log("Expenses", Expenses);
const category = [
  "Food",
  "Travel",
  "EMI",
  "Bills",
  "Medical Expense",
  "Grocery",
];

//1st function - to find specific id

function findExpenseById(id) {
  // Expenses.forEach(expense);

  const result = Expenses.find((expense) => {
    return expense.id == id;
  });
  // return final answer
  return result;
}
console.log(findExpenseById(10));


//2nd 
// const findExpenseByCategory = (category) => {
//   const result = { expenses: [], totalExpense: [] };
//   result.expenses = Expenses.filter((expense) => {
//     return expense.category === category;
//   });

//   //for calculating total expense
//   const generateUniqueId = (config = {}) => {
//     //destructing
//     const { prefix } = config;
//     if (prefix) {
//       return prefix + "_" + Math.random().toString(36).substring(2);
//     }
//     return;
//     Math.random().toString(36).substring(2);
//   };
//   result.expenses.forEach((expense) => {
//     result.totalExpense = result.totalExpense + expense.amount;
//     // return result.totalExpense;
//   });

//   return result;
// };
// console.log(findExpenseByCategory(category[0]));

//2nd function - to get specific category with its total amount of expense
function findExpenseByCategory(category){
    const filterExpenses = Expenses.filter(expense => expense.category===category);
    const totalExpense = filterExpenses.reduce((total,expense) => total + expense.amount,0);
    return {
        filterExpenses,
        totalExpense,
    }
}
console.log(findExpenseByCategory("Food"));

//3 function - to update expense with spicific id
function updateExpenseById(id, updateObject) {
  const index = Expenses.findIndex((expense) => expense.id === id);
  console.log(index);
  if (index !== -1) {
    //Restricting updating id property
    if (updateObject.hasOwnProperty("id")) {
      delete updateObject.id;
    }
    Expenses[index] = { ...Expenses[index], ...updateObject };
    return true; //successful update
  }
  return false; //expense not found
}
console.log(
  "Update expense by id:",
  updateExpenseById("1", { category: "Updated Category", amount: 500 })
);
console.log("After update:", Expenses);

//4 function - to delete expense object by id
function deleteExpenseById(id) {
  const index = Expenses.findIndex((expense) => expense.id === id);
  if (index !== -1) {
    Expenses.splice(index, 1);
    return true; // successful deletion
  }
  return false; //  id not found
}

console.log("Delete expense by id:", deleteExpenseById("7"));
console.log("After deletion:", Expenses);

//5 function - that will take a date range and return the total expenses incurred in that duration
function totalExpensesInDateRange(startDate, endDate) {
  const filteredExpenses = Expenses.filter(
    (expense) => expense.date >= startDate && expense.date <= endDate
  );
  const totalExpense = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  return totalExpense;
}
console.log(
  "Total expenses in date range:",
  totalExpensesInDateRange(new Date("2024-04-01"), new Date("2024-05-10"))
);
