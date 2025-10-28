import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MyRegistrations from "./pages/MyRegistrations";
import AdminDashboard from "./pages/AdminDashboard";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";
import ViewRegistrations from "./pages/ViewRegistrations";
import "./App.css";

function App() {

  const isAdmin = false; 

  return (
    <Router>
      <Navbar isAdmin={isAdmin} />
      <Routes>
        {isAdmin ? (
          <>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/admin/add-event" element={<AddEvent />} />
            <Route path="/admin/edit-event/:id" element={<EditEvent />} />
            <Route path="/admin/view-registrations/:eventId" element={<ViewRegistrations />} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-registrations" element={<MyRegistrations />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
