# HTML Editor - Product Requirements Document

## Problem
Prototyping in .html is great, but editing raw HTML files is cumbersome. We need a visual, Figma-like editor for HTML files.

## Goal
Build an online webapp where users can:
1. Load a .html file
2. Visually edit it (Figma-like feel)
3. Save/export the modified HTML

## Core Requirements

### Must Have (MVP)
- [ ] File upload: drag & drop or browse to load .html
- [ ] Live preview: render the HTML in an iframe/canvas
- [ ] Visual selection: click elements to select them
- [ ] Property panel: edit selected element's properties (text, styles, attributes)
- [ ] Export: download modified .html file
- [ ] Undo/redo

### Should Have
- [ ] Element tree: sidebar showing DOM hierarchy
- [ ] Drag to reorder/reparent elements
- [ ] Add new elements (div, text, image, button)
- [ ] Style editor: visual CSS (colors, spacing, fonts)
- [ ] Grid/guides for alignment

### Nice to Have
- [ ] Templates/components
- [ ] Responsive preview (phone/tablet/desktop)
- [ ] Collaboration features
- [ ] Version history

## Tech Stack
- Single HTML file (self-contained, easy to deploy)
- Vanilla JS or minimal framework
- No backend required (all client-side)

## UX Reference
- Figma: clean canvas, left sidebar for layers, right sidebar for properties
- Direct manipulation: click to select, drag to move
- Minimal chrome, maximum canvas

## Success Criteria
- User can load any .html, make visual edits, export working .html
- Feels intuitive to someone who's used Figma
- Works in modern browsers without installation

---

*Created: 2026-01-28*
