import React, { useEffect, useState, useRef } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { getVideoIdFromTrackName } from "../utils";
import SpiceSpinner from "../types/SpiceSpinner";

const YoutubePlayer = () => {
  const [videoId, setVideoId] = useState<string | null>(null);
  const playerRef = useRef<any>(null);
  const readyRef = useRef(false);

  // Obtain and synch the current playing songs video id
  const updateId = () => {
    const track = Spicetify.Player.data?.item;
    const metadata = track?.metadata as Record<string, any>;

    // Check if currently playing song is a local file and has a video id
    if (!track?.isLocal || !metadata?.local_file_path) {
      setVideoId(null);
      return;
    } else {
      setVideoId(getVideoIdFromTrackName(metadata.local_file_path));
    }
  };

  // Ensure video id stays updated even when songs change
  useEffect(() => {
    // Account for song on spotify open matching the format
    const timeout = setTimeout(() => {
      updateId();
    }, 500);

    Spicetify.Player.addEventListener("songchange", updateId);

    return () => {
      clearTimeout(timeout);
      Spicetify.Player.removeEventListener("songchange", updateId);
    };
  }, []);

  // Handle YouTube ready
  const onReady: YouTubeProps["onReady"] = (event) => {
    playerRef.current = event.target;
    readyRef.current = true;

    // Immediately sync to current track
    syncOnce();
  };

  // Core sync function

  const syncOnce = () => {
    if (!playerRef.current || !readyRef.current || !videoId) return;

    /* Force mute & playback speed every sync
     Since we are giving the user the controls to the video to manage things like
     closed captins, video quality but dont want them to control audio and playback speed
     */
    playerRef.current.mute();
    if (playerRef.current.getPlaybackRate() !== 1.0) {
      playerRef.current.setPlaybackRate(1.0);
    }

    // Synch youtube video progress to actual spotify player progress
    const spotifyProgress = Spicetify.Player.getProgress() / 1000;
    const ytTime = playerRef.current.getCurrentTime() || 0;
    const targetTime = Math.max(spotifyProgress, 0);

    if (Math.abs(targetTime - ytTime) > 0.2) {
      playerRef.current.seekTo(targetTime, true);
    }

    // Synch pause and playback
    const spotifyPlaying = Spicetify.Player.isPlaying();
    const ytState = playerRef.current.getPlayerState(); // 1 = playing, 2 = paused

    if (spotifyPlaying && ytState !== 1) {
      playerRef.current.playVideo();
    } else if (!spotifyPlaying && ytState === 1) {
      playerRef.current.pauseVideo();
    }
  };

  // Sync interval + event listeners
  useEffect(() => {
    if (!videoId) return;

    // Minimal interval to correct drift
    const driftInterval = setInterval(syncOnce, 500);

    // Listen to Spicetify track events
    Spicetify.Player.addEventListener("songchange", syncOnce);
    Spicetify.Player.addEventListener("playpause", syncOnce);

    return () => {
      clearInterval(driftInterval);
      Spicetify.Player.removeEventListener("songchange", syncOnce);
      Spicetify.Player.removeEventListener("playpause", syncOnce);
    };
  }, [videoId]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: 20,
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      {videoId ? (
        <div style={{ width: "100%", flexGrow: 1 }}>
          {/* Youtube player */}
          <YouTube
            videoId={videoId}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
                disablekb: 1,
                modestbranding: 1,
                rel: 0,
                fs: 0,
                loop: 0,
                mute: 1,
              },
            }}
            onReady={onReady}
            style={{ width: "100%", height: "100%" }}
          />
          {/* Loading spinner, always keep loaded but position behind the video */}
          <div
            style={{
              position: "absolute",
              zIndex: "-10",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <SpiceSpinner />
          </div>
        </div>
      ) : (
        <p>No local video detected</p>
      )}
    </div>
  );
};

export default YoutubePlayer;
