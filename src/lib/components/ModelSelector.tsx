// packages/example-app/src/components/ModelSelector.tsx

import React from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"; // Using Radix Icons
import clsx from "clsx"; // Utility for conditional classNames

interface ModelSelectorProps {
  availableModels: string[];
  selectedModel: string;
  onModelChange: (model: string) => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({
  availableModels,
  selectedModel,
  onModelChange,
}) => {
  return (
    <Select.Root value={selectedModel} onValueChange={onModelChange}>
      <Select.Trigger
        className={clsx(
          "inline-flex items-center justify-between px-4 py-2 border rounded-md shadow-sm",
          "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600",
          "text-gray-700 dark:text-gray-200",
          "hover:bg-gray-50 dark:hover:bg-gray-700",
          "focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400",
          "transition-colors duration-200"
        )}
      >
        <Select.Value placeholder="Select a model" />
        <Select.Icon className="ml-2">
          <ChevronDownIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className={clsx(
            "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg",
            "min-w-[200px] max-h-60 overflow-auto",
            "focus:outline-none"
          )}
        >
          <Select.ScrollUpButton
            className={clsx(
              "flex items-center justify-center h-6 bg-gray-100 dark:bg-gray-700 cursor-default",
              "text-gray-500 dark:text-gray-400"
            )}
          >
            <ChevronUpIcon className="w-4 h-4" />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-2">
            <Select.Group>
              <Select.Label
                className={clsx(
                  "px-2 py-1 text-xs text-gray-500 dark:text-gray-400",
                  "font-semibold"
                )}
              >
                Available Models
              </Select.Label>
              {availableModels.map((model) => (
                <Select.Item
                  key={model}
                  value={model}
                  className={clsx(
                    "flex items-center justify-between px-2 py-1 rounded-md",
                    "text-gray-700 dark:text-gray-200",
                    "hover:bg-gray-100 dark:hover:bg-gray-700",
                    "focus:bg-gray-100 dark:focus:bg-gray-700",
                    "cursor-pointer"
                  )}
                >
                  <Select.ItemText>{model}</Select.ItemText>
                  <Select.ItemIndicator className="text-indigo-600 dark:text-indigo-400">
                    <CheckIcon className="w-4 h-4" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton
            className={clsx(
              "flex items-center justify-center h-6 bg-gray-100 dark:bg-gray-700 cursor-default",
              "text-gray-500 dark:text-gray-400"
            )}
          >
            <ChevronDownIcon className="w-4 h-4" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default ModelSelector;
