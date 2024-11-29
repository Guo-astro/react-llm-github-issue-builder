// src/components/MainContent.tsx

import React from "react";
import IssuePreview from "./IssuePreview";
import JSONSchemaEditor from "./JSONSchemaEditor";
import GeneratedIssue from "./GeneratedIssue";
import { Button } from "@/lib/components/ui/button"; // shadcn/ui Button
import { Loader2 } from "lucide-react"; // Icon for loading state
import clsx from "clsx"; // Utility for conditional classNames

interface IssueData {
  title: string;
  priority: string;
  estimated_time: string;
  labels: string[];
  description: string;
  assignees?: string[];
}

interface MainContentProps {
  prompt: string;
  onPromptChange: (newPrompt: string) => void;
  schema: string;
  onSchemaChange: (newSchema: string) => void;
  onGenerate: () => void;
  output: string;
  stats: string;
  error: string | null;
  issueData: IssueData | null;
  loading: boolean;
}

const MainContent: React.FC<MainContentProps> = ({
  prompt,
  onPromptChange,
  schema,
  onSchemaChange,
  onGenerate,
  output,
  stats,
  error,
  issueData,
  loading,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
        <div className="flex items-center space-x-2">
          {/* Icon */}
          <svg
            className="w-6 h-6 text-blue-600 dark:text-blue-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
          </svg>
          <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            New Issue
          </span>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Prompt Textarea */}
          <div
            className={clsx(
              "rounded-md shadow-sm p-4 transition-colors duration-200",
              "bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600"
            )}
          >
            <label
              htmlFor="prompt"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Prompt
            </label>
            <textarea
              id="prompt"
              placeholder="Describe the issue..."
              value={prompt}
              onChange={(e) => onPromptChange(e.target.value)}
              className={clsx(
                "mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring-2",
                "bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400",
                "border border-gray-300 dark:border-gray-500",
                "focus:ring-indigo-500 dark:focus:ring-indigo-400",
                "h-48 resize-none", // Fixed height with no resizing
                loading ? "cursor-not-allowed" : ""
              )}
              rows={12}
              disabled={loading}
              aria-label="Prompt input"
              aria-describedby="prompt-description"
            ></textarea>
            <p
              className="mt-2 text-xs text-gray-500 dark:text-gray-400"
              id="prompt-description"
            >
              Enter a detailed description of the issue you want to generate.
            </p>
          </div>

          {/* Generate Button */}
          <Button
            onClick={onGenerate}
            disabled={loading}
            className={clsx(
              "w-full flex items-center justify-center py-3",
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700",
              "text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            )}
          >
            {loading ? (
              <>
                <Loader2
                  className="w-4 h-4 mr-2 animate-spin"
                  aria-hidden="true"
                />
                Generating...
              </>
            ) : (
              "Generate Structured Issue"
            )}
          </Button>

          {/* Issue Preview */}
          {issueData && <IssuePreview issueData={issueData} />}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* JSON Schema Editor */}
          <JSONSchemaEditor schema={schema} onSchemaChange={onSchemaChange} />

          {/* Generated Issue */}
          <GeneratedIssue output={output} stats={stats} error={error} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
