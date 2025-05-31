import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import "../styles.css";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import HomePage from "./content/pages/home_page";

const Projects = () => <div className="p-6 text-center">Projects Page</div>;
const Games = () => <div className="p-6 text-center">Games Page</div>;
const Suggestions = () => <div className="p-6 text-center">Suggestions Page</div>;

const lightThemePink = "#FFD6DD"; // Light theme pink color
const darkTheme = "#111827"; // Dark theme color

const SideNavigation = ({ darkMode, setDarkMode, isMobile, menuOpen, setMenuOpen }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "About Me", icon: "👋" },
    { path: "/projects", label: "Projects", icon: "💼" },
    { path: "/games", label: "Games", icon: "🎮" },
    { path: "/suggestions", label: "Suggestions", icon: "💡" }
  ];

  if (isMobile) {
    return (
      <>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`fixed top-4 left-4 z-50 p-3 rounded-full shadow-lg ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          }`}
        >
          {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>

        {/* Mobile Overlay Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setMenuOpen(false)}>
            <div
              className={`fixed left-0 top-0 h-full w-64 transform transition-transform duration-300 ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              } shadow-lg`}
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 pt-20">
                {/* Logo/Flower */}
                <div className="flex justify-center mb-8">
                  <img src="flower.png" alt="Flower" className="h-12" />
                </div>

                {/* Navigation Items */}
                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        location.pathname === item.path
                          ? darkMode
                            ? 'bg-pink-200 text-gray-900'
                            : 'bg-gray-900 text-white'
                          : darkMode
                            ? 'text-pink-200 hover:bg-gray-800'
                            : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* Theme Toggle */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`w-full flex items-center justify-center space-x-2 p-3 rounded-lg ${
                      darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {darkMode ? <FaSun /> : <FaMoon />}
                    <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Desktop Side Navigation
  return (
    <div
      className={`fixed left-0 top-0 h-full w-64 z-40 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      } shadow-lg`}
    >
      <div className="p-6">
        {/* Logo/Flower */}
        <div className="flex justify-center mb-8">
          <img src="flower.png" alt="Flower" className="h-12" />
        </div>

        {/* Navigation Items */}
        <nav className="space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? darkMode
                    ? 'bg-pink-200 text-gray-900'
                    : 'bg-gray-900 text-white'
                  : darkMode
                    ? 'text-pink-200 hover:bg-gray-800'
                    : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-full flex items-center justify-center space-x-2 p-3 rounded-lg transition-colors ${
              darkMode 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

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
        className="min-h-screen flex"
        style={{ 
          color: darkMode ? lightThemePink : darkTheme, 
          backgroundColor: darkMode ? darkTheme : lightThemePink 
        }}
      >
        <SideNavigation 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          isMobile={isMobile}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        {/* Main Content Area */}
        <div className={`flex-1 ${isMobile ? '' : 'ml-64'} flex flex-col items-center`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/games" element={<Games />} />
            <Route path="/suggestions" element={<Suggestions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Portfolio;