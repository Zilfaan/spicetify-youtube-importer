import React, { useEffect, useState } from "react";

interface YoutubePlayerProps {
  videoState: { current: string | null; set: (id: string | null) => void };
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ videoState }) => {
  const [videoId, setVideoId] = useState<string | null>(videoState.current);

  // Listen for changes in videoid
  useEffect(() => {
    const interval = setInterval(() => {
      setVideoId(videoState.current);
    }, 200);

    return () => clearInterval(interval);
  }, [videoState]);

  return (
    <div style={{ padding: 20, color: "white" }}>
      <h2>YouTube Player</h2>
      {videoId ? <p>Video ID: {videoId}</p> : <p>No local video detected</p>}
    </div>
  );
};

export default YoutubePlayer;
