# Enjab Agents Rebrand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebrand the nanobrowser Chrome extension to "Enjab Agents" with teal colors, new icon, and removal of all external social/community links.

**Architecture:** This is a pure rebrand — no structural changes. We touch i18n strings, CSS, TSX components, the manifest config, favorites storage defaults, and icon assets. Each task is independent and can be done in any order.

**Tech Stack:** TypeScript, React, Tailwind CSS, Chrome Extension Manifest V3, CSS, SVG/PNG icons

**Spec:** `docs/superpowers/specs/2026-04-03-enjab-agents-rebrand-design.md`

---

### Task 1: Update i18n strings (English)

**Files:**
- Modify: `packages/i18n/locales/en/messages.json`

- [ ] **Step 1: Replace brand name in `app_metadata_name`**

Change line 8:
```json
"message": "Enjab Agents: AI Web Agent & Automation"
```

- [ ] **Step 2: Replace brand name in `app_metadata_description`**

Change line 4:
```json
"message": "Automate web tasks with AI! Enjab Agents is a browser extension that lets you extract data, fill forms, and more."
```

- [ ] **Step 3: Replace brand name in `welcome_title`**

Change line 41:
```json
"message": "Welcome to Enjab Agents!"
```

- [ ] **Step 4: Remove `welcome_quickStart` and `welcome_joinCommunity` keys**

Delete the `welcome_quickStart` block (lines 49-51) and `welcome_joinCommunity` block (lines 52-54).

- [ ] **Step 5: Replace brand name in `permissions_microphone_description`**

Change line 170:
```json
"message": "Enjab Agents needs microphone access to convert your speech to text."
```

- [ ] **Step 6: Commit**

```bash
git add packages/i18n/locales/en/messages.json
git commit -m "rebrand: update English i18n strings to Enjab Agents"
```

---

### Task 2: Update i18n strings (Portuguese BR)

**Files:**
- Modify: `packages/i18n/locales/pt_BR/messages.json`

- [ ] **Step 1: Replace brand name in `app_metadata_name`**

```json
"message": "Enjab Agents: Agente Web de IA e Automação"
```

- [ ] **Step 2: Replace brand name in `app_metadata_description`**

```json
"message": "Automatize tarefas da web com IA! Enjab Agents é uma extensão para o navegador que permite extrair dados, preencher formulários e muito mais."
```

- [ ] **Step 3: Replace brand name in `welcome_title`**

```json
"message": "Bem-vindo ao Enjab Agents!"
```

- [ ] **Step 4: Remove `welcome_quickStart` and `welcome_joinCommunity` keys**

Delete the `welcome_quickStart` block (lines 49-51) and `welcome_joinCommunity` block (lines 52-54).

- [ ] **Step 5: Replace brand name in `permissions_microphone_description`**

```json
"message": "O Enjab Agents precisa de acesso ao microfone para converter sua fala em texto."
```

- [ ] **Step 6: Commit**

```bash
git add packages/i18n/locales/pt_BR/messages.json
git commit -m "rebrand: update Portuguese BR i18n strings to Enjab Agents"
```

---

### Task 3: Update i18n strings (Traditional Chinese)

**Files:**
- Modify: `packages/i18n/locales/zh_TW/messages.json`

- [ ] **Step 1: Replace brand name in `app_metadata_name`**

```json
"message": "Enjab Agents：AI 網頁代理程式與自動化"
```

- [ ] **Step 2: Replace brand name in `app_metadata_description`**

```json
"message": "使用 AI 自動化網頁任務！Enjab Agents 是一款瀏覽器擴充功能，能協助您擷取資料、填寫表單等。"
```

- [ ] **Step 3: Replace brand name in `welcome_title`**

```json
"message": "歡迎使用 Enjab Agents！"
```

- [ ] **Step 4: Remove `welcome_quickStart` and `welcome_joinCommunity` keys**

Delete the `welcome_quickStart` block (lines 49-51) and `welcome_joinCommunity` block (lines 52-54).

- [ ] **Step 5: Replace brand name in `permissions_microphone_description`**

```json
"message": "Enjab Agents 需要麥克風存取權限，才能將語音轉換為文字。"
```

- [ ] **Step 6: Commit**

```bash
git add packages/i18n/locales/zh_TW/messages.json
git commit -m "rebrand: update Traditional Chinese i18n strings to Enjab Agents"
```

---

### Task 4: Update manifest and package.json

**Files:**
- Modify: `chrome-extension/manifest.js`
- Modify: `package.json` (root)

- [ ] **Step 1: Update Opera sidebar title in manifest.js**

Change line 42:
```js
default_title: 'Enjab Agents',
```

- [ ] **Step 2: Update root package.json name**

Change line 2:
```json
"name": "enjab-agents",
```

- [ ] **Step 3: Commit**

```bash
git add chrome-extension/manifest.js package.json
git commit -m "rebrand: update manifest title and package name to Enjab Agents"
```

---

### Task 5: Remove branded favorites and HTTP-Referer

**Files:**
- Modify: `packages/storage/lib/prompt/favorites.ts`
- Modify: `chrome-extension/src/background/agent/helper.ts`

- [ ] **Step 1: Remove Twitter and GitHub prompts from favorites.ts**

Replace the `defaultFavoritePrompts` array (lines 6-21) keeping only the AI Papers prompt:

```typescript
const defaultFavoritePrompts = [
  {
    title: '📚 Explore AI Papers',
    content:
      '- Go to https://huggingface.co/papers and click through each of the first 3 papers.\n- For each paper:\n  - Record the title, URL and upvotes\n  - Summarise the abstract section\n- Finally, compile together a summary of all 3 papers, ranked by upvotes',
  },
];
```

- [ ] **Step 2: Remove HTTP-Referer and X-Title headers from helper.ts**

In `chrome-extension/src/background/agent/helper.ts`, remove lines 353-356 (the headers object with `HTTP-Referer` and `X-Title`). The `createOpenAIChatModel` call should no longer pass custom headers. Change:

```typescript
return createOpenAIChatModel(providerConfig, modelConfig, {
  headers: {
    'HTTP-Referer': 'https://nanobrowser.ai',
    'X-Title': 'Nanobrowser',
  },
```

To remove the headers object entirely (pass empty config or remove the third argument — check what the function signature expects).

- [ ] **Step 3: Commit**

```bash
git add packages/storage/lib/prompt/favorites.ts chrome-extension/src/background/agent/helper.ts
git commit -m "rebrand: remove branded favorites and HTTP-Referer header"
```

---

### Task 6: Update side panel colors (CSS)

**Files:**
- Modify: `pages/side-panel/src/SidePanel.css`

- [ ] **Step 1: Replace all sky-blue hex values with teal equivalents**

Make these replacements throughout the file:

| Old | New | Locations |
|-----|-----|-----------|
| `#0ea5e9` | `#0d9488` | Scrollbar thumb (lines 33, 48), scrollbar-gutter thumb dark (line 144) |
| `#0284c7` | `#0f766e` | Scrollbar thumb hover (line 38) |
| `#38bdf8` | `#2dd4bf` | Scrollbar thumb hover dark (lines 52, 148) |
| `#7dd3fc` | `#5eead4` | Scrollbar-gutter thumb light (line 129) |
| `rgba(14, 165, 233, 0.2)` | `rgba(13, 148, 136, 0.2)` | Header border (line 63) |
| `rgba(14, 165, 233, 0.3)` | `rgba(13, 148, 136, 0.3)` | Header border dark (line 69) |
| `#19C2FF` | `#2DD4BF` | Header icon color (line 85), send button color (line 97) |
| `#0073DC` | `#0F766E` | Header icon hover (line 92), send button hover (line 103) |
| `rgba(186, 230, 253, 0.4)` | `rgba(153, 246, 228, 0.4)` | Code background light (line 9) |
| `#0369a1` | `#0f766e` | Code text color (line 12) |
| `rgba(30, 58, 138, 0.4)` | `rgba(19, 78, 74, 0.4)` | Code background dark (line 18) |
| `#7dd3fc` | `#5eead4` | Code text color dark (line 19) |
| `border-color: rgb(159, 6, 11)` | `border-color: rgb(13, 148, 136)` | Body border (line 3) — note: this looks like it was already mis-set |

- [ ] **Step 2: Update CSS comments to say "teal" instead of "sky"**

Replace comment references like `/* sky-500 */` with `/* teal-600 */` etc.

- [ ] **Step 3: Commit**

```bash
git add pages/side-panel/src/SidePanel.css
git commit -m "rebrand: replace sky-blue with teal in side panel CSS"
```

---

### Task 7: Update side panel component (TSX)

**Files:**
- Modify: `pages/side-panel/src/SidePanel.tsx`

- [ ] **Step 1: Remove Discord import (line 3)**

Delete:
```tsx
import { RxDiscordLogo } from 'react-icons/rx';
```

- [ ] **Step 2: Remove Discord link from header (lines 1043-1049)**

Delete the entire `<a>` element that wraps `<RxDiscordLogo>`:
```tsx
<a
  href="https://discord.gg/NN3ABHggMK"
  target="_blank"
  rel="noopener noreferrer"
  className={`header-icon ${isDarkMode ? 'text-sky-400 hover:text-sky-300' : 'text-sky-400 hover:text-sky-500'}`}>
  <RxDiscordLogo size={20} />
</a>
```

- [ ] **Step 3: Remove welcome screen external links (lines 1102-1118)**

Delete the entire `<div className="mt-4 text-sm opacity-75">` block containing the GitHub quick start and Discord community links.

- [ ] **Step 4: Update logo alt text (line 1090)**

Change:
```tsx
<img src="/icon-128.png" alt="Nanobrowser Logo" className="mx-auto mb-4 size-12" />
```
To:
```tsx
<img src="/icon-128.png" alt="Enjab Agents Logo" className="mx-auto mb-4 size-12" />
```

- [ ] **Step 5: Replace all Tailwind `sky-*` classes with `teal-*` equivalents**

Search and replace throughout the file:

| Old | New |
|-----|-----|
| `border-sky-800` | `border-teal-800` |
| `border-[rgb(186,230,253)]` | `border-[rgb(153,246,228)]` |
| `text-sky-400` | `text-teal-400` |
| `text-sky-300` | `text-teal-300` |
| `text-sky-500` | `text-teal-500` |
| `text-sky-600` | `text-teal-600` |
| `text-sky-200` | `text-teal-200` |
| `text-sky-700` | `text-teal-700` |
| `border-sky-400` | `border-teal-400` |
| `border-sky-900` | `border-teal-900` |
| `border-sky-100` | `border-teal-100` |
| `bg-sky-600` | `bg-teal-600` |
| `bg-sky-700` | `bg-teal-700` |
| `bg-sky-500` | `bg-teal-500` |
| `hover:bg-sky-600` | `hover:bg-teal-600` |
| `hover:bg-sky-700` | `hover:bg-teal-700` |
| `hover:text-sky-300` | `hover:text-teal-300` |
| `hover:text-sky-500` | `hover:text-teal-500` |
| `hover:text-sky-600` | `hover:text-teal-600` |

- [ ] **Step 6: Commit**

```bash
git add pages/side-panel/src/SidePanel.tsx
git commit -m "rebrand: update side panel to teal colors, remove social links"
```

---

### Task 8: Update options page

**Files:**
- Modify: `pages/options/src/Options.tsx`

- [ ] **Step 1: Remove the Help tab entirely**

Remove the Help tab from the TABS array (line 19):
```tsx
{ id: 'help', icon: FiHelpCircle, label: t('options_tabs_help') },
```

Remove the `FiHelpCircle` import from line 6.

Remove the `'help'` from the `TabTypes` union (line 12):
```tsx
type TabTypes = 'general' | 'models' | 'firewall' | 'analytics';
```

Remove the help tab handler (lines 40-41):
```tsx
if (tabId === 'help') {
  window.open('https://nanobrowser.ai/docs', '_blank');
} else {
  setActiveTab(tabId);
}
```
Replace with:
```tsx
setActiveTab(tabId);
```

- [ ] **Step 2: Replace sky/blue Tailwind classes with teal**

| Old | New |
|-----|-----|
| `bg-[#0EA5E9]/10` | `bg-[#0D9488]/10` |
| `bg-[#0EA5E9]/15` | `bg-[#0D9488]/15` |
| `bg-sky-800/50` | `bg-teal-800/50` |

- [ ] **Step 3: Commit**

```bash
git add pages/options/src/Options.tsx
git commit -m "rebrand: update options page colors, remove help tab"
```

---

### Task 9: Generate new extension icons

**Files:**
- Replace: `chrome-extension/public/icon-128.png`
- Replace: `chrome-extension/public/icon-32.png`
- Create: `chrome-extension/public/icon.svg` (source SVG)

- [ ] **Step 1: Create SVG source icon**

Create `chrome-extension/public/icon.svg` — a rounded-corner square with teal gradient background and a white AI agent symbol (stylized bot head with circuit dots):

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0D9488"/>
      <stop offset="100%" style="stop-color:#2DD4BF"/>
    </linearGradient>
  </defs>
  <!-- Rounded square background -->
  <rect x="4" y="4" width="120" height="120" rx="24" ry="24" fill="url(#bg)"/>
  <!-- AI Agent icon: stylized bot head -->
  <g fill="white">
    <!-- Head -->
    <rect x="34" y="38" width="60" height="48" rx="12" ry="12"/>
    <!-- Eyes -->
    <circle cx="50" cy="58" r="6" fill="#0D9488"/>
    <circle cx="78" cy="58" r="6" fill="#0D9488"/>
    <!-- Mouth/speaker grille -->
    <rect x="46" y="70" width="36" height="4" rx="2" fill="#0D9488"/>
    <!-- Antenna -->
    <rect x="61" y="24" width="6" height="18" rx="3" fill="white"/>
    <circle cx="64" cy="22" r="6" fill="white"/>
    <!-- Ears/sensors -->
    <rect x="24" y="50" width="10" height="16" rx="4" fill="white"/>
    <rect x="94" y="50" width="10" height="16" rx="4" fill="white"/>
  </g>
</svg>
```

- [ ] **Step 2: Convert SVG to PNG at 128x128 and 32x32**

Use a conversion method available in the environment. Options:

```bash
# If Inkscape is available:
inkscape chrome-extension/public/icon.svg -w 128 -h 128 -o chrome-extension/public/icon-128.png
inkscape chrome-extension/public/icon.svg -w 32 -h 32 -o chrome-extension/public/icon-32.png

# If ImageMagick is available:
convert -background none chrome-extension/public/icon.svg -resize 128x128 chrome-extension/public/icon-128.png
convert -background none chrome-extension/public/icon.svg -resize 32x32 chrome-extension/public/icon-32.png

# If rsvg-convert is available:
rsvg-convert -w 128 -h 128 chrome-extension/public/icon.svg > chrome-extension/public/icon-128.png
rsvg-convert -w 32 -h 32 chrome-extension/public/icon.svg > chrome-extension/public/icon-32.png
```

If no conversion tool is available, use a Node.js script with the `sharp` package or the `canvas` package to render the SVG to PNG.

- [ ] **Step 3: Commit**

```bash
git add chrome-extension/public/icon.svg chrome-extension/public/icon-128.png chrome-extension/public/icon-32.png
git commit -m "rebrand: add new Enjab Agents teal bot icon"
```

---

### Task 10: Verify build and type-check

- [ ] **Step 1: Regenerate i18n types**

```bash
pnpm -F @extension/i18n build
```

Expected: Clean build, no errors. The removed keys (`welcome_quickStart`, `welcome_joinCommunity`) must not be referenced anywhere after Tasks 7 and 8.

- [ ] **Step 2: Run type-check across the project**

```bash
pnpm type-check
```

Expected: No TypeScript errors. If any references to removed i18n keys remain, fix them.

- [ ] **Step 3: Run lint**

```bash
pnpm lint
```

Expected: No lint errors from the changes. Fix any issues.

- [ ] **Step 4: Build the extension**

```bash
pnpm build
```

Expected: Clean build. Extension ready in `dist/`.

- [ ] **Step 5: Commit any fixes from verification**

```bash
git add -A
git commit -m "rebrand: fix issues found during verification"
```

(Skip this step if no fixes were needed.)
