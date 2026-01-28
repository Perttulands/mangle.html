# mangle.html - Product Requirements Document

## Vision
**The Figma of HTML editing.** Load any HTML file, edit it visually, export clean code. Zero setup, runs in browser.

## Target Users
- Developers prototyping UIs in HTML
- Designers who know basic HTML
- Anyone who wants to visually tweak HTML without code editors

## Success Metrics
- 1000+ GitHub stars
- Featured on Hacker News, Product Hunt
- Users say "this is exactly what I needed"

---

## Core Principles

1. **Zero friction** — Drag file in, start editing. No install, no build.
2. **Figma-like feel** — Direct manipulation, visual feedback, keyboard shortcuts
3. **Clean output** — Export valid HTML, no editor artifacts
4. **Single file** — Everything in index.html, easy to fork/deploy

---

## Feature Requirements

### P0 - MVP (DONE ✅)
- [x] Drag & drop file upload
- [x] Live preview in sandboxed iframe
- [x] Click elements to select (blue highlight)
- [x] Property panel showing tag, id, classes
- [x] Edit text content inline
- [x] Style editor (colors, fonts, margin/padding)
- [x] Export/download modified HTML
- [x] Undo/redo (Ctrl+Z, Ctrl+Y)

### P1 - Core UX (IN PROGRESS)
- [x] DOM tree sidebar (left panel)
- [x] Click tree node → select element
- [x] Drag tree nodes to reorder/reparent
- [x] Canvas zoom (scroll wheel)
- [x] Canvas pan (space + drag)
- [x] Zoom indicator + fit-to-screen
- [ ] Add new elements (div, p, img, button, etc.)
- [ ] Delete elements (backspace/delete key)
- [ ] Multi-select (shift+click, cmd+click)
- [ ] Copy/paste elements (Ctrl+C, Ctrl+V)
- [ ] Duplicate element (Ctrl+D or Alt+drag)
- [ ] Keyboard shortcuts system

### P2 - Polish
- [ ] Responsive preview (phone/tablet/desktop)
- [ ] Grid overlay toggle
- [ ] Smart guides (snap to edges, centers)
- [ ] Dark mode
- [ ] Recent files (localStorage)
- [ ] Auto-save drafts
- [ ] Element search/filter

### P3 - Delight
- [ ] Smooth animations throughout
- [ ] Tooltips with keyboard hints
- [ ] Welcome screen with sample file
- [ ] Context menu (right-click)
- [ ] Minimap preview
- [ ] Command palette (Ctrl+K)

---

## Technical Requirements

### Must Have
- Single HTML file (< 100KB)
- No external dependencies
- Works offline
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive editor UI

### Nice to Have
- Service worker for offline
- PWA installable
- URL params to load remote HTML

---

## Quality Bar

### Before 1.0 Release
- [ ] All P0 and P1 features complete
- [ ] Manual QA pass on Chrome, Firefox, Safari
- [ ] No console errors
- [ ] Handles edge cases (empty file, huge file, malformed HTML)
- [ ] Performance: loads 1000-element DOM in < 1s
- [ ] Accessibility: keyboard navigable

### Testing Scenarios
1. Load simple HTML (< 50 elements) — should work perfectly
2. Load complex HTML (500+ elements) — should be usable
3. Edit text, styles, move elements — all should undo cleanly
4. Export and re-import — should round-trip perfectly
5. Zoom to 10%, zoom to 500% — should remain usable

---

## Non-Goals (v1)
- Real-time collaboration
- Backend/database
- User accounts
- Version control integration
- CSS file editing (only inline styles)
- JavaScript editing

---

*Ship fast, iterate based on feedback.*
