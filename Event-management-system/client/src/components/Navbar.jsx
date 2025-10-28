import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isAdmin }) => {
  return (
    <nav className="navbar">
      <h2>Event Management</h2>
      <div className="links">
        {isAdmin ? (
          <>
            <Link to="/">Dashboard</Link>
            <Link to="/admin/add-event">Add Event</Link>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/my-registrations">My Registrations</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
