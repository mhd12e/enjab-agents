# Enjab Agents — Complete Rebrand Spec

**Date:** 2026-04-03
**Status:** Approved
**Scope:** Chrome extension UI, manifest, i18n, and code references only

## Context

This is a fork of the open-source nanobrowser Chrome extension, rebranded as an internal company tool under the name **Enjab Agents**. The rebrand covers four areas: name, colors, icon, and removal of external social/community links.

Documentation files (READMEs, PRIVACY.md, FUNDING.yml, .github configs) are explicitly out of scope.

---

## 1. Name Change

Replace all occurrences of "Nanobrowser", "NanoBrowser", and "nanobrowser" with "Enjab Agents" (or casing-appropriate variants) in the following files:

| File | What to change |
|------|---------------|
| `package.json` (root) | `"name": "nanobrowser"` → `"enjab-agents"` |
| `chrome-extension/manifest.js` | `default_title: 'Nanobrowser'` → `'Enjab Agents'` |
| `packages/i18n/locales/en/messages.json` | `app_metadata_name`, `app_metadata_description`, `welcome_title` |
| `packages/i18n/locales/pt_BR/messages.json` | Same keys (keep translations natural, substitute name) |
| `packages/i18n/locales/zh_TW/messages.json` | Same keys (keep translations natural, substitute name) |
| `chrome-extension/src/background/agent/helper.ts` | Remove `HTTP-Referer: https://nanobrowser.ai` header entirely |
| `packages/storage/lib/prompt/favorites.ts` | Remove branded favorite prompts (Twitter follow, GitHub star) |

### Name variants

- Extension title: **Enjab Agents: AI Web Agent & Automation**
- Welcome message: **Welcome to Enjab Agents!**
- Package name: `enjab-agents`
- Description: Replace "NanoBrowser" with "Enjab Agents" in the description text

---

## 2. Color Palette

Replace the sky-blue scheme with teal/green:

| Role | Old Value | New Value |
|------|-----------|-----------|
| Primary | `#0EA5E9` (sky-500) | `#0D9488` (teal-600) |
| Header icon default | `#19C2FF` | `#2DD4BF` (teal-400) |
| Header icon hover | `#0073DC` | `#0F766E` (teal-700) |
| Border accent | `rgba(14, 165, 233, 0.2)` | `rgba(13, 148, 136, 0.2)` |
| Text accent (dark mode) | `text-sky-200` | `text-teal-200` |
| Text accent (light mode) | `text-sky-700` | `text-teal-700` |
| Background tints | `bg-[#0EA5E9]/10`, `/15` | `bg-[#0D9488]/10`, `/15` |
| Options accent | `bg-sky-800/50` | `bg-teal-800/50` |

### Files affected

- `pages/side-panel/src/SidePanel.css` — hex values for header icons, scrollbar thumb, header border
- `pages/side-panel/src/SidePanel.tsx` — Tailwind `sky-*` classes → `teal-*`
- `pages/options/src/Options.tsx` — Tailwind `sky-*` classes and hex color references

---

## 3. Icon / Logo

Replace the existing extension icons with a new design:

- **Shape:** Rounded-corner square container
- **Fill:** Teal gradient (`#0D9488` → `#2DD4BF`)
- **Symbol:** Generic AI agent icon (bot/spark motif), white on teal
- **Sizes:** 32x32 and 128x128

### Files replaced

- `chrome-extension/public/icon-32.png`
- `chrome-extension/public/icon-128.png`

### Not touched

- `pages/side-panel/public/icons/*.svg` (navigator, planner, system, user, validator) — functional UI icons, not brand assets

---

## 4. Social Media & External Link Removal

All external community/social links are removed with no replacements.

| File | Element | Action |
|------|---------|--------|
| `pages/side-panel/src/SidePanel.tsx` | Discord icon + link in header | Remove |
| `pages/side-panel/src/SidePanel.tsx` | Discord community link in welcome screen | Remove |
| `pages/side-panel/src/SidePanel.tsx` | GitHub quick start link in welcome screen | Remove |
| `pages/side-panel/src/SidePanel.tsx` | `RxDiscordLogo` import | Remove |
| `pages/options/src/Options.tsx` | Help tab (opens `nanobrowser.ai/docs`) | Remove tab entirely |
| `packages/storage/lib/prompt/favorites.ts` | "Follow us on Twitter" prompt | Remove |
| `packages/storage/lib/prompt/favorites.ts` | "Star us on GitHub" prompt | Remove |
| `chrome-extension/src/background/agent/helper.ts` | `HTTP-Referer: https://nanobrowser.ai` | Remove header |
| `packages/i18n/locales/*/messages.json` | `welcome_quickStart`, `welcome_joinCommunity` | Remove keys |

---

## 5. Out of Scope

The following are explicitly **not** part of this rebrand:

- README files (EN, ES, TR, ZH-TW)
- PRIVACY.md
- FUNDING.yml
- `.github/` configs
- Agent role SVGs (navigator, planner, system, user, validator)
- Any functional UI icons or components
- `packages/tailwind-config/` (no global theme changes needed)
- Build system, Turbo config, workspace structure

---

## File Change Summary

~12 files across 6 workspaces:

1. `package.json` (root)
2. `chrome-extension/manifest.js`
3. `chrome-extension/public/icon-32.png`
4. `chrome-extension/public/icon-128.png`
5. `chrome-extension/src/background/agent/helper.ts`
6. `packages/i18n/locales/en/messages.json`
7. `packages/i18n/locales/pt_BR/messages.json`
8. `packages/i18n/locales/zh_TW/messages.json`
9. `packages/storage/lib/prompt/favorites.ts`
10. `pages/side-panel/src/SidePanel.tsx`
11. `pages/side-panel/src/SidePanel.css`
12. `pages/options/src/Options.tsx`
