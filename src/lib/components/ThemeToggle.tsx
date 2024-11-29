// packages/component-library/src/components/ThemeToggle.tsx

import React, { useContext } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { ThemeContext } from "@/example/context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <MoonIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
      ) : (
        <SunIcon className="h-5 w-5 text-yellow-400" />
      )}
    </button>
  );
};

ThemeToggle.displayName = "ThemeToggle";

export default ThemeToggle;
