import { hydrateRoot } from "react-dom/client";
import { RemixBrowser } from "@remix-run/react";
// entry.client.tsx
hydrateRoot(document, <RemixBrowser />);
