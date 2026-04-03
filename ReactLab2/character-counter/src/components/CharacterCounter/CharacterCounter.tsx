import React, { useState } from "react";
import type { CharacterCounterProps, TextStats } from "../../types";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = 100,
  targetReadingTime = 1,
}) => {
  const [text, setText] = useState<string>("");
  const [stats, setStats] = useState<TextStats>({
    characterCount: 0,
    wordCount: 0,
    readingTime: 0,
  });

  const calculateStats = (inputText: string): TextStats => {
    const characterCount = inputText.length;

    const words = inputText.trim().split(/\s+/);
    const wordCount = inputText.trim() === "" ? 0 : words.length;

    const readingTime = wordCount / 200;

    return { characterCount, wordCount, readingTime };
  };

  const handleTextChange = (newText: string): void => {
    setText(newText);
    const newStats = calculateStats(newText);
    setStats(newStats);
  };

  const getWordCountStatus = (): string => {
    if (stats.wordCount < minWords) {
      return `${minWords - stats.wordCount} words below minimum`;
    }
    if (stats.wordCount > maxWords) {
      return `${stats.wordCount - maxWords} words over maximum`;
    }
    return "Word count is within range";
  };

  const getProgressPercentage = (): number => {
    if (maxWords === 0) return 0;
    return Math.min((stats.wordCount / maxWords) * 100, 100);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "24px",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "16px", color: "#111827" }}>
        Character Counter
      </h2>

      <TextInput
        onTextChange={handleTextChange}
        placeholder="Start typing your content..."
      />

      <StatsDisplay stats={stats} showReadingTime={true} />

      <div style={{ marginTop: "16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
            color: "#6b7280",
            marginBottom: "6px",
          }}
        >
          <span>{getWordCountStatus()}</span>
          <span>
            Min: {minWords} | Max: {maxWords}
          </span>
        </div>

        <div
          style={{
            width: "100%",
            height: "8px",
            backgroundColor: "#e5e7eb",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${getProgressPercentage()}%`,
              backgroundColor:
                stats.wordCount > maxWords ? "#ef4444" : "#3b82f6",
              borderRadius: "999px",
              transition: "width 0.2s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
};
