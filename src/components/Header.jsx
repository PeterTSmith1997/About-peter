import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col items-center text-center p-6 bg-primary-light shadow-md">
      {/* Profile Image */}
      <img
        src="PeterFinalEdits003.jpg" // Replace with your actual profile image path
        alt="Profile of Peter Smith"
        className="w-28 h-28 rounded-full border-4 border-primary shadow-lg"
      />

      {/* Name and Title */}
      <h1 className="text-3xl font-bold text-primary-dark mt-4">Peter Smith</h1>
      <h2 className="text-lg text-gray-700">Ph.D. Student</h2>
      <p className="text-sm text-gray-500">Northumbria University</p>

      {/* Email */}
      <a
        href="mailto:peter.t.smith@northumbria.ac.uk"
        className="text-primary hover:underline mt-2"
      >
        peter.t.smith@northumbria.ac.uk
      </a>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-4">
        <a
          href="https://scholar.google.com/citations?user=dj7MTYsAAAAJ&hl=en"
          className="text-primary hover:text-primary-dark transition duration-200"
          aria-label="Google Scholar Profile"
        >
          <i className="fab fa-google fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/peter-smith"
          className="text-primary hover:text-primary-dark transition duration-200"
          aria-label="LinkedIn Profile"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
