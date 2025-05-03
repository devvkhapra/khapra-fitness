import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Khapra Fitness",
    short_name: "Khapra",
    description: "Transform your body with expert workout programs and fitness guidance",
    start_url: "/",
    display: "standalone",
    background_color: "#18181b",
    theme_color: "#ef4444",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
