# mangle.html - Product Requirements Document

## Vision
**The Figma of HTML editing.** Load any HTML file, edit it visually, export clean code. Zero setup, runs in browser.

## Target Users
- Developers prototyping UIs in HTML
- Designers who know basic HTML
- Anyone who wants to visually tweak HTML without code editors
- **Non-coders editing AI-generated HTML** (Sarah persona)

## Success Metrics
- 1000+ GitHub stars
- Featured on Hacker News, Product Hunt
- Users say "this is exactly what I needed"

---

## 🚨 CRITICAL ISSUES (2026-01-29 User Testing)

**The tool is currently unusable. These must be fixed before anything else:**

### P0 - BLOCKING ISSUES

1. **NO WORKING ZOOM** ⚠️ HIGHEST PRIORITY
   - Can only see ~1/4 of webpage
   - No way to zoom in/out
   - **Required:** Space + scroll = zoom, zoom buttons in toolbar
   - Zoom indicator showing current level (50%, 100%, 200%)
   - Fit-to-width button

2. **Left sidebar too wide**
   - Text wraps to multiple lines, complete mess
   - Needs horizontal scroll or collapses
   - Should be compact: icon + short name, expandable

3. **Clicking element doesn't navigate**
   - When clicking in tree, canvas should scroll to show element
   - Element should be centered/visible in viewport
   - Currently selection happens but can't see it

4. **Right sidebar too wide**
   - Margin/padding controls cause horizontal scroll
   - Compact design needed
   - Stack controls vertically if needed

5. **Preview/Edit mode broken**
   - Preview mode still allows editing
   - Modes should be clearly distinct
   - Edit: shows guides, selection, tools
   - Preview: clean view, no UI overlay

6. **Selection guides cluttered**
   - Horizontal/vertical lines everywhere
   - Anchors scattered across screen
   - Clean up visual noise

7. **Unnecessary features visible**
   - Flip elements? Not needed for MVP
   - Hide advanced features, show on demand

---

## Core Principles

1. **Zero friction** — Drag file in, start editing. No install, no build.
2. **Figma-like feel** — Direct manipulation, visual feedback, keyboard shortcuts
3. **Clean output** — Export valid HTML, no editor artifacts
4. **Single file** — Everything in index.html, easy to fork/deploy
5. **Actually usable** — If you can't see what you're editing, nothing else matters

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

### P1 - Core UX (BROKEN - NEEDS FIX)
- [x] DOM tree sidebar (left panel) **← TOO WIDE**
- [x] Click tree node → select element **← DOESN'T SCROLL TO IT**
- [x] Drag tree nodes to reorder/reparent
- [ ] **Canvas zoom (BROKEN - NOT WORKING)**
- [ ] **Canvas pan (BROKEN)**
- [ ] **Zoom indicator + fit-to-screen (NOT VISIBLE)**
- [x] Add new elements (div, p, img, button, etc.)
- [x] Delete elements (backspace/delete key)
- [x] Multi-select (shift+click, cmd+click)
- [x] Copy/paste elements (Ctrl+C, Ctrl+V)
- [x] Duplicate element (Ctrl+D)
- [x] Keyboard shortcuts system

### P2 - Polish (AFTER CORE IS FIXED)
- [x] Responsive preview (phone/tablet/desktop)
- [ ] Grid overlay toggle
- [ ] Smart guides - **CURRENTLY TOO NOISY**
- [ ] Dark mode
- [ ] Recent files (localStorage)
- [ ] Auto-save drafts
- [x] Element search/filter

### P3 - Delight
- [x] Smooth animations throughout
- [x] Tooltips with keyboard hints
- [x] Welcome screen with sample file
- [x] Context menu (right-click)
- [ ] Minimap preview
- [ ] Command palette (Ctrl+K)
- [x] Premium UI design (Linear/Figma-inspired)

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

### Before ANY More Features
- [ ] **Zoom works reliably (space+scroll, buttons)**
- [ ] **Sidebars fit without horizontal scroll**
- [ ] **Click element → it's visible on screen**
- [ ] **Preview mode is actually preview-only**
- [ ] **Visual guides are clean, not cluttered**

### Before 1.0 Release
- [ ] All P0 and P1 features complete
- [ ] Manual QA pass on Chrome, Firefox, Safari
- [ ] No console errors
- [x] Handles edge cases (empty file, huge file, malformed HTML)
- [ ] Performance: loads 1000-element DOM in < 1s
- [ ] Accessibility: keyboard navigable

---

## Non-Goals (v1)
- Real-time collaboration
- Backend/database
- User accounts
- Version control integration
- CSS file editing (only inline styles)
- JavaScript editing
- **Flip/rotate elements** (remove this)

---

*Fix the fundamentals. Zoom is #1.*
