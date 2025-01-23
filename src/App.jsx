import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Research from "./components/Research";
import News from "./components/News";
import Publications from "./components/Publications";
import Business from "./components/business";
import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="w-full px-4 py-6 bg-primary-light">
        <About />
        <Research />
        <News />
        <Publications />
        <Business />
      </main>
    </div>
  );
}

export default App;
