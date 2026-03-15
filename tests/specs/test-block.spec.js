const { test, expect } = require('@playwright/test');
import { runCLI } from '@wp-playground/cli';

test.describe('Check Test Block', () => {
	test.beforeAll(async ({}) => {
		await runCLI(
			{
				command: 'run-blueprint',
				blueprint: {
					steps: [
						{
							"step": "wp-cli",
							"command": "wp post create --post_title='Test Block Post' --post_slug='test-block' --post_content='<!-- wp:mfgmicha/test-block -->' --post_status=publish"
						},
					],
				},
			}
		);
	});

	test('block renders on frontend', async ({ page }) => {
		await page.goto('/test-block/');
		await page.waitForLoadState('networkidle');

		await expect(
			page.locator('p:has-text("Test Block – hello from the saved content!")')
		).toBeVisible();
	});

	test('block works in editor', async ({ page }) => {
		await page.goto('/wp-admin/edit.php?post_type=post');
		await page.waitForLoadState('networkidle');

		await page.get_by_role('link', { name: 'Edit "Test Block Post"' }).click();
		await page.waitForLoadState('networkidle');

		await expect(
			page.locator("text=Your site doesn't include support for")
		).not.toBeVisible();
	});
});
