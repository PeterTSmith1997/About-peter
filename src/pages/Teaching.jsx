import React from "react";
import TeachingList from "../components/TeachingList";

export default function TeachingPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 prose lg:prose-xl">
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
    </main>
  );
}
