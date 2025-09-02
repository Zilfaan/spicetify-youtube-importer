import React, { useEffect, useState } from "react";
import {
  getPlaylistId,
  getYouTubeId,
  isPlaylist,
  isValidYouTubeUrl,
} from "../utils";
import SpiceSpinner from "../types/SpiceSpinner";
import Tutorial from "./Tutorial";
import { settings } from "../app";

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

  // Array of current videos downloading parallelly
  const [currentDownloads, setCurrentDownloads] = useState<
    { title: string; startTime: number }[]
  >([]);

  const [downloadHistory, setDownloadHistory] = useState<
    { title: string; time?: number; status: "success" | "failed" }[]
  >([]);

  const [, forceUpdate] = useState(0);

  // Global timer to trigger rerenders every second
  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate((x) => x + 1); // force rerender to update time display
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Download directory handle
  const [downloadDir, setDownloadDir] =
    useState<FileSystemDirectoryHandle | null>(null);

  const API_BASE = settings.getFieldValue("backend-server");

  // Check if video duration less than 5 minutes
  const clampDuration = (duration: string) => {
    const sections = duration.split(":");
    if (sections.length > 2 || parseInt(sections[0]) > 5) return true;
    return false;
  };

  // Functions to fetch data from backend api
  async function fetchVideoInfo(videoId: string) {
    try {
      setIsLoading(true);
      setVideoDetails(null);
      setError(null);

      const res = await fetch(`${API_BASE}/video/${videoId}`);
      if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
      const data = await res.json();
      // Ensure video duration is less than 5 minutes
      if (clampDuration(data.duration)) {
        setError("Video " + videoId + " is too long");
      } else {
        setVideoDetails(data);
      }
    } catch (err) {
      console.error("Error fetching video info:", err);
      setError("Failed to fetch video details");
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchPlaylistInfo(playlistId: string) {
    const hiddenVids = [];
    try {
      setIsLoading(true);
      setPlaylistVideos([]);
      setError(null);

      const res = await fetch(`${API_BASE}/playlist/${playlistId}`);
      if (!res.ok) throw new Error(`HTTP error! ${res.status}`);
      const data = await res.json();

      const filteredVideos = data.filter(
        (video: { duration: string; id: string }) => {
          // Remove videos which exceed duration limit of 5 minutes
          if (clampDuration(video.duration)) {
            hiddenVids.push(video.id);
            return false; // Remove from playlist
          }
          return true;
        }
      );
      if (hiddenVids.length > 0)
        setError(
          "Hid " +
            hiddenVids.length +
            " videos which exceeded the 5 minute limit."
        );

      setPlaylistVideos(filteredVideos || []);
    } catch (err) {
      console.error("Error fetching playlist info:", err);
      setError("Failed to fetch playlist details");
    } finally {
      setIsLoading(false);
    }
  }

  // Saving audio file
  async function writeBlobToDirectory(
    dir: FileSystemDirectoryHandle,
    filename: string,
    blob: Blob
  ) {
    const fileHandle = await dir.getFileHandle(filename, { create: true });
    const writable = await fileHandle.createWritable();
    await writable.write(blob);
    await writable.close();
  }

  // Pick folder
  async function pickDownloadFolder(): Promise<FileSystemDirectoryHandle | null> {
    try {
      // @ts-ignore - some environments don't have types for showDirectoryPicker
      const handle = await (window as any).showDirectoryPicker();
      setDownloadDir(handle);

      /* Enable local files in settings if its disabled
       However we cant add a path to this as the handle does not expose the full direct path,
       the user will still have to manually input the foder location in settings
        */
      if (Spicetify.Platform?.LocalFilesAPI?.getIsEnabled) {
        const isEnabled = Spicetify.Platform.LocalFilesAPI.getIsEnabled();
        if (!isEnabled) {
          Spicetify.Platform.LocalFilesAPI.setIsEnabled(true);
        }
      } else {
        console.warn("LocalFilesAPI not available in this Spicetify version");
      }

      return handle;
    } catch (err) {
      console.warn("Directory pick cancelled or failed", err);
      return null;
    }
  }

  // Download one video and write to the selected directory
  async function downloadVideoById(
    videoId: string,
    title?: string,
    dirParam?: FileSystemDirectoryHandle
  ) {
    const dir = dirParam || downloadDir;
    if (!dir) throw new Error("No download directory provided");

    const safeTitle = (title || videoId).replace(/[\/\\?%*:|"<>]/g, "_");
    const startTime = Date.now();
    setCurrentDownloads((prev) => [...prev, { title: safeTitle, startTime }]);

    try {
      const res = await fetch(`${API_BASE}/audio/${videoId}`);
      if (!res.ok) throw new Error(`Failed to download (${res.status})`);

      // Get file name
      let safeTitle = title || videoId;
      safeTitle = safeTitle.replace(/[\/\\?%*:|"<>]/g, "_"); // remove invalid chars
      const filename = `${safeTitle} [${videoId}].mp3`;

      // Get and save actual file
      const arrayBuffer = await res.arrayBuffer();
      const mime = res.headers.get("Content-Type") || "audio/mpeg";
      const blob = new Blob([arrayBuffer], { type: mime });

      await writeBlobToDirectory(dir, filename, blob);
      Spicetify.showNotification(`Saved ${filename}`, false);

      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setDownloadHistory((prev) => [
        ...prev,
        { title: safeTitle, time: elapsed, status: "success" },
      ]);
    } catch (err) {
      console.error("download error", err);
      Spicetify.showNotification("Failed to save file", true);
      setDownloadHistory((prev) => [
        ...prev,
        { title: safeTitle, status: "failed" },
      ]);
    } finally {
      setCurrentDownloads((prev) => prev.filter((d) => d.title !== safeTitle));
    }
  }

  async function downloadSelectedVideos(dirParam?: FileSystemDirectoryHandle) {
    const dir = dirParam || downloadDir;
    if (!dir) throw new Error("No download dir");

    // Filter and download only selected videos
    const selectedVideos = playlistVideos.filter((v) =>
      selectedVideoIds.has(v.id)
    );

    const shouldDownloadParallelly = settings.getFieldValue(
      "download-parallelly"
    ) as boolean;

    if (shouldDownloadParallelly) {
      // Download videos in batches parallelly, downloading all videos parallelly can cause failures
      const batchSize = parseInt(settings.getFieldValue("batch-size"));
      for (let i = 0; i < selectedVideos.length; i += batchSize) {
        const batch = selectedVideos.slice(i, i + batchSize);

        const batchPromises = batch.map((vid) =>
          downloadVideoById(
            vid.id,
            typeof vid.title === "string" ? vid.title : vid.title?.text,
            dir
          )
        );

        // Wait for this batch to finish before starting the next one
        await Promise.all(batchPromises);
      }
    } else {
      // Download videos sequentially
      for (const vid of selectedVideos) {
        // sequentially download the mp3 files for the selected videos
        await downloadVideoById(
          vid.id,
          typeof vid.title === "string" ? vid.title : vid.title?.text,
          dir
        );
      }
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
    setSelectedVideoIds(new Set());
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

  if (!Spicetify.LocalStorage.get("youtubeDLTutCompleted")) {
    return <Tutorial />;
  }

  if (downloadHistory.length > 0 || currentDownloads.length > 0)
    return (
      <div
        style={{
          padding: "10px",
          borderRadius: "8px",
          maxHeight: "200px",
          overflowY: "auto",
          fontSize: "13px",
        }}
      >
        <p style={{ marginBottom: 10 }}>
          You may close the tab, but please stay on the app as the download may
          fail otherwise.
        </p>

        {/* History of completed downloads */}
        {downloadHistory.map((item, idx) => (
          <div
            key={idx}
            style={{
              color: item.status === "success" ? "#1db954" : "#ff4d4d",
              marginBottom: "4px",
            }}
          >
            {item.status === "success"
              ? `Downloaded ${item.title} in ${item.time}s`
              : `Failed to download ${item.title}`}
          </div>
        ))}

        {/* Currently active downloads */}
        {currentDownloads.map((item, idx) => {
          const timeElapsed = Math.floor((Date.now() - item.startTime) / 1000);
          return (
            <div key={`active-${idx}`} style={{ color: "#aaa" }}>
              Downloading: <strong>{item.title}</strong> for {timeElapsed}s
            </div>
          );
        })}
      </div>
    );

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
            ...(submitHovered && (videoDetails || selectedVideoIds.size > 0)
              ? { filter: "brightness(0.85)" }
              : {}),
          }}
          onClick={async () => {
            // This click is the user activation that allows showDirectoryPicker.
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
            // Ask for folder only once during this user gesture
            let dir = downloadDir;
            if (!dir) {
              dir = await pickDownloadFolder();
              if (!dir) return; // user cancelled
            }

            // start downloads using the chosen dir (no further prompts)
            if (urlType === "video" && videoDetails?.id) {
              await downloadVideoById(videoDetails.id, videoDetails.title, dir);
            } else if (urlType === "playlist") {
              await downloadSelectedVideos(dir);
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
