// Trinity BrainBox -- Power Automate connections (SAMPLE)
//
// Copy this file to config.js and fill in the real webhook URLs.
// config.js is gitignored because the URLs contain signed access tokens --
// never commit the real file.
//
// Each flow is an HTTP-triggered Power Automate flow. The app POSTs to the
// URL and expects a JSON response. Update the URLs below when a flow is
// created, regenerated, or its trigger URL changes.

const BRAINBOX_CONFIG = {
  // Flow 1 -- Get Clients
  // Returns: { "clients": [ { "Title": "Client Name", ... }, ... ] }
  GET_CLIENTS_URL: "",

  // Flow 2 -- Get Client Files
  // Returns: { "files": [ { "FileLeafRef ": "file1.pdf" }, ... ] }
  // Note: the key has a trailing space (a quirk of how the flow's Select
  // step was built) -- the app code trims keys when reading this response.
  GET_CLIENT_FILES_URL: "",

  // Flow 3 -- Get Prompts
  // Returns: { "prompts": [ { "name": "...", "content": "..." }, ... ] }
  GET_PROMPTS_URL: "",

  // Flow 4 -- Save to Brain (not yet built)
  // App POSTs: { "clientName": "...", "contentType": "Call|Email|Conversation|Meeting", "content": "..." }
  // Expected to create a .txt file in that client's ClientBrain folder.
  SAVE_TO_BRAIN_URL: "",
};
