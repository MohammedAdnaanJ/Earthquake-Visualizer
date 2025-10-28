import { useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import MapView from "./components/MapView";
import LoadingSpinner from "./components/LoadingSpinner";
import useEarthquakeData from "./hooks/useEarthquakeData";
import QuakeList from "./components/QuakeList";

const App = () => {
  const { earthquakes, loading, error } = useEarthquakeData();
  const [selected, setSelected] = useState("ALL");
  const [selectedQuake, setSelectedQuake] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Apply filter based on selection
  const filteredQuakes = earthquakes.filter((q) => {
    const mag = q.properties.mag;
    if (selected === "3") return mag >= 3;
    if (selected === "5") return mag >= 5;
    return true; // ALL
  });

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Filter selected={selected} setSelected={setSelected} />

        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1">
            {loading && <LoadingSpinner />}
            {error && (
              <div className="flex justify-center items-center text-red-500 h-full">
                {error}
              </div>
            )}
            {!loading && !error && (
              <MapView
                earthquakes={filteredQuakes}
                selectedQuake={selectedQuake}
                darkMode={darkMode}
              />
            )}
          </div>

          <QuakeList
            earthquakes={filteredQuakes}
            setSelectedQuake={setSelectedQuake}
          />
        </div>

        <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-center p-2 text-sm">
          Data from{" "}
          <a
            href="https://earthquake.usgs.gov/"
            className="text-blue-500 hover:underline"
          >
            USGS
          </a>
        </footer>
      </div>
    </div>
  );
};

export default App;
