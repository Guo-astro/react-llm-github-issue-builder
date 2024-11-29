// packages/component-library/src/components/GeneratedIssue.tsx

import React from "react";
import { Card } from "./ui/card";
import { AlertTriangle } from "lucide-react"; // Using lucide-react for icons
import { cn } from "@/lib/utils"; // Ensure you have a utility for classNames

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
    <Card className="p-6 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Generated Issue
      </h3>

      {/* Output Section */}
      <div
        id="output"
        className={cn(
          "border rounded-md p-4 overflow-auto transition-colors duration-300",
          "border-gray-300 bg-gray-50 text-gray-800",
          "dark:border-gray-600 dark:bg-gray-600 dark:text-gray-100"
        )}
        dangerouslySetInnerHTML={{ __html: output }}
      />
      {/* Statistics Section */}
      {stats && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">{stats}</p>
      )}

      {/* Error Section */}
      {error && (
        <div className="flex items-center text-sm text-red-500 dark:text-red-400 mt-4">
          <AlertTriangle className="w-4 h-4 mr-2" aria-hidden="true" />
          <span>Error: {error}</span>
        </div>
      )}
    </Card>
  );
};

GeneratedIssue.displayName = "GeneratedIssue";

export default GeneratedIssue;
