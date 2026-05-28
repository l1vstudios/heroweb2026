import { NextResponse } from "next/server";

function generateRandomText(length = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function GET() {
  const text = generateRandomText();

  // Buat 10–18 garis acak
  const lines = Array.from({ length: random(10, 18) })
    .map(() => {
      const x1 = random(0, 180);
      const y1 = random(0, 60);
      const x2 = random(0, 180);
      const y2 = random(0, 60);
      const color = `#${random(100, 180).toString(16)}${random(100, 180).toString(16)}${random(
        100,
        180
      ).toString(16)}`; // abu-abu acak
      const width = random(1, 3);
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" stroke-linecap="round"/>`;
    })
    .join("");

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="180" height="60">
    <rect width="100%" height="100%" fill="#f2f2f2"/>

    <!-- Teks Captcha -->
    <text x="20" y="40" font-size="32" font-family="monospace" fill="#000"
      style="letter-spacing: 4px;">
      ${text}
    </text>

    <!-- Banyak garis silang acak -->
    ${lines}
  </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-store",
      "X-Captcha-Text": text,
    },
  });
}
