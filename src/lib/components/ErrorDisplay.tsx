// packages/component-library/src/components/ErrorDisplay.tsx

import React from "react";

interface ErrorDisplayProps {
  error: string | null;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  if (!error) return null;

  return (
    <div className="text-sm text-red-500 dark:text-red-400 mt-4">
      Error: {error}
    </div>
  );
};

ErrorDisplay.displayName = "ErrorDisplay";

export default ErrorDisplay;
