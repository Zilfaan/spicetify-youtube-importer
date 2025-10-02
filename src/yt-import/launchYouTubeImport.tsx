import React from "react";
import AddFromYoutubeModal from "./AddFromYoutubeModal";

export default function launchYouTubeImport() {
  // Close "Create" menu if open
  const menuToggleButton = document.querySelector(
    'button[aria-label="Create"]'
  );

  const createMenu = document
    .querySelector('[id^="tippy-"][data-tippy-root] > #context-menu')
    ?.getElementsByTagName("ul")[0];

  if (
    createMenu &&
    createMenu.querySelector(
      'button[aria-describedby="subtitle-global-create-playlist"]'
    ) &&
    menuToggleButton instanceof HTMLElement
  ) {
    menuToggleButton.click();
  }

  const container = document.createElement("div");
  const root = Spicetify.ReactDOM.createRoot(container);
  root.render(<AddFromYoutubeModal />);

  Spicetify.PopupModal.display({
    title: "Import a Song or Playlist from Youtube",
    content: container,
    isLarge: true,
  });
}
