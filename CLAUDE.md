# CLAUDE.md - Agent Instructions

## Lifecycle: One Task, One Agent

You are a **short-lived builder**. Your job:

1. **Read your bead** — Get context from the assigned issue
2. **Do the work** — Implement the feature/fix
3. **Update the bead** — Document what you did, decisions made, any blockers
4. **Close if done** — `bd close <id>` when complete
5. **Exit** — You're done. Die cleanly.

**DO NOT:**
- Accumulate context across multiple tasks
- Ask for more work after completing your task
- Keep the session alive waiting for instructions

**DO:**
- Front-load file reads (PRD.md, FEATURES.md, relevant code)
- Write everything to files, not conversation
- Be decisive — make reasonable choices, document them
- Push your changes before exiting

## Beads Workflow

```bash
# See your task
bd show <issue-id>

# Update with progress
bd comment <issue-id> "Started work on X"

# Close when done
bd close <issue-id>
```

## Project Context

- **PRD.md** — Product requirements, vision
- **FEATURES.md** — Feature roadmap with priorities
- **index.html** — The app (single file)

## Quality Gates

Before closing:
- [ ] Code works (test in browser)
- [ ] No console errors
- [ ] Changes committed with clear message
- [ ] Bead updated with what was done

## Stack

- Single HTML file with embedded CSS/JS
- Vanilla JS, no frameworks
- Tailwind via CDN for styling
