// packages/example-app/src/components/IssueOutput.tsx

import React from "react";
import JSONSchemaEditor from "@/lib/components/JSONSchemaEditor";
import GeneratedIssue from "@/lib/components/GeneratedIssue";

interface IssueOutputProps {
  schema: string;
  onSchemaChange: (value: string) => void;
  output: string;
  stats: string;
  error: string | null;
}

const IssueOutput: React.FC<IssueOutputProps> = ({
  schema,
  onSchemaChange,
  output,
  stats,
  error,
}) => {
  return (
    <div className="space-y-4">
      {/* JSON Schema Editor */}
      <JSONSchemaEditor schema={schema} onSchemaChange={onSchemaChange} />

      {/* Generated Issue Output */}
      <GeneratedIssue output={output} stats={stats} error={error} />
    </div>
  );
};

export default IssueOutput;
