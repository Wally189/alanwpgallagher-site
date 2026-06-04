# Alan WP Gallagher Site — Task Board

Use this as the working control board for the CV web / personal website project.

Status options: **Not started**, **Next**, **In progress**, **Blocked**, **Done**, **Deferred**.

Working rule:

> When Alan asks “what task are we working on?”, look for the first task marked **Next** or **In progress**, then check `project-control/current-task.md`.

## Source note

This board was refreshed on 2026-06-03 after the VS Code snapshot branch was created and the homepage was partly promoted to `main`.

Working branch for the wider CV web review: `cv-web-vscode-snapshot`.

Live branch: `main`.

Important: Alan has now pulled the main GitHub-side edits to Gertrude and added the current May 2026 CV PDF to `main`.

## Current board

| ID | Phase | Task | Target date | Status | Current next action |
|---|---|---:|---:|---|---|
| AWG-000 | Setup | Add Project Web Builder control files | 2026-06-03 | Done | Project control files exist on `main`; `NOT_YET.md` added for parked work. |
| AWG-001 | Setup | Reconcile GitHub with local VS Code copy | 2026-06-04 | Done | Gertrude pulled latest `main`; working branch also refreshed from origin. |
| AWG-002 | Setup | Confirm site structure and navigation | 2026-06-04 | Done | Main chapter structure confirmed: Home, Profile, Experience, Method, Workbench, Timeline, CV, About and Contact. Remaining URL clean-up is tracked separately. |
| AWG-003 | Repository basics | Confirm README and project status quality | 2026-06-03 | Done | README and PROJECT-STATUS exist and broadly meet the public portfolio standard. |
| AWG-004 | Repository basics | Add or defer `.gitignore` | 2026-06-04 | Not started | Decide later whether a simple static-site `.gitignore` is useful. |
| AWG-005 | Repository basics | Add or defer `CHANGELOG.md` | 2026-06-05 | Deferred | Optional; only add if it helps maintain the site calmly. |
| AWG-006 | Content | Tighten homepage positioning | 2026-06-05 | Done | `index.html` polished and pushed to `main`; Alan still to view live page and give final tick-off. |
| AWG-007 | Content | Strengthen professional profile page | 2026-06-06 | Done | `profile.html` polished and pushed to `main`; Alan approved moving on. |
| AWG-008 | Content | Strengthen experience page | 2026-06-06 | Done | `experience.html` polished and pushed to `main`; Alan approved moving on. |
| AWG-009 | Content | Create or confirm CV route | 2026-06-07 | Done | Proper PDF CV added to working branch, DOCX removed, and current PDF now added to live `main`. |
| AWG-010 | Content | Add project / case-study template | 2026-06-08 | Not started | Use a simple case-study format: problem, audience, constraints, method, outcome, skills demonstrated. |
| AWG-011 | Content | Add first proof-of-work case study | 2026-06-10 | Not started | Use the volunteering/community/civic project once safe and coherent. |
| AWG-012 | Safety | Check public content for private/sensitive material | 2026-06-10 | Deferred | Do a full safety pass after the remaining content pages are settled. Continue avoiding grievance, medical, financial, third-party or confidential material. |
| AWG-013 | Launch basics | Check contact route and privacy/contact-data note | 2026-06-11 | Done | `contact.html` refreshed and approved; `privacy.html`, `gdpr.html` and `terms.html` refreshed for consistency. |
| AWG-014 | Launch basics | SEO and sharing basics | 2026-06-11 | Deferred | Parked in `project-control/NOT_YET.md`; return after content pages are settled. |
| AWG-015 | Review | Mobile visual review | 2026-06-12 | Next | Review all main pages and legal pages on phone, including navigation, buttons, image behaviour, form layout and footer links. |
| AWG-016 | Review | Desktop visual review | 2026-06-12 | Not started | Review in browser for layout, line length, spacing, images and links. |
| AWG-017 | Review | No-card-soup sanity pass | 2026-06-13 | Deferred | Return after remaining pages are settled; Workbench has been kept as restrained evidence panels rather than noisy card soup. |
| AWG-018 | Launch | Quiet portfolio launch check | 2026-06-14 | Not started | Confirm site is safe to use in applications and LinkedIn. |
| AWG-019 | Content | Strengthen method page | 2026-06-06 | Done | `method.html` polished and pushed to `main`; Alan approved moving on. |
| AWG-020 | Live fix | Add current CV PDF to `main` | 2026-06-06 | Done | Gertrude added `assets/docs/Alan_Walter_Gallagher_CV_May2026.pdf` to `main` and pushed commit `b0dce09`; live CV links should now resolve once deployed. |
| AWG-021 | Content | Strengthen Workbench page | 2026-06-06 | Done | `workbench.html` is live with ownership wording, tools/methods strip, evidence panels, GitHub link and TBC examples recorded as backlog tasks. |
| AWG-022 | Navigation | Standardise Workbench URL | 2026-06-06 | Deferred | `workbench.html` created and `projects.html` redirects; update remaining internal links from `projects.html` to `workbench.html` during page passes. |
| AWG-023 | Workbench examples | Create CV website case study | 2026-06-08 | Done | Marked complete by Alan; Workbench evidence item exists and no further task needed now. |
| AWG-024 | Workbench examples | Create Waylight Atlantic case study | 2026-06-08 | Done | Marked complete by Alan; Workbench evidence item exists and no further task needed now. |
| AWG-025 | Workbench examples | Create documentation/control-system demo | 2026-06-09 | Done | Documentation control demo is live, linked from Workbench, and includes workbook output, register explanation, target folder naming logic and downloadable workbook. |
| AWG-026 | Workbench examples | Create process clean-up demo | 2026-06-09 | Not started | Safe public demo using sample/public material only; show messy information becoming a clear route, register or folder structure. |
| AWG-027 | Workbench examples | Create responsible AI workflow demo | 2026-06-10 | Not started | Show level-headed AI use with guardrails: task, source check, draft, review, correction and final human responsibility. |
| AWG-028 | Workbench examples | Create civic/public-information example | 2026-06-10 | Not started | Link once the civic project has a suitable public example; keep it clearly personal-interest origin and professional-method evidence. |
| AWG-029 | Workbench examples | Create communication/briefing example | 2026-06-11 | Not started | Public example of plain-English briefing, structured email, meeting note or stakeholder update. |
| AWG-030 | Content | Strengthen timeline page | 2026-06-06 | Done | `timeline.html` refocused as a chronological career map and approved by Alan. |
| AWG-031 | Content | Strengthen CV landing page | 2026-06-06 | Done | `cv.html` created, personalised and approved by Alan. |
| AWG-032 | Content | Strengthen About page | 2026-06-06 | Done | `about.html` refreshed as a warmer personal page and approved by Alan. |

## Notes on work completed since setup

- `cv-web-vscode-snapshot` created to preserve Alan's VS Code version without immediately changing live `main`.
- Gertrude pulled latest live `main` and refreshed `cv-web-vscode-snapshot` from origin.
- Current CV PDF added to live `main` from Gertrude and pushed as commit `b0dce09`.
- `index.html` reviewed, polished and promoted to `main` despite some branch-only links, accepted as a short-term risk.
- `profile.html` reviewed, polished and promoted to `main`.
- `experience.html` reviewed, polished and promoted to `main`.
- `method.html` reviewed, polished and promoted to `main`.
- `workbench.html` created and promoted to `main`; `projects.html` now redirects to it.
- Workbench page now explains ownership as “my workbench”, includes a Tools & Methods strip, uses evidence panels, links GitHub and records TBC examples in the Workbench example backlog.
- Documentation control demo created as a live Workbench example with a downloadable workbook and target-folder naming logic.
- Timeline page refocused as a lean chronological career map rather than a second Experience page and approved by Alan.
- `cv.html` added as a live landing page for the current PDF CV and then personalised to use “my CV” language; Alan approved it.
- `about.html` refreshed as a warmer, more personal page with Bristol roots, Donegal context, language learning, reading and civic interest; Alan approved it.
- `contact.html` refreshed with current navigation, safer form wording and current PDF CV link; Alan approved it.
- `privacy.html`, `gdpr.html` and `terms.html` refreshed to match the site shell and remove old utility-page styling.
- CV converted to proper PDF, renamed cleanly, DOCX removed and main CV page updated on the working branch.
- Homepage wording changed from “Long-term strategist” to “Long-term thinking”.
- Homepage wording changed from “Slow technology” to “Thoughtful, maintainable technology”.
- SEO/social metadata pass deliberately parked until later.
- Image filename cleanup deliberately parked until later.

## How to use this board with ChatGPT

1. Ask: “Use Project Web Builder. What task are we working on?”
2. ChatGPT should identify the first task marked **Next** or **In progress**, then check `project-control/current-task.md`.
3. Break the task into mini-tasks.
4. Work through the mini-tasks one by one.
5. When done, change the task status to **Done** and mark the next task as **Next**.

## Guardrail

This board exists to reduce confusion. Do not turn the personal website into a bureaucracy project. Keep the work visible, safe and useful for employability.
