// src/components/PromptInput.tsx

import React from "react";
import { Label } from "@/lib/components/ui/label";
import { Textarea } from "@/lib/components/ui/textarea";
import { AlertTriangle } from "lucide-react"; // Icon for validation or information
import clsx from "clsx"; // Utility for conditional classNames

interface PromptInputProps {
  prompt: string;
  onPromptChange: (newPrompt: string) => void;
  error?: string; // Optional error message
}

const PromptInput: React.FC<PromptInputProps> = ({
  prompt,
  onPromptChange,
  error,
}) => {
  return (
    <div
      className={clsx(
        "rounded-md shadow-sm p-4 transition-colors duration-200",
        "bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600"
      )}
    >
      <Label
        htmlFor="prompt"
        className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
      >
        Prompt
      </Label>
      <Textarea
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
          error
            ? "border-red-500 dark:border-red-400"
            : "border-gray-300 dark:border-gray-500"
        )}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? "prompt-error" : undefined}
      />
      {error && (
        <p
          className="mt-2 flex items-center text-sm text-red-600 dark:text-red-400"
          id="prompt-error"
        >
          <AlertTriangle className="w-4 h-4 mr-1" aria-hidden="true" />
          {error}
        </p>
      )}
      {/* Optional: Character Count */}
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        {prompt.length} / 500 characters
      </p>
    </div>
  );
};

export default PromptInput;
