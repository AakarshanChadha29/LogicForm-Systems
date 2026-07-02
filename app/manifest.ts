import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "LogicForm",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#030303",
    theme_color: "#d4af37",
    icons: [
      {
        src: "/logo-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
