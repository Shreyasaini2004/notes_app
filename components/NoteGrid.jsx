"use client";

const colors = [
  "bg-yellow-200 border-yellow-300",
  "bg-pink-200 border-pink-300",
  "bg-green-200 border-green-300",
  "bg-blue-200 border-blue-300",
  "bg-purple-200 border-purple-300",
  "bg-orange-200 border-orange-300",
];

export default function NoteGrid({ notes, refresh, onEdit }) {
  const del = async (id) => {
  await fetch(`/api/notes/${id}`, {
    method: "DELETE",
  });
  refresh();
};


  if (notes.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-20">
        No notes found ✨
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {notes.map((note, i) => (
        <div
          key={note._id}
          className={`w-[240px] min-h-[190px] rounded-2xl p-4 border shadow-md hover:shadow-xl transition ${
            colors[i % colors.length]
          }`}
        >
          {/* TITLE + ACTIONS */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
              {note.title}
            </h3>

            <div className="flex gap-2 text-sm">
              <button onClick={() => onEdit(note)}>✏️</button>
              <button onClick={() => del(note._id)}>🗑️</button>
            </div>
          </div>

          {/* CONTENT */}
          <p className="text-sm text-gray-700 line-clamp-4">
            {note.content}
          </p>

          {/* DATE */}
          <p className="text-xs text-gray-600 mt-4">
            {new Date(note.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}
