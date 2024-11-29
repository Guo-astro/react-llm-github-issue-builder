import React from "react";
import IssuePreview from "./IssuePreview";
import JSONSchemaEditor from "./JSONSchemaEditor";
import GeneratedIssue from "./GeneratedIssue";
import { Button } from "@/lib/components/ui/button"; // shadcn/ui Button

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
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex items-center space-x-2">
          <svg
            className="octicon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
          >
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
          </svg>
          <span className="text-xl font-semibold">New Issue</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Prompt Textarea */}
          <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
            <label
              htmlFor="prompt"
              className="block text-sm font-medium text-gray-700"
            >
              Prompt
            </label>
            <textarea
              id="prompt"
              placeholder="Describe the issue..."
              value={prompt}
              onChange={(e) => onPromptChange(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows={12}
            ></textarea>
          </div>

          {/* Generate Button */}
          <Button
            onClick={onGenerate}
            disabled={loading}
            className={`w-full ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {loading ? "Generating..." : "Generate Structured Issue"}
          </Button>

          {/* Issue Preview */}
          {issueData && <IssuePreview issueData={issueData} />}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
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
