import React from "react";
import MenuItem from "./AddMenuItem";
import handlePress from "./handlePress";

export default function app() {
  // Add entry to create context menu
  const observer = new MutationObserver(() => {
    const menu = document
      .querySelector('[id^="tippy-"][data-tippy-root] > #context-menu')
      ?.getElementsByTagName("ul")[0];
    if (
      menu &&
      !document.getElementById("spicetify-youtube-menuitem") &&
      menu.querySelector(
        'button[aria-describedby="subtitle-global-create-playlist"]'
      ) !== null
    ) {
      // Create container li to hold component
      const container = document.createElement("li");
      container.className = "jzMBaEByD6M9xRmS9mv8";
      container.setAttribute("role", "presentation");
      container.id = "spicetify-youtube-menuitem";
      menu.appendChild(container);

      // Create root only on this new li, so existing menu items stay intact
      const root = Spicetify.ReactDOM.createRoot(container);
      root.render(<MenuItem />);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Extend spicetify icons with youtube icon
  (Spicetify.SVGIcons as Record<string, string>)["youtube"] = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
  </svg>
`;

  // Add menu entry to normal context menus
  const myItem = new Spicetify.ContextMenu.Item(
    "Import from YouTube",
    handlePress,
    undefined,
    "youtube" as Spicetify.Icon
  );

  myItem.register();
}
