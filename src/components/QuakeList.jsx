import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

const getMagnitudeColor = (mag) => {
  if (mag < 3) return "text-green-600 dark:text-green-400";
  if (mag < 5) return "text-yellow-500 dark:text-yellow-400";
  return "text-red-500 dark:text-red-400";
};

const QuakeList = ({ earthquakes, setSelectedQuake }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🔹 Mobile Header Toggle */}
      <div className="absolute right-2 top-20 rounded-lg sm:hidden flex bg-white dark:bg-gray-900 px-4 py-3 dark:border-gray-700 z-1000 sm:p-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 dark:text-gray-100 focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 🔹 Right Sidebar (visible on desktop, slide-in on mobile) */}
      <div
        className={`fixed sm:static top-0 right-0 h-full sm:h-auto sm:w-80 w-72 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 transform transition-transform duration-300 z-1000 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full sm:translate-x-0"
        }`}
      >
        {/* Sidebar Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 md:p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-sm md:text-xl font-bold text-gray-800 dark:text-gray-100">
            Recent Earthquakes
            <span className="ml-2 text-xs md:text-sm font-normal text-gray-500 dark:text-gray-400">
              ({earthquakes.length} events)
            </span>
          </h2>
          {/* Mobile Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="sm:hidden text-gray-800 dark:text-gray-100"
          >
            <X size={22} />
          </button>
        </div>

        {/* Earthquake List */}
        <div className="p-2 md:p-4 space-y-2 md:space-y-3">
          {earthquakes.map((q) => {
            const mag = q.properties.mag;
            const place = q.properties.place;
            const time = new Date(q.properties.time).toLocaleString(undefined, {
              dateStyle: "short",
              timeStyle: "short",
            });

            return (
              <div
                key={q.id}
                onClick={() => {
                  setSelectedQuake(q);
                  setIsOpen(false); // auto-close on click (mobile)
                }}
                className="cursor-pointer border border-gray-200 dark:border-gray-700 p-3 md:p-4 rounded-lg 
                  hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 
                  hover:shadow-md hover:border-blue-200 dark:hover:border-gray-600
                  active:scale-[0.99]"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div className="flex-1">
                    <p className="text-gray-800 dark:text-gray-200 font-medium text-sm md:text-base">
                      {place}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-1">
                      {time}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-semibold text-base md:text-lg px-2 py-1 rounded-md 
                        bg-opacity-10 dark:bg-opacity-20 ${getMagnitudeColor(
                          mag
                        )} 
                        ${mag >= 5 ? "animate-pulse" : ""}`}
                    >
                      M {mag.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🔹 Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-999 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default QuakeList;
