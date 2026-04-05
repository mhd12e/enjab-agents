<h1 align="center">Enjab Agents</h1>

<p align="center">
  <strong>AI Web Agent & Automation</strong><br>
  A Chrome extension that runs a multi-agent system locally in your browser to automate web tasks.
</p>

---

## Overview

Enjab Agents is an AI-powered Chrome extension for web automation. It uses a multi-agent system (Planner, Navigator, Validator) to break down tasks, interact with web pages, and verify results — all running locally in your browser.

**Key capabilities:**
- Automate repetitive web workflows with natural language
- Extract data, fill forms, navigate complex sites
- Multi-agent collaboration for complex tasks
- Support for multiple LLM providers (OpenAI, Anthropic, Gemini, Ollama, and more)
- Full privacy — credentials and data stay in your browser

## Quick Start

### Install from Source

1. **Prerequisites:**
   - [Node.js](https://nodejs.org/) v22.12.0+
   - [pnpm](https://pnpm.io/installation) v9.15.1+

2. **Clone and build:**
   ```bash
   git clone https://github.com/mhd12e/enjab-agents.git
   cd enjab-agents
   pnpm install
   pnpm build
   ```

3. **Load the extension:**
   - Open `chrome://extensions/`
   - Enable **Developer mode** (top right)
   - Click **Load unpacked**
   - Select the `dist/` folder

4. **Configure models:**
   - Click the Enjab Agents icon in your toolbar to open the sidebar
   - Click the **Settings** icon (top right)
   - Add your LLM API keys
   - Choose models for Navigator and Planner agents

### Development Mode

```bash
pnpm dev
```

This starts a watch build with hot reload.

## Model Configuration

You can assign different LLM models to each agent to balance performance and cost.

### Recommended Setup
| Agent | Model | Notes |
|-------|-------|-------|
| **Planner** | Claude Sonnet 4 | Strong reasoning and planning |
| **Navigator** | Claude Haiku 3.5 | Fast and cost-effective for web actions |

### Cost-Effective Setup
| Agent | Model | Notes |
|-------|-------|-------|
| **Planner** | Claude Haiku / GPT-4o | Good performance at lower cost |
| **Navigator** | Gemini 2.5 Flash / GPT-4o-mini | Lightweight and efficient |

### Local Models
Use Ollama or custom OpenAI-compatible providers for zero API costs and full privacy. Recommended local models:
- Qwen3-30B-A3B-Instruct-2507
- Falcon3 10B
- Qwen 2.5 Coder 14B
- Mistral Small 24B

> **Tip:** Local models work best with specific, detailed prompts. Break complex tasks into clear steps.

## Example Tasks

```
"Go to TechCrunch and extract the top 10 headlines from the last 24 hours"

"Find trending Python repositories on GitHub with the most stars"

"Find a portable Bluetooth speaker on Amazon under $50 with 10+ hour battery"
```

## Browser Support

| Browser | Status |
|---------|--------|
| Chrome | Fully supported |
| Edge | Fully supported |
| Firefox, Safari, others | Not supported |

## Architecture

This is a monorepo using Turbo + pnpm workspaces:

- `chrome-extension/` — Manifest V3 extension, background service worker, multi-agent system
- `pages/side-panel/` — Chat interface (React + TypeScript + Tailwind)
- `pages/options/` — Settings page
- `packages/` — Shared utilities, storage, UI components, i18n

The multi-agent system consists of:
- **Planner** — High-level task planning and strategy
- **Navigator** — DOM interactions and web navigation
- **Validator** — Verifies task completion and results

## License

Apache License 2.0 — see [LICENSE](LICENSE) for details.

Based on [nanobrowser](https://github.com/nanobrowser/nanobrowser).
