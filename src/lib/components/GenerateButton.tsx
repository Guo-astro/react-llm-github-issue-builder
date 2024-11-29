// packages/component-library/src/components/GenerateButton.tsx

import React from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react"; // Using lucide-react for icons

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
      className={`w-full flex items-center justify-center ${
        loading ? "cursor-not-allowed" : ""
      } transition-colors duration-200`}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin text-current" />
          Generating...
        </>
      ) : (
        "Generate Structured Issue"
      )}
    </Button>
  );
};

GenerateButton.displayName = "GenerateButton";

export default GenerateButton;
