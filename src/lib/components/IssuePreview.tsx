// packages/component-library/src/components/IssuePreview.tsx

import React from "react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { cn } from "@/lib/utils"; // Ensure you have a utility for classNames

interface IssueData {
  title: string;
  priority: string;
  estimated_time: string;
  labels: string[];
  description: string;
  assignees?: string[];
}

interface IssuePreviewProps {
  issueData: IssueData;
}

const IssuePreview: React.FC<IssuePreviewProps> = ({ issueData }) => {
  return (
    <div
      className={cn(
        "p-6 rounded-md shadow-md transition-colors duration-300",
        "bg-white border border-gray-300 text-gray-900",
        "dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
      )}
    >
      <h2 className="text-2xl font-semibold mb-4">{issueData.title}</h2>

      {/* Priority Badge */}
      <Badge
        variant="destructive"
        className={cn("mb-4", getPriorityColor(issueData.priority))}
      >
        {issueData.priority.toUpperCase()}
      </Badge>

      {/* Estimated Time */}
      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
        <span className="font-medium">Estimated Time:</span>{" "}
        {issueData.estimated_time}
      </div>

      {/* Labels */}
      {issueData.labels.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {issueData.labels.map((label) => (
            <Badge
              key={label}
              className={cn(
                "px-2 py-1 text-xs font-medium",
                "bg-gray-200 text-gray-700",
                "dark:bg-gray-600 dark:text-gray-200"
              )}
            >
              {label}
            </Badge>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        {issueData.description}
      </p>

      {/* Assignees */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Assignees:
        </h3>
        {issueData.assignees && issueData.assignees.length > 0 ? (
          <div className="flex space-x-2">
            {issueData.assignees.map((assignee) => (
              <Avatar
                key={assignee}
                className="bg-indigo-500 dark:bg-indigo-600"
              >
                <AvatarFallback>
                  {assignee.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        ) : (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            No assignees
          </span>
        )}
      </div>
    </div>
  );
};

// Helper function to determine priority color
const getPriorityColor = (priority: string): string => {
  switch (priority.toLowerCase()) {
    case "low":
      return "bg-green-500 dark:bg-green-600";
    case "medium":
      return "bg-yellow-500 dark:bg-yellow-600";
    case "high":
      return "bg-orange-500 dark:bg-orange-600";
    case "critical":
      return "bg-red-500 dark:bg-red-600";
    default:
      return "bg-gray-500 dark:bg-gray-600";
  }
};

IssuePreview.displayName = "IssuePreview";

export default IssuePreview;
