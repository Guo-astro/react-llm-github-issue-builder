// packages/example-app/src/components/Header.tsx

import React from "react";

const Header: React.FC = () => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
      <div className="flex items-center space-x-2">
        {/* Icon */}
        <svg
          className="octicon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="currentColor"
        >
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
        </svg>
        <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          New Issue
        </span>
      </div>
    </div>
  );
};

export default Header;
