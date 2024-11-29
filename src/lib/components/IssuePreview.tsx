// packages/component-library/src/components/IssuePreview.tsx

import React from "react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";

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
    <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        {issueData.title}
      </h2>

      {/* Priority Badge */}
      <Badge
        variant="destructive"
        className={getPriorityColor(issueData.priority)}
      >
        {issueData.priority.toUpperCase()}
      </Badge>

      {/* Estimated Time */}
      <div className="mt-4">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Estimated Time: {issueData.estimated_time}
        </span>
      </div>

      {/* Labels */}
      <div className="mt-4 flex flex-wrap gap-2">
        {issueData.labels.map((label) => (
          <Badge
            key={label}
            className={`bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200`}
          >
            {label}
          </Badge>
        ))}
      </div>

      {/* Description */}
      <p className="mt-6 text-gray-700 dark:text-gray-300">
        {issueData.description}
      </p>

      {/* Assignees */}
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">
          Assignees:
        </h3>
        {issueData.assignees && issueData.assignees.length > 0 ? (
          <div className="flex space-x-2 mt-2">
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
