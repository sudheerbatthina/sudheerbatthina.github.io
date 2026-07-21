# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing template-like portfolio with a focused, evidence-first AI engineering portfolio for recruiters.

**Architecture:** Keep a dependency-free static GitHub Pages site. Use one semantic HTML document with embedded responsive CSS and minimal progressive-enhancement JavaScript; verify core content and accessibility constraints with Node’s built-in test runner.

**Tech Stack:** HTML5, CSS, vanilla JavaScript, Node.js test runner

## Global Constraints

- Preserve static GitHub Pages deployment.
- Spell “RemaindALL” exactly.
- Feature Sourcebound, RemaindALL, and StyleTrip.ai.
- Remove public phone number and unverified live claims.
- Support reduced motion and keyboard navigation.

---

### Task 1: Recruiter-first content and structure

**Files:**
- Modify: `index.html`
- Create: `tests/portfolio.test.mjs`

**Interfaces:**
- Consumes: Existing public profile links and verified project evidence.
- Produces: Semantic sections identified by `hero`, `proof`, `work`, `capabilities`, `experience`, and `contact`.

- [ ] Write tests asserting positioning, project naming, section order, privacy-safe copy, and accessible link behavior.
- [ ] Run `node --test tests/portfolio.test.mjs` and confirm failures against the old page.
- [ ] Replace the page with the approved recruiter-first narrative.
- [ ] Run the tests and confirm all pass.

### Task 2: Responsive visual system

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Semantic page structure from Task 1.
- Produces: Signal Coral design tokens, responsive layout, focus states, and reduced-motion behavior.

- [ ] Add test assertions for viewport, responsive navigation, focus-visible styling, and reduced motion.
- [ ] Confirm the new assertions fail before styling is complete.
- [ ] Implement the visual system and responsive behavior.
- [ ] Run automated tests, then inspect desktop and mobile screenshots in a real browser.

### Task 3: Final recruiter polish

**Files:**
- Modify: `index.html`
- Modify: `README.md`

**Interfaces:**
- Consumes: Finished static portfolio.
- Produces: Share-ready site documentation and verified outbound links.

- [ ] Validate HTML structure, links, overflow, and console output.
- [ ] Update README with local preview and deployment notes.
- [ ] Run the complete test suite and inspect the final diff.
