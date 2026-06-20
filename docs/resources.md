# Trinity BrainBox -- Technology and Resources Reference

**Built by:** Mark Nixey, Trinity Advisory -- mark.nixey@trinityadvisory.com.au  
**Version:** 0.5

---

## Source systems

| System | Purpose | Access required |
|---|---|---|
| SharePoint (TrinityClients site) | Stores client files in `Shared Documents/{Client Name}/ClientBrain` | Standard Trinity Advisory Microsoft 365 login |
| SharePoint (prompts folder) | Stores prompt `.txt` files -- location TBD | Same login |
| Power Automate | Exposes HTTP flows that the app calls to retrieve clients, files, and prompts | No separate access needed -- flows are called via public webhook URLs |

---

## Power Automate flows

| Flow | Status | What it returns |
|---|---|---|
| Flow 1 -- Get Clients | Exists (from coaching dashboard project) | JSON array: `[{ "name": "Client Name" }, ...]` |
| Flow 2 -- Get Client Files | Exists | JSON: `{ "files": [ { "FileLeafRef ": "file1.pdf" }, ... ] }` (note the trailing space in the key -- the app trims it) |
| Flow 3 -- Get Prompts | Exists | JSON: `{ "prompts": [ { "name": "...", "content": "..." }, ... ] }` (the flow currently returns a blank "name" -- the app falls back to "Untitled Prompt N") |
| Flow 4 -- Save to Brain | Exists | Creates a `.txt` file named `ContentType yyyyMMdd - ClientName.txt` in the client's ClientBrain folder. Returns: `{ "success": true }` |

Flow webhook URLs are stored in `config.js` in the project root. This file is gitignored because the URLs contain signed access tokens -- copy `config.sample.js` to `config.js` and fill in the real URLs after cloning. Update `config.js` when flows are created or changed.

---

## Input files

The app itself has no input files. Data is fetched live from SharePoint via the flows above. Prompt templates are `.txt` files stored in a SharePoint folder (path to be confirmed).

---

## Application stack

| Layer | Technology |
|---|---|
| Runtime | Browser only -- no server, no Node.js, no Python |
| Frontend | Plain HTML5, CSS3, vanilla JavaScript (ES6+) |
| Hosting | Local file opened directly in browser (`file://`) |
| Data fetching | `fetch()` POST requests to Power Automate HTTP trigger URLs |
| Clipboard | `navigator.clipboard.writeText()` |

No npm, no build step, no dependencies. The entire app is two files: `index.html` and `config.js` (created locally from `config.sample.js`).

---

## Data flow

1. Browser opens `index.html` locally.
2. On load, `fetch()` calls Flow 1 (get clients) and Flow 3 (get prompts) in parallel.
3. Client dropdown is populated from Flow 1 response.
4. Prompt list is populated from Flow 3 response.
5. When user selects a client, `fetch()` calls Flow 2 (get client files) with the client name in the POST body.
6. File list and folder path are displayed from Flow 2 response.
7. When user selects files and a prompt, placeholders (`{{ClientName}}`, `{{FileList}}`) are replaced in the browser -- no server call.
8. Copy buttons use the Clipboard API to put the result on the user's clipboard.

---

## File structure

```
claude code - brainbox/
├── index.html          Main app (HTML + CSS + JS)
├── config.js           Power Automate webhook URLs (gitignored, not in repo)
├── config.sample.js    Template for config.js -- copy and fill in real URLs
├── .gitignore          Excludes config.js from git
├── plan.html           Build plan (design reference)
├── claude.md           Project standards and conventions
└── docs/
    ├── setup.md        This file's sibling -- user guide (source of truth)
    ├── setup.html      HTML version of setup guide
    ├── resources.md    This file (source of truth)
    └── resources.html  HTML version of resources reference
```

---

## Network and security notes

- The app makes outbound HTTPS POST requests to Power Automate webhook URLs. These are standard Microsoft-hosted endpoints.
- No client data is stored by the app. All data is fetched live and displayed in memory only.
- The app does not send any data to third parties. The only external calls are to Power Automate (Microsoft).
- Prompt and client file content is never transmitted -- only file names and the client name are passed to flows.
- The app should only be opened on Trinity Advisory staff machines with standard Microsoft 365 credentials.

---

## Dependencies

None. The app has zero external dependencies -- no CDN links, no npm packages, no frameworks.
