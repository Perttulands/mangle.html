// Preview Mode E2E Test
// Run: npx playwright test preview-mode.spec.js --headed
// Or open index.html in browser and run tests manually

const { test, expect } = require('@playwright/test');

test.describe('Preview Mode', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('file://' + process.cwd() + '/index.html');
        // Wait for app to initialize
        await page.waitForSelector('.app');
    });

    test('1. Load sample HTML via welcome screen', async ({ page }) => {
        // Click "Try with Sample" button on welcome screen
        await page.click('#btn-try-sample');

        // Wait for content to load
        await page.waitForSelector('.canvas-wrapper:not(.hidden)');

        // Verify tree has content
        const treeItems = await page.locator('.tree-item').count();
        expect(treeItems).toBeGreaterThan(0);

        console.log('PASS: Sample HTML loaded');
    });

    test('2. Switch to Preview mode hides all editing UI', async ({ page }) => {
        // Load sample first
        await page.click('#btn-try-sample');
        await page.waitForSelector('.canvas-wrapper:not(.hidden)');

        // Select an element first (to ensure selection gets cleared)
        await page.click('.tree-item');
        await page.waitForTimeout(200);

        // Click Preview mode button
        await page.click('#btn-preview-mode');
        await page.waitForTimeout(300);

        // Verify app has preview-mode class
        const appHasPreviewClass = await page.locator('.app.preview-mode').count();
        expect(appHasPreviewClass).toBe(1);
        console.log('  - App has preview-mode class: PASS');

        // Verify sidebars are hidden (opacity 0 or not visible)
        const leftSidebarOpacity = await page.locator('.sidebar-left').evaluate(el =>
            window.getComputedStyle(el).opacity
        );
        expect(parseFloat(leftSidebarOpacity)).toBe(0);
        console.log('  - Left sidebar hidden: PASS');

        const rightSidebarOpacity = await page.locator('.sidebar-right').evaluate(el =>
            window.getComputedStyle(el).opacity
        );
        expect(parseFloat(rightSidebarOpacity)).toBe(0);
        console.log('  - Right sidebar hidden: PASS');

        // Verify resize overlay is not active
        const resizeOverlayActive = await page.locator('.resize-overlay.active').count();
        expect(resizeOverlayActive).toBe(0);
        console.log('  - Resize overlay hidden: PASS');

        // Verify spacing overlay is not active
        const spacingOverlayActive = await page.locator('.spacing-overlay.active').count();
        expect(spacingOverlayActive).toBe(0);
        console.log('  - Spacing overlay hidden: PASS');

        // Verify quick actions are hidden
        const quickActionsVisible = await page.locator('.quick-actions.visible').count();
        expect(quickActionsVisible).toBe(0);
        console.log('  - Quick actions hidden: PASS');

        // Verify canvas wrapper has preview-mode class
        const canvasPreviewMode = await page.locator('.canvas-wrapper.preview-mode').count();
        expect(canvasPreviewMode).toBe(1);
        console.log('  - Canvas in preview mode: PASS');

        console.log('PASS: Preview mode hides all editing UI');
    });

    test('3. Preview mode allows interaction (pointer-events)', async ({ page }) => {
        // Load sample first
        await page.click('#btn-try-sample');
        await page.waitForSelector('.canvas-wrapper:not(.hidden)');

        // Switch to preview mode
        await page.click('#btn-preview-mode');
        await page.waitForTimeout(300);

        // Check iframe has pointer-events: auto
        const iframePointerEvents = await page.locator('#preview-frame').evaluate(el => {
            if (el.contentDocument && el.contentDocument.body) {
                return window.getComputedStyle(el.contentDocument.body).pointerEvents;
            }
            return 'none';
        });
        expect(iframePointerEvents).toBe('auto');

        console.log('PASS: Preview mode allows interaction');
    });

    test('4. Switch back to Edit mode restores UI', async ({ page }) => {
        // Load sample first
        await page.click('#btn-try-sample');
        await page.waitForSelector('.canvas-wrapper:not(.hidden)');

        // Switch to preview mode
        await page.click('#btn-preview-mode');
        await page.waitForTimeout(300);

        // Switch back to edit mode
        await page.click('#btn-edit-mode');
        await page.waitForTimeout(300);

        // Verify app no longer has preview-mode class
        const appHasPreviewClass = await page.locator('.app.preview-mode').count();
        expect(appHasPreviewClass).toBe(0);
        console.log('  - App preview-mode class removed: PASS');

        // Verify sidebars are visible again
        const leftSidebarOpacity = await page.locator('.sidebar-left').evaluate(el =>
            window.getComputedStyle(el).opacity
        );
        expect(parseFloat(leftSidebarOpacity)).toBe(1);
        console.log('  - Left sidebar visible: PASS');

        const rightSidebarOpacity = await page.locator('.sidebar-right').evaluate(el =>
            window.getComputedStyle(el).opacity
        );
        expect(parseFloat(rightSidebarOpacity)).toBe(1);
        console.log('  - Right sidebar visible: PASS');

        // Verify canvas wrapper no longer has preview-mode
        const canvasPreviewMode = await page.locator('.canvas-wrapper.preview-mode').count();
        expect(canvasPreviewMode).toBe(0);
        console.log('  - Canvas edit mode restored: PASS');

        console.log('PASS: Edit mode restores UI');
    });

    test('5. P key toggles preview mode', async ({ page }) => {
        // Load sample first
        await page.click('#btn-try-sample');
        await page.waitForSelector('.canvas-wrapper:not(.hidden)');

        // Press P to enter preview mode
        await page.keyboard.press('p');
        await page.waitForTimeout(300);

        let appHasPreviewClass = await page.locator('.app.preview-mode').count();
        expect(appHasPreviewClass).toBe(1);
        console.log('  - P key enters preview mode: PASS');

        // Press P again to exit preview mode
        await page.keyboard.press('p');
        await page.waitForTimeout(300);

        appHasPreviewClass = await page.locator('.app.preview-mode').count();
        expect(appHasPreviewClass).toBe(0);
        console.log('  - P key exits preview mode: PASS');

        console.log('PASS: P key toggles preview mode');
    });
});
