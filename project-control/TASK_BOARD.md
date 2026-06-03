# Alan WP Gallagher Site — Task Board

Use this as the working control board for the CV web / personal website project.

Status options: **Not started**, **Next**, **In progress**, **Blocked**, **Done**, **Deferred**.

Working rule:

> When Alan asks “what task are we working on?”, look for the first task marked **Next** or **In progress**, then check `project-control/current-task.md`.

## Source note

This board was refreshed on 2026-06-03 after the VS Code snapshot branch was created and the homepage was partly promoted to `main`.

Working branch for the wider CV web review: `cv-web-vscode-snapshot`.

Live branch: `main`.

Important: Alan stepped away from VS Code before pulling the latest GitHub-side edits. Before doing local work, pull both `cv-web-vscode-snapshot` and `main` as advised in the chat.

## Current board

| ID | Phase | Task | Target date | Status | Current next action |
|---|---|---:|---:|---|---|
| AWG-000 | Setup | Add Project Web Builder control files | 2026-06-03 | Done | Project control files exist on `main`; `NOT_YET.md` added for parked work. |
| AWG-001 | Setup | Reconcile GitHub with local VS Code copy | 2026-06-04 | Deferred | Alan to pull latest GitHub changes into VS Code when back at the machine. |
| AWG-002 | Setup | Confirm site structure and navigation | 2026-06-04 | In progress | Continue page-by-page review; current structure includes Home, Profile, Experience, Method, Workbench, Timeline, CV, About and Contact. |
| AWG-003 | Repository basics | Confirm README and project status quality | 2026-06-03 | Done | README and PROJECT-STATUS exist and broadly meet the public portfolio standard. |
| AWG-004 | Repository basics | Add or defer `.gitignore` | 2026-06-04 | Not started | Decide later whether a simple static-site `.gitignore` is useful. |
| AWG-005 | Repository basics | Add or defer `CHANGELOG.md` | 2026-06-05 | Deferred | Optional; only add if it helps maintain the site calmly. |
| AWG-006 | Content | Tighten homepage positioning | 2026-06-05 | Done | `index.html` polished and pushed to `main`; Alan still to view live page and give final tick-off. |
| AWG-007 | Content | Strengthen professional profile page | 2026-06-06 | Done | `profile.html` polished and pushed to `main`; Alan approved moving on. |
| AWG-008 | Content | Strengthen experience page | 2026-06-06 | Done | `experience.html` polished and pushed to `main`; Alan approved moving on. |
| AWG-009 | Content | Create or confirm CV route | 2026-06-07 | Done | Proper PDF CV added to working branch; DOCX removed; live pages point to May 2026 PDF. |
| AWG-010 | Content | Add project / case-study template | 2026-06-08 | Not started | Use a simple case-study format: problem, audience, constraints, method, outcome, skills demonstrated. |
| AWG-011 | Content | Add first proof-of-work case study | 2026-06-10 | Not started | Use the volunteering/community/civic project once safe and coherent. |
| AWG-012 | Safety | Check public content for private/sensitive material | 2026-06-10 | In progress | Keep checking each page for employment dispute, medical, financial, third-party or confidential material. |
| AWG-013 | Launch basics | Check contact route and privacy/contact-data note | 2026-06-11 | Not started | Contact page exists; confirm form behaviour and privacy wording later. |
| AWG-014 | Launch basics | SEO and sharing basics | 2026-06-11 | Deferred | Parked in `project-control/NOT_YET.md`; return after content pages are settled. |
| AWG-015 | Review | Mobile visual review | 2026-06-12 | Not started | Review on phone for readability, navigation, spacing, tone and awkward layout. |
| AWG-016 | Review | Desktop visual review | 2026-06-12 | Not started | Review in browser for layout, line length, spacing, images and links. |
| AWG-017 | Review | No-card-soup sanity pass | 2026-06-13 | Not started | Remove clutter, gimmicks, repeated claims and anything that weakens the mature professional tone. |
| AWG-018 | Launch | Quiet portfolio launch check | 2026-06-14 | Not started | Confirm site is safe to use in applications and LinkedIn. |
| AWG-019 | Content | Strengthen method page | 2026-06-06 | Done | `method.html` polished and pushed to `main`; Alan approved moving on. |
| AWG-020 | Live fix | Add current CV PDF to `main` | 2026-06-06 | Blocked | Requires VS Code/local git because the live branch is missing `assets/docs/Alan_Walter_Gallagher_CV_May2026.pdf`; live CV links will break until added. |
| AWG-021 | Content | Strengthen Workbench page | 2026-06-06 | Next | Review `projects.html` as the Workbench page for clarity, proof-of-work value, structure and public-risk issues. |

## Notes on work completed since setup

- `cv-web-vscode-snapshot` created to preserve Alan's VS Code version without immediately changing live `main`.
- `index.html` reviewed, polished and promoted to `main` despite some branch-only links, accepted as a short-term risk.
- `profile.html` reviewed, polished and promoted to `main`.
- `experience.html` reviewed, polished and promoted to `main`.
- `method.html` reviewed, polished and promoted to `main`.
- CV converted to proper PDF, renamed cleanly, DOCX removed and main CV page updated on the working branch.
- Live CV links now point to `assets/docs/Alan_Walter_Gallagher_CV_May2026.pdf`, but that binary PDF still needs adding to `main` from VS Code.
- Homepage wording changed from “Long-term strategist” to “Long-term thinking”.
- Homepage wording changed from “Slow technology” to “Thoughtful, maintainable technology”.
- Workbench chapter number corrected to Chapter IV on the working branch.
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
