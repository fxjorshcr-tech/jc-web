import "server-only";
import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";
import type { Tour, TourImage } from "@/data/tours";

export type Orientation = "landscape" | "portrait" | "square";

export interface TourPhoto extends TourImage {
  orientation: Orientation;
}

const IMAGE_RE = /\.(jpe?g|png|webp|avif)$/i;

function orientationOf(file: string): Orientation {
  try {
    const { width, height } = imageSize(fs.readFileSync(file));
    if (!width || !height) return "landscape";
    const r = width / height;
    if (r > 1.15) return "landscape";
    if (r < 0.87) return "portrait";
    return "square";
  } catch {
    return "landscape";
  }
}

/**
 * Photos for a tour, read from /public/images/tours/<slug>/ at build time.
 * Any image file in the folder is part of the gallery (hero.jpg excluded).
 * Optional captions.json ({"01.jpg": "Caption", ...}) adds captions.
 * Falls back to the placeholder list in src/data/tours.ts while the folder is empty.
 */
export function getTourGallery(tour: Tour): { photos: TourPhoto[]; fromFiles: boolean } {
  const dir = path.join(process.cwd(), "public", "images", "tours", tour.slug);
  let files: string[] = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => IMAGE_RE.test(f) && !/^hero\./i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    files = [];
  }
  if (files.length === 0) {
    return { photos: tour.gallery.map((g) => ({ ...g, orientation: "landscape" })), fromFiles: false };
  }
  let captions: Record<string, string> = {};
  try {
    captions = JSON.parse(fs.readFileSync(path.join(dir, "captions.json"), "utf8"));
  } catch {
    captions = {};
  }
  const photos = files.map((file, i) => ({
    src: `tours/${tour.slug}/${file}`,
    alt: captions[file] ?? `${tour.name} – photo ${i + 1}`,
    caption: captions[file],
    orientation: orientationOf(path.join(dir, file)),
  }));
  return { photos, fromFiles: true };
}
