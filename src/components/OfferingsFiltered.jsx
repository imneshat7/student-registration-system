import React, { useMemo, useState } from "react";

export default function OfferingsFiltered({ offerings, courses, types }) {
  const [filter, setFilter] = useState("");

  const filtered = useMemo(() => {
    if (!filter) return offerings;
    return offerings.filter((o) => o.typeId === filter);
  }, [offerings, filter]);

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
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Show all types</option>
          {types.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>

      <ul className="space-y-2">
        {filtered.map((o) => (
          <li key={o.id} className="border px-3 py-2 rounded">
            {label(o)}
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="text-gray-500 text-sm">No offerings</li>
        )}
      </ul>
    </div>
  );
}
