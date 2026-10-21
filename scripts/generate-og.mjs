/**
 * Generates `public/og.png`, the image used by the Open Graph and Twitter
 * cards (1200x630).
 *
 * Next's `opengraph-image` route convention cannot be combined with
 * `output: 'export'` in a way that produces a clean `.png` URL, so the image is
 * generated once and served as a normal static asset.
 *
 * Usage: npm run og
 */
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const COLORS = {
  dark: "#1c1f22",
  yellow: "#ebb82e",
  yellowLight: "#f5d06c",
  white: "#ffffff",
  body: "#d1d5db",
  muted: "#8f9295",
};

const SIZE = { width: 1200, height: 630 };

function brand() {
  return h("div", { style: { display: "flex", alignItems: "center", gap: 24 } }, [
    h(
      "div",
      {
        key: "mark",
        style: {
          width: 96,
          height: 96,
          borderRadius: 24,
          background: `linear-gradient(135deg, ${COLORS.yellow} 0%, ${COLORS.yellowLight} 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 56,
          fontWeight: 800,
          color: COLORS.dark,
        },
      },
      "M",
    ),
    h("div", { key: "name", style: { display: "flex", flexDirection: "column" } }, [
      h(
        "div",
        {
          key: "wordmark",
          style: {
            display: "flex",
            fontSize: 46,
            fontWeight: 800,
            color: COLORS.white,
            letterSpacing: -1,
          },
        },
        [
          h("span", { key: "maak" }, "Maak"),
          h("span", { key: "constructores", style: { color: COLORS.yellow } }, "Constructores"),
        ],
      ),
      h(
        "div",
        {
          key: "handle",
          style: {
            fontSize: 20,
            color: COLORS.muted,
            letterSpacing: 5,
            marginTop: 6,
          },
        },
        "@MAAKPERU",
      ),
    ]),
  ]);
}

function headline() {
  return h("div", { style: { display: "flex", flexDirection: "column" } }, [
    h(
      "div",
      {
        key: "title",
        style: {
          fontSize: 70,
          fontWeight: 800,
          color: COLORS.white,
          lineHeight: 1.1,
          maxWidth: 900,
        },
      },
      "Instalación y conversión de gas natural en Lima",
    ),
    h(
      "div",
      { key: "subtitle", style: { fontSize: 30, color: COLORS.body, marginTop: 22 } },
      "Residencial · Comercial · Industrial",
    ),
  ]);
}

function footer() {
  const item = (text) =>
    h("span", { key: text, style: { display: "flex" } }, text);

  return h(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 36,
        fontSize: 24,
        fontWeight: 600,
        color: COLORS.yellow,
        borderTop: "1px solid rgba(255,255,255,0.12)",
        paddingTop: 28,
      },
    },
    [
      item("+51 917 375 664"),
      item("maakconstructores.com"),
      item("Cercado de Lima, Perú"),
    ],
  );
}

const image = h(
  "div",
  {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: COLORS.dark,
      padding: 72,
      fontFamily: "sans-serif",
      position: "relative",
    },
  },
  [
    h("div", {
      key: "accent",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 10,
        backgroundColor: COLORS.yellow,
      },
    }),
    brand(),
    headline(),
    footer(),
  ],
);

const response = new ImageResponse(image, SIZE);
const buffer = Buffer.from(await response.arrayBuffer());

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const target = join(root, "public", "og.png");

await mkdir(dirname(target), { recursive: true });
await writeFile(target, buffer);

console.log(`og.png generated (${SIZE.width}x${SIZE.height}, ${buffer.length} bytes)`);
