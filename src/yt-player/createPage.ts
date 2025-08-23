import { type ReactNode } from "react";

type HistoryLocation = {
  pathname: string;
};

type PlatformHistory = {
  location: HistoryLocation;
  entries: HistoryLocation[];
  push: (location: string) => void;
  listen: (cb: (location: HistoryLocation | undefined) => void) => void;
};

type CreatePageProps = {
  pathname: string;
  container: ReactNode;
};

const History: PlatformHistory | undefined = Spicetify?.Platform?.History;

/* 
A helper function to help create a custom page and register it in spotify properly
created with a guide provided by @sanoojes
*/
export const createPage = ({ pathname, container }: CreatePageProps) => {
  const urlPathname = `/${pathname}/`;
  let lastPageLocation: string | null = null;

  const rootId = `root-${pathname}`;
  let reactRoot: any | null = null;

  const root = document.createElement("div");
  root.id = rootId;
  // Ensure content stays positioned at the top and takes the entire space
  root.style.position = "absolute";
  root.style.top = "0";
  root.style.left = "0";
  root.style.width = "100%";
  root.style.height = "100%";
  root.style.overflow = "hidden";

  const addToDom = async () => {
    const parent = await waitForElement(
      ".main-view-container__scroll-node div[data-overlayscrollbars-viewport]"
    );
    if (!parent.querySelector(`#${rootId}`)) {
      parent.appendChild(root);
    }
  };

  const mount = async () => {
    if (reactRoot) return;
    reactRoot = Spicetify.ReactDOM.createRoot(root);
    reactRoot.render(container);
    await addToDom();
  };

  const unmount = () => {
    if (!reactRoot) return;
    reactRoot.unmount();
    reactRoot = null;
    root.remove();
  };

  const handlePageChange = (currentLocation: HistoryLocation | undefined) => {
    if (!History || !currentLocation) return;

    const lastEntry = History.entries.slice(-2, -1)[0];
    lastPageLocation = lastEntry?.pathname ?? "/";

    if (currentLocation.pathname === urlPathname) {
      void mount();
    } else {
      unmount();
    }
  };

  handlePageChange(History?.location);
  History?.listen(handlePageChange);

  const goToPage = () => History?.push(urlPathname);
  const goBack = () => History?.push(lastPageLocation ?? "/");

  return { goToPage, goBack };
};

function waitForElement(
  selector: string,
  { timeout = 3000 }: { timeout?: number } = {}
): Promise<Element> {
  const startTime = performance.now();

  return new Promise((resolve, reject) => {
    function check(): void {
      const element = document.querySelector(selector);

      if (element) {
        resolve(element);
        return;
      }

      if (performance.now() - startTime > timeout) {
        reject(null);
        console.warn(`Timeout: Could not find element: ${selector}`);
        return;
      }

      requestAnimationFrame(check);
    }

    check();
  });
}
