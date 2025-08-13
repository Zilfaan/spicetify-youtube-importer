import React, { useEffect, useState } from "react";
import {
  getPlaylistId,
  getYouTubeId,
  isPlaylist,
  isValidYouTubeUrl,
} from "./utils";
import SpiceSpinner from "./types/SpiceSpinner";

export default function AddFromYoutubeModal() {
  // States
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [urlType, setUrlType] = useState<"invalid" | "playlist" | "video">(
    "invalid"
  );

  const [videoDetails, setVideoDetails] = useState<any>(null);
  const [playlistVideos, setPlaylistVideos] = useState<any[]>([]);
  const [selectedVideoIds, setSelectedVideoIds] = useState<Set<string>>(
    new Set()
  );
  const [isLoading, setIsLoading] = useState(false);
  const [submitHovered, setSubmitHovered] = useState(false);

  // Backend api to get video/playlist details and download audio
  const API_BASE = "https://sc-youtube-api-production.up.railway.app";

  // Functions to fetch data from backend api
  async function fetchVideoInfo(videoId: string) {
    try {
      setIsLoading(true);
      setVideoDetails(null);
      setError(null);

      const res = await fetch(`${API_BASE}/video/${videoId}`);
      if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
      const data = await res.json();
      setVideoDetails(data);
    } catch (err) {
      console.error("Error fetching video info:", err);
      setError("Failed to fetch video details");
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchPlaylistInfo(playlistId: string) {
    try {
      setIsLoading(true);
      setPlaylistVideos([]);
      setError(null);

      const res = await fetch(`${API_BASE}/playlist/${playlistId}`);
      if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
      const data = await res.json();
      setPlaylistVideos(data || []);
    } catch (err) {
      console.error("Error fetching playlist info:", err);
      setError("Failed to fetch playlist details");
    } finally {
      setIsLoading(false);
    }
  }

  // Check type of url on user input and fetch data if valid
  useEffect(() => {
    setError(null);
    setPlaylistVideos([]);
    setSelectedVideoIds(new Set());
    setVideoDetails(null);

    if (!isValidYouTubeUrl(url)) {
      setUrlType("invalid");
      return;
    }

    if (isPlaylist(url)) {
      setUrlType("playlist");
      const pid = getPlaylistId(url);
      if (pid) fetchPlaylistInfo(pid);
    } else {
      setUrlType("video");
      const vid = getYouTubeId(url);
      if (vid) fetchVideoInfo(vid);
    }
  }, [url]);

  useEffect(() => {
    if (playlistVideos.length > 0) {
      setSelectedVideoIds(new Set(playlistVideos.map((v) => v.id)));
    } else {
      setSelectedVideoIds(new Set());
    }
  }, [playlistVideos]);

  // Function to help select which videos to download
  function toggleVideoSelection(videoId: string) {
    setSelectedVideoIds((prev) => {
      const newSet = new Set(prev);
      newSet.has(videoId) ? newSet.delete(videoId) : newSet.add(videoId);
      return newSet;
    });
  }

  // Render helpers
  function renderPlaylistVideos() {
    if (isLoading) return <SpiceSpinner />;
    return (
      <div>
        {playlistVideos.length && <h3>Playlist</h3>}
        <ul
          style={{
            maxHeight: "200px",
            overflowY: "auto",
            marginTop: 15,
            padding: 0,
            listStyle: "none",
          }}
        >
          {playlistVideos.map((vid, i) => {
            const isSelected = selectedVideoIds.has(vid.id);
            return (
              <li
                key={i}
                onClick={() => toggleVideoSelection(vid.id)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                  padding: "8px 12px",
                  borderLeft: isSelected
                    ? "4px solid var(--spice-button, #1db954)"
                    : "4px solid transparent",
                  color: isSelected
                    ? "var(--spice-text, #eee)"
                    : "var(--spice-text-muted, #aaa)",
                  fontWeight: isSelected ? 600 : 400,
                  transition: "border-color 0.3s ease, color 0.3s ease",
                  userSelect: "none",
                }}
              >
                <img
                  src={vid?.thumbnails?.[0]?.url}
                  alt={vid?.title}
                  width={80}
                  height={45}
                  style={{ borderRadius: "6px", flexShrink: 0 }}
                />
                <span style={{ flex: 1, userSelect: "text" }}>
                  {typeof vid.title === "string"
                    ? vid.title
                    : vid.title?.text || "Untitled"}
                </span>
                <span
                  style={{ marginLeft: "auto", fontSize: 10, color: "#aaa" }}
                >
                  {vid.duration ? vid.duration : "-"}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  function renderVideoDetails() {
    if (isLoading) return <SpiceSpinner />;
    if (!videoDetails) return null;
    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <img
          src={videoDetails?.thumbnails?.[0]?.url}
          alt={videoDetails?.title}
          width={120}
          height={67}
        />
        <div>
          <h4>{videoDetails.title}</h4>
          <p>Duration: {videoDetails.duration}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <label
        style={{
          fontWeight: 600,
          fontSize: "14px",
          color: "var(--spice-text)",
          marginBottom: "2px",
          display: "block",
        }}
      >
        YouTube URL:
      </label>
      {/* Actual url input */}
      <input
        type="text"
        placeholder="Paste YouTube link..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          padding: "10px 12px",
          borderRadius: "6px",
          border: "1px solid var(--spice-border, #444)",
          backgroundColor: "var(--spice-background, #222)",
          color: "var(--spice-text, #eee)",
          fontSize: "14px",
          outline: "none",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
      {/* Show video(s) and allow user to select which videos to download if its a playlist */}
      {urlType === "playlist"
        ? renderPlaylistVideos()
        : urlType === "video"
        ? renderVideoDetails()
        : null}
      {/* Error text */}
      {error && <div style={{ color: "red", fontSize: "13px" }}>{error}</div>}

      {/* Confirm button */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          type="button"
          disabled={!isValidYouTubeUrl(url)}
          onMouseOver={() => setSubmitHovered(true)}
          onMouseLeave={() => setSubmitHovered(false)}
          style={{
            border: "none",
            width: "13%",
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "20px",
            backgroundColor: "var(--spice-button, #1db954)",
            color: "var(--spice-text)",
            transition: "all",
            cursor:
              videoDetails || selectedVideoIds.size > 0
                ? "pointer"
                : "not-allowed",
            opacity: videoDetails || selectedVideoIds.size > 0 ? 1 : 0.8,
            ...(submitHovered ? { filter: "brightness(0.85)" } : {}),
          }}
          onClick={() => {
            if (!url.trim()) {
              Spicetify.showNotification("Please enter a YouTube URL!", true);
              return;
            }
            if (urlType === "playlist" && selectedVideoIds.size === 0) {
              Spicetify.showNotification(
                "Please select at least one video!",
                true
              );
              return;
            }
            Spicetify.PopupModal.hide();
            //TODO: Actual download logic
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
