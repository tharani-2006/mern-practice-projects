import React, { useState } from "react";

function AddFeedback({ onAdd }) {
  const [form, setForm] = useState({ name: "", comment: "", rating: "5" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.comment || !form.rating) {
      alert("Please fill all fields!");
      return;
    }
    onAdd({ ...form, rating: Number(form.rating) });
    setForm({ name: "", comment: "", rating: "5" });
  };

  return (
    <div className="card">
      <h2>Add Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
          placeholder="Your Comment"
        />
        <select name="rating" value={form.rating} onChange={handleChange}>
          <option value="1">1 ⭐</option>
          <option value="2">2 ⭐</option>
          <option value="3">3 ⭐</option>
          <option value="4">4 ⭐</option>
          <option value="5">5 ⭐</option>
        </select>
        <button type="submit">Add Feedback</button>
      </form>
    </div>
  );
}

export default AddFeedback;
