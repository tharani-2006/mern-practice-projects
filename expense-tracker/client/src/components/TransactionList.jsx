import React from "react";

function TransactionList({ transactions, onDelete }) {
  return (
    <div className="card">
      <h2>All Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li key={t._id} className={t.type === "income" ? "income" : "expense"}>
              <span>
                {t.name} — ₹{t.amount}
              </span>
              <button onClick={() => onDelete(t._id)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
