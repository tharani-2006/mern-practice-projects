import React, { useEffect, useState } from "react";
import AddFeedback from "../components/AddFeedback";
import FeedbackList from "../components/FeedbackList";
import AverageRating from "../components/AverageRating";

function Home() {
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch all feedbacks
  const fetchFeedbacks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/feedback");
      const data = await res.json();
      setFeedbacks(data);
    } catch (err) {
      console.log("Error fetching feedbacks:", err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Add new feedback
  const addFeedback = async (newFeedback) => {
    try {
      const res = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFeedback),
      });
      if (res.ok) fetchFeedbacks();
    } catch (err) {
      console.log("Error adding feedback:", err);
    }
  };

  // Delete feedback
  const deleteFeedback = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/feedback/${id}`, {
        method: "DELETE",
      });
      if (res.ok) fetchFeedbacks();
    } catch (err) {
      console.log("Error deleting feedback:", err);
    }
  };

  return (
    <div className="container">
      <h1 className="title">⭐ Feedback & Rating App</h1>
      <AverageRating feedbacks={feedbacks} />
      <AddFeedback onAdd={addFeedback} />
      <FeedbackList feedbacks={feedbacks} onDelete={deleteFeedback} />
    </div>
  );
}

export default Home;
