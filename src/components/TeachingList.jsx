// File: /src/components/TeachingList.jsx
import React, { useEffect, useState } from "react";

export default function TeachingList() {
  const [teaching, setTeaching] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/teaching.json")
      .then((res) => res.json())
      .then((data) => setTeaching(data))
      .catch((err) => console.error("Error loading teaching data:", err));
  }, []);

  if (!teaching.length) return <p>Loading teaching information…</p>;

  // Optional: show only first 2 items unless expanded
  const visibleItems = showAll ? teaching : teaching.slice(0, 2);

  return (
    <section className="w-full sm:w-[70%] mx-auto p-6 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Teaching</h2>
      <ul className="space-y-4 text-gray-700">
        {visibleItems.length === 0 ? (
          <li>No teaching information available.</li>
        ) : (
          visibleItems.map((course, index) => (
            <div key={index}>
              <li className="flex flex-col space-y-1">
                <span className="text-sm text-gray-500">{`${course.year} — Semester ${course.semester}`}</span>
                <span className="font-medium text-gray-800">
                  {course.title}
                </span>
                <span className="text-gray-600">{course.summary}</span>
              </li>
              {index !== visibleItems.length - 1 && (
                <hr className="my-2 border-gray-300" />
              )}
            </div>
          ))
        )}
      </ul>
      {teaching.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 text-blue-500 hover:underline text-sm"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
}
