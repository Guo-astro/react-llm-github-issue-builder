// App.tsx
import React, { useState } from "react";
import "highlight.js/styles/github.css"; // Highlight.js theme
import Footer from "@/lib/components/Footer";
import MainContent from "@/lib/components/MainContent";
import Navbar from "@/lib/components/Navbar";
import useMLCEngine from "@/hooks/useMLCEngine";

interface IssueData {
  title: string;
  priority: string;
  estimated_time: string;
  labels: string[];
  description: string;
  assignees?: string[];
}

export const LLMGHIssueGenerator: React.FC = () => {
  // Custom Hooks
  const { availableModels, selectedModel, setSelectedModel, generateIssue } =
    useMLCEngine();

  // State variables
  const [prompt, setPrompt] =
    useState<string>(`Create a detailed issue for the following problem:

The login page is not properly handling password reset requests. Users report that they are not receiving the password reset emails, and when they do receive them, the reset links are sometimes expired. This is affecting about 20% of our users and needs immediate attention.

Please include appropriate labels, priority level, and time estimation.`);
  const [schema, setSchema] = useState<string>(`{
  "title": "GitHubIssue",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "The title of the issue"
    },
    "description": {
      "type": "string",
      "description": "Detailed description of the issue"
    },
    "labels": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": ["bug", "enhancement", "documentation", "high-priority", "security"]
      },
      "description": "Labels to categorize the issue"
    },
    "priority": {
      "type": "string",
      "enum": ["low", "medium", "high", "critical"],
      "description": "Priority level of the issue"
    },
    "assignees": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "maxItems": 3,
      "description": "GitHub usernames of assigned users (max 3)"
    },
    "estimated_time": {
      "type": "string",
      "pattern": "^[0-9]+[hdwm]$",
      "description": "Estimated time to resolve (e.g., '2h', '3d', '1w', '1m')"
    }
  },
  "required": [
    "title",
    "description",
    "priority",
    "labels"
  ]
}`);
  const [output, setOutput] = useState<string>("");
  const [stats, setStats] = useState<string>("");
  const [issueData, setIssueData] = useState<IssueData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Handle generate button click
  const handleGenerate = async () => {
    await generateIssue(
      prompt,
      schema,
      setOutput,
      setStats,
      setIssueData,
      setError,
      setLoading
    );
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Navbar */}
      <Navbar
        availableModels={availableModels}
        selectedModel={selectedModel}
        onModelChange={setSelectedModel}
      />

      {/* Main Content */}
      <MainContent
        prompt={prompt}
        onPromptChange={setPrompt}
        schema={schema}
        onSchemaChange={setSchema}
        onGenerate={handleGenerate}
        output={output}
        stats={stats}
        error={error}
        issueData={issueData}
        loading={loading}
      />

      {/* Footer */}
      <Footer error={null} />
    </div>
  );
};
