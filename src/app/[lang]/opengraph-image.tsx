import { renderOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgImage(profile.role);
}
