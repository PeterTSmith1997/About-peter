import React from "react";
import TeachingList from "../components/TeachingList";

export default function TeachingPage() {
  return (
    <section className="w-full sm:w-[70%] mx-auto p-6 bg-white shadow-md rounded-lg mt-4">
      <header>
        <h1>Teaching</h1>
        <p className="lead">
          A summary of current and recent teaching activities, modules, and
          workshops.
        </p>
      </header>

      <TeachingList />

      <footer>
        <p>
          For related work and research, see the{" "}
          <a href="/research">Research</a> page.
        </p>
      </footer>
    </section>
  );
}
