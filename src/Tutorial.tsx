import React from "react";

const Tutorial = () => {
  const completeTutorial = () => {
    Spicetify.LocalStorage.set("youtubeDLTutCompleted", "true");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "var(--spice-text)",
      }}
    >
      <div
        style={{
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}
      >
        <p
          style={{
            lineHeight: "1.8",
            marginBottom: "2rem",
            paddingLeft: "1.5rem",
          }}
        >
          1. Paste your YouTube video or playlist link in the search bar.
          <br />
          2. Click <b>Download</b> to start the process.
          <br />
          3. Select a valid location to save the files to.
          <br />
          4. Wait for the download(s) to finish — you'll see a notification when
          it's done.
          <br />
          5. For playlists, you can select what videos to download, and it will
          sequentially download each of them.
        </p>

        <div
          style={{
            background: "rgba(255, 200, 0, 0.1)",
            borderLeft: "4px solid var(--spice-highlight)",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "6px",
          }}
        >
          ⚠️ If you get <code>NaN:NaN</code> for a video link, put the video
          into a playlist and use that playlist link instead.
        </div>

        <div
          style={{
            background: "rgba(0, 200, 255, 0.1)",
            borderLeft: "4px solid var(--spice-highlight)",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "6px",
          }}
        >
          💡 Stay tabbed in while downloading, and grant any permissions that
          are requested, Chromium limits file-saving without them.
        </div>

        <div
          style={{
            background: "rgba(0, 255, 150, 0.1)",
            borderLeft: "4px solid var(--spice-success)",
            padding: "1rem",
            marginBottom: "2rem",
            borderRadius: "6px",
          }}
        >
          ✅ Make sure you have manually enabled Local Files in your spotify
          settings and added the location your downloading the songs to.
        </div>

        <button
          onClick={completeTutorial}
          style={{
            padding: "0.75rem 1.5rem",
            background: "var(--spice-button)",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background 0.2s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.background = "var(--spice-button)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.background = "var(--spice-button-active))")
          }
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
