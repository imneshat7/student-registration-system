import React, { useState } from "react";

export default function Courses({ state, dispatch }) {
  const [name, setName] = useState("");

  const uid = () => "c_" + Math.random().toString(36).slice(2, 9);

  function add() {
    const trimmed = name.trim();
    if (!trimmed) return alert("Enter course name");
    if (state.some((c) => c.name.toLowerCase() === trimmed.toLowerCase())) {
      return alert("Already exists");
    }
    dispatch({ type: "add", payload: { id: uid(), name: trimmed } });
    setName("");
  }

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <div className="flex gap-2 mb-3">
        <input
          className="border rounded px-2 py-1 flex-1"
          placeholder="Enter course name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={add}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {state.map((course) => (
          <li
            key={course.id}
            className="flex justify-between items-center border px-3 py-2 rounded"
          >
            <span>{course.name}</span>
            <div className="space-x-2">
              <button
                onClick={() => {
                  const newName = prompt("Edit course name", course.name);
                  if (!newName) return;
                  dispatch({
                    type: "update",
                    payload: { ...course, name: newName.trim() },
                  });
                }}
                className="border px-2 py-1 text-sm rounded"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch({ type: "delete", payload: course.id })}
                className="border px-2 py-1 text-sm rounded text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
