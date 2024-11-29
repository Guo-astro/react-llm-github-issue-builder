// packages/component-library/src/components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
        Made with <span className="mx-1 text-red-500 dark:text-red-400">♥</span>{" "}
        using
        <a
          href="https://webllm.mlc.ai/"
          className="mx-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          MLC Web LLM
        </a>
        &
        <a
          href="https://github.com/huggingface/smollm"
          className="mx-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          SmolLM2
        </a>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
