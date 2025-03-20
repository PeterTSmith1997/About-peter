import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ResearchPage from "./pages/ResearchPage";
import NewsPage from "./pages/NewsPage";
import PublicationsPage from "./pages/PublicationsPage";
import BusinessPage from "./pages/BusinessPage";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <main className="w-full px-4 py-6 bg-primary-light">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/business" element={<BusinessPage />} />
          </Routes>
        </main>
      </div>
      {/* SpeedInsights placed outside Routes to track performance across the entire app */}
      <SpeedInsights />
    </Router>
  );
}

export default App;
