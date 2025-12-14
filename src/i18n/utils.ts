/**
 * i18n utility functions for Astro 5
 */

import { ui, defaultLang } from "./ui";

export type Locale = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

/**
 * Get a translated string for a given key and locale
 * Falls back to default language if translation is missing
 */
export function useTranslations(lang: Locale) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Extract locale from URL pathname
 * @param pathname - The URL pathname (e.g., "/en/blog" or "/fr/")
 * @returns The locale code or default locale
 */
export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Locale;
  return defaultLang;
}

/**
 * Remove locale prefix from pathname
 * @param pathname - The URL pathname
 * @returns Pathname without locale prefix
 */
export function getPathnameWithoutLocale(pathname: string): string {
  const segments = pathname.split("/");
  // Remove empty first segment and locale if present
  if (segments[1] in ui) {
    segments.splice(1, 1);
  }
  return segments.join("/") || "/";
}

/**
 * Translate a pathname to a different locale
 * @param pathname - Current pathname
 * @param locale - Target locale
 * @returns Translated pathname
 */
export function translatePath(pathname: string, locale: Locale): string {
  const pathWithoutLocale = getPathnameWithoutLocale(pathname);
  return `/${locale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
}

/**
 * Get all supported locales
 */
export function getLocales(): Locale[] {
  return Object.keys(ui) as Locale[];
}

/**
 * Check if a locale is supported
 */
export function isValidLocale(lang: string): lang is Locale {
  return lang in ui;
}

/**
 * Helper for generating static paths with i18n support
 * Use this in getStaticPaths() for dynamic routes
 *
 * @example
 * export async function getStaticPaths() {
 *   const posts = await getCollection('blog');
 *   return getI18nStaticPaths((locale) =>
 *     posts.map(post => ({
 *       params: { slug: post.slug },
 *       props: { post, locale }
 *     }))
 *   );
 * }
 */
export function getI18nStaticPaths<T>(
  pathGenerator: (locale: Locale) => T[]
): T[] {
  const locales = getLocales();
  return locales.flatMap((locale) => pathGenerator(locale));
}

/**
 * Format a date according to locale
 */
export function formatDate(date: Date, lang: Locale): string {
  return new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/**
 * Get the opposite locale (for language switcher)
 */
export function getAlternateLocale(currentLocale: Locale): Locale {
  return currentLocale === "en" ? "fr" : "en";
}
