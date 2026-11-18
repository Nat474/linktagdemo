import { readFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const root = new URL("../", import.meta.url);
const config = JSON.parse(await readFile(new URL("src/data/demo.json", root), "utf8"));
const url = new URL(`/p/${config.currentProfileSlug}`, config.canonicalOrigin).href;
const directory = new URL("public/qr/", root);
await mkdir(directory, { recursive: true });
const options = { errorCorrectionLevel: "M", margin: 4, color: { dark: "#000000ff", light: "#ffffffff" } };
await QRCode.toFile(fileURLToPath(new URL(`${config.currentProfileSlug}.svg`, directory)), url, { ...options, type: "svg" });
await QRCode.toFile(fileURLToPath(new URL(`${config.currentProfileSlug}.png`, directory)), url, { ...options, type: "png", width: 1536 });
console.log(`Generated SVG and PNG QR assets for ${url}`);
