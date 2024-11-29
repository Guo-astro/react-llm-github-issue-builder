// packages/example-app/src/components/IssueForm.tsx

import React from "react";
import PromptInput from "@/lib/components/PromptInput";
import GenerateButton from "@/lib/components/GenerateButton";
import IssuePreview from "@/lib/components/IssuePreview";

interface IssueFormProps {
  prompt: string;
  onPromptChange: (value: string) => void;
  onGenerate: () => void;
  loading: boolean;
  issueData: any; // Replace 'any' with 'IssueData | null' if imported
}

const IssueForm: React.FC<IssueFormProps> = ({
  prompt,
  onPromptChange,
  onGenerate,
  loading,
  issueData,
}) => {
  return (
    <div className="space-y-4">
      {/* Prompt Input */}
      <PromptInput prompt={prompt} onPromptChange={onPromptChange} />

      {/* Generate Button */}
      <GenerateButton onClick={onGenerate} loading={loading} />

      {/* Issue Preview */}
      {issueData && <IssuePreview issueData={issueData} />}
    </div>
  );
};

export default IssueForm;
