import React from "react";

export default function SpiceSpinner() {
  const size = 32;
  const thickness = 3.5;
  const color = "var(--spice-button, #1db954)";
  const trackColor = "rgba(255,255,255,0.08)";
  const viewBox = 50;
  const r = (viewBox - thickness) / 2;
  const circumference = 2 * Math.PI * r;
  const dash = circumference * 0.25;
  const gap = circumference - dash;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="loading"
      style={{
        display: "block",
        margin: "15px auto 0",
        width: size,
        height: size,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${viewBox} ${viewBox}`}
        style={{ transform: "rotate(-90deg)" }}
        aria-hidden="true"
      >
        <circle
          cx={viewBox / 2}
          cy={viewBox / 2}
          r={r}
          fill="none"
          stroke={trackColor}
          strokeWidth={thickness}
        />
        <circle
          cx={viewBox / 2}
          cy={viewBox / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${gap}`}
          style={{
            transformOrigin: "50% 50%",
            animation:
              "spice-rotate 1s linear infinite, spice-dash 1.5s ease-in-out infinite",
          }}
        />
        <style>{`
          @keyframes spice-rotate {
            100% { transform: rotate(360deg); }
          }
          @keyframes spice-dash {
            0% { stroke-dashoffset: 0; }
            50% { stroke-dashoffset: ${-circumference * 0.15}; }
            100% { stroke-dashoffset: 0; }
          }
        `}</style>
      </svg>
    </div>
  );
}
