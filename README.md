# تحرير حامد حمدونة — SEO Portfolio

Bilingual Arabic/English personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. The page switches between Arabic RTL and English LTR.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run

```bash
npm install
npm run dev
```

Vite prints the local development URL after startup.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

- `src/components/ui` — reusable presentation primitives.
- `src/components/layout` — site navigation and footer.
- `src/components/sections` — page sections composed from presentational components.
- `src/features/portfolio` — portfolio cards and accessible category filters.
- `src/data` — typed portfolio, experience, skill, and contact content.
- `src/data/translations.ts` — Arabic and English interface/content strings.
- `src/components/layout/LanguageProvider.tsx` and `src/hooks/useLanguage.ts` — language preference and document direction.
- `src/hooks` — portfolio filter state and contact-form behavior.
- `src/types` — shared content types.
- `src/styles.css` — RTL styles, responsive layout, accessible states, and design tokens.
- `src/components/layout/ThemeProvider.tsx` and `src/hooks/useTheme.ts` — system-aware theme preference and toggle.
- `src/components/ui/Logo.tsx` — the light/dark logo switcher.

## Theme and brand assets

Light and dark colors are defined as CSS custom properties at the top of `src/styles.css`; the dark theme overrides them under `:root[data-theme="dark"]`. Change the values there to update the site palette. The navbar sun/moon button toggles themes, follows the device preference until the visitor makes a choice, and stores that choice in `localStorage` as `tahreer-theme`.

Use the navbar language button to switch between Arabic (RTL) and English (LTR). The selected language is stored in `localStorage` as `tahreer-language`. Update `src/data/translations.ts` to edit either language's content.

The theme-aware logo files are `src/Logo/logo.png` and `src/Logo/logoDarkMode.png`. Replace those image files while keeping their names and paths to update the navbar, footer, and favicon together.

## Portfolio assets

Update `src/data/portfolio.ts` with project details. Portfolio images are served from `public/images`, and the Drive7 audit and SEO action plan are served from `public/documents`. Reference public assets by their root-relative URL (for example, `/images/seo-traffic-growth.png`).

The contact form validates its fields in the selected language and sends submissions through Web3Forms.

### Configure contact form email delivery

1. Create an access key at [web3forms.com](https://web3forms.com/) using the inbox that should receive the contact messages, then verify the confirmation email.
2. Create a `.env.local` file in the project root and add:

   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

3. Restart the Vite development server after adding or changing the key. Configure the same variable in the production host's environment settings before building/deploying.

Web3Forms access keys are intended for browser-side forms and will be included in the built client bundle; they are not private server secrets. Do not put passwords, SMTP credentials, or private server API keys in any `VITE_` variable. Use a backend endpoint if the mail provider requires a secret key.
