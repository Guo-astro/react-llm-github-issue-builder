// packages/example-app/src/components/ModelSelector.tsx

import React from "react";
import * as Select from "@radix-ui/react-select";

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
      <Select.Trigger className="select-trigger">
        <Select.Value placeholder="Select a model" />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="select-content">
          <Select.ScrollUpButton className="select-scroll-button">
            ▲
          </Select.ScrollUpButton>
          <Select.Viewport>
            {/* Correct Usage: Wrap Select.Label within Select.Group */}
            <Select.Group>
              <Select.Label className="select-label">
                Available Models
              </Select.Label>
              {availableModels.map((model) => (
                <Select.Item key={model} value={model} className="select-item">
                  <Select.ItemText>{model}</Select.ItemText>
                  <Select.ItemIndicator className="select-item-indicator">
                    ✔️
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="select-scroll-button">
            ▼
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default ModelSelector;
