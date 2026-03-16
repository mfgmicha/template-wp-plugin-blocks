const { test, expect } = require('@playwright/test');

test.describe('Check Test Block', () => {
	test('block renders on frontend', async ({ page }) => {
		await page.goto('/test-block/');
		await page.waitForLoadState('networkidle');

		await expect(
			page.locator(
				'p:has-text("Example Dynamic – hello from a dynamic block!")'
			)
		).toBeVisible();
	});

	test('block works in editor', async ({ page }) => {
		await page.goto('/wp-admin/edit.php?post_type=post');
		await page.waitForLoadState('networkidle');

		await page
			.get_by_role('link', { name: 'Edit "Test Block Post"' })
			.click();
		await page.waitForLoadState('networkidle');

		await expect(
			page.locator("text=Your site doesn't include support for")
		).not.toBeVisible();
	});
});
