import React, { useEffect, useState } from "react";

const Publications = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetch("/publications.json")
      .then((response) => response.json())
      .then((data) => {
        setPublications(data.publications);
      })
      .catch((error) => {
        console.error("Error loading publications:", error);
      });
  }, []);

  return (
    <section className="p-6 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Publications</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {publications.length === 0 ? (
          <li>No publications found.</li>
        ) : (
          publications.map((pub) => (
            <li key={pub.citationKey}>
              <a
                href={pub.entryTags.url}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {pub.entryTags.title}
              </a>
              <br />
              <span>{pub.entryTags.booktitle}</span>
              <br />
              <span className="italic text-gray-600">
                Authors: {pub.entryTags.author}
              </span>
              <br />
              <span className="text-gray-600">Year: {pub.entryTags.year}</span>
              <br />
              <span className="text-gray-600">Publisher: {pub.entryTags.publisher}</span>
              <br />
              <span className="text-gray-600">
                DOI:{" "}
                <a
                  href={`https://doi.org/${pub.entryTags.doi}`}
                  className="text-blue-500 hover:underline"
                >
                  {pub.entryTags.doi}
                </a>
              </span>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default Publications;
