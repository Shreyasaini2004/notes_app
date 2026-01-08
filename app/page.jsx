"use client";

import { useEffect, useState } from "react";
import NoteGrid from "../components/NoteGrid";
import NoteModal from "../components/NoteModal";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const fetchNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  
    return (
  <div
    style={{
      minHeight: "100vh",
      backgroundColor: "#e0e7ff",
      padding: "40px",
    }}
  >
    <div>

     
        
        {/* TITLE */}
        <h1
  style={{
    fontSize: "48px",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "12px",
  }}
>
  📝 Notes App
</h1>


        {/* DESCRIPTION */}
        <p
  style={{
    textAlign: "center",
    fontSize: "18px",
    color: "#374151",
    marginBottom: "30px",
  }}
>
  Capture your thoughts, organize ideas, and manage notes effortlessly
</p>


        {/* SEARCH + ADD */}
        <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    marginBottom: "60px", 
  }}
>

          <input
            type="text"
            placeholder="Search notes by title..."
            className="w-96 px-4 py-2 rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={() => {
              setEditingNote(null);
              setOpen(true);
            }}
            className="w-12 h-12 rounded-full bg-purple-600 text-white text-2xl hover:bg-purple-700 transition"
          >
            +
          </button>
        </div>

        {/* NOTES GRID */}
        <NoteGrid
          notes={filteredNotes}
          refresh={fetchNotes}
          onEdit={(note) => {
            setEditingNote(note);
            setOpen(true);
          }}
        />

        {/* MODAL */}
        {open && (
          <NoteModal
            note={editingNote}
            refresh={fetchNotes}
            close={() => setOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
