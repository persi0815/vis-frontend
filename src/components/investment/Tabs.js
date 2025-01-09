import React from "react";
import { Link, useLocation } from "react-router-dom";

const Tabs = ({ tabs }) => {
  const location = useLocation();

  return (
    <div className="flex justify-center space-x-6 mb-6">
      {tabs.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`px-6 py-4 font-medium border-b-4 transition-colors duration-200 text-lg ${
            location.pathname === path
              ? "border-blue-500 text-blue-500 dark:text-blue-300"
              : "border-transparent text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-500"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
