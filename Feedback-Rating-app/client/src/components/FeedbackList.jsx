import React from "react";

function FeedbackList({ feedbacks, onDelete }) {
  return (
    <div className="card">
      <h2>All Feedback</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        <ul>
          {feedbacks.map((f) => (
            <li key={f._id}>
              <div>
                <strong>{f.name}</strong> ({f.rating} ⭐)
              </div>
              <p>{f.comment}</p>
              <button onClick={() => onDelete(f._id)}>❌ Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FeedbackList;
