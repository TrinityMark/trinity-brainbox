// Trinity BrainBox -- Power Automate connections
//
// Each flow is an HTTP-triggered Power Automate flow. The app POSTs to the
// URL and expects a JSON response. Update the URLs below when a flow is
// created, regenerated, or its trigger URL changes.

const BRAINBOX_CONFIG = {
  // Flow 1 -- Get Clients
  // Returns: { "clients": [ { "Title": "Client Name", ... }, ... ] }
  GET_CLIENTS_URL: "https://bb06665214b0e7c9957df91fc7a08e.c0.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/70a785368ae84564b8ab9efd8eced99e/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=I6LHgPrVwikcjt0vkTsi8emrv521_mNKeD8g0vNoSbk",

  // Flow 2 -- Get Client Files (not yet built)
  // Expected to return: { "files": ["file1.pdf", ...] }
  GET_CLIENT_FILES_URL: "",

  // Flow 3 -- Get Prompts (not yet built)
  // Expected to return: [ { "name": "...", "content": "..." }, ... ]
  GET_PROMPTS_URL: "",
};
