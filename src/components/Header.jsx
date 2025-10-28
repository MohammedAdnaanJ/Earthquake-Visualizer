import React from "react";

const Header = ({ darkMode, setDarkMode }) => {
  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <header className="bg-gray-900 dark:bg-gray-800 text-white p-4 shadow-md flex justify-between items-center">
      <div>
        <h1 className="text-md md:text-2xl font-semibold">
          🌍 Earthquake Visualizer
        </h1>
        <p className="pl-6 md:pl-10 text-gray-400 text-xs md:text-lg">
          Live global earthquake data from USGS
        </p>
      </div>

      <button
        onClick={handleDarkMode}
        className="bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm transition p-1 md:px-2 md:py-2"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
