import React, { useState } from "react";

export default function CourseTypes({ state, dispatch }) {
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(null);

  const uid = () => "ct_" + Math.random().toString(36).slice(2, 9);

  function add() {
    const trimmed = name.trim();
    if (!trimmed) return alert("Enter a name");
    if (state.some((c) => c.name.toLowerCase() === trimmed.toLowerCase())) {
      return alert("Already exists");
    }
    dispatch({ type: "add", payload: { id: uid(), name: trimmed } });
    setName("");
  }

  function saveEdit() {
    const trimmed = name.trim();
    if (!trimmed) return alert("Enter a name");
    dispatch({ type: "update", payload: { ...editing, name: trimmed } });
    setEditing(null);
    setName("");
  }

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <div className="flex gap-2 mb-3">
        <input
          className="border rounded px-2 py-1 flex-1"
          placeholder="Enter course type"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {editing ? (
          <>
            <button onClick={saveEdit} className="bg-indigo-600 text-white px-3 py-1 rounded">Save</button>
            <button onClick={() => { setEditing(null); setName(""); }} className="border px-3 py-1 rounded">Cancel</button>
          </>
        ) : (
          <button onClick={add} className="bg-green-600 text-white px-3 py-1 rounded">Add</button>
        )}
      </div>

      <ul className="space-y-2">
        {state.map((ct) => (
          <li key={ct.id} className="flex justify-between items-center border px-3 py-2 rounded">
            <span>{ct.name}</span>
            <div className="space-x-2">
              <button onClick={() => { setEditing(ct); setName(ct.name); }} className="border px-2 py-1 text-sm rounded">Edit</button>
              <button onClick={() => dispatch({ type: "delete", payload: ct.id })} className="border px-2 py-1 text-sm rounded text-red-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
