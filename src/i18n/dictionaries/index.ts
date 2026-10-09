import type { Locale } from "../config";
import { en } from "./en";
import { es, type Dictionary } from "./es";

export const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
