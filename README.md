# design-md catalog

> The largest curated open catalog of real-brand `DESIGN.md` files for AI coding agents.

**254 production design systems** extracted from real marketing sites — Linear, Vercel, Stripe, Anthropic, Apple, Tesla, Spotify, Netflix, and more — written to the open [webdesignhot/0.1](./SPEC.md) DESIGN.md spec so AI agents (Claude, Cursor, Cline, GitHub Copilot, v0, Lovable) can read them as the visual source of truth.

```bash
# Drop any one into your repo in seconds
npx @webdesignhot/design-md add linear   # writes ./DESIGN.md
```

[**Browse all 254 →**](https://www.webdesignhot.com/design.md/) · [**Install the CLI**](https://www.npmjs.com/package/@webdesignhot/design-md) · [**MCP server**](https://www.npmjs.com/package/@webdesignhot/design-md-mcp)

---

## Why this exists

Coding agents need a *file* that captures a brand's design system — colors, typography, spacing, components, motion, accessibility — in plain text they can read on every prompt. [Google Labs](https://github.com/google-labs-code/design.md) introduced the DESIGN.md format. We:

1. **Extracted 254 real brands** from production marketing sites (not invented "vibes")
2. **Published our own webdesignhot/0.1 spec** with four sections every agent eventually asks about: Motion, Accessibility, Voice, Dark Mode — plus a richer machine-readable token layer
3. **Open-sourced the entire catalog** so any AI agent, IDE, or design tool can consume it

vs the alternatives:
- [Google Labs alpha](https://github.com/google-labs-code/design.md) — official format, currently labelled `version: alpha`. webdesignhot/0.1 is a parallel format alongside it; both are cross-readable.
- [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) — 70 brands, MIT (we built on top of their work for ~30 brands; see attribution in each file's `lineage` block)
- [designdotmd.directory](https://designdotmd.directory) — 216 mostly AI-generated "vibe" entries, single author, closed source

## 25 multi-theme entries — real `light + dark` from production

These brands ship both modes on their actual sites. Each PNG below is a Kitchen Sink rendering of the brand's tokens in both themes — same skeleton (nav + display headline + buttons + cards), only the design tokens swap. Click any to open the live preview.

| | | |
|---|---|---|
| <a href="https://www.webdesignhot.com/design.md/agentkit/"><img src="screenshots/agentkit.png" alt="AgentKit — editorial-dark / bright" width="380"></a><br/>**AgentKit** · 3 themes ⭐ | <a href="https://www.webdesignhot.com/design.md/shadcn-ui/"><img src="screenshots/shadcn-ui.png" alt="shadcn/ui — light / dark" width="380"></a><br/>**shadcn/ui** | <a href="https://www.webdesignhot.com/design.md/vercel/"><img src="screenshots/vercel.png" alt="Vercel — light / dark" width="380"></a><br/>**Vercel** |
| <a href="https://www.webdesignhot.com/design.md/tailwindcss/"><img src="screenshots/tailwindcss.png" alt="Tailwind CSS — light / dark" width="380"></a><br/>**Tailwind CSS** | <a href="https://www.webdesignhot.com/design.md/github/"><img src="screenshots/github.png" alt="GitHub — dark / light" width="380"></a><br/>**GitHub** | <a href="https://www.webdesignhot.com/design.md/v0-app/"><img src="screenshots/v0-app.png" alt="v0 — light / dark" width="380"></a><br/>**v0** |
| <a href="https://www.webdesignhot.com/design.md/cursor/"><img src="screenshots/cursor.png" alt="Cursor — light / dark" width="380"></a><br/>**Cursor** | <a href="https://www.webdesignhot.com/design.md/nuxt/"><img src="screenshots/nuxt.png" alt="Nuxt — dark / light" width="380"></a><br/>**Nuxt** | <a href="https://www.webdesignhot.com/design.md/turbo/"><img src="screenshots/turbo.png" alt="Turbo — dark / light" width="380"></a><br/>**Turbo** |
| <a href="https://www.webdesignhot.com/design.md/astro/"><img src="screenshots/astro.png" alt="Astro — dark / light" width="380"></a><br/>**Astro** | <a href="https://www.webdesignhot.com/design.md/qwik/"><img src="screenshots/qwik.png" alt="Qwik — dark / light" width="380"></a><br/>**Qwik** | <a href="https://www.webdesignhot.com/design.md/solid-js/"><img src="screenshots/solid-js.png" alt="SolidJS — dark / light" width="380"></a><br/>**SolidJS** |
| <a href="https://www.webdesignhot.com/design.md/framer/"><img src="screenshots/framer.png" alt="Framer — light / dark" width="380"></a><br/>**Framer** | <a href="https://www.webdesignhot.com/design.md/midjourney/"><img src="screenshots/midjourney.png" alt="Midjourney — dark / light" width="380"></a><br/>**Midjourney** | <a href="https://www.webdesignhot.com/design.md/krea/"><img src="screenshots/krea.png" alt="Krea — dark / light" width="380"></a><br/>**Krea** |
| <a href="https://www.webdesignhot.com/design.md/elevenlabs/"><img src="screenshots/elevenlabs.png" alt="ElevenLabs — light / dark" width="380"></a><br/>**ElevenLabs** | <a href="https://www.webdesignhot.com/design.md/lovable-dev/"><img src="screenshots/lovable-dev.png" alt="Lovable — light / dark" width="380"></a><br/>**Lovable** | <a href="https://www.webdesignhot.com/design.md/replicate/"><img src="screenshots/replicate.png" alt="Replicate — light / dark" width="380"></a><br/>**Replicate** |
| <a href="https://www.webdesignhot.com/design.md/together-ai/"><img src="screenshots/together-ai.png" alt="Together AI — light / dark" width="380"></a><br/>**Together AI** | <a href="https://www.webdesignhot.com/design.md/gemini-google/"><img src="screenshots/gemini-google.png" alt="Gemini — light / dark" width="380"></a><br/>**Gemini** | <a href="https://www.webdesignhot.com/design.md/omnivore/"><img src="screenshots/omnivore.png" alt="Omnivore — light / dark" width="380"></a><br/>**Omnivore** |
| <a href="https://www.webdesignhot.com/design.md/beehiiv/"><img src="screenshots/beehiiv.png" alt="beehiiv — light / dark" width="380"></a><br/>**beehiiv** | <a href="https://www.webdesignhot.com/design.md/bluesky/"><img src="screenshots/bluesky.png" alt="Bluesky — light / dark" width="380"></a><br/>**Bluesky** | <a href="https://www.webdesignhot.com/design.md/signal-app/"><img src="screenshots/signal-app.png" alt="Signal — light / dark" width="380"></a><br/>**Signal** |
| <a href="https://www.webdesignhot.com/design.md/kit-com/"><img src="screenshots/kit-com.png" alt="Kit — light / dark" width="380"></a><br/>**Kit** | | |

The remaining 229 entries ship a single canonical theme — that's how the brand designs at the source. We don't synthesize a fake light Linear or fake dark Stripe to pad the multi-theme count.

## Catalog structure

```
design-md/
├── linear.md          # Linear's design system, webdesignhot/0.1 spec
├── stripe.md          # Stripe's design system, webdesignhot/0.1 spec
├── anthropic.md
├── ...                # 254 entries total
└── webdesignhot.md    # The catalog's own site
```

Each file: YAML frontmatter (machine-readable token bundle) + 15 numbered prose sections (human-readable principles).

## How to use one

**Option 1 — CLI** (one command):
```bash
npx @webdesignhot/design-md add linear            # → ./DESIGN.md
npx @webdesignhot/design-md add stripe -o brand.md # custom path
npx @webdesignhot/design-md list                  # browse all 254
```

<details>
<summary><b>All CLI commands</b></summary>

```
add <slug> [-o, --out <path>] [-f, --force]
  Write the chosen DESIGN.md to your CWD.

list
  Print the full catalog (slug · name · tags).

category [name]
  Without a name, lists every category with a count.
  With a name, lists every design in that category.

init
  Interactive picker (default if no command given).

lint <file> [--format=text|json]
  Validate a DESIGN.md for spec compliance.

diff <a> <b> [--format=text|json]
  Token-level diff between two DESIGN.md files.

export <file> --to <tailwind|css|dtcg|figma>
  Convert tokens to one of:
    tailwind   — theme.extend block for tailwind.config.js
    css        — :root { --color-bg, --radius-card, … }
    dtcg       — W3C Design Tokens Community Group JSON
    figma      — Figma Variables import format

extract <url> [-o <path>] [--token-only]
  Extract a draft DESIGN.md from any production URL.
  (Requires a webdesignhot session — opens the browser flow.)

theme <slug> [--dark|--light]
  Compute a dark/light variant of any design.

preview <slug>
  Open the directory detail page in your browser.

help
  Print the full command list.
```

Install globally if you'd rather skip `npx`:

```bash
npm i -g @webdesignhot/design-md
design-md add linear
```

Requires Node 18+.

</details>

**Option 2 — MCP server** (in-IDE, for Claude Desktop / Cursor / Cline):

```json
{
  "mcpServers": {
    "design-md": {
      "command": "npx",
      "args": ["-y", "@webdesignhot/design-md-mcp"]
    }
  }
}
```

Then in chat: *"install Stripe's DESIGN.md here"* — your agent does the rest.

<details>
<summary><b>All MCP tools</b></summary>

The MCP server exposes 6 tools any compliant agent can call:

| Tool | What it does |
|---|---|
| `list_designs` | List every design with optional `featured_only` / `category` / `tag` filters |
| `get_design` | Fetch the full DESIGN.md (webdesignhot/0.1) source for a slug |
| `search_designs` | Fuzzy search by name, tagline, tags, categories |
| `diff_designs` | Token-level diff between any two designs |
| `export_design` | Render tokens to tailwind / css / dtcg / figma |
| `install_design` | Get the npx command + raw markdown to install one |

Try it once connected:

> *"List the top 10 dark editorial design systems."*
>
> *"Install Stripe's DESIGN.md into this project."*
>
> *"Diff Linear and Vercel — what changes if I switch?"*
>
> *"Export Anthropic's tokens as Tailwind config."*

Cursor users: Settings → Features → MCP → "Add new MCP server" → Type `command`, Command `npx -y @webdesignhot/design-md-mcp`.

Cline / Roo / any stdio-MCP client: same `npx -y @webdesignhot/design-md-mcp` command works.

</details>

**Option 3 — direct download**:

```bash
curl https://raw.githubusercontent.com/WebDesignHot/design-md/main/design-md/linear.md > DESIGN.md
```

**Option 4 — fork this repo** and curate your own.

## Tell your agent to use it

After dropping `DESIGN.md` into your repo, add to `CLAUDE.md` / `.cursorrules` / system prompt:

```
Use DESIGN.md as the source of truth for visual style.
Every component must reuse the color tokens, typography scale,
radius scale, motion timings, and accessibility contrast pairs
declared there. Quote the section number when citing a token
(e.g. "per §3 Typography Rules").
```

## The webdesignhot/0.1 spec

[Read the full spec → `SPEC.md`](./SPEC.md)

15 numbered sections in every file's body:

| # | Section | webdesignhot/0.1 addition |
|---|---------|-------------|
| 1 | Visual Theme & Atmosphere | |
| 2 | Color Palette & Roles | |
| 3 | Typography Rules | |
| 4 | Component Stylings | |
| 5 | Layout Principles | |
| 6 | Shapes & Radius Scale | |
| 7 | Depth & Elevation | |
| **8** | **Interaction & Motion** | ✨ |
| **9** | **Accessibility & A11y** | ✨ |
| 10 | Responsive Behavior | |
| **11** | **Content & Voice** | ✨ |
| **12** | **Dark Mode & Theming** | ✨ |
| 13 | Lineage & Influences | |
| 14 | Do's and Don'ts | |
| 15 | Agent Prompt Guide | |

webdesignhot/0.1 is a parallel format alongside the [Google Labs alpha](https://github.com/google-labs-code/design.md) spec — both are cross-readable by any tool that opens a markdown file. See [`SPEC.md`](./SPEC.md) for field-by-field comparison.

## Contributing

We welcome:
- 🆕 **New brands** — add `design-md/{slug}.md` following the webdesignhot/0.1 schema
- 🔧 **Refinements** — better tokens, missing sections, prose improvements
- 🐛 **Corrections** — wrong colors, broken URLs, factual errors

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the workflow + schema validation tools.

## Related

- 🌐 **Web app**: <https://www.webdesignhot.com/design.md/> (browse, preview, search, AI generator)
- 📦 **CLI**: <https://www.npmjs.com/package/@webdesignhot/design-md>
- 🔌 **MCP server**: <https://www.npmjs.com/package/@webdesignhot/design-md-mcp>
- 📜 **Google Labs alpha spec**: <https://github.com/google-labs-code/design.md>
- 🌱 **Inspired by / built on**: <https://github.com/VoltAgent/awesome-design-md>

## License

MIT — use, modify, redistribute freely. See [LICENSE](./LICENSE).

When you reuse a `.md` file, please keep the `lineage` block intact (it credits original brand designers + any third-party files we drew from).

---

Made by [webdesignhot](https://www.webdesignhot.com) — AI-native landing page kits for builders of AI agents, dev tools, and SaaS.
