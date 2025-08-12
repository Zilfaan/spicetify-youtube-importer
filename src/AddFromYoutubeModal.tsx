import React, { useState } from "react";

interface props {
  onSubmit: (url: string) => void;
}

export default function AddFromYoutubeModal({ onSubmit }: props) {
  const [url, setUrl] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label style={{ fontWeight: "bold" }}>YouTube URL:</label>
      <input
        type="text"
        placeholder="https://www.youtube.com/watch?v=..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid var(--spice-border)",
        }}
      />
    </div>
  );
}
