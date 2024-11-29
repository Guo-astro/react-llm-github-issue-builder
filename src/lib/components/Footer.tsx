// packages/component-library/src/components/ErrorDisplay.tsx

import React from "react";

interface ErrorDisplayProps {
  error: string | null;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  if (!error) return null;

  return (
    <div className="mt-4">
      <div className="flex items-center p-4 bg-red-50 dark:bg-red-900 rounded-md shadow-sm">
        <svg
          className="w-5 h-5 text-red-500 dark:text-red-400 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>
        <span className="text-sm font-medium text-red-700 dark:text-red-300">
          {error}
        </span>
      </div>
    </div>
  );
};

ErrorDisplay.displayName = "ErrorDisplay";

export default ErrorDisplay;
