import React from "react";

const YearToggle = ({ years, selectedYear, handleYearToggle }) => (
  <div className="w-1/4 space-y-3">
    {years.map((year) => (
      <button
        key={year}
        onClick={() => handleYearToggle(year)}
        className={`w-full px-6 py-3 text-left font-medium rounded-lg transition-all duration-200 text-lg ${
          selectedYear === year
            ? "text-white bg-blue-500"
            : "text-gray-700 dark:text-gray-300 bg-transparent"
        }`}
      >
        {year}
      </button>
    ))}
  </div>
);

export default YearToggle;
