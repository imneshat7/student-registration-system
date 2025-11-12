import React, { useState } from "react";

export default function Registrations({
  offerings,
  courses,
  types,
  state,
  dispatch,
}) {
  const [offeringId, setOfferingId] = useState("");
  const [studentName, setStudentName] = useState("");

  const uid = () => "r_" + Math.random().toString(36).slice(2, 9);

  const label = (o) => {
    const c = courses.find((x) => x.id === o.courseId);
    const t = types.find((x) => x.id === o.typeId);
    return `${t ? t.name : "(missing type)"} - ${c ? c.name : "(missing course)"}`;
  };

  const register = () => {
    const name = studentName.trim();
    if (!name) return alert("Enter student name");
    if (!offeringId) return alert("Select an offering");
    dispatch({ type: "add", payload: { id: uid(), offeringId, name } });
    setStudentName("");
  };

  const listFor = (id) => state.filter((r) => r.offeringId === id);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <div className="flex gap-2 mb-3">
        <select
          className="border rounded px-2 py-1 flex-1"
          value={offeringId}
          onChange={(e) => setOfferingId(e.target.value)}
        >
          <option value="">Select offering</option>
          {offerings.map((o) => (
            <option key={o.id} value={o.id}>
              {label(o)}
            </option>
          ))}
        </select>

        <input
          className="border rounded px-2 py-1 flex-1"
          placeholder="Enter student name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button
          onClick={register}
          className="bg-indigo-600 text-white px-3 py-1 rounded"
        >
          Register
        </button>
      </div>

      <div className="overflow-auto max-h-64">
        {offerings.map((o) => (
          <div key={o.id} className="border-b py-2">
            <div className="flex justify-between items-center">
              <strong>{label(o)}</strong>
              <span className="text-sm text-gray-500">
                {listFor(o.id).length} students
              </span>
            </div>
            <ul className="mt-2 space-y-1">
              {listFor(o.id).map((r) => (
                <li
                  key={r.id}
                  className="flex justify-between items-center text-sm"
                >
                  <span>{r.name}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: "delete", payload: r.id })
                    }
                    className="text-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))}
              {listFor(o.id).length === 0 && (
                <li className="text-gray-400 text-sm">No students</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
