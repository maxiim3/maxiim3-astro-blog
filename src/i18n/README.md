# i18n Configuration

This directory contains the internationalization configuration for the portfolio site.

## Files

- **ui.ts** - Translation strings for English (en) and French (fr)
- **utils.ts** - Helper functions for working with translations

## Usage Examples

### Basic translation in an Astro page

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('nav.home')}</h1>
<p>{t('meta.siteDescription')}</p>
```

### Using getI18nStaticPaths for dynamic routes

```astro
---
// src/pages/[lang]/blog/[slug].astro
import { getCollection } from 'astro:content';
import { getI18nStaticPaths, type Locale } from '../../i18n/utils';

export async function getStaticPaths() {
  const posts = await getCollection('blog');

  return getI18nStaticPaths((locale: Locale) =>
    posts.map(post => ({
      params: { lang: locale, slug: post.slug },
      props: { post, locale }
    }))
  );
}

const { post, locale } = Astro.props;
const t = useTranslations(locale);
---

<article>
  <h1>{post.data.title}</h1>
  <p>{t('blog.readMore')}</p>
</article>
```

### Language switcher component

```astro
---
import { getLangFromUrl, translatePath, getAlternateLocale } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const alternateLang = getAlternateLocale(lang);
const alternatePath = translatePath(Astro.url.pathname, alternateLang);
---

<a href={alternatePath}>
  {alternateLang === 'en' ? 'English' : 'Français'}
</a>
```

### Format dates by locale

```astro
---
import { formatDate, getLangFromUrl } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const publishDate = new Date('2024-12-14');
---

<time datetime={publishDate.toISOString()}>
  {formatDate(publishDate, lang)}
</time>
```

## URL Structure

With `prefixDefaultLocale: true`, all URLs include the language prefix:

- `/en/` - English home page
- `/fr/` - French home page
- `/en/blog` - English blog
- `/fr/blog` - French blog
- `/en/projects` - English projects
- `/fr/projects` - French projects

## Adding New Translations

To add a new translation key:

1. Add the key to both `en` and `fr` objects in `ui.ts`
2. TypeScript will ensure type safety across the codebase
3. Use the `t()` function to access the translation

Example:

```typescript
// In ui.ts
export const ui = {
  en: {
    // ... existing keys
    "new.key": "New English text",
  },
  fr: {
    // ... existing keys
    "new.key": "Nouveau texte français",
  },
} as const;
```

Then use it:

```astro
---
const t = useTranslations(lang);
---
<p>{t('new.key')}</p>
```
