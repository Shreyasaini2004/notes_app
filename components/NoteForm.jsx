"use client";
import { useState } from "react";

export default function NoteForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = async () => {
    if (!title || !content) return;

    await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });

    setTitle("");
    setContent("");
    refresh();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Create a Note
      </h2>

      <input
        className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Note title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your note here..."
        rows={5}
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <button
        onClick={submit}
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Add Note
      </button>
    </div>
  );
}
