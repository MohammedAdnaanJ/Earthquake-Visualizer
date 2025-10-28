import React from "react";

const Button = ({ onClick, selected, label }) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-2 rounded-md font-medium ${
        selected === label
          ? "bg-blue-600 text-white"
          : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-50"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
