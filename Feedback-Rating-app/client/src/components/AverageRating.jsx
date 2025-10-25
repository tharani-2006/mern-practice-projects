import React, { useEffect, useState } from "react";

function AverageRating({ feedbacks }) {
  const [average, setAverage] = useState(0);

  useEffect(() => {
    if (feedbacks.length === 0) {
      setAverage(0);
      return;
    }
    const sum = feedbacks.reduce((acc, f) => acc + f.rating, 0);
    setAverage((sum / feedbacks.length).toFixed(1));
  }, [feedbacks]);

  return (
    <div className="card summary">
      <h2>Average Rating: {average} ⭐</h2>
      <p>Total Feedback: {feedbacks.length}</p>
    </div>
  );
}

export default AverageRating;
