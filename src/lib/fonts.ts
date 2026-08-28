import {
  Inter,
  Inter_Tight,
  JetBrains_Mono,
  Instrument_Serif,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
  variable: "--font-inter-tight",
});

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

export const fontVariables = [inter, interTight, jetBrainsMono, instrumentSerif]
  .map((f) => f.variable)
  .join(" ");
