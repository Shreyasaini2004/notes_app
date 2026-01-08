"use client";

import { useState } from "react";

export default function NoteModal({ close, refresh, note }) {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  const save = async () => {
    if (!title || !content) return;

    if (note) {
      await fetch(`/api/notes/${note._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
    } else {
      await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
    }

    refresh();
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">
          {note ? "Edit Note" : "Create Note"}
        </h2>

        <input
          className="w-full border rounded px-3 py-2 mb-3"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full border rounded px-3 py-2 mb-4"
          rows={5}
          placeholder="Take a note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

    <div
  style={{
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    marginTop: "16px",
  }}
>
  <button
    onClick={close}
    style={{
      padding: "8px 16px",
      border: "1px solid #999",
      borderRadius: "6px",
      backgroundColor: "#ffffff",
      cursor: "pointer",
    }}
  >
    Cancel
  </button>

  <button
    onClick={save}
    style={{
      padding: "8px 18px",
      border: "1px solid #6d28d9",
      borderRadius: "6px",
      backgroundColor: "#6d28d9",
      color: "#ffffff",
      fontWeight: "500",
      cursor: "pointer",
    }}
  >
    Save
  </button>
</div>


      </div>
    </div>
  );
}
