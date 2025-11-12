import React, { useReducer, useEffect } from "react";
import { listReducer } from "./utils/listReducer";
import { loadFromStorage, saveToStorage } from "./utils/storage";
import CourseTypes from "./components/CourseTypes";
import Courses from "./components/Courses";
import Offerings from "./components/Offerings";
import OfferingsFiltered from "./components/OfferingsFiltered";
import Registrations from "./components/Registrations";

export default function App() {
  // Load data from localStorage (or fallback defaults)
  const initialTypes = loadFromStorage("srs_types", [
    { id: "ct_indi", name: "Individual" },
    { id: "ct_group", name: "Group" },
    { id: "ct_special", name: "Special" },
  ]);
  const initialCourses = loadFromStorage("srs_courses", [
    { id: "c_hindi", name: "Hindi" },
    { id: "c_english", name: "English" },
    { id: "c_urdu", name: "Urdu" },
  ]);
  const initialOfferings = loadFromStorage("srs_offerings", []);
  const initialRegistrations = loadFromStorage("srs_registrations", []);

  // Reducers for CRUD
  const [types, dispatchTypes] = useReducer(listReducer, initialTypes);
  const [courses, dispatchCourses] = useReducer(listReducer, initialCourses);
  const [offerings, dispatchOfferings] = useReducer(
    listReducer,
    initialOfferings
  );
  const [registrations, dispatchRegistrations] = useReducer(
    listReducer,
    initialRegistrations
  );


  useEffect(() => saveToStorage("srs_types", types), [types]);
  useEffect(() => saveToStorage("srs_courses", courses), [courses]);
  useEffect(() => saveToStorage("srs_offerings", offerings), [offerings]);
  useEffect(
    () => saveToStorage("srs_registrations", registrations),
    [registrations]
  );


  useEffect(() => {
    const validTypeIds = new Set(types.map((t) => t.id));
    const validCourseIds = new Set(courses.map((c) => c.id));
    const filteredOfferings = offerings.filter(
      (o) => validTypeIds.has(o.typeId) && validCourseIds.has(o.courseId)
    );
    if (filteredOfferings.length !== offerings.length)
      dispatchOfferings({ type: "set", payload: filteredOfferings });
  }, [types, courses]);

  useEffect(() => {
    const validOfferingIds = new Set(offerings.map((o) => o.id));
    const filteredRegs = registrations.filter((r) =>
      validOfferingIds.has(r.offeringId)
    );
    if (filteredRegs.length !== registrations.length)
      dispatchRegistrations({ type: "set", payload: filteredRegs });
  }, [offerings]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="max-w-5xl mx-auto mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">🎓 Student Registration System</h1>
        <p className="text-gray-600 text-sm">
          Built with React + Tailwind CSS v4 + LocalStorage
        </p>
      </header>

      <main className="max-w-5xl mx-auto space-y-6">
        <section className="p-4 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Course Types</h2>
          <CourseTypes state={types} dispatch={dispatchTypes} />
        </section>

        <section className="p-4 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Courses</h2>
          <Courses state={courses} dispatch={dispatchCourses} />
        </section>

        <section className="p-4 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Course Offerings</h2>
          <Offerings
            state={offerings}
            dispatch={dispatchOfferings}
            courses={courses}
            types={types}
          />
        </section>

        <section className="p-4 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Offerings (Filter)</h2>
          <OfferingsFiltered
            offerings={offerings}
            courses={courses}
            types={types}
          />
        </section>

        <section className="p-4 bg-white rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Student Registrations</h2>
          <Registrations
            offerings={offerings}
            courses={courses}
            types={types}
            state={registrations}
            dispatch={dispatchRegistrations}
          />
        </section>
      </main>

      <footer className="max-w-5xl mx-auto mt-6 text-center text-sm text-gray-500">
        Data is stored locally in your browser.
      </footer>
    </div>
  );
}
