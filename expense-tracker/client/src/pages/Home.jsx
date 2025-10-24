import React, { useEffect, useState } from "react";
import AddTransaction from "../components/AddTransaction";
import TransactionList from "../components/TransactionList";
import Summary from "../components/Summary";
import "../App.css";

function Home() {
  const [transactions, setTransactions] = useState([]);

  // Fetch all transactions from backend
  const fetchTransactions = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/transactions");
      const data = await res.json();
      setTransactions(data);
    } catch (err) {
      console.log("Error fetching transactions:", err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // Add new transaction
  const addTransaction = async (newTransaction) => {
    try {
      const res = await fetch("http://localhost:5000/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTransaction),
      });
      if (res.ok) fetchTransactions();
    } catch (err) {
      console.log("Error adding transaction:", err);
    }
  };

  // Delete transaction
  const deleteTransaction = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/transactions/${id}`, {
        method: "DELETE",
      });
      if (res.ok) fetchTransactions();
    } catch (err) {
      console.log("Error deleting transaction:", err);
    }
  };

  return (
    <div className="home-container">
      <h1 className="title"> Expense Tracker</h1>
      <Summary transactions={transactions} />
      <AddTransaction onAdd={addTransaction} />
      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
      />
    </div>
  );
}

export default Home;
