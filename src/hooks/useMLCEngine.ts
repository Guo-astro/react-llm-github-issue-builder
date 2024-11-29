// hooks/useMLCEngine.ts
import { useState, useRef, useEffect } from "react";
import { prebuiltAppConfig, CreateMLCEngine, MLCEngine } from "@mlc-ai/web-llm";
import hljs from "highlight.js";

interface Usage {
  extra?: {
    prefill_tokens_per_s?: number;
    decode_tokens_per_s?: number;
  };
}

interface IssueData {
  title: string;
  priority: string;
  estimated_time: string;
  labels: string[];
  description: string;
  assignees?: string[];
}

interface UseMLCEngineReturn {
  availableModels: string[];
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  generateIssue: (
    prompt: string,
    schema: string,
    setOutput: (output: string) => void,
    setStats: (stats: string) => void,
    setIssueData: (data: IssueData | null) => void,
    setError: (error: string | null) => void,
    setLoading: (loading: boolean) => void
  ) => Promise<void>;
}

const useMLCEngine = (): UseMLCEngineReturn => {
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>("");
  const engineRef = useRef<MLCEngine | null>(null);

  // Initialize available models
  useEffect(() => {
    const models = prebuiltAppConfig.model_list
      .filter((m) => m.model_id.startsWith("SmolLM2"))
      .map((m) => m.model_id);
    setAvailableModels(models);
    if (models.length > 0) {
      setSelectedModel(models[0]);
    }
  }, []);

  const generateIssue = async (
    prompt: string,
    schema: string,
    setOutput: (output: string) => void,
    setStats: (stats: string) => void,
    setIssueData: (data: IssueData | null) => void,
    setError: (error: string | null) => void,
    setLoading: (loading: boolean) => void
  ) => {
    setError(null);
    setLoading(true);
    setOutput('<div class="loading">Initializing model...</div>');
    setStats("");
    setIssueData(null);

    try {
      // Initialize MLCEngine if not already initialized
      if (!engineRef.current) {
        engineRef.current = await CreateMLCEngine(selectedModel, {
          initProgressCallback: (progress: any) => {
            console.log(progress);
            setOutput(`<div class="loading">${progress.text}</div>`);
          },
        });
      }

      // Validate and parse JSON schema
      let parsedSchema: any;
      try {
        parsedSchema = JSON.parse(schema);
      } catch (err) {
        throw new Error("Invalid JSON schema");
      }
      const response_format = {
        type: "json_object",
        schema: JSON.stringify(parsedSchema),
      };

      // Prepare request
      const request = {
        stream: true,
        stream_options: { include_usage: true },
        messages: [{ role: "user", content: prompt }],
        max_tokens: 512,
        response_format,
      };

      let curMessage = "";
      let currentUsage: Usage | null = null;
      setOutput('<div class="loading">Generating response...</div>');

      // Get chatCompletion generator
      const generator = await engineRef.current.chatCompletion(request);

      // Stream response
      for await (const chunk of generator) {
        const curDelta = chunk.choices[0]?.delta.content;
        if (curDelta) {
          curMessage += curDelta;
        }
        if (chunk.usage) {
          console.log(chunk.usage);
          currentUsage = chunk.usage;
        }
        // Update output with current message
        setOutput(
          `<pre><code class="language-json">${curMessage}</code></pre>`
        );
      }

      // Get final message
      const finalMessage = await engineRef.current.getMessage();

      // Highlight the final message
      const highlighted = hljs.highlight(finalMessage, {
        language: "json",
      }).value;
      setOutput(`<pre><code class="language-json">${highlighted}</code></pre>`);

      // Parse issue data
      try {
        const issue = JSON.parse(finalMessage);
        setIssueData(issue);
      } catch (err) {
        console.error("Failed to parse issue data:", err);
        // Optionally set an error or keep issueData as null
      }

      // Update stats if available
      if (currentUsage && currentUsage.extra) {
        const statsTextParts: string[] = [];
        if (currentUsage.extra.prefill_tokens_per_s) {
          statsTextParts.push(
            `Prefill Speed: ${currentUsage.extra.prefill_tokens_per_s.toFixed(
              1
            )} tok/s`
          );
        }
        if (currentUsage.extra.decode_tokens_per_s) {
          statsTextParts.push(
            `Decode Speed: ${currentUsage.extra.decode_tokens_per_s.toFixed(
              1
            )} tok/s`
          );
        }
        setStats(statsTextParts.join(" | "));
      }
    } catch (err: any) {
      console.error("Generation error:", err);
      setError(err.message);
      setOutput(`<div class="error">Error: ${err.message}</div>`);
    } finally {
      setLoading(false);
    }
  };

  return {
    availableModels,
    selectedModel,
    setSelectedModel,
    generateIssue,
  };
};

export default useMLCEngine;
