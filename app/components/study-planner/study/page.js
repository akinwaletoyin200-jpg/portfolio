"use client";
import { useState } from "react";

export default function NotesApp() {
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState([]);

  const colors = {
    Study: "bg-blue-100 border-blue-300",
    Personal: "bg-pink-100 border-pink-300",
    Work: "bg-green-100 border-green-300",
    Others: "bg-yellow-100 border-yellow-300",
  };

  const addNote = () => {
    if (note.trim() === "" || category.trim() === "") return;
    const newNote = { text: note, category };
    setNotes([...notes, newNote]);
    setNote("");
    setCategory("");
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 drop-shadow-md mb-2">
          📝 Notes App
        </h1>
        <p className="text-gray-600 text-lg">
          Organize your ideas by category and stay inspired!
        </p>
      </div>

      
      <div className="w-full max-w-xl bg-white shadow-lg p-5 rounded-xl mb-10 border border-purple-100">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your note..."
          className="w-full p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 mb-4"
          rows="3"
        />

        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex-1 p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
          >
            <option value="">Select category</option>
            <option value="Study">Study</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Others">Others</option>
          </select>

          <button
            onClick={addNote}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Add Note
          </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {notes.length === 0 && (
          <p className="text-gray-500 italic text-center w-full">
            No notes yet — add one above ✨
          </p>
        )}

        {notes.map((n, index) => (
          <div
            key={index}
            
          >
            <span className="absolute top-2 right-3 text-gray-400 text-sm italic">
              {n.category}
            </span>
            <p className="text-gray-800 font-medium whitespace-pre-wrap">
              {n.text}
            </p>
            <button
              onClick={() => deleteNote(index)}
              className="absolute bottom-3 right-3 text-red-500 hover:text-red-700 font-semibold text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
  
      <footer className="mt-10 text-gray-500 text-sm">
        Built with 💜 by <span className="font-semibold text-purple-600">Esther</span>
      </footer>
    </div>
      
  );
}
