import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../styles.css";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import HomePage from "./content/pages/home_page";

const Projects = () => <div className="p-6 text-center">Projects Page</div>;
const Games = () => <div className="p-6 text-center">Games Page</div>;
const Suggestions = () => <div className="p-6 text-center">Suggestions Page</div>;

const lightThemePink = "#FFD6DD"; // Light theme pink color
const darkTheme = "#111827"; // Dark theme color

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div
        className={'min-h-screen flex flex-col items-center'}
        style={{ color: darkMode ? lightThemePink : darkTheme, backgroundColor: darkMode ? darkTheme : lightThemePink }}
      >

        {/* Fixed Header Toolbar */}
        <div
          className={
            darkMode
              ? "fixed top-0 left-0 right-0 text-black shadow-none flex items-center justify-end px-6 py-3 z-50"
              : "fixed top-0 left-0 right-0  text-black shadow-none flex items-center justify-end px-6 py-3 z-50"
          }
          style={{ backgroundColor: darkMode ? lightThemePink : "#FAFAFA" }}
        >
          <div className="flex items-center space-x-6 absolute left-6">
            {isMobile ? (
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            ) : (
              <nav className="flex space-x-6">
                <a href="/" className="hover:underline">
                  About Me
                </a>
                <a href="/projects" className="hover:underline">
                  Projects
                </a>
                <a href="/games" className="hover:underline">
                  Games
                </a>
                <a href="/suggestions" className="hover:underline">
                  Suggestions
                </a>
              </nav>
            )}
          </div>

          <img src="flower.png" alt="Flower" className="h-8 absolute left-1/2 transform -translate-x-1/2" />

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={
              darkMode
                ? "p-2 rounded-full bg-[#FAFAFA]"
                : "p-2 rounded-full bg-gray-900"
            }
          >
            {darkMode ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-[#FAFAFA]" />
            )}
          </button>
        </div>

        {menuOpen && isMobile && (
          <div className="absolute top-16 left-0 right-0 bg-[#FAFAFA] text-black shadow-md p-4 z-50">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:underline" onClick={() => setMenuOpen(false)}>
                About Me
              </Link>
              <Link to="/projects" className="hover:underline" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
              <Link to="/games" className="hover:underline" onClick={() => setMenuOpen(false)}>
                Games
              </Link>
              <Link to="/suggestions" className="hover:underline" onClick={() => setMenuOpen(false)}>
                Suggestions
              </Link>
            </nav>
          </div>
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/games" element={<Games />} />
          <Route path="/suggestions" element={<Suggestions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Portfolio;
