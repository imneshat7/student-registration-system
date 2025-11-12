import React, { useState } from "react";

export default function Offerings({ state, dispatch, courses, types }) {
  const [courseId, setCourseId] = useState("");
  const [typeId, setTypeId] = useState("");

  const uid = () => "o_" + Math.random().toString(36).slice(2, 9);

  function add() {
    if (!courseId || !typeId) return alert("Select both type and course");
    if (state.some((o) => o.courseId === courseId && o.typeId === typeId))
      return alert("Already exists");
    dispatch({
      type: "add",
      payload: { id: uid(), courseId, typeId },
    });
    setCourseId("");
    setTypeId("");
  }

  const label = (o) => {
    const c = courses.find((x) => x.id === o.courseId);
    const t = types.find((x) => x.id === o.typeId);
    return `${t ? t.name : "(missing type)"} - ${c ? c.name : "(missing course)"}`;
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <div className="flex gap-2 mb-3">
        <select
          className="border rounded px-2 py-1 flex-1"
          value={typeId}
          onChange={(e) => setTypeId(e.target.value)}
        >
          <option value="">Select Course Type</option>
          {types.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
        <select
          className="border rounded px-2 py-1 flex-1"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
        >
          <option value="">Select Course</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <button
          onClick={add}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {state.map((o) => (
          <li
            key={o.id}
            className="flex justify-between items-center border px-3 py-2 rounded"
          >
            <span>{label(o)}</span>
            <button
              onClick={() => dispatch({ type: "delete", payload: o.id })}
              className="border px-2 py-1 text-sm rounded text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
