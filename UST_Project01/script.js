let expenses = [];

const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const monthInput = document.getElementById("month");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const summaryList = document.getElementById("summaryList");

addBtn.addEventListener("click", addExpense);

function addExpense() {
  const title = titleInput.value;
  const amount = amountInput.value;
  const month = monthInput.value;

  if (title === "" || amount === "" || month === "") {
    alert("Fill all fields");
    return;
  }

  const expense = {
    title: title,
    amount: Number(amount),
    month: month
  };

  expenses.push(expense);
  showExpenses();
  showSummary();

  titleInput.value = "";
  amountInput.value = "";
  monthInput.value = "";
}

function showExpenses() {
  expenseList.innerHTML = "";

  expenses.map((e) => {
    const li = document.createElement("li");
    li.textContent =
      e.title + " | ₹" + e.amount + " | " + e.month;
    expenseList.appendChild(li);
  });
}

function showSummary() {
  summaryList.innerHTML = "";

  let total = {};

  expenses.map((e) => {
    total[e.month] = (total[e.month] || 0) + e.amount;
  });

  for (let m in total) {
    const li = document.createElement("li");
    li.textContent = m + " : ₹" + total[m];
    summaryList.appendChild(li);
  }
}
