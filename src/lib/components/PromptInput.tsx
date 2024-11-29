// src/components/PromptInput.tsx

import React from "react";
import { Label } from "@/lib//components/ui/label";
import { Textarea } from "@/lib/components/ui/textarea";

interface PromptInputProps {
  prompt: string;
  onPromptChange: (newPrompt: string) => void;
}

const PromptInput: React.FC<PromptInputProps> = ({
  prompt,
  onPromptChange,
}) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-md shadow-sm border border-gray-200 dark:border-gray-600 p-4">
      <Label
        htmlFor="prompt"
        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        Prompt
      </Label>
      <Textarea
        id="prompt"
        placeholder="Describe the issue..."
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        className="mt-2 h-48 bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
      />
    </div>
  );
};

export default PromptInput;
