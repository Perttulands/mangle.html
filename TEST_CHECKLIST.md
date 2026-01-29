# mangle.html E2E Test Checklist

## How to Test
```bash
cd ~/clawd/projects/html-editor
python3 -m http.server 8080
# Open http://localhost:8080/index.html in browser
```

---

## Critical Tests (MUST PASS)

### 1. ZOOM
- [ ] **Ctrl + scroll wheel** zooms in/out
- [ ] **Space + drag** pans the canvas
- [ ] Zoom indicator shows current % (50%, 100%, 200%)
- [ ] Fit-to-width button works
- [ ] Zoom centers on cursor position

### 2. LEFT SIDEBAR
- [ ] Sidebar width is compact (no horizontal scroll)
- [ ] Long element names truncate with "..."
- [ ] **Click tree node → canvas pans to show element**
- [ ] Works with deeply nested elements

### 3. RIGHT SIDEBAR
- [ ] No horizontal scroll on margin/padding controls
- [ ] Controls stack properly
- [ ] All inputs are usable

### 4. PREVIEW MODE
- [ ] Switch to Preview mode
- [ ] **NO selection UI visible**
- [ ] **NO guides/lines visible**
- [ ] **NO editing tools visible**
- [ ] Switch back to Edit mode - tools return

### 5. BASIC EDITING
- [ ] Double-click text → can type directly
- [ ] Color picker shows actual element color
- [ ] Font size dropdown works
- [ ] Duplicate section (right-click) works

---

## Report Format
```
ZOOM: PASS/FAIL - notes
LEFT SIDEBAR: PASS/FAIL - notes
RIGHT SIDEBAR: PASS/FAIL - notes
PREVIEW MODE: PASS/FAIL - notes
BASIC EDITING: PASS/FAIL - notes
```
