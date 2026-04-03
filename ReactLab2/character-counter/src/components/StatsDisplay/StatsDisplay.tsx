import React from "react";
import type { StatsDisplayProps } from "../../types";

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  const formatReadingTime = (minutes: number): string => {
    const wholeMinutes = Math.floor(minutes);
    const seconds = Math.round((minutes - wholeMinutes) * 60);
    return `${wholeMinutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        marginTop: "16px",
      }}
    >
      <div style={statBoxStyle}>
        <span style={labelStyle}>Characters</span>
        <span style={valueStyle}>{stats.characterCount}</span>
      </div>

      <div style={statBoxStyle}>
        <span style={labelStyle}>Words</span>
        <span style={valueStyle}>{stats.wordCount}</span>
      </div>

      {showReadingTime && (
        <div style={statBoxStyle}>
          <span style={labelStyle}>Reading Time</span>
          <span style={valueStyle}>{formatReadingTime(stats.readingTime)}</span>
        </div>
      )}
    </div>
  );
};

const statBoxStyle: React.CSSProperties = {
  flex: 1,
  padding: "16px",
  backgroundColor: "#f3f4f6",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
};

const labelStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#6b7280",
  fontWeight: 500,
};

const valueStyle: React.CSSProperties = {
  fontSize: "28px",
  fontWeight: 700,
  color: "#111827",
};
