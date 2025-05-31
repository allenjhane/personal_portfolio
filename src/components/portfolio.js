import React, { useState, useEffect } from "react";
import "../styles.css";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import HomePage from "./content/pages/home_page";
import ProjectsPage from "./content/pages/projects_page";
import GamesPage from "./content/pages/games_page";
import SuggestionsPage from "./content/pages/suggestions_page";

const lightThemePink = "#FFD6DD"; // Light theme pink color
const darkTheme = "#111827"; // Dark theme color

const SuggestionsSection = () => (
  <div className="min-h-screen flex items-center justify-center p-6">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">Suggestions</h2>
      <p className="text-lg">Have ideas or feedback? Let me know...</p>
    </div>
  </div>
);

const SideNavigation = ({ darkMode, setDarkMode, isMobile, menuOpen, setMenuOpen, activeSection }) => {
  const navItems = [
    { id: "about", label: "About Me", icon: "👋" },
    { id: "projects", label: "Projects", icon: "💼" },
    { id: "games", label: "Games", icon: "🎮" },
    { id: "suggestions", label: "Suggestions", icon: "💡" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    if (isMobile) {
      setMenuOpen(false);
    }
  };

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
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeSection === item.id
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
                    </button>
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
        darkMode ? 'bg-pink-200' : 'bg-white'
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
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === item.id
                  ? darkMode
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-900 text-white'
                  : darkMode
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
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
  const [activeSection, setActiveSection] = useState('about');

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

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ['about', 'projects', 'games', 'suggestions'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
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
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <div className={`flex-1 ${isMobile ? '' : 'ml-64'}`}>
        {/* About Section */}
        <section id="about" className="min-h-screen">
          <HomePage />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen">
          <ProjectsPage />
        </section>

        {/* Games Section */}
        <section id="games" className="min-h-screen">
          <GamesPage />
        </section>

        {/* Suggestions Section */}
        <section id="suggestions" className="min-h-screen">
          <SuggestionsPage />
        </section>
      </div>
    </div>
  );
};

export default Portfolio;