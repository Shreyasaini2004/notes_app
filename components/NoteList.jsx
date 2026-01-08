"use client";

export default function NoteList({ notes, refresh }) {
  const del = async id => {
    await fetch(`/api/notes/${id}`, { method: "DELETE" });
    refresh();
  };

  if (notes.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-20">
        No notes yet. Create your first note ✨
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {notes.map(note => (
        <div
          key={note._id}
          className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition"
        >
          <h3 className="text-lg font-bold text-gray-800">
            {note.title}
          </h3>

          <p className="text-gray-600 mt-2 line-clamp-4">
            {note.content}
          </p>

          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-400">
              {new Date(note.createdAt).toLocaleString()}
            </span>

            <button
              onClick={() => del(note._id)}
              className="text-red-500 text-sm hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
