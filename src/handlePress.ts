export default function handlePress() {
  // Close create context menu if its open
  const menuToggleButton = document.querySelector(
    'button.AIlmv6h8bR5NY5R0VceT[aria-label="Create"]'
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
  //TODO: Actual logic
  alert("Press detected!");
}
