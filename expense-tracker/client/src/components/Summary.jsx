import React, { useEffect, useState } from "react";

function Summary({ transactions }) {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((acc, curr) => acc + curr.amount, 0);

    const totalExpense = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, curr) => acc + curr.amount, 0);

    setIncome(totalIncome);
    setExpense(totalExpense);
    setBalance(totalIncome - totalExpense);
  }, [transactions]);

  return (
    <div className="card summary">
      <h2>Summary</h2>
      <div className="summary-details">
        <p className="green">Total Income: ₹{income}</p>
        <p className="red">Total Expense: ₹{expense}</p>
        <h3>Net Balance: ₹{balance}</h3>
      </div>
    </div>
  );
}

export default Summary;
