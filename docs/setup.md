# Trinity BrainBox -- Setup and User Guide

**Built by:** Mark Nixey, Trinity Advisory -- mark.nixey@trinityadvisory.com.au  
**Version:** 0.2

---

## What is Trinity BrainBox?

Trinity BrainBox is an internal web tool for Trinity Advisory staff. It provides a simple, guided interface for preparing client context before using the firm's custom GPT. In a few clicks, a staff member can select a client, identify the relevant files stored in the client's SharePoint folder, choose from a library of curated prompts, and copy a fully populated prompt ready to paste into ChatGPT -- with client name and file references already filled in.

The tool removes the need to manually hunt for files, copy-paste client names, or remember which prompt to use. It is designed to make every GPT interaction faster, more consistent, and more useful.

---

## Who should use it

Any Trinity Advisory staff member who uses the firm's custom ChatGPT for client-related work.

---

## How to install / run (no technical knowledge required)

Trinity BrainBox is a local HTML file -- it runs directly in your web browser with no installation, no server, and no internet connection required for the interface itself.

1. You should have received the `brainbox` folder or have access to it via OneDrive or the git repository.
2. If there is no `config.js` file in the folder, copy `config.sample.js` and rename the copy to `config.js`, then fill in the real Power Automate webhook URLs (ask Mark Nixey for these).
3. Open the folder and double-click `index.html`.
4. It will open in your default browser (Chrome or Edge recommended).
5. That's it -- the app is running.

> **Note:** The app fetches live data from SharePoint via Power Automate flows. You need to be connected to the internet and signed into Microsoft 365 for the client list, file list, and prompts to load. Until the flows are connected (see Open Items), sample data is displayed.

---

## How to use Trinity BrainBox -- step by step

### Step 1 -- Select a client
Use the dropdown at the top left to choose a client. The list is loaded live from SharePoint. If the work you are doing is not client-specific, choose "No specific client (general)".

### Step 2 -- Review and select files (client-specific only)
If you selected a client, the files stored in their `ClientBrain` folder on SharePoint will appear. Tick the files you plan to upload into ChatGPT. The folder path is shown at the top of this section -- use "Copy path" to copy it so you can paste it into Windows Explorer and open the folder directly.

### Step 3 -- Choose a prompt
Click any prompt name in the list on the left. The prompt text will appear on the right, with the client name and any selected file names automatically filled in (highlighted in blue). Review the prompt, then click **Copy prompt** to copy it to your clipboard.

### In ChatGPT
1. Open your Trinity Advisory custom GPT.
2. Upload the files you selected (paste the folder path into Explorer to find them quickly).
3. Paste the copied prompt into the chat and send.

---

## Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| Client list does not load | Power Automate flow URL not configured, or not signed into Microsoft 365 | Check `config.js` for the flow URL; ensure you are online and signed in |
| Files do not appear for a client | The client's `ClientBrain` folder does not exist in SharePoint yet | Create a `ClientBrain` subfolder for that client in their SharePoint folder |
| Prompts do not load | Flow 3 not yet built | Build the prompts flow; prompts folder must exist in SharePoint |
| Copy button does not work | Browser clipboard permissions | Allow clipboard access when prompted by the browser |
| Username shows as `[your-username]` in folder path | File opened from a path the app cannot parse | This is cosmetic only -- the path still copies correctly if you paste it manually |
