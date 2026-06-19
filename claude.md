\## color palette:

\### main

11377F

E5F6FF

FFC000

A6A6A6



\### traffic light colors:

FFCCCC

FFDB93

D0EBB3


\## formatting rules
\- never use em dashes, always en dashes


\## Versioning

\- Always include a version number top right


\## Project documentation



Every project I build with you must have a `docs/` folder containing four files:

\- `docs/setup.md` and `docs/setup.html` — full setup and user guide

\- `docs/resources.md` and `docs/resources.html` — full technology and resources reference



\### When to create them

Create all four files at the \*\*start of every project\*\*, even if the detail is thin. Placeholder sections are fine — the structure must exist from day one.



\### What setup.md / setup.html must cover

\- What the tool does (1–2 paragraphs, generic — not tied to a specific client)

\- Who built it: \*\*Mark Nixey, Trinity Advisory — mark.nixey@trinityadvisory.com.au\*\*

\- End-user instructions (how to install/run it, step by step, assuming zero technical knowledge)

\- How to use the app (golden path walkthrough)

\- How to get any required source data (e.g. Xero export steps)

\- How to build from source (for developers)

\- Troubleshooting table



\### What resources.md / resources.html must cover

\- Source systems and what access is needed

\- Input files (names, columns used)

\- Application stack: runtime, frontend, packaging

\- Data flow (narrative or diagram)

\- File structure

\- Network and security notes

\- Dependencies list



\### When to update them

Update both files whenever:

\- A new feature is added

\- A data source or technology changes

\- The distribution method changes

\- A new troubleshooting case is identified



Keep both `.md` and `.html` versions in sync. The HTML version uses the same inline `<style>` block as the existing payroll docs (no external CSS dependencies). The `.md` version is the source of truth for content.



