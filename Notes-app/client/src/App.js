import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");

  // Fetch notes
  const fetchNotes = async () => {
    const res = await fetch(`/api/notes?search=${search}`);
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, [search]);

  // Add note
  const addNote = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Title is required!");
      return;
    }

    await fetch("/api/notes/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    setTitle("");
    setContent("");
    fetchNotes();
  };

  // Delete note
  const deleteNote = async (id) => {
    await fetch(`/api/notes/delete/${id}`, { method: "DELETE" });
    fetchNotes();
  };

  return (
    <div className="app-container">
      <h1>📝 Notes App</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* Add Note */}
      <form onSubmit={addNote} className="note-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Add Note</button>
      </form>

      {/* Notes List */}
      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="no-notes">No notes found.</p>
        ) : (
          notes.map((note) => (
            <div key={note._id} className="note-item">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <small>{new Date(note.createdAt).toLocaleString()}</small>
              <button onClick={() => deleteNote(note._id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
