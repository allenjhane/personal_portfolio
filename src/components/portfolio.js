import React, { useState, useEffect } from "react";
import "../styles.css";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import HomePage from "./content/pages/home_page";
import ProjectsPage from "./content/pages/projects_page";
import GamesPage from "./content/pages/games_page";
import SuggestionsPage from "./content/pages/suggestions_page";
import FooterInfo from "./footer/footer_info";

const lightThemePink = "#FFD6DD"; // Light theme pink color
const darkTheme = "#111827"; // Dark theme color

const SideNavigation = ({ darkMode, setDarkMode, isMobile, menuOpen, setMenuOpen, activeSection }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { id: "about", label: "About Me" },
    { id: "projects", label: "Projects"},
    { id: "games", label: "Games"},
    { id: "suggestions", label: "Suggestions"}
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
                    <div
                      style={{
                        clipPath: (activeSection === item.id || hoveredItem === item.id)
                          ? 'polygon(0% 12px, 12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%)'
                          : 'none',
                        padding: (activeSection === item.id || hoveredItem === item.id) ? '4px' : '0px',
                        background: (activeSection === item.id)
                          ? darkMode 
                            ? 'rgb(160, 50, 244)'    
                            : 'rgb(160, 50, 244)'    
                          : 'transparent'
                      }}
                    >
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        onMouseEnter={() => setHoveredItem(item.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 transition-colors ${
                          activeSection === item.id
                            ? darkMode
                              ? 'bg-gray-800 text-white'
                              : 'bg-gray-900 text-white'
                            : darkMode
                              ? 'text-gray-700 hover:bg-gray-100'
                              : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        style={{
                          clipPath: (activeSection === item.id || hoveredItem === item.id)
                            ? 'polygon(0% 12px, 12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%)'
                            : 'none'
                        }}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    </div>
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
            <div
              style={{
                clipPath: (activeSection === item.id || hoveredItem === item.id)
                  ? 'polygon(0% 12px, 12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%)'
                  : 'none',
                padding: (activeSection === item.id || hoveredItem === item.id) ? '4px' : '0px',
                background: (activeSection === item.id)
                  ? darkMode 
                    ? 'rgb(160, 50, 244)'    
                    : 'rgb(160, 50, 244)'    
                  : 'transparent'
              }}
            >
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`w-full flex items-center space-x-3 px-4 py-3 transition-colors ${
                  activeSection === item.id
                    ? darkMode
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-900 text-white'
                    : darkMode
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
                style={{
                  clipPath: (activeSection === item.id || hoveredItem === item.id)
                    ? 'polygon(0% 12px, 12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%)'
                    : 'none'
                }}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            </div>
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
        
        <section id="footer">
          <FooterInfo />
        </section>
      </div>
    </div>
  );
};

export default Portfolio;