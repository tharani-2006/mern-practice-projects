import React, { useState } from "react";

function AddTransaction({ onAdd }) {
  const [form, setForm] = useState({ name: "", amount: "", type: "income" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.amount) {
      alert("Please fill all fields!");
      return;
    }

    onAdd({ ...form, amount: Number(form.amount) });
    setForm({ name: "", amount: "", type: "income" });
  };

  return (
    <div className="card">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Enter amount"
        />
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTransaction;
