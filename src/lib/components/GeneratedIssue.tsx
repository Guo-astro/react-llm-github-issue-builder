// packages/component-library/src/components/GeneratedIssue.tsx

import React from "react";
import { Card } from "./ui/card";

interface GeneratedIssueProps {
  output: string;
  stats: string;
  error: string | null;
}

const GeneratedIssue: React.FC<GeneratedIssueProps> = ({
  output,
  stats,
  error,
}) => {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
        Generated Issue
      </h3>
      <div
        id="output"
        className="border rounded-md bg-gray-50 dark:bg-gray-700 p-3 text-sm overflow-auto"
        dangerouslySetInnerHTML={{ __html: output }}
      />
      {stats && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">{stats}</p>
      )}
      {error && (
        <div className="text-sm text-red-500 dark:text-red-400 mt-4">
          Error: {error}
        </div>
      )}
    </Card>
  );
};

GeneratedIssue.displayName = "GeneratedIssue";

export default GeneratedIssue;
