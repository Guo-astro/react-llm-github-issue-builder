// packages/component-library/src/components/JSONSchemaEditor.tsx

import { cn } from "@/lib/utils";
import React from "react";

interface JSONSchemaEditorProps {
  schema: string;
  onSchemaChange: (newSchema: string) => void;
}

const JSONSchemaEditor: React.FC<JSONSchemaEditorProps> = ({
  schema,
  onSchemaChange,
}) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-md shadow-sm border border-gray-200 dark:border-gray-600 p-4">
      <label htmlFor="json-schema">JSON Schema</label>
      <textarea
        id="json-schema"
        value={schema}
        onChange={(e) => onSchemaChange(e.target.value)}
        className={cn(
          "mt-2 h-72 w-full resize-none rounded-md border border-gray-300 bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
        )}
      />
    </div>
  );
};

JSONSchemaEditor.displayName = "JSONSchemaEditor";

export default JSONSchemaEditor;
