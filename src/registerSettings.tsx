import { SettingsSection } from "spcr-settings";

export default function registerSettings() {
  const defaultBackend = "https://sc-youtube-api-production.up.railway.app";

  const settings = new SettingsSection(
    "Youtube Importer Settings",
    "youtube-importer"
  );

  // Input to decide where to fetch video/playlist info and downloads
  settings.addInput(
    "backend-server",
    "Backend to get videos from",
    defaultBackend,

    () => {
      // Check if user input is a valid link
      // For this to pass, the user has to paste the link exactly as is, and it has to be a link
      const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/;
      const value = settings.getFieldValue("backend-server") as string;
      if (value.trim() === "" || !urlRegex.test(value)) {
        // Set it to false
        settings.setFieldValue("backend-server", defaultBackend);
        settings.rerender(); // update the UI
      }
    }
  );

  // Input to decide if to queue downloads parallelly or in queues
  settings.addToggle(
    "download-parallelly",
    "Queue downloads parallelly instead of in a queue",
    true
  );

  // Input to decide batch size for parallel downloads
  settings.addDropDown(
    "batch-size",
    "Size of batches if downloading parallelly",
    // Generate an array of numbers from 1 to 8
    Array.from({ length: 8 }, (_, i) => (i + 1).toString()),
    4 // Set default value
  );

  settings.pushSettings();
  return settings;
}
