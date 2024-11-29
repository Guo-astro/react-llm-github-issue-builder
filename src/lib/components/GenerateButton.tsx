// packages/component-library/src/components/GenerateButton.tsx

import React from "react";
import { Button } from "./ui/button";

interface GenerateButtonProps {
  onClick: () => void;
  loading: boolean;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({
  onClick,
  loading,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={loading}
      variant={loading ? "secondary" : "default"}
      className={`w-full ${loading ? "cursor-not-allowed" : ""}`}
    >
      {loading ? "Generating..." : "Generate Structured Issue"}
    </Button>
  );
};

GenerateButton.displayName = "GenerateButton";

export default GenerateButton;
