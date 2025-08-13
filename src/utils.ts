export const isPlaylist = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    return (
      parsedUrl.searchParams.has("list") &&
      parsedUrl.searchParams.get("list")!.length > 0
    );
  } catch (e) {
    return false;
  }
};

export const isValidYouTubeUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.toLowerCase();

    // Acceptable YouTube hostnames
    if (
      hostname === "www.youtube.com" ||
      hostname === "youtube.com" ||
      hostname === "m.youtube.com" ||
      hostname === "youtu.be"
    ) {
      if (hostname.includes("youtube.com")) {
        return (
          parsedUrl.searchParams.has("v") || parsedUrl.searchParams.has("list")
        );
      }
      if (hostname === "youtu.be") {
        return parsedUrl.pathname.length > 1;
      }
    }

    return false;
  } catch {
    return false;
  }
};

export const getYouTubeId = (youtubeUrl: string): string | null => {
  const match = youtubeUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:[?&]|$)/); // Regex to extract video id
  return match ? match[1] : null;
};

export const getPlaylistId = (youtubeUrl: string): string | null => {
  const match = youtubeUrl.match(/[?&]list=([a-zA-Z0-9_-]+)/); // Regex to extract playlist id
  return match ? match[1] : null;
};
