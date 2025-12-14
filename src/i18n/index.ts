/**
 * i18n module - exports all i18n utilities and translations
 */

export { ui, languages, defaultLang } from "./ui";
export {
  useTranslations,
  getLangFromUrl,
  getPathnameWithoutLocale,
  translatePath,
  getLocales,
  isValidLocale,
  getI18nStaticPaths,
  formatDate,
  getAlternateLocale,
  type Locale,
  type TranslationKey,
} from "./utils";
