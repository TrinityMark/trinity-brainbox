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

  // Flow 2 -- Get Client Files (not yet built)
  // Expected to return: { "files": ["file1.pdf", ...] }
  GET_CLIENT_FILES_URL: "",

  // Flow 3 -- Get Prompts (not yet built)
  // Expected to return: [ { "name": "...", "content": "..." }, ... ]
  GET_PROMPTS_URL: "",
};
