import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col items-center text-center p-6 bg-gray-50 shadow-md">
      <img
        src="https://via.placeholder.com/100" // Replace with your actual profile image
        alt="Profile"
        className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg"
      />
      <h1 className="text-2xl font-bold mt-4">Peter Smith</h1>
      <h2 className="text-lg text-gray-600">Ph.D. Student</h2>
      <p className="text-sm text-gray-500">Northumbria University</p>
      <a
        href="mailto:peter.t.smith@northumbria.ac.uk"
        className="text-blue-500 mt-2"
      >
        peter.t.smith@northumbria.ac.uk
      </a>
      <div className="flex space-x-4 mt-3">
        <a
          href="https://scholar.google.com/citations?user=dj7MTYsAAAAJ&hl=en"
          className="text-gray-500 hover:text-gray-800"
        >
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-800">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
