// packages/component-library/src/components/OutputDisplay.tsx

import React from "react";
import { Card } from "./ui/card";

interface OutputDisplayProps {
  output: string;
  stats: string;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ output, stats }) => {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
        Output
      </h3>
      <div
        id="output"
        className="border rounded-md bg-gray-50 dark:bg-gray-700 p-3 text-sm overflow-auto"
        dangerouslySetInnerHTML={{ __html: output }}
      />
      {stats && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">{stats}</p>
      )}
    </Card>
  );
};

OutputDisplay.displayName = "OutputDisplay";

export default OutputDisplay;
