"use client";

interface ImageLoaderArgs {
  src: string;
  width: number;
  quality?: number;
}

const PEXELS_HOST = "images.pexels.com";

/**
 * Custom loader for static exports (`output: 'export'`), where Next's built-in
 * image optimizer (`/_next/image`) is not available.
 *
 * Remote Pexels images are resized and compressed by Pexels itself, so `sizes`
 * + `srcSet` from `next/image` keep working without a server. Any local asset
 * or other host is returned untouched.
 */
export default function imageLoader({ src, width }: ImageLoaderArgs): string {
  if (!src.includes(PEXELS_HOST)) return src;

  const url = new URL(src);
  url.searchParams.set("auto", "compress");
  url.searchParams.set("cs", "tinysrgb");
  url.searchParams.set("w", String(width));
  // Remove the fixed height so Pexels keeps the original aspect ratio.
  url.searchParams.delete("h");
  url.searchParams.delete("dpr");

  return url.toString();
}
