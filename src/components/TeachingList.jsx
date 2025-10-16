import React, { useEffect, useState } from "react";

export default function TeachingList() {
  const [teaching, setTeaching] = useState([]);

  useEffect(() => {
    fetch("/teaching.json")
      .then((res) => res.json())
      .then((data) => setTeaching(data))
      .catch((err) => console.error("Error loading teaching data:", err));
  }, []);

  if (!teaching.length) return <p>Loading teaching information…</p>;

  const grouped = teaching.reduce((acc, course) => {
    const key = `${course.year}-S${course.semester}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(course);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(grouped)
        .sort()
        .map((key) => (
          <section key={key}>
            <h2>{key.replace("-", " — Semester ")}</h2>
            {grouped[key].map((course, i) => (
              <div key={i} className="mb-4">
                <h3>{course.title}</h3>
                <p>{course.summary}</p>
                {course.link && (
                  <p>
                    <a href={course.link}>Read more →</a>
                  </p>
                )}
              </div>
            ))}
          </section>
        ))}
    </div>
  );
}
