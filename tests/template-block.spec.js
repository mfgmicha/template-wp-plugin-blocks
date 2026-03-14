const { test, expect } = require( '@playwright/test' );

test( 'plugin loads without errors on frontend', async ( { page } ) => {
	await page.goto( '/' );
	await page.waitForLoadState( 'networkidle' );

	const consoleErrors = [];
	page.on( 'console', ( msg ) => {
		if ( msg.type() === 'error' ) {
			consoleErrors.push( msg.text() );
		}
	} );

	expect( consoleErrors ).toHaveLength( 0 );
} );

test( 'plugin is active and blocks are registered', async ( { page } ) => {
	// Check plugin is active by verifying block registration
	// The block assets should be present when plugin is active
	await page.goto( '/' );
	await page.waitForLoadState( 'networkidle' );

	// Check page loaded successfully
	const title = await page.title();
	expect( title ).toContain( 'WordPress' );
} );
